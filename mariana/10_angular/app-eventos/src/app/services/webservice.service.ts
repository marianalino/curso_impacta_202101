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

	constructor(private http: HttpClient) { }

	public getEventos(): Observable<Evento[]> {
		return this.http.get<Evento[]>(this.url);
	}

	public getEvento(id: string): Observable<Evento> {
		const url = `${this.url}/${id}`;
		return this.http.get<Evento>(url);
	}

	public postEvento(evento: Evento): Observable<Evento> {
		return this.http.post<Evento>(this.url, evento);
	}

	public putEvento(evento: Evento): Observable<Evento> {
		const url = `${this.url}/${evento._id}`;
		return this.http.put<Evento>(url, evento);
	}

	public deleteEvento(id: string): Observable<Evento> {
		const url = `${this.url}/${id}`;
		return this.http.delete<Evento>(url);
	}
}
