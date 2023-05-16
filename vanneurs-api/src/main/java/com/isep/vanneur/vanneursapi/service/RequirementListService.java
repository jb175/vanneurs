package com.isep.vanneur.vanneursapi.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.isep.vanneur.vanneursapi.dto.RequirementList.RequirementListCreationDTO;
import com.isep.vanneur.vanneursapi.model.RequirementList;
import com.isep.vanneur.vanneursapi.repository.RequirementListRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RequirementListService {
    final private ModelMapper mapper;

    final private RequirementListRepository requirementListRepository;

    public List<RequirementList> getRequirementLists() {
        return requirementListRepository.findAll();
    }

    public RequirementList getRequirementList(Long id) {
        return requirementListRepository.findById(id).orElseThrow();
    }

    public RequirementList createRequirementList(RequirementListCreationDTO requirementListCreationDTO) {
        RequirementList requirementList = mapper.map(requirementListCreationDTO, RequirementList.class);
        return requirementListRepository.save(requirementList);
    }

    public RequirementList updateRequirementList(Long id, RequirementListCreationDTO requirementListCreationDTO) {
        RequirementList currentRequirementList = getRequirementList(id);
        mapper.map(requirementListCreationDTO, currentRequirementList);
        return requirementListRepository.save(currentRequirementList);
    }

    public void deleteRequirementList(Long id) {
        requirementListRepository.deleteById(id);
    }
}
