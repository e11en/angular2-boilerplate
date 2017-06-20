import { Component, OnInit } from '@angular/core';

class MenuItem {
    constructor(public caption: string, public link: any[]) { }
}

@Component({
    selector: 'main-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit  {
    menuItems: MenuItem[];

    ngOnInit() {
        this.menuItems = [
            { caption: 'Home', link: ['/'] },
            { caption: 'Example page', link: ['/example'] }
        ];
    }
}
