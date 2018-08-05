import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { allColors } from './palette';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaletteComponent implements OnInit {
  colors = Object.entries(allColors);
  constructor() { }

  ngOnInit() {
  }

  getName(color: [string, any]) {
    return color[0].replace('mat_', '');
  }

  getSubColors(color: [string, any]) {
    return Object.values(color[1]).filter(v => typeof v === 'string')
  }

}
