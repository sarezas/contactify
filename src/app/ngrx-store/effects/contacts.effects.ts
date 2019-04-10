import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import { Observable, from, of } from 'rxjs';
import * as contactsActions from '../actions/contacts.actions';
import { ContactsState } from 'src/app/interfaces/contacts.state';

import { ApiService } from 'src/app/services/api.service';
import { Contact } from 'src/app/interfaces/contact';

export type Action = contactsActions.Actions;

@Injectable()
export class ContactsEffects {
    constructor(private actions: Actions, private api: ApiService, private store: Store<ContactsState>) { }

    @Effect()
    getContacts: Observable<any> = this.actions.pipe(
        ofType(contactsActions.GET_CONTACTS),
        switchMap(() => {
            return this.api.getAllContacts().pipe(
                map((data: Contact[]) => {
                    return {
                        type: 'GET_CONTACTS_SUCCESS',
                        payload: data
                    };
                }),
                catchError(error => of(new contactsActions.GetContacts())
            ));
        })
    );

    @Effect()
    sortContactsAZ: Observable<any> = this.actions.pipe(
        ofType(contactsActions.CONTACTS_SORT_A_Z),
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
                type: 'CONTACTS_SORT_A_Z_SUCCESS',
                payload: {
                    contactsArr: sortedContactsAZ,
                    sortedAZ: true,
                    sortedZA: false
                }
            };
        }),
        catchError((error) => of(new contactsActions.ContactsSortAZ()))
    );

    @Effect()
    sortContactsZA: Observable<any> = this.actions.pipe(
        ofType(contactsActions.CONTACTS_SORT_Z_A),
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
                type: 'CONTACTS_SORT_Z_A_SUCCESS',
                payload: {
                    contactsArr: sortedContactsZA,
                    sortedAZ: false,
                    sortedZA: true
                }
            };
        }),
        catchError((error) => of(new contactsActions.ContactsSortZA()))
    );

    @Effect()
    filterContactsByName: Observable<any> = this.actions.pipe(
        ofType(contactsActions.CONTACTS_FILTER_BY_NAME),
        withLatestFrom(this.store.select(store => store.contacts['contacts'])),
        map(state => {
            console.log(state);
            const filter: string = state[0]['payload'];
            return {
                type: 'CONTACTS_FILTER_BY_NAME_SUCCESS',
                payload: state[1].filter((contact: Contact) => {
                    return contact.name.toLowerCase().includes(filter.toLowerCase());
                })
            };
        }),
        catchError((error) => of(new contactsActions.ContactsFilterByName(error)))
    );
}
