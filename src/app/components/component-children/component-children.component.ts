import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-children',
  template: ` <button (click)="sendMessage()">Send Message</button> `,
  styleUrls: ['./component-children.component.css'],
})
export class ComponentChildrenComponent {
  message: string = 'Hola!';
  @Output() messageEvent = new EventEmitter<string>();

  constructor() {}

  sendMessage() {
    this.messageEvent.emit(this.message);
  }
}
