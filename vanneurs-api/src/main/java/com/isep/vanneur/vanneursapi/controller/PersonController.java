package com.isep.vanneur.vanneursapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isep.vanneur.vanneursapi.dto.Person.PersonUpdateHouseDTO;
import com.isep.vanneur.vanneursapi.model.Person;
import com.isep.vanneur.vanneursapi.service.PersonService;

@RestController
@RequestMapping("/person")
public class PersonController {
    @Autowired
    private PersonService personService;

    @GetMapping
    public List<Person> getPeople() {
        return personService.getPeople();
    }

    @GetMapping("/{id}")
    public Person getPerson(@PathVariable Long id) {
        return personService.getPerson(id);
    }

    @PostMapping
    public Person createPerson(@RequestBody PersonUpdateHouseDTO personUpdateHouseDTO) {
        return personService.createPerson(personUpdateHouseDTO);
    }

    @PutMapping("/{id}")
    public Person updatePerson(@PathVariable Long id,
            @RequestBody PersonUpdateHouseDTO personUpdateHouseDTO) {
        return personService.updatePerson(id, personUpdateHouseDTO);
    }

    @DeleteMapping("/{id}")
    public void deletePerson(@PathVariable Long id) {
        personService.deletePerson(id);
    }
}
