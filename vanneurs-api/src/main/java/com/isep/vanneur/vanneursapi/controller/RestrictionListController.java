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

import com.isep.vanneur.vanneursapi.dto.RestrictionList.RestrictionListCreationDTO;
import com.isep.vanneur.vanneursapi.model.RestrictionList;
import com.isep.vanneur.vanneursapi.service.RestrictionListService;

@RestController
@RequestMapping("/restriction-list")
public class RestrictionListController {
    @Autowired
    private RestrictionListService restrictionListService;

    @GetMapping
    public List<RestrictionList> getRestrictionLists() {
        return restrictionListService.getRestrictionLists();
    }

    @GetMapping("/{id}")
    public RestrictionList getRestrictionList(@PathVariable Long id) {
        return restrictionListService.getRestrictionList(id);
    }

    @PostMapping
    public RestrictionList createRestrictionList(@RequestBody RestrictionListCreationDTO restrictionListCreationDTO) {
        return restrictionListService.createRestrictionList(restrictionListCreationDTO);
    }

    @PutMapping("/{id}")
    public RestrictionList updateRestrictionList(@PathVariable Long id,
            @RequestBody RestrictionListCreationDTO restrictionListCreationDTO) {
        return restrictionListService.updateRestrictionList(id, restrictionListCreationDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteRestrictionList(@PathVariable Long id) {
        restrictionListService.deleteRestrictionList(id);
    }
}
