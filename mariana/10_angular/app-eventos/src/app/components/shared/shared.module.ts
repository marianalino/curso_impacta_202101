import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LanguageComponent } from './language/language.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
	declarations: [MenuComponent, LanguageComponent],
	imports: [
		CommonModule,
		CollapseModule.forRoot(),
		BsDropdownModule.forRoot(),
		RouterModule,
		TranslateModule
	],
	exports: [
		MenuComponent,
		LanguageComponent,
		TranslateModule
	]
})
export class SharedModule { }
