import { Injectable } from '@angular/core';
@Injectable({
	providedIn: 'root'
})
export class TopicosService {
	constructor() { }
	getTopicos(): string[] {
		return [
			'Conceitos de NodeJS',
			'MVC com Express.js',
			'MongoDB',
			'Webservice',
			'Angular JS',
			'Angular 2+',
			"Feature Flag",
			"Injeção de Dependência"
		];
	}
}
