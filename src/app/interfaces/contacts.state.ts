import { Contact } from './contact';

export class ContactState {
    constructor() {}
    readonly contacts: Contact[];
    readonly selectedContact: Contact;
}
