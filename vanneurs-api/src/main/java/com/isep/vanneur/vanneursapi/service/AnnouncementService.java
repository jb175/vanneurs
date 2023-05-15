package com.isep.vanneur.vanneursapi.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isep.vanneur.vanneursapi.dto.Announcement.AnnouncementCreationDTO;
import com.isep.vanneur.vanneursapi.model.Announcement;
import com.isep.vanneur.vanneursapi.repository.AnnouncementRepository;

@Service
public class AnnouncementService {
    ModelMapper mapper;

    @Autowired
    private AnnouncementRepository announcementRepository;

    public List<Announcement> getAnnouncements() {
        return announcementRepository.findAll();
    }

    public Announcement getAnnouncement(Long id) {
        return announcementRepository.findById(id).orElseThrow();
    }

    public Announcement createAnnouncement(AnnouncementCreationDTO announcementCreationDTO) {
        Announcement announcement = mapper.map(announcementCreationDTO, Announcement.class);
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
