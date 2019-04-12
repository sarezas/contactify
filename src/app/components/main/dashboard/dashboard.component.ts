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
  @Output() activityValChange = new EventEmitter<boolean>();
  @Output() filterValChange = new EventEmitter<NgForm>();
  @Output() nameValChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  filterInputChange(form: NgForm) {
    // console.log(form.value);
    this.filterValChange.emit(form.value);
    // this.cityValChange.emit(form.value.searchCity);
  }

  nameInputChange(event: any) {
    if (event) {
    this.nameValChange.emit(event.target.value);
    }
  }
}
