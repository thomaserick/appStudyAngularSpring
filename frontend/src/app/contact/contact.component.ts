import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from './contact';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  contacts:Contact[]=[];

  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder    ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name:['', Validators.required],
      email:['', [Validators.email, Validators.required]]

    })
  }


  submit(){
 
  const formValues = this.form.value;
  const contact: Contact = new Contact(formValues.name,formValues.email);

  this.contactService.save(contact).subscribe( resp => {
      this.contacts.push(resp);
      console.log(resp)
     } )    

  }

}
