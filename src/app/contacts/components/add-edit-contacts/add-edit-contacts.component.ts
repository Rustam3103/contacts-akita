import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Contact } from '../../contacts.model';

@Component({
  selector: 'app-add-edit-contacts',
  templateUrl: './add-edit-contacts.component.html',
  styleUrls: ['./add-edit-contacts.component.scss']
})
export class AddEditContactsComponent implements OnInit {
  @Input() contact!: Contact;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal) {

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
    if(this.contact){
      this.patchFormValues();
    }
  }

  private patchFormValues() {
    this.form.patchValue(this.contact);
  }


}
