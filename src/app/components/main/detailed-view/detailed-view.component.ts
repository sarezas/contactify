import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.scss']
})
export class DetailedViewComponent implements OnInit {
  @Input() contact: Contact;
  @Input() isLoading: false;

  constructor() { }

  ngOnInit() {
    console.log(this.contact);
    setTimeout(() => {
      console.log(this.contact);
    }, 10000);
  }

}
