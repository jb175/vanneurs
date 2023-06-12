package com.isep.vanneur.vanneursapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isep.vanneur.vanneursapi.dto.House.HouseCreationDTO;
import com.isep.vanneur.vanneursapi.model.House;
import com.isep.vanneur.vanneursapi.service.HouseService;

@RestController
@RequestMapping("/house")
public class HouseController {
    @Autowired
    private HouseService houseService;

    @GetMapping
    public List<House> getHouses() {
        return houseService.getHouses();
    }

    @GetMapping("/search")
    public List<House> getHousesFiltered(@Param(value = "country") String country, @Param(value = "city") String city) {
        return houseService.getHousesFiltered(country, city);
    }

    @GetMapping("/{id}")
    public House getHouse(@PathVariable Long id) {
        return houseService.getHouse(id);
    }

    @PostMapping
    public House createHouse(@RequestBody HouseCreationDTO houseCreationDTO) {
        return houseService.createHouse(houseCreationDTO);
    }

    @PutMapping("/{id}")
    public House updateHouse(@PathVariable Long id,
            @RequestBody HouseCreationDTO houseCreationDTO) {
        return houseService.updateHouse(id, houseCreationDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteHouse(@PathVariable Long id) {
        houseService.deleteHouse(id);
    }
}
