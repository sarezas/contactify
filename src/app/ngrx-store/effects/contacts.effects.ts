import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Observable, from, of } from 'rxjs';
import * as contactsActions from '../actions/contacts.actions';
import * as contactsReducers from '../reducers/contacts.reducers';

import { ApiService } from 'src/app/services/api.service';
import { Contact } from 'src/app/interfaces/contact';

export type Action = contactsActions.Actions;

@Injectable()
export class ContactsEffects {
    constructor(private actions: Actions, private api: ApiService) { }

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
        switchMap(() => {
            return this.api.getAllContacts().pipe(
                map(contacts => {
                    const contactsAZ: Contact[] = contacts.sort((a: {name: string}, b: {name: string}) => {
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
                            contactsArr: contactsAZ,
                            sortedAZ: true,
                            sortedZA: false
                        }
                    };
                }),
                catchError(error => of(new contactsActions.ContactsSortAZ())
            ));
        })
    );

    @Effect()
    sortContactsZA: Observable<any> = this.actions.pipe(
        ofType(contactsActions.CONTACTS_SORT_Z_A),
        switchMap(() => {
            return this.api.getAllContacts().pipe(
                map(contacts => {
                    const contactsZA = contacts.sort((a: {name: string}, b: {name: string}) => {
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
                            contactsArr: contactsZA,
                            sortedAZ: false,
                            sortedZA: true
                        }
                    };
                }),
                catchError(error => of(new contactsActions.ContactsSortZA())
            ));
        })
    );
}
