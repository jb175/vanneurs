package com.isep.vanneur.vanneursapi.controller;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.PatchExchange;

import com.isep.vanneur.vanneursapi.dto.Announcement.AnnouncementCreationDTO;
import com.isep.vanneur.vanneursapi.model.Announcement;
import com.isep.vanneur.vanneursapi.service.AnnouncementService;

@RestController
@RequestMapping("/announcement")
public class AnnouncementController {
    @Autowired
    private AnnouncementService announcementService;

    @GetMapping
    public List<Announcement> getAnnouncements() {
        return announcementService.getAnnouncements();
    }

    @GetMapping("/{id}")
    public Announcement getAnnouncement(@PathVariable Long id) {
        return announcementService.getAnnouncement(id);
    }

    @GetMapping("/house/{id}")
    public Announcement getAnnouncementByHouse(@PathVariable Long id) {
        return announcementService.getAnnouncementByHouse(id);
    }

    @GetMapping("/in-progress/{id}")
    public Announcement getAnnouncementInProgress(@PathVariable Long id) {
        return announcementService.getAnnouncementInProgress(id);
    }

    @GetMapping("/search")
    public List<Announcement> getAnnouncementFiltered(
            @Param(value = "country") String country,
            @Param(value = "city") String city,
            @Param(value = "from") String from,
            @Param(value = "to") String to,
            @Param(value = "orderBy") String orderBy) {
        return announcementService.getAnnouncementFiltered(country, city, from, to, orderBy);
    }

    @PostMapping
    public Announcement createAnnouncement(@RequestBody AnnouncementCreationDTO announcementCreationDTO) {
        return announcementService.createAnnouncement(announcementCreationDTO);
    }

    @PutMapping("/{id}")
    public Announcement updateAnnouncement(@PathVariable Long id,
            @RequestBody AnnouncementCreationDTO announcementCreationDTO) {
        return announcementService.updateAnnouncement(id, announcementCreationDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteAnnouncement(@PathVariable Long id) {
        announcementService.deleteAnnouncement(id);
    }
}
