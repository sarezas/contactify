import { Action } from '@ngrx/store';
import { Contact } from '../../interfaces/contact';

export const GET_CONTACTS = 'GET_CONTACTS';
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';
export const CONTACTS_SORT_A_Z = 'CONTACTS_SORT_A_Z';
export const CONTACTS_SORT_A_Z_SUCCESS = 'CONTACTS_SORT_A_Z_SUCCESS';
export const CONTACTS_SORT_Z_A = 'CONTACTS_SORT_Z_A';
export const CONTACTS_SORT_Z_A_SUCCESS = 'CONTACTS_SORT_Z_A_SUCCESS';
export const CONTACTS_FILTER_BY_NAME = 'CONTACTS_FILTER_BY_NAME';
export const CONTACTS_FILTER_BY_NAME_SUCCESS = 'CONTACTS_FILTER_BY_NAME_SUCCESS';
export const CONTACTS_FILTER_BY_CITY = 'CONTACTS_FILTER_BY_CITY';
export const CONTACTS_FILTER_BY_CITY_SUCCESS = 'CONTACTS_FILTER_BY_CITY_SUCCESS';
export const CONTACTS_SHOW_ACTIVE_ONLY = 'CONTACTS_SHOW_ACTIVE_ONLY';
export const CONTACTS_SHOW_ACTIVE_ONLY_SUCCESS = 'CONTACTS_SHOW_ACTIVE_ONLY_SUCCESS';
export const LOAD_SELECTED_CONTACT = 'LOAD_SELECTED_CONTACT';
// export const LOAD_CONTACT_DETAILS_SUCCESS = 'LOAD_CONTACT_DETAILS_SUCCESS';

export class GetContacts implements Action {
    readonly type = GET_CONTACTS;
}

export class GetContactsSuccess implements Action {
    readonly type = GET_CONTACTS_SUCCESS;
    constructor(public payload: Contact[]) {}
}

export class ContactsSortAZ implements Action {
    readonly type = CONTACTS_SORT_A_Z;
}

export class ContactsSortAZSuccess implements Action {
    readonly type = CONTACTS_SORT_A_Z_SUCCESS;
    constructor(public payload: {
        contactsArr: Contact[],
        sortedAZ: boolean,
        sortedZA: boolean
    }) {}
}

export class ContactsSortZA implements Action {
    readonly type = CONTACTS_SORT_Z_A;
}

export class ContactsSortZASuccess implements Action {
    readonly type = CONTACTS_SORT_Z_A_SUCCESS;
    constructor(public payload: {
        contactsArr: Contact[],
        sortedAZ: boolean,
        sortedZA: boolean
    }) {}
}

export class ContactsFilterByName implements Action {
    readonly type = CONTACTS_FILTER_BY_NAME;
}

export class ContactsFilterByNameSuccess implements Action {
    readonly type = CONTACTS_FILTER_BY_NAME_SUCCESS;
    constructor(public payload: Contact[]) {}
}

export class ContactsFilterByCity implements Action {
    readonly type = CONTACTS_FILTER_BY_CITY;
}

export class ContactsFilterByCitySuccess implements Action {
    readonly type = CONTACTS_FILTER_BY_CITY_SUCCESS;
    constructor(public payload: Contact[]) {}
}

export class ContactsShowActiveOnly implements Action {
    readonly type = CONTACTS_SHOW_ACTIVE_ONLY;
}

export class ContactsShowActiveOnlySuccess implements Action {
    readonly type = CONTACTS_SHOW_ACTIVE_ONLY_SUCCESS;
    constructor(public payload: Contact[]) {}
}

export class LoadContactDetailsSuccess implements Action {
    readonly type = LOAD_SELECTED_CONTACT;
    constructor(public payload: Contact) {}
}

// export class LoadContactDetailsSuccess implements Action {
//     readonly type = LOAD_CONTACT_DETAILS_SUCCESS;
// }

export type Actions =
    GetContacts |
    GetContactsSuccess |
    ContactsSortAZ |
    ContactsSortAZSuccess |
    ContactsSortZA |
    ContactsSortZASuccess |
    ContactsFilterByName |
    ContactsFilterByNameSuccess |
    ContactsFilterByCity |
    ContactsFilterByCitySuccess |
    ContactsShowActiveOnly |
    ContactsShowActiveOnlySuccess |
    // LoadContactDetails |
    LoadContactDetailsSuccess;
