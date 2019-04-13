import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, mergeMap, catchError, withLatestFrom, filter, tap, delay, exhaustMap } from 'rxjs/operators';
import { Observable, from, of } from 'rxjs';
import * as contactsActions from '../actions/contacts.actions';
import { ContactsState } from 'src/app/interfaces/contacts.state';

import { ApiService } from 'src/app/services/api.service';
import { Contact } from 'src/app/interfaces/contact';

export type Action = contactsActions.Actions;

@Injectable()
export class ContactsEffects {
    clFilteredByName: Contact[];
    constructor(private actions: Actions, private api: ApiService, private store: Store<ContactsState>) { }

    @Effect()
    getAllContacts: Observable<any> = this.actions.pipe(
        ofType(contactsActions.GET_ALL_CONTACTS),
        switchMap(() => {
            return this.api.getAllContacts().pipe(
                map((data: Contact[]) => {
                    return {
                        type: 'GET_ALL_CONTACTS_SUCCESS',
                        payload: data
                    };
                }),
                catchError(() => of(new contactsActions.GetAllContacts())
            ));
        })
    );

    @Effect()
    sortCLAZ: Observable<any> = this.actions.pipe(
        ofType(contactsActions.SORT_A_Z),
        withLatestFrom(this.store.select(store => store.contacts['contacts'])),
        map(state => {
            const contactList: Contact[] = state[1];
            const sortedContactsAZ = contactList.sort((a: { name: string }, b: { name: string }) => {
                const x = a.name.toLowerCase();
                const y = b.name.toLowerCase();
                if (x > y) {
                    return 1;
                } else {
                    return -1;
                }
            });
            return {
                type: 'SORT_A_Z_SUCCESS',
                payload: {
                    contactsArr: sortedContactsAZ,
                    sortedAZ: true,
                    sortedZA: false
                }
            };
        }),
        catchError(() => of(new contactsActions.SortAZ()))
    );

    @Effect()
    sortCLZA: Observable<any> = this.actions.pipe(
        ofType(contactsActions.SORT_Z_A),
        withLatestFrom(this.store.select(store => store.contacts['contacts'])),
        map(state => {
            const contactList: Contact[] = state[1];
            const sortedContactsZA = contactList.sort((a: { name: string }, b: { name: string }) => {
                const x = a.name.toLowerCase();
                const y = b.name.toLowerCase();
                if (x < y) {
                    return 1;
                } else {
                    return -1;
                }
            });
            return {
                type: 'SORT_Z_A_SUCCESS',
                payload: {
                    contactsArr: sortedContactsZA,
                    sortedAZ: false,
                    sortedZA: true
                }
            };
        }),
        catchError(() => of(new contactsActions.SortZA()))
    );

    @Effect()
    filterCLByActivity = this.actions.pipe(
        ofType(contactsActions.SHOW_ACTIVE_ONLY),
        switchMap((action: contactsActions.ShowActiveOnly) => {
            if (action.payload === 'All') {
                return this.api.filterContactsByActivity(action.payload)
                .then((data: Contact[]) => {
                    return {
                        type: 'SHOW_ACTIVE_ONLY_SUCCESS',
                        payload: data
                    };
                })
                .catch((error: Error) => of(new contactsActions.ShowActiveOnly((error.message))));
            } else {
                return this.api.filterContactsByActivity(action.payload)
                .then((data: Contact[]) => {
                    return {
                        type: 'SHOW_ACTIVE_ONLY_SUCCESS',
                        payload: data
                    };
                })
                .catch((error: Error) => of(new contactsActions.ShowActiveOnly((error.message))));
            }
        })
    );

    @Effect()
    filterCLByCity = this.actions.pipe(
        ofType(contactsActions.FILTER_BY_CITY),
        switchMap((action: contactsActions.FilterByCity) => {
            const filterString = action.payload;
            return this.api.filterContactsByCity(filterString)
                .then((data: Contact[]) => {
                    return {
                        type: 'FILTER_BY_CITY_SUCCESS',
                        payload: data
                    };
                })
                .catch((error: Error) => of(new contactsActions.FilterByCity(error.message)));
        })
    );

    @Effect()
    filterCLByName = this.actions.pipe(
        ofType(contactsActions.FILTER_BY_NAME),
        switchMap((action: contactsActions.FilterByName) => {
            const filterString = action.payload;
            return this.api.filterContactsByName(filterString)
                .then((data: Contact[]) => {
                    return {
                        type: 'FILTER_BY_NAME_SUCCESS',
                        payload: data
                    };
                })
                .catch((error: Error) => of(new contactsActions.FilterByName(error.message)));
        })
    );

    @Effect()
    loadSelected = this.actions.pipe(
        ofType(contactsActions.LOAD_SELECTED),
        switchMap((action: contactsActions.LoadSelected) => {
            const selectedId = action.payload;
            return this.api.loadSelectedContact(selectedId)
                .then((data: Contact) => {
                    return {
                        type: 'LOAD_SELECTED_SUCCESS',
                        payload: data
                    };
                })
                .catch((error: Error) => of(new contactsActions.FilterByName(error.message)));
        })
    );

    DOMEffect() {
        console.log();
    }
}
