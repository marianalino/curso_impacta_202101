import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'email'
})
export class EmailPipe implements PipeTransform {

	transform(nome: string, dominio: string, extensao: string): string {
		if (dominio === undefined) {
			dominio = "impactou";
		}
		if (extensao === undefined) {
			extensao = '.com';
		}
		return nome + "@" + dominio + extensao;
	}

}
