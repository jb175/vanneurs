package com.isep.vanneur.vanneursapi.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isep.vanneur.vanneursapi.dto.RestrictionList.RestrictionListCreationDTO;
import com.isep.vanneur.vanneursapi.model.RestrictionList;
import com.isep.vanneur.vanneursapi.repository.RestrictionListRepository;

@Service
public class RestrictionListService {
    @Autowired
    private ModelMapper mapper;

    @Autowired
    private RestrictionListRepository restrictionListRepository;

    public List<RestrictionList> getRestrictionLists() {
        return restrictionListRepository.findAll();
    }

    public RestrictionList getRestrictionList(Long id) {
        return restrictionListRepository.findById(id).orElseThrow();
    }

    public RestrictionList createRestrictionList(RestrictionListCreationDTO restrictionListCreationDTO) {
        RestrictionList restrictionList = mapper.map(restrictionListCreationDTO, RestrictionList.class);
        return restrictionListRepository.save(restrictionList);
    }

    public RestrictionList updateRestrictionList(Long id, RestrictionListCreationDTO restrictionListCreationDTO) {
        RestrictionList currentRestrictionList = getRestrictionList(id);
        mapper.map(restrictionListCreationDTO, currentRestrictionList);
        return restrictionListRepository.save(currentRestrictionList);
    }

    public void deleteRestrictionList(Long id) {
        restrictionListRepository.deleteById(id);
    }
}
