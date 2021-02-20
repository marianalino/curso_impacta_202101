import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './components/eventos/editar/editar.component';
import { ListaComponent } from './components/eventos/lista/lista.component';
import { NovoComponent } from './components/eventos/novo/novo.component';
import { RemoverComponent } from './components/eventos/remover/remover.component';
import { VerComponent } from './components/eventos/ver/ver.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "eventos",
		component: ListaComponent
	},
	{
		path: "eventos/novo",
		component: NovoComponent
	},
	{
		path: "eventos/ver/:id",
		component: VerComponent
	},
	{
		path: "eventos/editar/:id",
		component: EditarComponent
	},
	{
		path: "eventos/remover/:id",
		component: RemoverComponent
	},
	{
		path: "**",
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
