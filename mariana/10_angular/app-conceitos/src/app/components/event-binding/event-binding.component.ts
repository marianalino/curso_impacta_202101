import { Component, OnInit } from '@angular/core';
import { Funcoes } from 'src/app/funcoes';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-event-binding',
	templateUrl: './event-binding.component.html',
	styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit, Funcoes {
	escola: string;
	rnd: number = Math.random();
	showLog: boolean;

	constructor() {
		this.showLog = environment.featureFlag.showLog;
	}

	calculo(valor1: number, valor2: number): number {
		return valor1 + valor2;
	}

	soma() {
		this.calculo(10, 20);
	}

	ngOnInit(): void {
		this.escola = "Impacta";
		if (this.showLog) {
			alert('está exibindo o log');
		}
	}

	alterarTexto() {
		this.escola = "Impacta Tecnologia";
	}

	alterarRnd() {
		this.rnd = Math.random();
	}

	/*alterarTexto2(): void {
		this.escola = "Impacta Tecnologia";
	}*/

}
