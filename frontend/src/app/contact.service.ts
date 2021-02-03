import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact/contact';
import { environment } from '../environments/environment'
import { PageContact } from './contact/pageContact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  URI: string = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
  ) { }


  save(contatc: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.URI, contatc)
  }

  findAll(): Observable<Contact[]> {
    return this.http.get<any>(this.URI);
  }

  findPage(page: number, linesPage: number): Observable<PageContact> {
    const params = new HttpParams()
      .set('page', `${page}`)
      .set('linesPage', `${linesPage}`)

    return this.http.get<any>(`${this.URI}?${params.toString()}`);
  }

  favorite(contact: Contact): Observable<any> {
    return this.http.patch(`${this.URI}/${contact.id}/favorite`, null)
  }


  uploadPhoto(contact: Contact, formData: FormData): Observable<any> {
    return this.http.put(`${this.URI}/${contact.id}/photo`, formData, { responseType: 'blob' });
  }

}
