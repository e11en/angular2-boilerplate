import { Component } from '@angular/core';

import { Vehicle, VehicleService } from '../../services/vehicle.service';

@Component({
    selector: 'content',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
    vehiclesSimple = this.vehicleService.getVehiclesSimple();

    vehiclesHttp: Promise<Vehicle[]>;

    code = {
        services: {
            show: false,
            text : `
            vehicle.service.ts
        
                import { Injectable } from '@angular/core';
                    
                @Injectable()
                export class VehicleService {
                    getVehicles = () => [
                        { id: 1, name: 'X-Wing Fighter' },
                        { id: 2, name: 'Tie Fighter' },
                        { id: 3, name: 'Y-Wing Fighter' }
                    ];
                }
                
                
            app.module.ts
                
                import { NgModule }      from '@angular/core';
                import { VehicleService } from './services/vehicle.service';
                import { AppComponent }  from './app.component';
                
                @NgModule({
                    imports:      [ ],
                    providers: [ VehicleService ],
                    declarations: [ AppComponent ],
                    bootstrap:    [ AppComponent ]
                })
                export class AppModule { }
                
                
            app.component.ts
            
                import { Component } from '@angular/core';
                import { VehicleService } from '../../services/vehicle.service';
                
                @Component({
                    selector: 'content',
                    template Url: 'app.component.html'
                })
                export class AppComponent {
                    vehicles = this.vehicleService.getVehicles();
                
                    constructor(private vehicleService: VehicleService) { }
                }    
            `
        },
        async: {
            show: false,
            text : `
            vehicle.model.ts
                export class Vehicle {
                    constructor(public id: number, public name: string, public side: string) { }
                }
            
            
            vehicle.service.ts
        
                import { Injectable } from '@angular/core';
                import { Http, Response } from '@angular/http';
                import { Observable } from 'rxjs/Observable';
                
                import { Vehicle } from './vehicle.model';
                
                @Injectable()
                export class VehicleService {
                    constructor(private http: Http) { }
                
                    getVehicles(value?: string) {
                        return this.http.get('api/vehicles.json')
                            .map((response: Response) => \< Vehicle[]\>response.json().data)
                            .toPromise()
                            .catch(this.handleError);
                    }
                
                    private handleError(error: Response) {
                        console.error(error);
                        let msg = \`Error status code \${error.status} at \${error.url}\`;
                        return Observable.throw(msg);
                    }
                }
                
                
            app.module.ts
                
                import { NgModule } from '@angular/core';
                import { HttpModule } from '@angular/http';
                import 'rxjs/add/operator/catch';
                import 'rxjs/add/operator/delay';
                import 'rxjs/add/operator/do';
                import 'rxjs/add/operator/finally';
                import 'rxjs/add/operator/map';
                import 'rxjs/add/operator/toPromise';
                import 'rxjs/add/observable/of';
                import 'rxjs/add/observable/fromPromise';
                import 'rxjs/add/observable/throw';
                
                import { VehicleService } from './vehicle/vehicle.service';
                import { AppComponent }  from './app.component';
                
                @NgModule({
                    imports:      [ HttpModule ],
                    providers: [ VehicleService ],
                    declarations: [ AppComponent ],
                    bootstrap:    [ AppComponent ]
                })
                export class AppModule { }
                
                
            app.component.ts
            
                import { Component } from '@angular/core';
                import { VehicleService } from './vehicle/vehicle.service';
                import { Vehicle } from './vehicle/vehicle.model';
                
                @Component({
                    selector: 'content',
                    template Url: 'app.component.html'
                })
                export class AppComponent {
                    vehicles : Promise<Vehicle[]>;
                
                    constructor(private vehicleService: VehicleService) { }

                    getVehicles(value?: string) {
                        this.vehicles = this.vehicleService.getVehicles(value);
                    }
                
                    ngOnInit() { this.getVehicles(); }
                }    
            `
        }
    };

    constructor(private vehicleService: VehicleService) { }

    getVehicles(value?: string) {
        this.vehiclesHttp = this.vehicleService.getVehicles(value);
    }

    ngOnInit() { this.getVehicles(); }

    toggleCode = function(section: string) {
        this.code[section].show = !this.code[section].show;
    };
}
