import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Pipe({
  name: 'filterCity'
})
export class CityFilterPipe implements PipeTransform {
  transform(contacts: Contact[], searchTerm: string): Contact[] {
    if (!searchTerm) {
      return contacts;
    } else {
      return contacts.filter((contact: Contact) => {
        return contact.city.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
  }
}
