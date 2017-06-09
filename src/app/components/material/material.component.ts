import { Component } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';

import { DialogComponent } from '../../core/material/dialog.component';
import { SnackbarComponent } from '../../core/material/snackbar.component';

@Component({
    selector: 'material',
    templateUrl: './material.component.html',
    styleUrls: ['./material.component.css']
})
export class MaterialComponent {
    showCode = {};

    seasons = [
        'Winter',
        'Summer'
    ];
    favoriteSeason = 'Winter';

    foods = [
        {id: 1, name: 'Appel'},
        {id: 2, name: 'Orange'}
    ];

    progressBarMode = 'buffer';

    selectedOption: string;

    toggleCode(section: string) {
        this.showCode[section] = !this.showCode[section];
    };

    constructor(public dialog: MdDialog, public snackBar: MdSnackBar) {}

    openDialog() {
        let dialogRef = this.dialog.open(DialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
        });
    }

    openSnackBar() {
        this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 500,
        });
    }
}


