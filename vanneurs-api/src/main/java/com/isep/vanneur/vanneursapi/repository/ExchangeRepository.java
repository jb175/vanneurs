package com.isep.vanneur.vanneursapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.isep.vanneur.vanneursapi.model.Exchange;

public interface ExchangeRepository extends JpaRepository<Exchange, Long> {

}
