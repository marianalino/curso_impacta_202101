import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/interfaces/evento';
import { LogService } from 'src/app/services/log.service';
import { WebserviceService } from 'src/app/services/webservice.service';
@Component({
	selector: 'app-lista',
	templateUrl: './lista.component.html',
	styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
	eventos: Evento[] = [];

	constructor(
		private webservice: WebserviceService,
		private log: LogService
	) { }

	ngOnInit(): void {
		this.webservice.getEventos().subscribe(resposta => {
			this.eventos = resposta;
			this.log.show('i', 'Meus eventos:', this.eventos, 'retorno okay', 20);
		});
	}

}
