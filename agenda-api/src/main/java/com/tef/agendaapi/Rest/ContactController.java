package com.tef.agendaapi.Rest;

import com.tef.agendaapi.entity.Contact;
import com.tef.agendaapi.services.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/contacts")
public class ContactController {


    private final ContactService contactService;

    public ContactController(@Autowired ContactService contactService) {
        this.contactService = contactService;
    }


    @PostMapping
    public ResponseEntity<Contact> insert(@RequestBody Contact contact) {
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(contact.getId()).toUri();
        return ResponseEntity.created(uri).body(contactService.insert(contact));

    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> Delete(@PathVariable Integer id) {
        contactService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<Contact>> findAll() {
        List<Contact> contacts = contactService.findAll();
        return ResponseEntity.ok().body(contacts);
    }

    @PatchMapping("{id}/favorite")
    public ResponseEntity<Void> favorite(@PathVariable Integer id, @RequestBody Boolean favorite)
    {
        contactService.favorite(id, favorite);
        return ResponseEntity.noContent().build();
    }

}