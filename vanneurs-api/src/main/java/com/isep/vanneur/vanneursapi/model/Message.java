package com.isep.vanneur.vanneursapi.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date sendDate;

    private String value;

    @ManyToOne()
    @JoinColumn()
    private Offer offer;

    @ManyToOne()
    @JoinColumn()
    private Person sender;
}
