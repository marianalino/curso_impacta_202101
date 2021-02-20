import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

defineLocale('pt-br', ptBrLocale);
@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ListaComponent,
		NotFoundComponent,
		NovoComponent,
		VerComponent,
		EditarComponent,
		RemoverComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		SharedModule,
		HttpClientModule,
		FormsModule,
		BsDatepickerModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
