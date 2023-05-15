package com.isep.vanneur.vanneursapi.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isep.vanneur.vanneursapi.dto.Restriction.RestrictionCreationDTO;
import com.isep.vanneur.vanneursapi.model.Restriction;
import com.isep.vanneur.vanneursapi.repository.RestrictionRepository;

@Service
public class RestrictionService {
    @Autowired
    private ModelMapper mapper;

    @Autowired
    private RestrictionRepository restrictionRepository;

    public List<Restriction> getRestrictions() {
        return restrictionRepository.findAll();
    }

    public Restriction getRestriction(Long id) {
        return restrictionRepository.findById(id).orElseThrow();
    }

    public Restriction createRestriction(RestrictionCreationDTO restrictionCreationDTO) {
        Restriction restriction = mapper.map(restrictionCreationDTO, Restriction.class);
        return restrictionRepository.save(restriction);
    }

    public Restriction updateRestriction(Long id, RestrictionCreationDTO restrictionCreationDTO) {
        Restriction currentRestriction = getRestriction(id);
        mapper.map(restrictionCreationDTO, currentRestriction);
        return restrictionRepository.save(currentRestriction);
    }

    public void deleteRestriction(Long id) {
        restrictionRepository.deleteById(id);
    }
}
