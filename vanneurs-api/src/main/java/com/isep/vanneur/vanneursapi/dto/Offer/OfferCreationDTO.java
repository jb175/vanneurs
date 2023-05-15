package com.isep.vanneur.vanneursapi.dto.Offer;

import com.isep.vanneur.vanneursapi.enumList.State;

import lombok.Data;

@Data
public class OfferCreationDTO {
    private State state;

    private Long person;

    private Long announcement;
}
