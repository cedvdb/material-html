import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elevation-page',
  templateUrl: './elevation-page.component.html',
  styleUrls: ['./elevation-page.component.scss']
})
export class ElevationPageComponent implements OnInit {
  levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  code = `
<section class="z-1"> <section>
`;
  constructor() { }

  ngOnInit() {
  }

}
