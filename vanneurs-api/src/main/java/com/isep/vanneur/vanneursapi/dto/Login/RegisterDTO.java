package com.isep.vanneur.vanneursapi.dto.Login;

import com.isep.vanneur.vanneursapi.enumList.Role;

import lombok.Data;

@Data
public class RegisterDTO {
    private Role role;

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    private String phoneNumber;
}
