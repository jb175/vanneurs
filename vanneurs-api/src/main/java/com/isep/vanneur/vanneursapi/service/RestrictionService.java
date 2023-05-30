package com.isep.vanneur.vanneursapi.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.isep.vanneur.vanneursapi.dto.Restriction.RestrictionCreationDTO;
import com.isep.vanneur.vanneursapi.model.Restriction;
import com.isep.vanneur.vanneursapi.repository.RestrictionRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RestrictionService {
    final private ModelMapper mapper;

    final private HouseService houseService;

    final private RestrictionListService restrictionListService;

    final private RestrictionRepository restrictionRepository;

    public List<Restriction> getRestrictions() {
        return restrictionRepository.findAll();
    }

    public Restriction getRestriction(Long id) {
        return restrictionRepository.findById(id).orElseThrow();
    }

    public Restriction getRestrictionByHouse(Long id) {
        return restrictionRepository.findByHouseId(id);
    }

    public Restriction createRestriction(RestrictionCreationDTO restrictionCreationDTO) {
        Restriction restriction = mapper.map(restrictionCreationDTO, Restriction.class);
        restriction.setHouse(houseService.getHouse(restrictionCreationDTO.getHouse()));
        // restriction.setRestrictionList(
        // restrictionListService.getRestrictionList(restrictionCreationDTO.getRestrictionList()));
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
