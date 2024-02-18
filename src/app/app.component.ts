import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user = {
    name: 'cuu',
    age: 19
  }
  updateName() {
    this.user.name = 'peter'
  }
  constructor() { }

  ngOnInit() { }
}
