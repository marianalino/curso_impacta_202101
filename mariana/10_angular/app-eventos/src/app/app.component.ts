import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	currentLanguage: string;

	constructor(private translate: TranslateService) {
		// disponibilizamos as linguas para o sistema
		translate.addLangs(['en', 'pt-BR']);

		if (localStorage.getItem('locale')) {
			const browserLang = localStorage.getItem('locale');
			// verifico se o valor salvo no local storage é 'en' ou 'pt-BR' para definir uso no translate
			translate.use(browserLang.match(/en|pt-BR/) ? browserLang : 'pt-BR');
		} else {
			// salvo no local storage a lingua a ser utilizada
			localStorage.setItem('locale', 'pt-BR');

			// setamos a lingua padrão para carregar
			translate.setDefaultLang('pt-BR');

			// defimos a lingua a ser utilizada
			translate.use('pt-BR');
		}

		this.currentLanguage = this.translate.currentLang;

	}

	ngOnInit() {
		this.translate.get('events.list').subscribe(texto => {
			// alert(texto);
		});
	}
}
