import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../../interfaces/contact';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[];
  @Input() sortedAZ: boolean;
  @Input() sortedZA: boolean;
  @Input() filterForm: NgForm;
  @Output() sortContacts = new EventEmitter<string>();
  @Output() selectedC = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit() {}

  toggleSorting() {
    this.sortContacts.emit();
  }

  showContactDetails(contact: Contact) {
    this.selectedC.emit(contact);
  }
}
