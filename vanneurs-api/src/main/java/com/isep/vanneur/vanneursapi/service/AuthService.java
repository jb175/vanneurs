package com.isep.vanneur.vanneursapi.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.isep.vanneur.vanneursapi.dto.Login.LoginDTO;
import com.isep.vanneur.vanneursapi.dto.Login.RegisterDTO;
import com.isep.vanneur.vanneursapi.dto.Login.ReturnLoginDTO;
import com.isep.vanneur.vanneursapi.enumList.Role;
import com.isep.vanneur.vanneursapi.model.Person;
import com.isep.vanneur.vanneursapi.repository.PersonRepository;

import jakarta.persistence.EntityExistsException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
    @Autowired
    private PersonRepository personRepository;

    final private ModelMapper mapper;

    public ReturnLoginDTO login(LoginDTO loginDTO) {
        ReturnLoginDTO responseLoginDto = new ReturnLoginDTO();
        responseLoginDto.setAuthorized(false);
        responseLoginDto.setPerson(new Person());
        try {
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            Person user = personRepository.findByEmail(loginDTO.getEmail());
            if (encoder.matches(loginDTO.getPassword(), user.getPassword())) {
                user.setPassword("");
                responseLoginDto.setPerson(user);
                responseLoginDto.setAuthorized(true);
                return responseLoginDto;
            } else {
                return responseLoginDto;
            }
        } catch (Exception e) {
            return responseLoginDto;
        }
    }

    public Person register(RegisterDTO registerDTO) throws Exception {
        try {
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            if (personRepository.existsByEmail(registerDTO.getEmail())) {
                throw new EntityExistsException("User already exists");
            } else {
                Person user = mapper.map(registerDTO, Person.class);
                user.setRole(Role.MEMBER);
                user.setPassword(encoder.encode(user.getPassword()));
                personRepository.save(user);
                return user;
            }
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}