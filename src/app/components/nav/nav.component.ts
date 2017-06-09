import { Component, OnInit } from '@angular/core';

class MenuItem {
    constructor(public caption: string, public link: any[]) { }
}

@Component({
    selector: 'main-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit  {
    menuItems: MenuItem[];

    ngOnInit() {
        this.menuItems = [
            { caption: 'Services', link: ['/services'] },
            { caption: 'Material Design', link: ['/material'] },
        ];
    }
}
