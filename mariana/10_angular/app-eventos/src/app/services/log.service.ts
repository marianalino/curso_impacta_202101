import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class LogService {
	showLog = environment.featureFlag.showLog;

	constructor() { }

	show(type, ...value) {
		if (this.showLog) {
			const hora = "> " + new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

			switch (type) {
				case 'e':
					console.error(hora);
					console.error(value);
					break;
				case 'i':
					console.info(hora);
					console.info(value);
					break;
				case 'w':
					console.warn(hora);
					console.warn(value);
					break;
				default:
					console.log(hora);
					console.log(value);
					break;
			}
		}
	}
}
