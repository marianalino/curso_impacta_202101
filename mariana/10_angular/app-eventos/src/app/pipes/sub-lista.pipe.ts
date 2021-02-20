import { Pipe, PipeTransform } from '@angular/core';
import { Evento } from 'src/app/interfaces/evento';

@Pipe({
	name: 'subLista'
})
export class SubListaPipe implements PipeTransform {

	transform(eventos: Evento[], input: string): Evento[] {
		if (input) {
			/*return eventos.filter(evento => {
				evento.descricao.includes(input);
			});*/
			var f = eventos.filter(e => e.descricao.toLowerCase().includes(input.toLowerCase()));
			return f;
			// evento - 'minha casa minha vida'
			// input - 'minha CASA minha VIDA'
		} else {
			return eventos;
		}
	}
}
