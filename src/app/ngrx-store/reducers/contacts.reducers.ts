import { Action } from '@ngrx/store';
import * as contactsActions from '../actions/contacts.actions';
import { ContactsState } from '../../interfaces/contacts.state';

export type Action = contactsActions.Actions;

const initialState: ContactsState = {
    contacts: [],
    selectedContact: null
};

export function ContactsReducer(state = initialState, action: contactsActions.Actions): ContactsState {
    switch (action.type) {
        case contactsActions.GET_CONTACTS: {
            return {
                ...state,
                contacts: [...state.contacts],
                selectedContact: state.selectedContact
            };
        }
        case contactsActions.GET_CONTACTS_SUCCESS: {
            return {
                ...state,
                contacts: [...state.contacts, ...action.payload],
                selectedContact: state.selectedContact
            };
        }
        case contactsActions.CONTACTS_SORT_A_Z: {
            return {
                ...state,
                contacts: [...state.contacts],
                selectedContact: state.selectedContact
            };
        }
        case contactsActions.CONTACTS_SORT_A_Z_SUCCESS: {
            return {
                ...state,
                contacts: action.payload,
                selectedContact: state.selectedContact
            };
        }
        case contactsActions.CONTACTS_SORT_Z_A: {
            return {
                ...state,
                contacts: [...state.contacts],
                selectedContact: state.selectedContact
            };
        }
        case contactsActions.CONTACTS_SORT_Z_A_SUCCESS: {
            return {
                ...state,
                contacts: [...state.contacts, ...action.payload],
                selectedContact: state.selectedContact
            };
        }
        case contactsActions.CONTACTS_FILTER_BY_NAME: {
            return {
                ...state,
                contacts: [...state.contacts],
                selectedContact: state.selectedContact
            };
        }
        case contactsActions.CONTACTS_FILTER_BY_NAME_SUCCESS: {
            return {
                ...state,
                contacts: [...state.contacts, ...action.payload],
                selectedContact: state.selectedContact
            };
        }
        case contactsActions.CONTACTS_FILTER_BY_CITY: {
            return {
                ...state,
                contacts: [...state.contacts],
                selectedContact: state.selectedContact
            };
        }
        case contactsActions.CONTACTS_FILTER_BY_CITY_SUCCESS: {
            return {
                ...state,
                contacts: [...state.contacts, ...action.payload],
                selectedContact: state.selectedContact
            };
        }
        case contactsActions.CONTACTS_SHOW_ACTIVE_ONLY: {
            return {
                ...state,
                contacts: [...state.contacts],
                selectedContact: state.selectedContact
            };
        }
        case contactsActions.CONTACTS_SHOW_ACTIVE_ONLY_SUCCESS: {
            return {
                ...state,
                contacts: [...state.contacts, ...action.payload],
                selectedContact: state.selectedContact
            };
        }
        case contactsActions.LOAD_CONTACT_DETAILS: {
            return {
                ...state,
                contacts: [...state.contacts],
                selectedContact: state.selectedContact
            };
        }
        case contactsActions.LOAD_CONTACT_DETAILS_SUCCESS: {
            return {
                ...state,
                contacts: [...state.contacts],
                selectedContact: action.payload
            };
        }
        default:
            return state;
    }
}
