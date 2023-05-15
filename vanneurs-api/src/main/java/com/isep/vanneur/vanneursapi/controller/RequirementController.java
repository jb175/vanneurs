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

import com.isep.vanneur.vanneursapi.dto.Requirement.RequirementCreationDTO;
import com.isep.vanneur.vanneursapi.model.Requirement;
import com.isep.vanneur.vanneursapi.service.RequirementService;

@RestController
@RequestMapping("/requirement")
public class RequirementController {
    @Autowired
    private RequirementService requirementService;

    @GetMapping
    public List<Requirement> getRequirements() {
        return requirementService.getRequirements();
    }

    @GetMapping("/{id}")
    public Requirement getRequirement(@PathVariable Long id) {
        return requirementService.getRequirement(id);
    }

    @PostMapping
    public Requirement createRequirement(@RequestBody RequirementCreationDTO requirementCreationDTO) {
        return requirementService.createRequirement(requirementCreationDTO);
    }

    @PutMapping("/{id}")
    public Requirement updateRequirement(@PathVariable Long id,
            @RequestBody RequirementCreationDTO requirementCreationDTO) {
        return requirementService.updateRequirement(id, requirementCreationDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteRequirement(@PathVariable Long id) {
        requirementService.deleteRequirement(id);
    }
}
