import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { default as contacts } from '../../../assets/contacts/contacts.json';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() cl: Contact[] = contacts;
  @Input() al: Contact[] = this.cl.filter(c => c.active === true);
  order = false;
  @ViewChild('checkbox') checkbox: ElementRef;
  searchCity = 'All';

  constructor() {}

  ngOnInit() {}

  sortByName() {
    this.order = !this.order;
    const aLSorted = this.al.sort((a: { name: string }, b: { name: string }) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      switch (this.order) {
        case x > y:
          return 1;
          break;
        case x < y:
          return -1;
          break;
      }
    });

    const clSorted = this.cl.sort((a: { name: string }, b: { name: string }) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      switch (this.order) {
        case x > y:
          return 1;
          break;
        case x < y:
          return -1;
          break;
      }
    });

    if (this.checkbox.nativeElement.checked === true) {
      return this.cl = aLSorted;
    } else {
      return this.cl = clSorted;
    }
  }

  // toggleActivity() {
  //   if (this.checkbox.nativeElement.checked === true) {
  //     return this.cl = this.al;
  //   } else {
  //     return this.cl = contacts;
  //   }
  // }

  filterContacts(form: NgForm) {
    const cityInput: string = form.value.searchCity;
    const cl = contacts.slice();
    const al = this.al.slice();
    const filteredAllContactList: Contact[] = cl.filter((contact: Contact) => {
      return contact.city.toLowerCase().includes(cityInput.toLowerCase());
    });
    const filteredActiveList: Contact[] = al.filter((contact: Contact) => {
      return contact.city.toLowerCase().includes(cityInput.toLowerCase());
    });

    if (this.checkbox.nativeElement.checked === false && cityInput === 'All') {
      return this.cl = cl;
    } else if (this.checkbox.nativeElement.checked === true && cityInput === 'All') {
      return this.cl = al;
    } else if (this.checkbox.nativeElement.checked === false && cityInput !== 'All') {
      return this.cl = filteredAllContactList;
    } else if (this.checkbox.nativeElement.checked === true && cityInput !== 'All') {
      return this.cl = filteredActiveList;
    }
  }
}
