package com.isep.vanneur.vanneursapi.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.isep.vanneur.vanneursapi.dto.Announcement.AnnouncementCreationDTO;
import com.isep.vanneur.vanneursapi.model.Announcement;
import com.isep.vanneur.vanneursapi.repository.AnnouncementRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AnnouncementService {
    final private ModelMapper mapper;

    final private PersonService personService;

    final private HouseService houseService;

    final private AnnouncementRepository announcementRepository;

    public List<Announcement> getAnnouncements() {
        return announcementRepository.findAll();
    }

    public Announcement getAnnouncement(Long id) {
        return announcementRepository.findById(id).orElseThrow();
    }

    public Announcement createAnnouncement(AnnouncementCreationDTO announcementCreationDTO) {
        Announcement announcement = mapper.map(announcementCreationDTO, Announcement.class);
        announcement.setPerson(personService.getPerson(announcementCreationDTO.getPerson()));
        announcement.setHouse(houseService.getHouse(announcementCreationDTO.getHouse()));
        return announcementRepository.save(announcement);
    }

    public Announcement updateAnnouncement(Long id, AnnouncementCreationDTO announcementCreationDTO) {
        Announcement currentAnnouncement = getAnnouncement(id);
        mapper.map(announcementCreationDTO, currentAnnouncement);
        return announcementRepository.save(currentAnnouncement);
    }

    public void deleteAnnouncement(Long id) {
        announcementRepository.deleteById(id);
    }
}
