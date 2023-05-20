package com.isep.vanneur.vanneursapi.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.isep.vanneur.vanneursapi.dto.Exchange.ExchangeCreationDTO;
import com.isep.vanneur.vanneursapi.model.Exchange;
import com.isep.vanneur.vanneursapi.repository.ExchangeRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ExchangeService {
    final private ModelMapper mapper;

    final private HouseService houseService;

    final private ExchangeRepository exchangeRepository;

    public List<Exchange> getExchanges() {
        return exchangeRepository.findAll();
    }

    public Exchange getExchange(Long id) {
        return exchangeRepository.findById(id).orElseThrow();
    }

    public Exchange createExchange(ExchangeCreationDTO exchangeCreationDTO) {
        Exchange exchange = mapper.map(exchangeCreationDTO, Exchange.class);
        exchange.setHouse1(houseService.getHouse(exchangeCreationDTO.getHouse1()));
        exchange.setHouse2(houseService.getHouse(exchangeCreationDTO.getHouse2()));
        return exchangeRepository.save(exchange);
    }

    public Exchange updateExchange(Long id, ExchangeCreationDTO exchangeCreationDTO) {
        Exchange currentExchange = getExchange(id);
        mapper.map(exchangeCreationDTO, currentExchange);
        return exchangeRepository.save(currentExchange);
    }

    public void deleteExchange(Long id) {
        exchangeRepository.deleteById(id);
    }
}
