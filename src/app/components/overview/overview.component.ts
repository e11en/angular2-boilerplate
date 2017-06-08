import { Component } from '@angular/core';

import { VehicleService } from '../../services/vehicle.service';

@Component({
    selector: 'content',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
    vehicles = this.vehicleService.getVehicles();

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
        }
    };

    constructor(private vehicleService: VehicleService) { }

    toggleCode = function(section: string) {
        this.code[section].show = !this.code[section].show;
    };
}
