import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';

@NgModule({
    imports: [
        CommonModule, FormsModule,
        RouterModule
    ],
    exports: [
        CommonModule, FormsModule,
        [NavComponent]
    ],
    declarations: [NavComponent],
    providers: [ ]
})
export class CoreModule { }
