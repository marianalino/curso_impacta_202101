import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/interfaces/evento';
import { LogService } from 'src/app/services/log.service';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
	selector: 'app-ver',
	templateUrl: './ver.component.html',
	styleUrls: ['./ver.component.scss']
})
export class VerComponent implements OnInit {
	evento: Evento;

	constructor(
		private webservice: WebserviceService,
		private route: ActivatedRoute,
		private log: LogService
	) {
		this.log.show('w', "Construindo tela ver");
		this.evento = {
			_id: "",
			descricao: "",
			data: "",
			preco: 0
		};
	}

	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get('id');
		this.webservice.getEvento(id).subscribe(resposta => {
			this.evento = resposta;

			this.log.show('e', "ID SELECIONADO: " + id, id);
		});
	}

}
