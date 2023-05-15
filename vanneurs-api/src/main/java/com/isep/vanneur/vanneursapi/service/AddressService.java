package com.isep.vanneur.vanneursapi.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isep.vanneur.vanneursapi.dto.Address.AddressCreationDTO;
import com.isep.vanneur.vanneursapi.model.Address;
import com.isep.vanneur.vanneursapi.repository.AddressRepository;

@Service
public class AddressService {
    @Autowired
    private ModelMapper mapper;

    @Autowired
    private AddressRepository addressRepository;

    public List<Address> getAddresses() {
        return addressRepository.findAll();
    }

    public Address getAddress(Long id) {
        return addressRepository.findById(id).orElseThrow();
    }

    public Address createAddress(AddressCreationDTO addressCreationDTO) {
        Address address = mapper.map(addressCreationDTO, Address.class);
        return addressRepository.save(address);
    }

    public Address updateAddress(Long id, AddressCreationDTO addressCreationDTO) {
        Address currentAddress = getAddress(id);
        mapper.map(addressCreationDTO, currentAddress);
        return addressRepository.save(currentAddress);
    }

    public void deleteAddress(Long id) {
        addressRepository.deleteById(id);
    }
}
