import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
	selector: '[hoverDestaque]'
})
export class HoverDestaqueDirective implements OnInit {

	constructor() { }

	@HostBinding('style.backgroundColor') corDeFundo: string;

	ngOnInit() {
		this.corDeFundo = "#bfbfbf";
	}

	@HostListener('mouseover') entrarMouse() {
		this.corDeFundo = 'red';
	}

	@HostListener('mouseout') retirarMouse() {
		this.corDeFundo = "#bfbfbf";
	}
}
