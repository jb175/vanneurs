package com.isep.vanneur.vanneursapi.service;

import java.util.List;
import java.util.Objects;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.isep.vanneur.vanneursapi.dto.House.HouseCreationDTO;
import com.isep.vanneur.vanneursapi.model.House;
import com.isep.vanneur.vanneursapi.repository.HouseRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class HouseService {
    @Lazy
    private final AddressService addressService;

    private final ModelMapper mapper;

    private final HouseRepository houseRepository;

    public List<House> getHouses() {
        return houseRepository.findAll();
    }

    public List<House> getHousesFiltered(String country, String city) {
        return getHouses().stream()
        .filter(house -> country.equals("") || Objects.equals(house.getAddress().getCountry(), country))
        .filter(house -> city.equals("") || Objects.equals(house.getAddress().getCity(), city))
        .sorted((house0, house1) -> (house0.getId() > house1.getId() ? 1 : -1))
        .toList();
    }

    public House getHouse(Long id) {
        return houseRepository.findById(id).orElseThrow();
    }

    public House createHouse(HouseCreationDTO houseCreationDTO) {
        House house = mapper.map(houseCreationDTO, House.class);
        house.setAddress(addressService.getAddress(houseCreationDTO.getAddress()));
        return houseRepository.save(house);
    }

    public House updateHouse(Long id, HouseCreationDTO houseCreationDTO) {
        House currentHouse = getHouse(id);
        mapper.map(houseCreationDTO, currentHouse);
        return houseRepository.save(currentHouse);
    }

    public void deleteHouse(Long id) {
        houseRepository.deleteById(id);
    }
}
