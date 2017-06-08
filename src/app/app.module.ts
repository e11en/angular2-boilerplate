import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MaterialModule } from './core/material/material.module';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import 'hammerjs';

/* Feature Modules */
import { CoreModule } from './core/core.module';
import { MaterialComponent } from './material/material.component';
import { DialogComponent } from './core/material/dialog.component';


@NgModule({
    imports:      [
      BrowserModule, MaterialModule,
      CoreModule, HighlightJsModule
    ],
    providers: [
        HighlightJsService
    ],
    declarations: [ AppComponent, MaterialComponent, DialogComponent ],
    bootstrap:    [ AppComponent ],
    entryComponents: [DialogComponent]
})
export class AppModule { }
