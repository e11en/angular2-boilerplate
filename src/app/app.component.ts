import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
    title = 'Angular 2 Boilerplate';
    datetime = new Date().toUTCString();
}
