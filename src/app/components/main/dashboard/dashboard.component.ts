import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

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
    this.filterValChange.emit(form.value);
  }

  nameInputChange(event: any) {
    if (event) {
      this.nameValChange.emit(event.target.value);
    }
  }
}
