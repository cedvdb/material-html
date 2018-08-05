import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { allPalettes } from './palette';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaletteComponent implements OnInit {
  allPalettes = Object.entries(allPalettes);
  constructor() { }

  ngOnInit() {
  }

  getName(palette: [string, any]) {
    return palette[0];
  }

  getColors(palette: [string, any]) {
    // we only keep string, else it's a sub palette (for text)
    return Object.entries(palette[1])
      .map(([key, value]) => ({ name: key, value }))
      .filter(color => typeof color.value === 'string');
  }

}
