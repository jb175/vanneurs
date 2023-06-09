package com.isep.vanneur.vanneursapi.model;

import java.util.Collection;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
public class House {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String photoPath;

    private String description;

    private float avgRating;

    private int numberRating;

    @OneToOne()
    @JoinColumn()
    private Address address;

    @OneToMany(mappedBy = "house1")
    @JsonIgnore
    private Collection<Exchange> exchanges1;

    @OneToMany(mappedBy = "house2")
    @JsonIgnore
    private Collection<Exchange> exchanges2;

    @JsonIgnore
    @OneToMany(mappedBy = "house")
    private Collection<Restriction> restrictions;

    // @OneToOne(mappedBy = "house")
    // private Person person;

    // @OneToOne(mappedBy = "house")
    // private Announcement announcement;
}
