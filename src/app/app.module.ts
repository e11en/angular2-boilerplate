/*
 * This is the main module from which the program wil 'start'.
 * This module is being bootstrapped in the main.ts file.
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import './core/rxjs.extensions';

/* Modules */
import { CoreModule } from './core/core.module';
import { AppRoutingModule, routableComponents } from './app.routes';

/* Services */
import { ExampleService } from './services/example.service';

/* Components */
import { AppComponent }  from './app.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
    imports:      [
        CoreModule,
        RouterModule, AppRoutingModule,
        HttpModule
    ],
    providers: [
        ExampleService
    ],
    declarations: [
        AppComponent, NavComponent,
        routableComponents
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
