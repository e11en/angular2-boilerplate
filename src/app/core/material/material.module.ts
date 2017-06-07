import { NgModule } from '@angular/core';
import { MdButtonModule,
         MdCheckboxModule,
         MdIconModule,
         MdCardModule,
         MdTabsModule,
         MdInputModule,
         MdNativeDateModule,
         MdDatepickerModule,
         MdRadioModule,
         MdSelectModule,
         MdSliderModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MdButtonModule, MdCheckboxModule,
        MdIconModule, MdCardModule, MdTabsModule,
        MdInputModule, MdDatepickerModule,
        MdNativeDateModule, MdRadioModule,
        MdSelectModule, MdSliderModule
    ],
    exports: [
        MdButtonModule, MdCheckboxModule,
        MdIconModule, MdCardModule, MdTabsModule,
        MdInputModule, MdDatepickerModule,
        MdRadioModule, MdSelectModule,
        MdSliderModule
    ],
})
export class MaterialModule { }
