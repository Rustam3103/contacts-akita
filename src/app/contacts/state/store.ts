import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Contact } from '../contacts.model';

export interface ContactsState {
  contacts: Contact[];
  isLoaded: boolean;
}

export const getInitialState = () => {
  return {
    contacts: [],
    isLoaded: false,
  };
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'contacts' })
export class ContactsStore extends Store<ContactsState> {
  constructor() {
    super(getInitialState());
  }
}
