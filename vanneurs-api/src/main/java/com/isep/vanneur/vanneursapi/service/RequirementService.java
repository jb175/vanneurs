package com.isep.vanneur.vanneursapi.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.isep.vanneur.vanneursapi.dto.Requirement.RequirementCreationDTO;
import com.isep.vanneur.vanneursapi.model.Requirement;
import com.isep.vanneur.vanneursapi.repository.RequirementRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RequirementService {
    final private ModelMapper mapper;

    final private ExchangeService exchangeService;

    final private RequirementListService requirementListService;

    final private RequirementRepository requirementRepository;

    public List<Requirement> getRequirements() {
        return requirementRepository.findAll();
    }

    public Requirement getRequirement(Long id) {
        return requirementRepository.findById(id).orElseThrow();
    }

    public Requirement createRequirement(RequirementCreationDTO requirementCreationDTO) {
        Requirement requirement = mapper.map(requirementCreationDTO, Requirement.class);
        requirement.setExchange(exchangeService.getExchange(requirementCreationDTO.getExchange()));
        requirement.setRequirementList(
                requirementListService.getRequirementList(requirementCreationDTO.getRequirementList()));
        return requirementRepository.save(requirement);
    }

    public Requirement updateRequirement(Long id, RequirementCreationDTO requirementCreationDTO) {
        Requirement currentRequirement = getRequirement(id);
        mapper.map(requirementCreationDTO, currentRequirement);
        return requirementRepository.save(currentRequirement);
    }

    public void deleteRequirement(Long id) {
        requirementRepository.deleteById(id);
    }
}
