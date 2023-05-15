package com.isep.vanneur.vanneursapi.dto.Requirement;

import lombok.Data;

@Data
public class RequirementCreationDTO {

    private String description;

    private Long exchange;

    private Long requirementList;
}
