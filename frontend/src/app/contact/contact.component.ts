import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from './contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  contacts: Contact[] = [];
  columnsToDisplay = ['id', 'name', 'email', 'favorite']

  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder) { }

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
      this.contacts.push(resp);
      console.log(resp)
    })

  }

}
