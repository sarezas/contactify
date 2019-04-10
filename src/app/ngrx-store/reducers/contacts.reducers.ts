import { Action } from '@ngrx/store';
import * as contactsActions from '../actions/contacts.actions';
import { ContactsState } from '../../interfaces/contacts.state';

export type Action = contactsActions.Actions;

const initialState: ContactsState = {
    contacts: [],
    selectedContact: null,
    sortedAZ: null,
    sortedZA: null
};

export function ContactsReducer(state = initialState, action: contactsActions.Actions): ContactsState {
    switch (action.type) {
        case contactsActions.GET_CONTACTS: {
            return {
                ...state,
                contacts: [...state.contacts],
                selectedContact: state.selectedContact,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA
            };
        }
        case contactsActions.GET_CONTACTS_SUCCESS: {
            return {
                ...state,
                contacts: action.payload,
                selectedContact: state.selectedContact,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA
            };
        }
        case contactsActions.CONTACTS_SORT_A_Z: {
            return {
                ...state,
                contacts: [...state.contacts],
                selectedContact: state.selectedContact,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA
            };
        }
        case contactsActions.CONTACTS_SORT_A_Z_SUCCESS: {
            return {
                ...state,
                contacts: action.payload.contactsArr,
                selectedContact: state.selectedContact,
                sortedAZ: action.payload.sortedAZ,
                sortedZA: action.payload.sortedZA
            };
        }
        case contactsActions.CONTACTS_SORT_Z_A: {
            return {
                ...state,
                contacts: [...state.contacts],
                selectedContact: state.selectedContact,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA
            };
        }
        case contactsActions.CONTACTS_SORT_Z_A_SUCCESS: {
            return {
                ...state,
                contacts: action.payload.contactsArr,
                selectedContact: state.selectedContact,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA
            };
        }
        case contactsActions.CONTACTS_FILTER_BY_NAME: {
            return {
                ...state,
                contacts: [...state.contacts],
                selectedContact: state.selectedContact,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA
            };
        }
        case contactsActions.CONTACTS_FILTER_BY_NAME_SUCCESS: {
            return {
                ...state,
                contacts: action.payload,
                selectedContact: state.selectedContact,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA
            };
        }
        case contactsActions.CONTACTS_FILTER_BY_CITY: {
            return {
                ...state,
                contacts: [...state.contacts],
                selectedContact: state.selectedContact,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA
            };
        }
        case contactsActions.CONTACTS_FILTER_BY_CITY_SUCCESS: {
            return {
                ...state,
                contacts: action.payload,
                selectedContact: state.selectedContact,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA
            };
        }
        case contactsActions.CONTACTS_SHOW_ACTIVE_ONLY: {
            return {
                ...state,
                contacts: [...state.contacts],
                selectedContact: state.selectedContact,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA
            };
        }
        case contactsActions.CONTACTS_SHOW_ACTIVE_ONLY_SUCCESS: {
            return {
                ...state,
                contacts: action.payload,
                selectedContact: state.selectedContact,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA
            };
        }
        // case contactsActions.LOAD_CONTACT_DETAILS: {
        //     return {
        //         ...state,
        //         contacts: [...state.contacts],
        //         selectedContact: action.payload,
        //         sortedAZ: state.sortedAZ,
        //         sortedZA: state.sortedZA
        //     };
        // }
        case contactsActions.LOAD_SELECTED_CONTACT: {
            return {
                ...state,
                contacts: [...state.contacts],
                selectedContact: action.payload,
                sortedAZ: state.sortedAZ,
                sortedZA: state.sortedZA
            };
        }
        default:
            return state;
    }
}
