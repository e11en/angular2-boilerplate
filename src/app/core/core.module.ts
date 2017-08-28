/*
 * This is where all the core components are collected.
 */

import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import 'hammerjs';

import { MaterialModule } from './material/material.module';
import { SnackbarComponent } from './material/snackbar.component';
import { DialogComponent } from './material/dialog.component';

@NgModule({
    imports: [
        CommonModule, FormsModule,
        RouterModule, MaterialModule
    ],
    exports: [
        MaterialModule, BrowserModule,
        CommonModule, FormsModule,
        NgxDatatableModule, ReactiveFormsModule
    ],
    declarations: [
        SnackbarComponent,
        DialogComponent
    ],
    providers: [ ],
    entryComponents: [SnackbarComponent, DialogComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoreModule { }
