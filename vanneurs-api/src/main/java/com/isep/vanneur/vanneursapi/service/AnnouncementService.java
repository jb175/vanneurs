package com.isep.vanneur.vanneursapi.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.Instant;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Comparator;
import java.util.Date;
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

    private final SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");

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

    public List<Announcement> getAnnouncementFiltered(String country, String city, String from, String to,
            String orderBy) {
        Comparator<Announcement> c;
        switch (orderBy) {
            case "Notation":
                c = (announcement0, announcement1) -> (announcement0.getHouse().getAvgRating() > announcement1
                        .getHouse().getAvgRating() ? 1 : -1);
                break;
            case "Date":
                c = new Comparator<Announcement>() {
                    @Override
                    public int compare(Announcement announcement0, Announcement announcement1) {
                        if (announcement0.getStartDate() != null && announcement1.getStartDate() != null) {
                            return announcement0.getStartDate().compareTo(announcement1.getStartDate());
                        } else if (announcement0.getStartDate() != null) {
                            return -1;
                        } else if (announcement1.getStartDate() != null) {
                            return 1;
                        } else {
                            return 0;
                        }
                    };
                };
                break;
            default:
                c = (announcement0, announcement1) -> (announcement0.getHouse().getAddress().getId() > announcement1
                        .getHouse().getAddress().getId() ? 1 : -1);
                break;
        }

        return getAnnouncements().stream()
                .filter(announcement -> announcement.getState() == State.AVAILABLE)
                .filter(announcement -> countryFilter(announcement, country))
                .filter(announcement -> cityFilter(announcement, city))
                .filter(announcement -> fromFilter(announcement, from))
                .filter(announcement -> toFilter(announcement, to))
                .sorted(c)
                .toList();
    }

    private boolean countryFilter(Announcement announcement, String country) {
        return country.equals("") || announcement.getHouse().getAddress().getCountry()
                .toLowerCase().startsWith(country.toLowerCase());
    }

    private boolean cityFilter(Announcement announcement, String city) {
        return city.equals("") || announcement.getHouse().getAddress().getCity()
                .toLowerCase().startsWith(city.toLowerCase());
    }

    private boolean fromFilter(Announcement announcement, String from) {
        try {
            return from.equals("") || announcement.getStartDate() == null
                    || announcement.getStartDate().compareTo(formatter.parse(from)) > 0;
        } catch (ParseException e) {
            e.printStackTrace();
            return true;
        }
    }

    private boolean toFilter(Announcement announcement, String to) {
        try {
            return to.equals("") || (announcement.getEndDate() == null && formatter.parse(to).compareTo(Date.from(Instant.now())) > 0)
                    || announcement.getEndDate().compareTo(formatter.parse(to)) < 0;
        } catch (ParseException e) {
            e.printStackTrace();
            return true;
        }
    }
}
