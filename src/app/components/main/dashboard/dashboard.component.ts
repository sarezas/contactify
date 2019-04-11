import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
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
  @Output() filterForm: NgForm;
  @Output() nameValChange = new EventEmitter<string>();
  @Output() cityValChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  onKeyPress(event: any) {
   if (event) {
    this.nameValChange.emit(event.target.value);
   }
  }

  onChange(event: any) {
    if (event) {
      this.cityValChange.emit(event.target.value);
     }
  }
}
