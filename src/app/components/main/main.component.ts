import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ContactsState } from 'src/app/interfaces/contacts.state';
import * as contactsActions from '../../ngrx-store/actions/contacts.actions';
import { Contact } from '../../interfaces/contact';

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

  constructor(private store: Store<ContactsState>) {
    this.contacts$ = this.store.select('contacts');
    this.contacts$.subscribe((contacts: Contact[]) => {
      this.cl = contacts['contacts'];
      // this.selectedContact = contacts['selectedContact'];
      this.sortedAZ = contacts['sortedAZ'];
      this.sortedZA = contacts['sortedZA'];
    });
  }

  ngOnInit() {
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

  filterByName(nameFilter: any) {
    console.log(typeof nameFilter);
    console.log(nameFilter);

    if (!nameFilter) {
      this.store.dispatch(new contactsActions.GetContacts());
    } else {
      this.store.dispatch(new contactsActions.ContactsFilterByName(nameFilter));
    }
  }
  seeContact(contact: Contact) {
    this.selectedContact = contact;
    this.store.dispatch(new contactsActions.LoadSelectedContactSuccess(contact));
  }

  ngOnDestroy() {}
}
