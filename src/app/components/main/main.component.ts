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
  @Input() contacts$: Observable<Contact[]>;
  @Input() cl: Contact[];
  @Input() selectedContact: Contact;
  sortedAZ: boolean;
  sortedZA: boolean;
  sorted = false;

  constructor(private store: Store<ContactsState>) {
    this.contacts$ = this.store.select('contacts');
    this.contacts$.subscribe((contacts: Contact[]) => {
      this.cl = contacts['contacts'];
      this.selectedContact = contacts['selectedContact'];
      this.sortedAZ = contacts['sortedAZ'];
      this.sortedZA = contacts['sortedZA'];
    });
  }

  ngOnInit() {
    this.store.dispatch(new contactsActions.GetContacts());
    setTimeout(() => {
      console.log('store: ', this.cl);
      console.log('store: ', this.selectedContact);
      console.log('store: ', this.sortedAZ);
      console.log('store: ', this.sortedZA);
    }, 1000);
  }

  handleSorting() {
    this.sorted = !this.sorted;
    console.log('parent: ', this.sortedAZ);
    console.log('parent: ', this.sortedZA);

    if (this.sorted === true) {
      this.store.dispatch(new contactsActions.ContactsSortAZ());
    } else {
      this.store.dispatch(new contactsActions.ContactsSortZA());
    }
  }

  ngOnDestroy() {}
}
