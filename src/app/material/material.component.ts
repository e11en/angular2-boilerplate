import {Component} from '@angular/core';

@Component({
    selector: 'material',
    templateUrl: './material.component.html',
    styleUrls: ['./material.component.css']
})
export class MaterialComponent {
    seasons = [
        'Winter',
        'Summer'
    ];
    favoriteSeason = 'Winter';

    foods = [
        {id: 1, name: 'Appel'},
        {id: 2, name: 'Orange'}
    ];
}
