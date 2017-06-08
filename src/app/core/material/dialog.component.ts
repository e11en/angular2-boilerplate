import {Component} from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'dialog-basic',
    template: `<h1>Title</h1><p>This is a basic dialog</p>`,
})
export class DialogComponent {
    constructor(public dialogRef: MdDialogRef<DialogComponent>) {}
}
