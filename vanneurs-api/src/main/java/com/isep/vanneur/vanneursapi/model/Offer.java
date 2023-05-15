package com.isep.vanneur.vanneursapi.model;

import java.util.Collection;

import com.isep.vanneur.vanneursapi.enumList.State;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class Offer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private State state;

    @OneToOne()
    @JoinColumn()
    private Person person;

    @OneToOne()
    @JoinColumn()
    private Announcement announcement;

    @OneToMany(mappedBy = "offer")
    private Collection<Message> messages;
}
