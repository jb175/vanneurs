package com.isep.vanneur.vanneursapi.dto.Message;

import java.sql.Date;

import lombok.Data;

@Data
public class MessageCreationDTO {
    private Date sendDate;

    private String value;

    private Long offer;

    private Long sender;
}
