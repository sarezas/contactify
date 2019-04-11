import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  path = '../../assets/contacts/contacts.json';
  constructor(private http: HttpClient) {}

  getAllContacts(): any {
    return this.http.get<any>(this.path);
  }

  filterContacts(filterStr: string) {
    // if (!filterStr) {
    //   this.getAllContacts();
    // } else {
      // return this.http.get<Contact[]>(this.path).pipe(
      //   map((contacts: Contact[]) => {
      //     return contacts.filter(contact => contact.name.toLowerCase().includes(filterStr.toLowerCase()));
      //   })
      // );

      // promise approach start
      return this.http.get<Contact[]>(this.path)
        .toPromise()
        .then((contacts: Contact[]) => {
          return contacts.filter(contact => contact.name.toLowerCase().includes(filterStr.toLowerCase()));
        })
        .catch(err => console.log(err));
        // promise finish
    // }
  }

  sortContactsByName() {}

  getContactById(id: number) {
    return this.http.get<Contact>(this.path + '/' + id);
  }
}
