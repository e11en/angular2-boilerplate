import { NgModule }      from '@angular/core';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import 'hammerjs';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import './core/rxjs.extensions';

/* Modules */
import { CoreModule } from './core/core.module';

/* Services */
import { VehicleService } from './services/vehicle.service';

/* Components */
import { AppComponent }  from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MaterialComponent } from './components/material/material.component';
import { ServicesComponent } from './components/services/services.component';

import { AppRoutes } from './app.routes';

@NgModule({
    imports:      [
        CoreModule, HighlightJsModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule
    ],
    providers: [
        HighlightJsService, VehicleService
    ],
    declarations: [
        AppComponent, NavComponent,
        MaterialComponent, ServicesComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
