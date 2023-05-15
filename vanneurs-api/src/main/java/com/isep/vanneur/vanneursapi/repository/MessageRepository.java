package com.isep.vanneur.vanneursapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.isep.vanneur.vanneursapi.model.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {

}
