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
         MdDialogModule,
         MdTooltipModule
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
        MdDialogModule, MdTooltipModule
    ],
    exports: [
        MdButtonModule, MdCheckboxModule,
        MdIconModule, MdCardModule, MdTabsModule,
        MdInputModule, MdDatepickerModule,
        MdRadioModule, MdSelectModule,
        MdSliderModule, MdSlideToggleModule,
        MdMenuModule, MdToolbarModule,
        MdButtonToggleModule, MdProgressSpinnerModule,
        MdProgressBarModule, MdDialogModule,
        MdTooltipModule
    ],
})
export class MaterialModule { }
