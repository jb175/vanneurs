package com.isep.vanneur.vanneursapi.model;

import java.util.Collection;

import com.isep.vanneur.vanneursapi.enumList.Role;

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
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Role role;

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    private String phoneNumber;

    private String photoPath;

    @OneToOne()
    @JoinColumn()
    private House house;

    // @OneToOne(mappedBy = "person")
    // private Announcement announcement;

    // @OneToOne(mappedBy = "person")
    // private Offer offer;

    @OneToMany(mappedBy = "sender")
    private Collection<Message> messages;
}
