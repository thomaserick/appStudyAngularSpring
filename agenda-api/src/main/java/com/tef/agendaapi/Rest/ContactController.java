package com.tef.agendaapi.Rest;

import com.tef.agendaapi.entity.Contact;
import com.tef.agendaapi.services.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.Part;
import java.net.URI;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins = "*")
public class ContactController {


    private final ContactService contactService;

    public ContactController(@Autowired ContactService contactService) {
        this.contactService = contactService;
    }


    @PostMapping()
    public ResponseEntity<Contact> insert(@RequestBody Contact contact) {
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(contact.getId()).toUri();
        return ResponseEntity.created(uri).body(contactService.insert(contact));

    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> Delete(@PathVariable Integer id) {
        contactService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

//    @GetMapping
//        public ResponseEntity<List<Contact>> findAll() {
//            List<Contact> contacts = contactService.findAll();
//            return ResponseEntity.ok().body(contacts);
//    }

    @GetMapping
    public ResponseEntity<Page<Contact>> findPage(
            @RequestParam(value = "page", defaultValue = "0") Integer page,
            @RequestParam(value = "linesPage", defaultValue = "10") Integer linesPage,
            @RequestParam(value = "orderBy", defaultValue = "name") String orderBy,
            @RequestParam(value = "direction", defaultValue = "ASC") String direction
    ) {

        Page<Contact> list = contactService.findPage(page,linesPage,orderBy,direction);

        return ResponseEntity.ok().body(list);
    }

    @PatchMapping("{id}/favorite")
    public ResponseEntity<Void> favorite(@PathVariable Integer id)
    {
        contactService.favorite(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("{id}/photo")
    public ResponseEntity<byte[]> insertPhoto(@PathVariable Integer id,
                            @RequestParam("photo") Part file)
    {
        return ResponseEntity.ok().body(contactService.insertPhoto(id,file));
    }

}
