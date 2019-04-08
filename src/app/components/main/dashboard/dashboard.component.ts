import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { default as contacts } from '../../../../assets/contacts/contacts.json';
import { Contact } from '../../../interfaces/contact';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  searchCity = 'All';
  @ViewChild('checkbox') checkbox: ElementRef;
  @Input() cl: Contact[] = contacts;
  @Input() al: Contact[] = this.cl.filter(c => c.active === true);

  constructor() { }

  ngOnInit() {}

  filterContacts(form: NgForm) {
    const cityInput: string = form.value.searchCity;
    const checkBox: boolean = form.value.checkbox;
    const cl = contacts.slice();
    const al = this.al.slice();
    const filteredAllContactList: Contact[] = cl.filter((contact: Contact) => {
      return contact.city.toLowerCase().includes(cityInput.toLowerCase());
    });
    const filteredActiveList: Contact[] = al.filter((contact: Contact) => {
      return contact.city.toLowerCase().includes(cityInput.toLowerCase());
    });

    if (checkBox === false && cityInput === 'All') {
      return this.cl = cl;
    } else if (!checkBox && cityInput === 'All') {
      return this.cl = cl;
    } else if (checkBox === true && cityInput === 'All') {
      return this.cl = al;
    } else if (checkBox === false && cityInput !== 'All') {
      return this.cl = filteredAllContactList;
    } else if (checkBox === true && cityInput !== 'All') {
      return this.cl = filteredActiveList;
    } else {
      return this.cl = filteredAllContactList;
    }
  }
}
