package com.isep.vanneur.vanneursapi.dto.Announcement;

import java.sql.Date;

import com.isep.vanneur.vanneursapi.enumList.State;

import lombok.Data;

@Data
public class AnnouncementCreationDTO {
    private Date startDate;

    private Date endDate;

    private Long person;

    private Long house;
}
