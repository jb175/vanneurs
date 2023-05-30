package com.isep.vanneur.vanneursapi.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.isep.vanneur.vanneursapi.dto.Person.PersonUpdateHouseDTO;
import com.isep.vanneur.vanneursapi.model.Person;
import com.isep.vanneur.vanneursapi.repository.PersonRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PersonService {
    final private ModelMapper mapper;

    final private HouseService houseService;

    final private PersonRepository personRepository;

    public List<Person> getPeople() {
        return personRepository.findAll();
    }

    public Person getPerson(Long id) {
        return personRepository.findById(id).orElseThrow();
    }

    public Person createPerson(PersonUpdateHouseDTO personUpdateHouseDTO) {
        Person person = mapper.map(personUpdateHouseDTO, Person.class);
        person.setHouse(houseService.getHouse(personUpdateHouseDTO.getHouse()));
        return personRepository.save(person);
    }

    public Person updatePerson(Long id, PersonUpdateHouseDTO personUpdateHouseDTO) {
        Person person = getPerson(id);
        mapper.map(personUpdateHouseDTO, person);
        person.setHouse(houseService.getHouse(personUpdateHouseDTO.getHouse()));
        return personRepository.save(person);
    }

    public void deletePerson(Long id) {
        personRepository.deleteById(id);
    }
}
