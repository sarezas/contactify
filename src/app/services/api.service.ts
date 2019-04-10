import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  path = '../../assets/contacts/contacts.json';
  constructor(private http: HttpClient) {}

  getAllContacts() {
    return this.http
      .get<Contact[]>(this.path).pipe(
        catchError((err: Response) => {
          return Observable.throw(err.statusText);
        })
      );
  }

  sortContactsByName() {}

  getContactById(id: number) {
    return this.http.get<Contact>(this.path + '/' + id);
  }
}
