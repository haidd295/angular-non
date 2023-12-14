import { Component } from '@angular/core';
import { ComponentChildrenComponent } from '../component-children/component-children.component';

@Component({
  selector: 'app-component-parent',
  template: 'app-component-children',
  styleUrls: ['./component-parent.component.css'],
})
export class ComponentParentComponent {
  message!: string;

  constructor() {}

  receiveMessage($event: string) {
    this.message = $event;
  }
}
