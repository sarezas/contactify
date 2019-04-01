import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

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

  constructor() {}

  ngOnInit() {}

  sortByName() {
    this.order = !this.order;
    console.log(this.order);
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

  toggleActivity() {
    // this.isChecked = !this.isChecked;
    if (this.checkbox.nativeElement.checked === true) {
      // this.isChecked = true;
      return this.cl = this.al;
    } else {
      // this.isChecked = false;
      return this.cl = contacts;
    }
  }

}
