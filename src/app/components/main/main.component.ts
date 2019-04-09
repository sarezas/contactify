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
  @Input() selectedContact$: Observable<Contact>;
  sorted = false;

  constructor(private store: Store<ContactsState>) {
    this.contacts$ = this.store.select('contacts', 'contacts');
    this.selectedContact$ = this.store.select('contacts', 'selectedContact');
    this.contacts$.subscribe((contacts: Contact[]) => this.cl = contacts);
  }

  ngOnInit() {
    this.store.dispatch(new contactsActions.GetContacts());
  }

  catchSorting() {
    this.sorted = !this.sorted;
    console.log(this.sorted);

    if (this.sorted === true) {
      this.store.dispatch(new contactsActions.ContactsSortAZ());
    } else {
      this.store.dispatch(new contactsActions.ContactsSortZA());
    }
  }

  ngOnDestroy() {}
}
