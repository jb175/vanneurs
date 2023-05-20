package com.isep.vanneur.vanneursapi.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.isep.vanneur.vanneursapi.dto.Offer.OfferCreationDTO;
import com.isep.vanneur.vanneursapi.model.Offer;
import com.isep.vanneur.vanneursapi.repository.OfferRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OfferService {
    final private ModelMapper mapper;

    final private PersonService personService;

    final private AnnouncementService announcementService;

    final private OfferRepository offerRepository;

    public List<Offer> getOffers() {
        return offerRepository.findAll();
    }

    public Offer getOffer(Long id) {
        return offerRepository.findById(id).orElseThrow();
    }

    public Offer createOffer(OfferCreationDTO offerCreationDTO) {
        Offer offer = mapper.map(offerCreationDTO, Offer.class);
        offer.setPerson(personService.getPerson(offerCreationDTO.getPerson()));
        offer.setAnnouncement(announcementService.getAnnouncement(offerCreationDTO.getAnnouncement()));
        return offerRepository.save(offer);
    }

    public Offer updateOffer(Long id, OfferCreationDTO offerCreationDTO) {
        Offer currentOffer = getOffer(id);
        mapper.map(offerCreationDTO, currentOffer);
        return offerRepository.save(currentOffer);
    }

    public void deleteOffer(Long id) {
        offerRepository.deleteById(id);
    }
}
