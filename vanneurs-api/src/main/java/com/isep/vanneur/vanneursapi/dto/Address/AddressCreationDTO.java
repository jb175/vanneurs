package com.isep.vanneur.vanneursapi.dto.Address;

import lombok.Data;

@Data
public class AddressCreationDTO {
    private String number;

    private String street;

    private String zipCode;

    private String city;

    private String country;
}
