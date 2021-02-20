import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from 'src/app/interfaces/evento';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
	selector: 'app-remover',
	templateUrl: './remover.component.html',
	styleUrls: ['./remover.component.scss']
})
export class RemoverComponent implements OnInit {
	evento: Evento;

	constructor(
		private webservice: WebserviceService,
		private router: Router,
		private route: ActivatedRoute
	) {
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
		});
	}

	back() {
		this.router.navigate(['/eventos']);
	}

	remover(id) {
		this.webservice.deleteEvento(id).subscribe(() => {
			this.router.navigate(['/eventos']);
		});
	}

}
