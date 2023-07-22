import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Contact } from '../contacts.model';
import { ContactsState, ContactsStore } from './store';

@Injectable({
    providedIn: 'root'
})

export class ContactsQuery extends Query<ContactsState> {
    constructor(private contactsStore: ContactsStore) {
        super(contactsStore);
    }

    getContacts(): Observable<Contact[]> {
        return this.select(state => state.contacts);
    }

    getLoaded(): Observable<boolean> {
        return this.select(state => state.isLoaded);
    }
}
