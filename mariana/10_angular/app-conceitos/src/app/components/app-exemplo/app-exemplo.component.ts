import { Component } from "@angular/core";
import { TopicosService } from "src/app/services/topicos.service";
import { environment } from './../../../environments/environment';
@Component({
	selector: 'app-exemplo',
	templateUrl: './app-exemplo.component.html',
	styleUrls: ['./app-exemplo.component.css']
})

export class AppExemploComponent {
	titulo: string = "Primeiro componente do Angular";
	exibe: boolean = environment.featureFlag.showLog;
	/*topicos: string[] = [
	  'Conceitos de NodeJS',
	  'MVC com Express.js',
	  'MongoDB',
	  'Webservice',
	  'Angular JS',
	  'Angular 2+',
	  "Feature Flag"
	];*/
	topicos: string[];

	constructor(topicosService: TopicosService) {
		this.topicos = topicosService.getTopicos();
	}
}
