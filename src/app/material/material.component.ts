import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogComponent } from '../core/material/dialog.component';

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

    toggleCode = function(section: string) {
        this.showCode[section] = !this.showCode[section];
    };

    constructor(public dialog: MdDialog) {}

    openDialog() {
        let dialogRef = this.dialog.open(DialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
        });
    }
}


