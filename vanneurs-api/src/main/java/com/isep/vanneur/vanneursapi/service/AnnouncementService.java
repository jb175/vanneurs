package com.isep.vanneur.vanneursapi.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

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

    public Announcement getAnnouncementByHouse(Long id) {
        return announcementRepository.findByHouseId(id);
    }

    public Announcement getAnnouncementInProgress(Long id) {
        Date currentDate = new Date();
        Announcement announcement = announcementRepository
                .findByHouseIdAndStartDateLessThanEqualAndEndDateGreaterThanEqual(id, currentDate,
                        currentDate);

        if (announcement == null) {
            // Return a placeholder or an empty object instead of null
            announcement = new Announcement();
        }
        return announcement;
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
}
