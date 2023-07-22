import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AddEditContactsComponent } from './components/add-edit-contacts/add-edit-contacts.component';
import Swal from 'sweetalert2';
import { Contact } from './contacts.model';
import { Observable, of } from 'rxjs';
import { Contacts } from './contacts.const';
import { ContactsQuery } from './state/query';
import { ContactsStore } from './state/store';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  public contacts$: Observable<Contact[]> = of([])

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private todoQuery: ContactsQuery,
    private todoStore: ContactsStore
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.todoStore.update(state => {
      return {
        ...state,
        contacts: Contacts,
        isLoaded: true,
      };
    })
  
    this.contacts$ = this.todoQuery.getContacts();
  }

  openEditContact(contact: Contact) {
    const modalRef = this.modalService.open(AddEditContactsComponent, { size: 'xl' });
    modalRef.componentInstance.contact = contact;
  }

  deleteContact() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
}
