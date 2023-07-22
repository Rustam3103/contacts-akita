import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Contact } from '../../contacts.model';
import { ContactsQuery } from '../../state/query';
import { ContactsState, ContactsStore } from '../../state/store';

@Component({
  selector: 'app-add-edit-contacts',
  templateUrl: './add-edit-contacts.component.html',
  styleUrls: ['./add-edit-contacts.component.scss']
})
export class AddEditContactsComponent implements OnInit {
  @Input() contact!: Contact;
  public form: FormGroup;
  private contactsLength!: number | undefined;

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private todoQuery: ContactsQuery,
    private todoStore: ContactsStore
  ) {

    this.form = fb.group({
      id: null,
      name: null,
      surname: null,
      sex: null,
      email: null,
      phoneNumber: null
    });

  }

  ngOnInit(): void {
    if (this.contact) {
      this.patchFormValues();
    }
  }

  public save(): void {

    if (this.contact) {
      this.todoStore.update((state: ContactsState) => {
        return {
          ...state,
          contacts: [
            ...state.contacts.map((contact: Contact) => {
              if (contact.id === this.form.get('id')?.value) {
                return this.form.value;
              }
              return contact;
            })
          ]
        }
      })

      this.activeModal.close('Close click')

      return;
    }

    this.todoQuery.getContacts().subscribe((contacts: Contact[]) => {
      this.contactsLength = contacts[contacts.length - 1].id;
    })

    this.form.get('id')?.setValue(this.contactsLength ? this.contactsLength + 1 : 1);

    this.todoStore.update((state: ContactsState) => {
      return {
        ...state,
        contacts: [...state.contacts, this.form.value]
      }
    })


    this.activeModal.close('Close click')
  }

  private patchFormValues() {
    this.form.patchValue(this.contact);
  }


}
