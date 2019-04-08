import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  @Input() contacts: Contact[];

  constructor(private api: ApiService) {
    this.api.getAllContacts().subscribe(
      data =>  this.contacts = data,
      error => console.log(error),
    );
    setTimeout(() => {
      console.log(this.contacts);
    }, 500);
  }

  ngOnInit() {}

  ngOnDestroy() {
  }
}
