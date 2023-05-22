package com.isep.vanneur.vanneursapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.isep.vanneur.vanneursapi.model.Person;

public interface PersonRepository extends JpaRepository<Person, Long> {
    Person findByEmail(String email);

    Boolean existsByEmail(String email);
}
