import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	
	private URI = 'https://api.chucknorris.io/jokes/random';

	constructor( private _http: HttpClient ) { }
	
	getMessage(): Observable<Message> {
		return this._http.get<Message>(this.URI);
	}

}
