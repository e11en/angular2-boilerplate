import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

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
        CommonModule, FormsModule
    ],
    declarations: [
        SnackbarComponent,
        DialogComponent
    ],
    providers: [ ],
    entryComponents: [SnackbarComponent, DialogComponent]
})
export class CoreModule { }
