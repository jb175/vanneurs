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

import com.isep.vanneur.vanneursapi.dto.RequirementList.RequirementListCreationDTO;
import com.isep.vanneur.vanneursapi.model.RequirementList;
import com.isep.vanneur.vanneursapi.service.RequirementListService;

@RestController
@RequestMapping("/requirement-list")
public class RequirementListController {
    @Autowired
    private RequirementListService requirementListService;

    @GetMapping
    public List<RequirementList> getRequirementLists() {
        return requirementListService.getRequirementLists();
    }

    @GetMapping("/{id}")
    public RequirementList getRequirementList(@PathVariable Long id) {
        return requirementListService.getRequirementList(id);
    }

    @PostMapping
    public RequirementList createRequirementList(@RequestBody RequirementListCreationDTO requirementListCreationDTO) {
        return requirementListService.createRequirementList(requirementListCreationDTO);
    }

    @PutMapping("/{id}")
    public RequirementList updateRequirementList(@PathVariable Long id,
            @RequestBody RequirementListCreationDTO requirementListCreationDTO) {
        return requirementListService.updateRequirementList(id, requirementListCreationDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteRequirementList(@PathVariable Long id) {
        requirementListService.deleteRequirementList(id);
    }
}
