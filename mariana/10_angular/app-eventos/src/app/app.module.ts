import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import localePtBr from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarComponent } from './components/eventos/editar/editar.component';
import { ListaComponent } from './components/eventos/lista/lista.component';
import { NovoComponent } from './components/eventos/novo/novo.component';
import { RemoverComponent } from './components/eventos/remover/remover.component';
import { VerComponent } from './components/eventos/ver/ver.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SharedModule } from './components/shared/shared.module';
import { HoverDestaqueDirective } from './diretivas/hover-destaque.directive';
import { NgShowDirective } from './diretivas/ng-show.directive';
import { EmailPipe } from './pipes/email.pipe';
import { SubListaPipe } from './pipes/sub-lista.pipe';
import { UppercasePipe } from './pipes/uppercase.pipe';

defineLocale('pt-br', ptBrLocale); // language para datepicker
registerLocaleData(localePtBr, 'pt-BR');
@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ListaComponent,
		NotFoundComponent,
		NovoComponent,
		VerComponent,
		EditarComponent,
		RemoverComponent,
		EmailPipe,
		UppercasePipe,
		SubListaPipe,
		NgShowDirective,
		HoverDestaqueDirective
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		SharedModule,
		HttpClientModule,
		FormsModule,
		BsDatepickerModule.forRoot(),
		TranslateModule.forRoot({
			defaultLanguage: 'pt-BR',
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/');
}
