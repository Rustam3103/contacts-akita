import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-edit-contacts',
  templateUrl: './add-edit-contacts.component.html',
  styleUrls: ['./add-edit-contacts.component.scss']
})
export class AddEditContactsComponent {
  @Input() name: any;

  constructor(public activeModal: NgbActiveModal) { }
}
