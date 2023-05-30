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

import com.isep.vanneur.vanneursapi.dto.Restriction.RestrictionCreationDTO;
import com.isep.vanneur.vanneursapi.model.Restriction;
import com.isep.vanneur.vanneursapi.service.RestrictionService;

@RestController
@RequestMapping("/restriction")
public class RestrictionController {
    @Autowired
    private RestrictionService restrictionService;

    @GetMapping
    public List<Restriction> getRestrictions() {
        return restrictionService.getRestrictions();
    }

    @GetMapping("/{id}")
    public Restriction getRestriction(@PathVariable Long id) {
        return restrictionService.getRestriction(id);
    }

    @GetMapping("/house/{id}")
    public Restriction getRestrictionByHouse(@PathVariable Long id) {
        return restrictionService.getRestrictionByHouse(id);
    }

    @PostMapping
    public Restriction createRestriction(@RequestBody RestrictionCreationDTO restrictionCreationDTO) {
        return restrictionService.createRestriction(restrictionCreationDTO);
    }

    @PutMapping("/{id}")
    public Restriction updateRestriction(@PathVariable Long id,
            @RequestBody RestrictionCreationDTO restrictionCreationDTO) {
        return restrictionService.updateRestriction(id, restrictionCreationDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteRestriction(@PathVariable Long id) {
        restrictionService.deleteRestriction(id);
    }
}
