package com.isep.vanneur.vanneursapi.dto.House;

import lombok.Data;

@Data
public class HouseCreationDTO {
    private String photoPath;

    private String description;

    private float avgRating;

    private Long address;
}
