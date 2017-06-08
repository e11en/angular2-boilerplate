import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MaterialModule } from './core/material/material.module';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import 'hammerjs';
import { RouterModule } from '@angular/router';

/* Feature Modules */
import { CoreModule } from './core/core.module';
import { DialogComponent } from './core/material/dialog.component';
import { SnackbarComponent } from './core/material/snackbar.component';
import { AppRoutes } from './app.routes';

/* Components */
import { MaterialComponent } from './material/material.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
    imports:      [
        BrowserModule, MaterialModule,
        CoreModule, HighlightJsModule,
        RouterModule.forRoot(AppRoutes)
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
