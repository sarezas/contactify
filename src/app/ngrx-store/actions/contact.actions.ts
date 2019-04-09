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
export const CONTACTS_SHOW_ACTIVE_AND_INACTIVE = 'CONTACTS_SHOW_ACTIVE_AND_INACTIVE';
export const CONTACTS_SHOW_ACTIVE_AND_INACTIVE_SUCCESS = 'CONTACTS_SHOW_ACTIVE_AND_INACTIVE_SUCCESS';
export const CONTACTS_SHOW_ACTIVE_ONLY = 'CONTACTS_SHOW_ACTIVE_ONLY';
export const CONTACTS_SHOW_ACTIVE_ONLY_SUCCESS = 'CONTACTS_SHOW_ACTIVE_ONLY_SUCCESS';
export const LOAD_CONTACT_DETAILS = 'LOAD_CONTACT_DETAILS';
export const LOAD_CONTACT_DETAILS_SUCCESS = 'LOAD_CONTACT_DETAILS_SUCCESS';

export class GetContacts implements Action {
    readonly type = GET_CONTACTS;
    constructor(public payload: Contact[]) {}
}

export class GetContactsSuccess implements Action {
    readonly type = GET_CONTACTS_SUCCESS;
}

export class ContactsSortAZ implements Action {
    readonly type = CONTACTS_SORT_A_Z;
    constructor(public payload: Contact[]) {}
}

export class ContactsSortAZSuccess implements Action {
    readonly type = CONTACTS_SORT_A_Z_SUCCESS;
}

export class ContactsSortZA implements Action {
    readonly type = CONTACTS_SORT_Z_A;
    constructor(public payload: Contact[]) {}
}

export class ContactsSortZASuccess implements Action {
    readonly type = CONTACTS_SORT_Z_A_SUCCESS;
}

export class ContactsFilterByName implements Action {
    readonly type = CONTACTS_FILTER_BY_NAME;
    constructor(public payload: Contact[]) {}
}

export class ContactsFilterByNameSuccess implements Action {
    readonly type = CONTACTS_FILTER_BY_NAME_SUCCESS;
}

export class ContactsFilterByCity implements Action {
    readonly type = CONTACTS_FILTER_BY_CITY;
    constructor(public payload: Contact[]) {}
}

export class ContactsFilterByCitySuccess implements Action {
    readonly type = CONTACTS_FILTER_BY_CITY_SUCCESS;
}

export class ContactsShowActiveAndInactive implements Action {
    readonly type = CONTACTS_SHOW_ACTIVE_AND_INACTIVE;
    constructor(public payload: Contact[]) {}
}

export class ContactsShowActiveAndInactiveSuccess implements Action {
    readonly type = CONTACTS_SHOW_ACTIVE_AND_INACTIVE_SUCCESS;
}

export class ContactsShowActiveOnly implements Action {
    readonly type = CONTACTS_SHOW_ACTIVE_ONLY;
    constructor(public payload: Contact[]) {}
}

export class ContactsShowActiveOnlySuccess implements Action {
    readonly type = CONTACTS_SHOW_ACTIVE_ONLY_SUCCESS;
}

export class LoadContactDetails implements Action {
    readonly type = LOAD_CONTACT_DETAILS;
    constructor(public payload: Contact) {}
}

export class LoadContactDetailsSuccess implements Action {
    readonly type = LOAD_CONTACT_DETAILS_SUCCESS;
}

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
    ContactsShowActiveAndInactive |
    ContactsShowActiveAndInactiveSuccess |
    ContactsShowActiveOnly |
    ContactsShowActiveOnlySuccess |
    LoadContactDetails |
    LoadContactDetailsSuccess;
