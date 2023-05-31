package com.isep.vanneur.vanneursapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.isep.vanneur.vanneursapi.model.Announcement;

public interface AnnouncementRepository extends JpaRepository<Announcement, Long> {
    Announcement findByHouseId(Long id);
}
