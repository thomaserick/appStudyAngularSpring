import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from './contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { ContactDetailComponent } from '../contact-detail/contact-detail.component'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  contacts: Contact[] = [];
  columnsToDisplay = ['photo', 'id', 'name', 'email', 'favorite']

  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.setUpForm();
    this.listContacts();

  }

  setUpForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]]

    })
  }

  listContacts() {
    this.contactService.findAll().subscribe(resp => {
      this.contacts = resp;
    })

  }

  favorite(contact: Contact) {
    this.contactService.favorite(contact).subscribe(resp => {
      contact.favorite = !contact.favorite;
    })
  }

  submit() {

    const formValues = this.form.value;
    const contact: Contact = new Contact(formValues.name, formValues.email, false);

    this.contactService.save(contact).subscribe(resp => {
      let listContacts: Contact[] = [...this.contacts, resp]
      this.contacts = listContacts;

    })
  }

  uploadPhoto(event: any, contact: Contact) {
    const files = event.target.files;
    if (files) {
      const photo = files[0];
      const formData = new FormData()
      formData.append("photo", photo);
      this.contactService
        .uploadPhoto(contact, formData)
        .subscribe(resp => this.listContacts())
    }

  }

  viewerContact(contact: Contact) {
    this.matDialog.open(ContactDetailComponent, {
      width: '400px',
      height: '400px',
      data: contact
    })
  }


}
