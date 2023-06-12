package com.isep.vanneur.vanneursapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.isep.vanneur.vanneursapi.model.Exchange;

public interface ExchangeRepository extends JpaRepository<Exchange, Long> {
    List<Exchange> findByHouse1IdOrHouse2Id(Long house1Id, Long house2Id);
}
