import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../../interfaces/contact';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[];
  @Output() sortContacts = new EventEmitter<string>();
  @Output() selectedC = new EventEmitter<Contact>();
  @Input() sortedAZ: boolean;
  @Input() sortedZA: boolean;
  @Input() filterForm: NgForm;

  constructor() { }

  ngOnInit() {}

  toggleSorting() {
    this.sortContacts.emit();
  }

  showContactDetails(contact: Contact) {
    console.log(contact);
    this.selectedC.emit(contact);
  }
}
