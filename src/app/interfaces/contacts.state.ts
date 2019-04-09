import { Contact } from './contact';

export class ContactsState {
    constructor() {}
    readonly contacts: Contact[];
    readonly selectedContact?: Contact;
    readonly sortedAZ?: boolean;
    readonly sortedZA?: boolean;
}
