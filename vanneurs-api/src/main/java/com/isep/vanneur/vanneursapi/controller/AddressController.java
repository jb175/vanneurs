package com.isep.vanneur.vanneursapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isep.vanneur.vanneursapi.dto.Address.AddressCreationDTO;
import com.isep.vanneur.vanneursapi.model.Address;
import com.isep.vanneur.vanneursapi.service.AddressService;

@RestController
@RequestMapping("/address")
public class AddressController {
    @Autowired
    private AddressService addressService;

    @GetMapping
    public List<Address> getAddresses() {
        return addressService.getAddresses();
    }

    @GetMapping("/{id}")
    public Address getAddress(@PathVariable Long id) {
        return addressService.getAddress(id);
    }

    @PostMapping
    public Address createAddress(@RequestBody AddressCreationDTO addressCreationDTO) {
        return addressService.createAddress(addressCreationDTO);
    }

    @PutMapping("/{id}")
    public Address updateAddress(@PathVariable Long id, @RequestBody AddressCreationDTO addressCreationDTO) {
        return addressService.updateAddress(id, addressCreationDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteAddress(@PathVariable Long id) {
        addressService.deleteAddress(id);
    }
}
