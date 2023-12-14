import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  now = '2020-06-24T09:00:00.000Z';
  constructor() {}
  ngOnInit(): void {}
}
