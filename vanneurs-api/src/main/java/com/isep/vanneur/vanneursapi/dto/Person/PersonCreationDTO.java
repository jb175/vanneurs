package com.isep.vanneur.vanneursapi.dto.Person;

import com.isep.vanneur.vanneursapi.enumList.Role;

import lombok.Data;

@Data
public class PersonCreationDTO {
    private Role role;

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    private String phoneNumber;

    private String photoPath;

    private Long house;
}
