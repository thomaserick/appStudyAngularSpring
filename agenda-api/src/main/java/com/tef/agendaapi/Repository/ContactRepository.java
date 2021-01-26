package com.tef.agendaapi.Repository;

import com.tef.agendaapi.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Integer> {
}
