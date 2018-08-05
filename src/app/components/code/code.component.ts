import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef,
	EventEmitter, Input, Output, ViewChild, AfterContentChecked } from '@angular/core';

import { CodeService } from './code.service';


@Component({
	selector: 'x-code',
	templateUrl: './code.component.html',
	styleUrls: ['./code.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeComponent implements AfterViewInit, AfterContentChecked {
	/** code block that is gonna be compiled */
	@ViewChild('code') codeElement;
	@Input() lang: string;
	/** text transformed into code */
	@Input()
	get txt(): string { return this._txt; }
	set txt(value: string) {
		this._txt = value;
		this.codeElement.nativeElement.innerHTML = value;
		this.render();
	}
	private _txt: string;

	/** source of an api we can call to get the code */
	@Input()
	get src(): string { return this._src; }
	set src(value: string) {
		this._src = value;
		this.codeService
			.fetchSrc(value)
			.then(txt => {
				this.render();
				this.load.emit(txt);
			})
			.catch(error => this.error.emit(error));
	}
	private _src: string;


	/** event emitters for error and loaded event */
	@Output() error = new EventEmitter<string>();
	@Output() load = new EventEmitter<string>();


	constructor(
		private element: ElementRef,
		private codeService: CodeService,
	) { }

	ngAfterViewInit() {
		// when transclusion is used we only render it once at the start
		// if an @Input is used instead then we will render every change
		if (this.isTranscluded()) {
			this.render();
		}
	}

	/** renders the code  */
	protected render() {
		this.codeService.render(this.codeElement.nativeElement);
	}

	/** whether the text to be translated into markdown is passed via transclusion */
	protected isTranscluded(): boolean {
		return !this.txt && !this.src;
	}

	ngAfterContentChecked() {
		this.codeElement.innerHTML = '';
	}

}
