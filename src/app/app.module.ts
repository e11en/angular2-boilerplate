import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MaterialModule } from './core/material/material.module';

/* Feature Modules */
import { CoreModule } from './core/core.module';
import {MaterialComponent} from './material/material.component';


@NgModule({
  imports:      [
      BrowserModule, MaterialModule,
      CoreModule,
  ],
  declarations: [ AppComponent, MaterialComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
