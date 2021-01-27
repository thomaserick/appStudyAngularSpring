import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact/contact';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  URI: string = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
  ) { }


  save(contatc: Contact): Observable<Contact>
  {   
    return this.http.post<Contact>(this.URI, contatc)   
  }
}
