package com.isep.vanneur.vanneursapi.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isep.vanneur.vanneursapi.dto.House.HouseCreationDTO;
import com.isep.vanneur.vanneursapi.model.House;
import com.isep.vanneur.vanneursapi.repository.HouseRepository;

@Service
public class HouseService {
    @Autowired
    private ModelMapper mapper;

    @Autowired
    private HouseRepository houseRepository;

    public List<House> getHouses() {
        return houseRepository.findAll();
    }

    public House getHouse(Long id) {
        return houseRepository.findById(id).orElseThrow();
    }

    public House createHouse(HouseCreationDTO houseCreationDTO) {
        House house = mapper.map(houseCreationDTO, House.class);
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
