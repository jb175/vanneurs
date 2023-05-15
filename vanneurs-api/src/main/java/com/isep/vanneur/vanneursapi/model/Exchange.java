package com.isep.vanneur.vanneursapi.model;

import java.sql.Date;
import java.util.Collection;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class Exchange {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date startDate;

    private Date endDate;

    private int rating;

    @ManyToOne()
    @JoinColumn()
    private House house1;

    @ManyToOne()
    @JoinColumn()
    private House house2;

    @OneToMany(mappedBy = "exchange")
    private Collection<Requirement> requirements;
}
