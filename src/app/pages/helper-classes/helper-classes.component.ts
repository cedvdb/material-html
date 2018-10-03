import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-helper-classes',
	templateUrl: './helper-classes.component.html',
	styleUrls: ['./helper-classes.component.css']
})
export class HelperClassesComponent implements OnInit {
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

	txtClss = [
		'txt-primary',
		'txt-secondary',
		'txt-third',
	];

	typoClss = [
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
		'subtitle1',
		'subtitle2',
		'body1',
		'body2',
		'caption',
		'overline'
	];

	spacingClss = [
		'mg-xxs',
		'mg-xs',
		'mg-s',
		'mg-m',
		'mg-l',
		'mg-xl',
		'pd-xxs',
		'pd-xs',
		'pd-s',
		'pd-m',
		'pd-l',
		'pd-xl'
	];

	flexClss = [
		'flex',
		'flexCenter',
		'flexVAlign',
		'flexWrap',
		'flexStart',
		'flexEnd',
		'flexColumn',
		'flexGrow',
		'flexBetween',
		'flexAround',
	];

	miscClss = [
		'ellipsis',
		'cercle'
	];

	constructor() { }

	ngOnInit() {
	}

}
