import { Injectable, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  path = '../../assets/contacts/contacts.json';
  constructor(private http: HttpClient) {}

  getAllContacts(): any {
    return this.http.get<Contact[]>(this.path);
  }

  filterContactsByActivity(filterStr: string): any {
    return this.http.get<Contact[]>(this.path)
      .toPromise()
      .then((contacts: Contact[]) => {
        if (filterStr === 'All') {
          return contacts.filter(contact => contact.active === true);
        } else {
          return contacts.filter(contact => contact.active === true && contact.city.toLowerCase() === filterStr.toLowerCase());
        }
      })
      .then(resp => resp)
      .catch(err => console.log(err));
  }

  filterContactsByCity(filterStr: string): any {
    return this.http.get<Contact[]>(this.path)
      .toPromise()
      .then((contacts: Contact[]) => {
        return contacts.filter(contact => contact.city.toLowerCase() === filterStr.toLowerCase());
      })
      .catch(err => console.log(err));
  }

  filterContactsByName(filterStr: string): any {
    return this.http.get<Contact[]>(this.path)
      .toPromise()
      .then((contacts: Contact[]) => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filterStr.toLowerCase()));
      })
      .catch(err => console.log(err));
  }

  loadSelectedContact(id: number): any {
    return this.http.get<Contact[]>(this.path)
      .pipe(delay(650))
        .toPromise()
        .then((contacts: Contact[]) => contacts)
        .then((contacts: Contact[]) => {
          return contacts.filter((contact: Contact) => contact.id === id);
        })
        .catch(err => console.log(err));
  }
}
