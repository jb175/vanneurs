package com.isep.vanneur.vanneursapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isep.vanneur.vanneursapi.dto.Login.LoginDTO;
import com.isep.vanneur.vanneursapi.dto.Login.RegisterDTO;
import com.isep.vanneur.vanneursapi.dto.Login.ReturnLoginDTO;
import com.isep.vanneur.vanneursapi.model.Person;
import com.isep.vanneur.vanneursapi.service.AuthService;

@RequestMapping("/auth")
@RestController
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ReturnLoginDTO login(@RequestBody LoginDTO loginDTO) {
        return this.authService.login(loginDTO);
    }

    @PostMapping("/register")
    public Person register(@RequestBody RegisterDTO registerDTO) throws Exception {
        return this.authService.register(registerDTO);
    }
}
