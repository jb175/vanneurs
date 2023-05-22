package com.isep.vanneur.vanneursapi.dto.Login;

import com.isep.vanneur.vanneursapi.model.Person;

import lombok.Data;

@Data
public class ReturnLoginDTO {
    Person person;
    Boolean authorized;
}