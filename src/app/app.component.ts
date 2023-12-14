import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-non';
  value = '';

  clearValue() {
    this.value = '123';
  }
  constructor() {}

  ngOnInit() {}
}
