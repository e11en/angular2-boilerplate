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
         MdSliderModule,
         MdSlideToggleModule,
         MdMenuModule,
         MdToolbarModule,
         MdButtonToggleModule,
         MdProgressSpinnerModule,
         MdProgressBarModule,
         MdDialogModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MdButtonModule, MdCheckboxModule,
        MdIconModule, MdCardModule, MdTabsModule,
        MdInputModule, MdDatepickerModule,
        MdNativeDateModule, MdRadioModule,
        MdSelectModule, MdSliderModule,
        MdSlideToggleModule, MdMenuModule,
        MdToolbarModule, MdButtonToggleModule,
        MdProgressSpinnerModule, MdProgressBarModule,
        MdDialogModule
    ],
    exports: [
        MdButtonModule, MdCheckboxModule,
        MdIconModule, MdCardModule, MdTabsModule,
        MdInputModule, MdDatepickerModule,
        MdRadioModule, MdSelectModule,
        MdSliderModule, MdSlideToggleModule,
        MdMenuModule, MdToolbarModule,
        MdButtonToggleModule, MdProgressSpinnerModule,
        MdProgressBarModule, MdDialogModule
    ],
})
export class MaterialModule { }
