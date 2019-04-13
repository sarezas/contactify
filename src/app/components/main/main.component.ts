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
  contacts$: Observable<Contact[]>;
  @Input() cl: Contact[];
  @Input() selectedContact: Contact;
  @Input() loading: boolean;
  sortedAZ: boolean;
  sortedZA: boolean;
  sorted = false;

  constructor(private store: Store<ContactsState>, private api: ApiService) {
    this.contacts$ = this.store.select('contacts');
    this.contacts$.subscribe((contacts: Contact[]) => {
      this.cl = contacts['contacts'];
      this.selectedContact = contacts['selectedContact'];
      this.loading = contacts['loading'];
      this.sortedAZ = contacts['sortedAZ'];
      this.sortedZA = contacts['sortedZA'];
    });
  }

  ngOnInit() {
    this.api.getAllContacts();
    this.store.dispatch(new contactsActions.GetAllContacts());
  }

  toggleLoading() {
    this.loading = !this.loading;
  }

  filterContacts(form: any) {
    const activity = form.checkbox;
    const city = form.searchCity;

    // if city all and activity false
    if (city === 'All' && (activity === undefined || activity === false)) {
      console.log(`from: ${city}, active: ${activity}`);
      this.store.dispatch(new contactsActions.GetAllContacts());
    // if city all and activity true
    } else if (city === 'All' && activity === true) {
      console.log(`from: ${city}, active: ${activity}`);
      this.store.dispatch(new contactsActions.ShowActiveOnly(city));
    // if city any and activity false
    } else if (city !== 'All' && (activity === undefined || activity === false)) {
      console.log(`from: ${city}, active: ${activity}`);
      this.store.dispatch(new contactsActions.FilterByCity(city));
    // if city any and activity true
    } else if (city !== 'All' && activity === true) {
      console.log(`from: ${city}, active: ${activity}`);
      this.store.dispatch(new contactsActions.ShowActiveOnly(city));
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

  filterByName(nameFilter: string) {
    if (!nameFilter) {
      this.store.dispatch(new contactsActions.GetAllContacts());
    } else {
      this.store.dispatch(new contactsActions.FilterByName(nameFilter));
    }
  }

  loadContactDetails(contact: Contact) {
    // this.selectedContact = contact;
    const id = contact.id;
    this.store.dispatch(new contactsActions.LoadSelected(id));
  }

  ngOnDestroy() {}
}
