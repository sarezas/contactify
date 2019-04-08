import { Component, OnInit, Input, ElementRef, ViewChild, Output } from '@angular/core';
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
  searchCity = 'All';
  @ViewChild('checkbox') checkbox: ElementRef;
  @ViewChild('contactDetailsCol') contactDetailsCol: ElementRef;
  @Input() selectedContact: Contact = {
    id: null,
    name: '',
    surname: '',
    city: '',
    email: '',
    phone: '',
    active: undefined,
    imgUrl: '../../assets/images/userpic.jpg'
  };

  selected = false;

  constructor() {}

  ngOnInit() {
    // this.contactDetailsCol.nativeElement.style.opacity = '0';
  }

  sortByName() {
    this.order = !this.order;
    const aLSorted = this.al.sort((a: { name: string }, b: { name: string }) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      switch (this.order) {
        case x > y:
          return 1;
        case x < y:
          return -1;
      }
    });

    const clSorted = this.cl.sort((a: { name: string }, b: { name: string }) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      switch (this.order) {
        case x > y:
          return 1;
        case x < y:
          return -1;
      }
    });

    if (this.checkbox.nativeElement.checked === true) {
      return this.cl = aLSorted;
    } else {
      return this.cl = clSorted;
    }
  }

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

  showContactDetails(contact: Contact) {
    // this.contactDetailsCol.nativeElement.animate(
    //   [
    //     {opacity: '0'},
    //     {opacity: '1'}
    //   ],
    //   {
    //     duration: 500,
    //     delay: 0,
    //     fill: 'forwards',
    //     easing: 'ease-in'
    //   }
    // );
    this.selected = true;

    const selectedId: number = contact.id;
    const selectedName: string = contact.name;
    const selectedSurname: string = contact.surname;
    const selectedCity: string = contact.city;
    const selectedEmail: string = contact.email;
    const selectedPhone: string = contact.phone;
    const selectedActive: boolean = contact.active;

    this.selectedContact.id = selectedId;
    this.selectedContact.name = selectedName;
    this.selectedContact.surname = selectedSurname;
    this.selectedContact.city = selectedCity;
    this.selectedContact.email = selectedEmail;
    this.selectedContact.phone = selectedPhone;
    this.selectedContact.active = selectedActive;
  }
}
