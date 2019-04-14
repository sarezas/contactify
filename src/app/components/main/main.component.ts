import { Component, OnInit, Input } from '@angular/core';

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
export class MainComponent implements OnInit {
  contacts$: Observable<Contact[]>;
  @Input() cl: Contact[];
  @Input() selectedContact: Contact;
  @Input() loading: boolean;
  @Input() contactLoaded: boolean;
  sortedAZ: boolean;
  sortedZA: boolean;
  sorted = false;

  constructor(private store: Store<ContactsState>) {
    this.contacts$ = this.store.select('contacts');
    this.contacts$.subscribe((contacts: Contact[]) => {
      this.cl = contacts['contacts'];
      this.selectedContact = contacts['selectedContact'];
      this.loading = contacts['loading'];
      this.contactLoaded = contacts['contactLoaded'];
      this.sortedAZ = contacts['sortedAZ'];
      this.sortedZA = contacts['sortedZA'];
    });
  }

  ngOnInit() {
    this.store.dispatch(new contactsActions.GetAllContacts());
  }

  filterCLByActivityAndCity(form: any) {
    const activity = form.checkbox;
    const city = form.searchCity;
    if (city === 'All' && (activity === undefined || activity === false)) {
      this.store.dispatch(new contactsActions.GetAllContacts());
    } else if (city === 'All' && activity === true) {
      this.store.dispatch(new contactsActions.ShowActiveOnly(city));
    } else if (city !== 'All' && (activity === undefined || activity === false)) {
      this.store.dispatch(new contactsActions.FilterByCity(city));
    } else if (city !== 'All' && activity === true) {
      this.store.dispatch(new contactsActions.ShowActiveOnly(city));
    }
  }

  filterCLByName(nameFilter: string) {
    if (!nameFilter) {
      this.store.dispatch(new contactsActions.GetAllContacts());
    } else {
      this.store.dispatch(new contactsActions.FilterByName(nameFilter));
    }
  }

  handleSorting() {
    this.sorted = !this.sorted;
    if (this.sorted === true) {
      this.store.dispatch(new contactsActions.SortAZ());
    } else {
      this.store.dispatch(new contactsActions.SortZA());
    }
  }

  loadContactDetails(contact: Contact) {
    const id = contact.id;
    this.store.dispatch(new contactsActions.LoadSelected(id));
  }
}
