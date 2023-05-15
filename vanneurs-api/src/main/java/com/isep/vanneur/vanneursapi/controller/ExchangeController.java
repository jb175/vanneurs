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

import com.isep.vanneur.vanneursapi.dto.Exchange.ExchangeCreationDTO;
import com.isep.vanneur.vanneursapi.model.Exchange;
import com.isep.vanneur.vanneursapi.service.ExchangeService;

@RestController
@RequestMapping("/exchange")
public class ExchangeController {
    @Autowired
    private ExchangeService exchangeService;

    @GetMapping
    public List<Exchange> getExchanges() {
        return exchangeService.getExchanges();
    }

    @GetMapping("/{id}")
    public Exchange getExchange(@PathVariable Long id) {
        return exchangeService.getExchange(id);
    }

    @PostMapping
    public Exchange createExchange(@RequestBody ExchangeCreationDTO exchangeCreationDTO) {
        return exchangeService.createExchange(exchangeCreationDTO);
    }

    @PutMapping("/{id}")
    public Exchange updateExchange(@PathVariable Long id,
            @RequestBody ExchangeCreationDTO exchangeCreationDTO) {
        return exchangeService.updateExchange(id, exchangeCreationDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteExchange(@PathVariable Long id) {
        exchangeService.deleteExchange(id);
    }
}
