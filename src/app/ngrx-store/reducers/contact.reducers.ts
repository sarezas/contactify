import { Action } from '@ngrx/store';
import * as contactActions from '../actions/contact.actions';
import { ContactState } from '../../interfaces/contacts.state';

export type Action = contactActions.Actions;

const initialState: ContactState = {
    contacts: [],
    selectedContact: null
};

export function ContactReducer(state = initialState, action: contactActions.Actions): ContactState {
    switch (action.type) {
        case contactActions.GET_CONTACTS: {
            return {
                ...state,
                contacts: action.payload
            };
        }
        case contactActions.CONTACTS_SORT_A_Z: {
            return {
                ...state,
                contacts: action.payload
            };
        }
        case contactActions.CONTACTS_SORT_Z_A: {
            return {
                ...state,
                contacts: action.payload
            };
        }
        case contactActions.CONTACTS_FILTER_BY_NAME: {
            return {
                ...state,
                contacts: action.payload
            };
        }
        case contactActions.CONTACTS_FILTER_BY_CITY: {
            return {
                ...state,
                contacts: action.payload
            };
        }
        case contactActions.CONTACTS_SHOW_ACTIVE_AND_INACTIVE: {
            return {
                ...state,
                contacts: action.payload
            };
        }
        case contactActions.CONTACTS_SHOW_ACTIVE_ONLY: {
            return {
                ...state,
                contacts: action.payload
            };
        }
        case contactActions.LOAD_CONTACT_DETAILS: {
            return {
                ...state,
                selectedContact: action.payload
            };
        }
        default:
            return state;
    }
}
