package com.tef.agendaapi.services;

import com.tef.agendaapi.Repository.ContactRepository;
import com.tef.agendaapi.entity.Contact;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.servlet.http.Part;
import java.io.IOException;
import java.io.InputStream;
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

    public void favorite(Integer id) {
        Optional<Contact> contact = contactRepository.findById(id);
        contact.ifPresent(c -> {
            Boolean favorite = c.getFavorite() == Boolean.TRUE;
            c.setFavorite(!favorite);
            contactRepository.save(c);
        });
    }

    public byte[] insertPhoto(Integer id, Part file) {

        Optional<Contact> contac = contactRepository.findById(id);
        byte[] bytes = convertPartFileToBytes(file);

        contac.ifPresent(c -> {
            c.setPhoto(bytes);
            contactRepository.save(c);
        });

        return bytes;
    }

    public byte[] convertPartFileToBytes(Part file) {

        try (InputStream is = file.getInputStream()) {
            byte[] bytes = new byte[(int) file.getSize()];
            IOUtils.readFully(is, bytes);
            is.close();
            return bytes;

        } catch (IOException e) {
            return null;
        }

    }

    public Page<Contact> findPage(Integer page, Integer linesPage, String orderBy, String direction) {
        PageRequest pageRequest = PageRequest.of(page, linesPage, Sort.Direction.valueOf(direction), orderBy);
        return contactRepository.findAll(pageRequest);
    }
}
