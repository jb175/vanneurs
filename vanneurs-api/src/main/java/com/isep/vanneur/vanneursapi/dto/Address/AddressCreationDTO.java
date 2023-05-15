package com.isep.vanneur.vanneursapi.dto.Address;

import lombok.Data;

@Data
public class AddressCreationDTO {
    private int number;

    private String street;

    private int zipCode;

    private String city;

    private String country;
}
