import { Injectable, Optional, Inject } from '@angular/core';
import * as hljs from 'highlightjs';

@Injectable({
	providedIn: 'root'
})
export class CodeService {

	constructor() {

	}

	render(el: HTMLElement) {
		hljs.highlightBlock(el);
	}

	/** fetch the src and gives back the content in a good format that can then be rendered
	 * (using fetch to not rely on the http client)
	*/
	fetchSrc(src: string): Promise<string> {
		return fetch(src)
			.then(r => r.text());
	}

}
