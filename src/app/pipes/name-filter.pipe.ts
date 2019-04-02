import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Pipe({
  name: 'filterName'
})
export class NameFilterPipe implements PipeTransform {
  transform(contacts: Contact[], searchTerm: string): Contact[] {
    if (!searchTerm) {
      return contacts;
    } else {
      return contacts.filter((contact: Contact) => {
        return contact.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
  }
}
