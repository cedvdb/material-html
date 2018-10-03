import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-helpers-page',
	templateUrl: './helpers-page.component.html',
	styleUrls: ['./helpers-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpersPageComponent implements OnInit {
	colorClss = [
		'color-primary',
		'bg-primary',
		'color-accent',
		'bg-accent',
		'color-warn',
		'bg-warn',
		'color-success',
		'bg-success'
	];
	constructor() { }

	ngOnInit() {
	}

}
