import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ContactsState } from 'src/app/interfaces/contacts.state';
import * as contactsActions from '../../ngrx-store/actions/contacts.actions';
import { Contact } from '../../interfaces/contact';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  @Input() cl: Contact[];
  @Input() selectedContact: Contact;
  contacts$: Observable<Contact[]>;
  sortedAZ: boolean;
  sortedZA: boolean;
  sorted = false;

  constructor(private store: Store<ContactsState>, private api: ApiService) {
    this.contacts$ = this.store.select('contacts');
    this.contacts$.subscribe((contacts: Contact[]) => {
      this.cl = contacts['contacts'];
      // this.selectedContact = contacts['selectedContact'];
      this.sortedAZ = contacts['sortedAZ'];
      this.sortedZA = contacts['sortedZA'];
    });
  }

  ngOnInit() {
    this.api.getAllContacts();
    this.store.dispatch(new contactsActions.GetContacts());
  }

  handleSorting() {
    this.sorted = !this.sorted;

    if (this.sorted === true) {
      this.store.dispatch(new contactsActions.ContactsSortAZ());
    } else {
      this.store.dispatch(new contactsActions.ContactsSortZA());
    }
  }

  filterByName(nameFilter: string) {
    if (!nameFilter) {
      this.store.dispatch(new contactsActions.GetContacts());
    } else {
      this.store.dispatch(new contactsActions.ContactsFilterByName(nameFilter));
    }
  }

  filterByCity(cityFilter: string) {
    console.log(cityFilter);
    // this.store.dispatch(new contactsActions.ContactsFilterByCity(cityFilter));
    if (cityFilter === 'All') {
      this.store.dispatch(new contactsActions.GetContacts());
    } else {
      this.store.dispatch(new contactsActions.ContactsFilterByCity(cityFilter));
    }
  }

  seeContact(contact: Contact) {
    this.selectedContact = contact;
    this.store.dispatch(new contactsActions.LoadSelectedContactSuccess(contact));
  }

  ngOnDestroy() {}
}
