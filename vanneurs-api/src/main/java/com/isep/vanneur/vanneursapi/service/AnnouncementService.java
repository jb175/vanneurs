package com.isep.vanneur.vanneursapi.service;

import java.util.List;
import java.util.Objects;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.isep.vanneur.vanneursapi.dto.Announcement.AnnouncementCreationDTO;
import com.isep.vanneur.vanneursapi.enumList.State;
import com.isep.vanneur.vanneursapi.model.Announcement;
import com.isep.vanneur.vanneursapi.repository.AnnouncementRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AnnouncementService {
    private final ModelMapper mapper;

    private final PersonService personService;

    private final HouseService houseService;

    private final AnnouncementRepository announcementRepository;

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
        announcement.setState(State.AVAILABLE);
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

    public List<Announcement> getAnnouncementFiltered(String country, String city) {
        return getAnnouncements().stream()
            .filter(announcement -> country.equals("") || Objects.equals(announcement.getHouse().getAddress().getCountry(), country))
            .filter(announcement -> city.equals("") || Objects.equals(announcement.getHouse().getAddress().getCity(), city))
            .sorted((announcement0, announcement1) -> (announcement0.getHouse().getAddress().getId() > announcement1.getHouse().getAddress().getId() ? 1 : -1))
            .toList();
    }
}
