package com.tef.agendaapi;

import com.tef.agendaapi.Repository.ContactRepository;
import com.tef.agendaapi.entity.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AgendaApiApplication {

//    @Bean
//    public CommandLineRunner commandLineRunner(@Autowired ContactRepository contactRepository){
//
//        return args -> {
//            Contact contact = new Contact("Thomas","thominhas",true);
//            contactRepository.save(contact);
//
//        };
//
//    }


    public static void main(String[] args) {
        SpringApplication.run(AgendaApiApplication.class, args);
    }

}
