package com.isep.vanneur.vanneursapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.isep.vanneur.vanneursapi.model.Requirement;

public interface RequirementRepository extends JpaRepository<Requirement, Long> {

}
