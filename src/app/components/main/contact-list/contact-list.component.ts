import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../../interfaces/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  // @ViewChild('checkbox') checkbox: ElementRef;
  // @Input() cl: Contact[] = contacts;
  @Input() contacts: Contact[];
  @Output() sortContacts = new EventEmitter<string>();
  @Input() sortedAZ: boolean;
  @Input() sortedZA: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleSorting() {
    this.sortContacts.emit();
    console.log('child: ', this.sortedAZ);
    console.log('child: ', this.sortedZA);
  }

  // showContactDetails(contact: Contact) {

  //   console.log(contact);
  //   this.selected = true;

  //   const selectedId: number = contact.id;
  //   const selectedName: string = contact.name;
  //   const selectedSurname: string = contact.surname;
  //   const selectedCity: string = contact.city;
  //   const selectedEmail: string = contact.email;
  //   const selectedPhone: string = contact.phone;
  //   const selectedActive: boolean = contact.active;

  //   this.selectedContact.id = selectedId;
  //   this.selectedContact.name = selectedName;
  //   this.selectedContact.surname = selectedSurname;
  //   this.selectedContact.city = selectedCity;
  //   this.selectedContact.email = selectedEmail;
  //   this.selectedContact.phone = selectedPhone;
  //   this.selectedContact.active = selectedActive;
  // }

  // sortByName() {
  //   this.order = !this.order;
  //   const aLSorted = this.al.sort((a: { name: string }, b: { name: string }) => {
  //     const x = a.name.toLowerCase();
  //     const y = b.name.toLowerCase();
  //     switch (this.order) {
  //       case x > y:
  //         return 1;
  //       case x < y:
  //         return -1;
  //     }
  //   });

  //   const clSorted = this.cl.sort((a: { name: string }, b: { name: string }) => {
  //     const x = a.name.toLowerCase();
  //     const y = b.name.toLowerCase();
  //     switch (this.order) {
  //       case x > y:
  //         return 1;
  //       case x < y:
  //         return -1;
  //     }
  //   });

  //   if (this.checkbox.nativeElement.checked === true) {
  //     return this.cl = aLSorted;
  //   } else {
  //     return this.cl = clSorted;
  //   }
  // }

}
