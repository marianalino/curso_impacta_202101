import { Component } from '@angular/core';

@Component({
	selector: 'app-property-binding',
	templateUrl: './property-binding.component.html',
	styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
	// Exemplo de Property Binding
	// é um tipo de binding unidirecional (component.ts para a view.html)

	rnd: number = Math.random();
	imagem = "http://lorempixel.com/400/200/animals";
	// 400 é a largura
	// 200 é a altura
	// animals é a categoria
}
