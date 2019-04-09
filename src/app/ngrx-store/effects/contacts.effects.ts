import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
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
                })
            );
        })
    );

    @Effect()
    sortContactsAZ: Observable<any> = this.actions.pipe(
        ofType(contactsActions.CONTACTS_SORT_A_Z),
        switchMap(() => {
            return this.api.getAllContacts().pipe(
                map(contacts => {
                    const contactsAZ = contacts.sort((a: {name: string}, b: {name: string}) => {
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
                        payload: contactsAZ
                    };
                })
            );
        })
    );
}
