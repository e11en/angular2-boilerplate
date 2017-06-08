import { NgModule }      from '@angular/core';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import 'hammerjs';
import { RouterModule } from '@angular/router';

/* Feature Modules */
import { CoreModule } from './core/core.module';

/* Components */
import { AppComponent }  from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MaterialComponent } from './components/material/material.component';
import { OverviewComponent } from './components/overview/overview.component';

import { AppRoutes } from './app.routes';

@NgModule({
    imports:      [
        CoreModule, HighlightJsModule,
        RouterModule.forRoot(AppRoutes)
    ],
    providers: [
        HighlightJsService
    ],
    declarations: [
        AppComponent, NavComponent,
        MaterialComponent, OverviewComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
