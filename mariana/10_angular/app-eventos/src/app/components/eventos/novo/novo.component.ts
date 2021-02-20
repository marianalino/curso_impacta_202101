import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { Evento } from 'src/app/interfaces/evento';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
	selector: 'app-novo',
	templateUrl: './novo.component.html',
	styleUrls: ['./novo.component.scss']
})
export class NovoComponent implements OnInit {
	evento: Evento;

	constructor(
		private location: Location,
		private webservice: WebserviceService,
		private router: Router,
		private localeService: BsLocaleService
	) {
		localeService.use('pt-br');
	}

	ngOnInit(): void {
		this.evento = {
			descricao: '',
			data: '',
			preco: 0
		};
	}

	back() {
		this.location.back();
		return false;
	}

	incluir(evento: Evento) {
		this.webservice.postEvento(evento).subscribe(() => {
			this.router.navigate(['/eventos']);
		});
	}

}
