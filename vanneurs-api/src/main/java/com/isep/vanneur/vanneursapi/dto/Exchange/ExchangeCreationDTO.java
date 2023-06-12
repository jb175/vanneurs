package com.isep.vanneur.vanneursapi.dto.Exchange;

import java.sql.Date;

import lombok.Data;

@Data
public class ExchangeCreationDTO {
    private Date startDate;

    private Date endDate;

    private Long house1;

    private Long house2;
}
