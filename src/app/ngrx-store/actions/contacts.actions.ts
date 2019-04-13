import { Action } from '@ngrx/store';
import { Contact } from '../../interfaces/contact';

export const GET_ALL_CONTACTS = 'GET_ALL_CONTACTS';
export const GET_ALL_CONTACTS_SUCCESS = 'GET_ALL_CONTACTS_SUCCESS';
export const SORT_A_Z = 'SORT_A_Z';
export const SORT_A_Z_SUCCESS = 'SORT_A_Z_SUCCESS';
export const SORT_Z_A = 'SORT_Z_A';
export const SORT_Z_A_SUCCESS = 'SORT_Z_A_SUCCESS';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NAME_SUCCESS = 'FILTER_BY_NAME_SUCCESS';
export const FILTER_BY_CITY = 'FILTER_BY_CITY';
export const FILTER_BY_CITY_SUCCESS = 'FILTER_BY_CITY_SUCCESS';
export const SHOW_ACTIVE_ONLY = 'SHOW_ACTIVE_ONLY';
export const SHOW_ACTIVE_ONLY_SUCCESS = 'SHOW_ACTIVE_ONLY_SUCCESS';
export const LOAD_SELECTED = 'LOAD_SELECTED';
export const LOAD_SELECTED_SUCCESS = 'LOAD_SELECTED_SUCCESS';

export class GetAllContacts implements Action {
    readonly type = GET_ALL_CONTACTS;
}

export class GetAllContactsSuccess implements Action {
    readonly type = GET_ALL_CONTACTS_SUCCESS;
    constructor(public payload: Contact[]) {}
}

export class SortAZ implements Action {
    readonly type = SORT_A_Z;
}

export class SortAZSuccess implements Action {
    readonly type = SORT_A_Z_SUCCESS;

    constructor(public payload: {
        contactsArr: Contact[],
        sortedAZ: boolean,
        sortedZA: boolean
    }) {}
}

export class SortZA implements Action {
    readonly type = SORT_Z_A;
}

export class SortZASuccess implements Action {
    readonly type = SORT_Z_A_SUCCESS;

    constructor(public payload: {
        contactsArr: Contact[],
        sortedAZ: boolean,
        sortedZA: boolean
    }) {}
}

export class FilterByName implements Action {
    readonly type = FILTER_BY_NAME;
    constructor(public payload: string) {}
}

export class FilterByNameSuccess implements Action {
    readonly type = FILTER_BY_NAME_SUCCESS;
    constructor(public payload: Contact[]) {}
}

export class FilterByCity implements Action {
    readonly type = FILTER_BY_CITY;
    constructor(public payload: string) {}
}

export class FilterByCitySuccess implements Action {
    readonly type = FILTER_BY_CITY_SUCCESS;
    constructor(public payload: Contact[]) {}
}

export class ShowActiveOnly implements Action {
    readonly type = SHOW_ACTIVE_ONLY;
    constructor(public payload: string) {}
}

export class ShowActiveOnlySuccess implements Action {
    readonly type = SHOW_ACTIVE_ONLY_SUCCESS;
    constructor(public payload: Contact[]) {}
}

export class LoadSelected implements Action {
    readonly type = LOAD_SELECTED;
    constructor(public payload: number) {}
}

export class LoadSelectedSuccess implements Action {
    readonly type = LOAD_SELECTED_SUCCESS;
    constructor(public payload: Contact) {}
}

export type Actions =
    GetAllContacts |
    GetAllContactsSuccess |
    SortAZ |
    SortAZSuccess |
    SortZA |
    SortZASuccess |
    FilterByName |
    FilterByNameSuccess |
    FilterByCity |
    FilterByCitySuccess |
    ShowActiveOnly |
    ShowActiveOnlySuccess |
    LoadSelected |
    LoadSelectedSuccess;
