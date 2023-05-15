package com.isep.vanneur.vanneursapi.model;

import java.sql.Date;

import com.isep.vanneur.vanneursapi.enumList.State;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class Announcement {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date startDate;

    private Date endDate;

    private State state;

    @OneToOne()
    @JoinColumn()
    private Person person;

    @OneToOne()
    @JoinColumn()
    private House house;

    @OneToOne(mappedBy = "announcement")
    private Offer offer;
}
