import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from 'src/app/interfaces/evento';
import { environment } from 'src/environments/environment';
@Injectable({
	providedIn: 'root'
})
export class WebserviceService {
	url: string = environment.apiEventos;
	constructor(private http: HttpClient) {

	}

	public getEventos(): Observable<Evento[]> {
		return this.http.get<Evento[]>(this.url);
	}
}
