import { NgModule } from '@angular/core';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import './core/rxjs.extensions';

/* Modules */
import { CoreModule } from './core/core.module';
import { AppRoutingModule, routableComponents } from './app.routes';

/* Services */
import { VehicleService } from './services/vehicle.service';
import { CanActivateAuthGuard } from './services/can-activate.service';
import { UserProfileService } from './services/user-profile.service';

/* Components */
import { AppComponent }  from './app.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
    imports:      [
        CoreModule, HighlightJsModule,
        RouterModule, AppRoutingModule,
        HttpModule
    ],
    providers: [
        HighlightJsService, VehicleService,
        CanActivateAuthGuard, UserProfileService
    ],
    declarations: [
        AppComponent, NavComponent,
        routableComponents
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
