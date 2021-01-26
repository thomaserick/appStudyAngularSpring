package com.tef.agendaapi.services;

import com.tef.agendaapi.Repository.ContactRepository;
import com.tef.agendaapi.entity.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;


    public Contact insert(Contact contact) {
        return contactRepository.save(contact);
    }

    public void deleteById(Integer id) {
        contactRepository.deleteById(id);
    }

    public List<Contact> findAll() {
        return contactRepository.findAll();
    }

    public void favorite(Integer id, Boolean favorite) {
        Optional<Contact> contact = contactRepository.findById(id);
        contact.ifPresent(c -> {
            c.setFavorite(favorite);
            contactRepository.save(c);
        });
    }
}
