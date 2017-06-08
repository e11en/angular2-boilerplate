import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MaterialModule } from './core/material/material.module';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import 'hammerjs';
import { RouterModule, Routes } from '@angular/router';

/* Feature Modules */
import { CoreModule } from './core/core.module';
import { DialogComponent } from './core/material/dialog.component';
import { SnackbarComponent } from './core/material/snackbar.component';

/* Components */
import { MaterialComponent } from './material/material.component';
import { OverviewComponent } from './overview/overview.component';


const appRoutes: Routes = [
    { path: 'material', component: MaterialComponent },
    { path: 'overview', component: OverviewComponent },
];

@NgModule({
    imports:      [
        BrowserModule, MaterialModule,
        CoreModule, HighlightJsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        HighlightJsService
    ],
    declarations: [
        AppComponent, MaterialComponent,
        DialogComponent, SnackbarComponent,
        OverviewComponent
    ],
    bootstrap:    [ AppComponent ],
    entryComponents: [DialogComponent, SnackbarComponent]
})
export class AppModule { }
