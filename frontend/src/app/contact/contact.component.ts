import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private contactService: ContactService
    ) { }

  ngOnInit(): void {
    const contact: Contact = new Contact();
    contact.name = 'Thomas Erick';
    contact.email =  'thominhaserick@gmail.com';
    contact.favorite = true;

    this.contactService.save(contact).subscribe( resp => {
      console.log(resp)
    } )
    
    
    
  }

}
