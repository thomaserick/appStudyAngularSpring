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

    this.form.controls.required.errors

    const isValid = this.form.valid
    console.log(this.form.value)
    console.log(isValid)

    // this.contactService.save(contact).subscribe( resp => {
    //   console.log(resp)
    // } )    

  }

}