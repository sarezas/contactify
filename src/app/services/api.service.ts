import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contact } from '../interfaces/contact';
import { Observable } from 'rxjs';
import { ContactListComponent } from '../components/main/contact-list/contact-list.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  path = '../../assets/contacts/contacts.json';
  constructor(private http: HttpClient) {}

  getAllContacts() {
    return this.http.get<Contact[]>(this.path);
  }

  getContactById(id: number) {
    return this.http.get<Contact>(this.path + '/' + id);
  }
}
