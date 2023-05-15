package com.isep.vanneur.vanneursapi.dto.Restriction;

import lombok.Data;

@Data
public class RestrictionCreationDTO {
    private String description;

    private Long house;

    private Long restrictionList;
}
