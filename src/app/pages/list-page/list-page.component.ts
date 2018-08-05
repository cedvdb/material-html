import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  list = ['indianred', 'lightcoral', 'salmon', 'darksalmon', 'lightsalmon'];

  constructor() { }

  ngOnInit() {
  }

}
