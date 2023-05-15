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

import com.isep.vanneur.vanneursapi.dto.Offer.OfferCreationDTO;
import com.isep.vanneur.vanneursapi.model.Offer;
import com.isep.vanneur.vanneursapi.service.OfferService;

@RestController
@RequestMapping("/offer")
public class OfferController {
    @Autowired
    private OfferService offerService;

    @GetMapping
    public List<Offer> getOffers() {
        return offerService.getOffers();
    }

    @GetMapping("/{id}")
    public Offer getOffer(@PathVariable Long id) {
        return offerService.getOffer(id);
    }

    @PostMapping
    public Offer createOffer(@RequestBody OfferCreationDTO offerCreationDTO) {
        return offerService.createOffer(offerCreationDTO);
    }

    @PutMapping("/{id}")
    public Offer updateOffer(@PathVariable Long id,
            @RequestBody OfferCreationDTO offerCreationDTO) {
        return offerService.updateOffer(id, offerCreationDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteOffer(@PathVariable Long id) {
        offerService.deleteOffer(id);
    }
}
