import { NgModule } from '@angular/core';
import { MdButtonModule,
         MdCheckboxModule,
         MdIconModule,
         MdCardModule,
         MdTabsModule,
         MdInputModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MdButtonModule, MdCheckboxModule,
        MdIconModule, MdCardModule, MdTabsModule,
        MdInputModule
    ],
    exports: [
        MdButtonModule, MdCheckboxModule,
        MdIconModule, MdCardModule, MdTabsModule,
        MdInputModule
    ],
})
export class MaterialModule { }
