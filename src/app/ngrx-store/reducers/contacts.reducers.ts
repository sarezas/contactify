import { Action } from '@ngrx/store';
import * as contactsActions from '../actions/contacts.actions';
import { ContactsState } from '../../interfaces/contacts.state';

export type Action = contactsActions.Actions;

const initialState: ContactsState = {
    contacts: [],
    selectedContact: null,
    sortedAZ: false,
    sortedZA: false,
    loading: false,
    contactLoaded: false
};

export function ContactsReducer(state = initialState, action: contactsActions.Actions): ContactsState {
    switch (action.type) {
        case contactsActions.GET_ALL_CONTACTS: {
            return {
                ...state,
                contacts: state.contacts,
                selectedContact: state.selectedContact,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA,
                loading: state.loading
            };
        }
        case contactsActions.GET_ALL_CONTACTS_SUCCESS: {
            return {
                ...state,
                contacts: action.payload,
                selectedContact: state.selectedContact,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA,
                loading: state.loading
            };
        }
        case contactsActions.SORT_A_Z: {
            return {
                ...state,
                contacts: state.contacts,
                selectedContact: state.selectedContact,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA,
                loading: state.loading
            };
        }
        case contactsActions.SORT_A_Z_SUCCESS: {
            return {
                ...state,
                contacts: state.contacts,
                selectedContact: state.selectedContact,
                sortedAZ: action.payload.sortedAZ,
                sortedZA: action.payload.sortedZA,
                loading: state.loading
            };
        }
        case contactsActions.SORT_Z_A: {
            return {
                ...state,
                contacts: state.contacts,
                selectedContact: state.selectedContact,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA,
                loading: state.loading
            };
        }
        case contactsActions.SORT_Z_A_SUCCESS: {
            return {
                ...state,
                contacts: state.contacts,
                selectedContact: state.selectedContact,
                sortedAZ: action.payload.sortedAZ,
                sortedZA: action.payload.sortedZA,
                loading: state.loading
            };
        }
        case contactsActions.FILTER_BY_NAME: {
            return {
                ...state,
                contacts: state.contacts,
                selectedContact: state.selectedContact,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA,
                loading: state.loading
            };
        }
        case contactsActions.FILTER_BY_NAME_SUCCESS: {
            return {
                ...state,
                contacts: action.payload,
                selectedContact: state.selectedContact,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA,
                loading: state.loading
            };
        }
        case contactsActions.FILTER_BY_CITY: {
            return {
                ...state,
                contacts: state.contacts,
                selectedContact: state.selectedContact,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA,
                loading: state.loading
            };
        }
        case contactsActions.FILTER_BY_CITY_SUCCESS: {
            return {
                ...state,
                contacts: action.payload,
                selectedContact: state.selectedContact,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA,
                loading: state.loading
            };
        }
        case contactsActions.SHOW_ACTIVE_ONLY: {
            return {
                ...state,
                contacts: state.contacts,
                selectedContact: state.selectedContact,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA,
                loading: state.loading
            };
        }
        case contactsActions.SHOW_ACTIVE_ONLY_SUCCESS: {
            return {
                ...state,
                contacts: action.payload,
                selectedContact: state.selectedContact,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA,
                loading: state.loading
            };
        }
        case contactsActions.LOAD_SELECTED: {
            return {
                ...state,
                contacts: state.contacts,
                selectedContact: state.selectedContact,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA,
                loading: true,
                contactLoaded: false
            };
        }
        case contactsActions.LOAD_SELECTED_SUCCESS: {
            return {
                ...state,
                contacts: state.contacts,
                selectedContact: action.payload,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA,
                loading: false,
                contactLoaded: true
            };
        }
        default:
            return state;
    }
}
