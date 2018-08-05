import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-helpers-page',
  templateUrl: './helpers-page.component.html',
  styleUrls: ['./helpers-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpersPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
