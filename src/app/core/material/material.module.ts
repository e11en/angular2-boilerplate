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
         MdSelectModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MdButtonModule, MdCheckboxModule,
        MdIconModule, MdCardModule, MdTabsModule,
        MdInputModule, MdDatepickerModule,
        MdNativeDateModule, MdRadioModule,
        MdSelectModule
    ],
    exports: [
        MdButtonModule, MdCheckboxModule,
        MdIconModule, MdCardModule, MdTabsModule,
        MdInputModule, MdDatepickerModule,
        MdRadioModule, MdSelectModule
    ],
})
export class MaterialModule { }
