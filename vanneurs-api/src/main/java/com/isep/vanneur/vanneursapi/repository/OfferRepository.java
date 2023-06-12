package com.isep.vanneur.vanneursapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.isep.vanneur.vanneursapi.enumList.State;
import com.isep.vanneur.vanneursapi.model.Offer;

public interface OfferRepository extends JpaRepository<Offer, Long> {
    List<Offer> findByPersonToIdAndStateNot(Long id, State state);
}
