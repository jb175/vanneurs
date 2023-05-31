package com.isep.vanneur.vanneursapi.dto.Offer;

import lombok.Data;

@Data
public class OfferCreationDTO {
    private Long personFrom;

    private Long personTo;

    private Long announcement;
}
