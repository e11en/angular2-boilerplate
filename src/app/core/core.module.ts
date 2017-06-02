import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavComponent } from './nav/nav.component';

@NgModule({
    imports: [
        CommonModule, FormsModule
    ],
    exports: [
        CommonModule, FormsModule,
        [NavComponent]
    ],
    declarations: [NavComponent],
    providers: [ ]
})
export class CoreModule {

}