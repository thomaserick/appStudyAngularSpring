import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacts } from './contact/contact';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  URI: string= environment.apiBaseUrl;

  constructor(
    private http: HttpClient
  ) { }


  save(contatc: Contacts): Observable<Contacts>
  {
    return this.http.post<Contacts>(this.URI, Contacts)
  }
}
