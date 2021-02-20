import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { Evento } from 'src/app/interfaces/evento';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
	selector: 'app-editar',
	templateUrl: './editar.component.html',
	styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
	evento: Evento;

	constructor(
		private webservice: WebserviceService,
		private router: Router,
		private route: ActivatedRoute,
		private localeService: BsLocaleService
	) {
		localeService.use('pt-br');
		this.evento = {
			_id: '',
			descricao: '',
			data: '',
			preco: 0
		};
	}

	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get('id');
		this.webservice.getEvento(id).subscribe(resposta => {
			this.evento = resposta;
			this.evento.data = moment(resposta.data).format('DD/MM/YYYY');
		});
	}

	back() {
		this.router.navigate(['/eventos']);
	}

	alterar(evento: Evento) {
		evento.data = moment(this.evento.data).format('YYYY-MM-DD HH:mm:ss');
		debugger;
		this.webservice.putEvento(evento).subscribe(() => {
			this.router.navigate(['/eventos']);
		});
	}

}
