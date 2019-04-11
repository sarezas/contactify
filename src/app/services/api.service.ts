import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  filterContactsByName(filterStr: string): any {
    return this.http.get<Contact[]>(this.path)
      .toPromise()
      .then((contacts: Contact[]) => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filterStr.toLowerCase()));
      })
      .catch(err => err);
  }

  filterContactsByCity(filterStr: string): any {
    return this.http.get<Contact[]>(this.path)
      .toPromise()
      .then((contacts: Contact[]) => {
        return contacts.filter(contact => contact.city.toLowerCase() === filterStr.toLowerCase());
      })
      .catch(err => err);
  }

  getContactById(id: number) {
    return this.http.get<Contact>(this.path + '/' + id);
  }
}
