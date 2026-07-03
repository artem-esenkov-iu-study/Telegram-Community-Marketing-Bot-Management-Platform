package com.artem_esenkov_iu_study.service;

import com.artem_esenkov_iu_study.model.Bot;
import org.springframework.stereotype.Service;
import java.util.List;
import com.artem_esenkov_iu_study.repository.BotRepository;

@Service
public class BotService {

    private final BotRepository botRepository;

    public BotService(BotRepository botRepository) {
        this.botRepository = botRepository;
    }


    public List<Bot> getAllBots() {
        return botRepository.findAll();
    }
    

    public Bot getBotById(Long id) {
        return botRepository.findById(id).orElse(null);
    }


    public Bot createBot(Bot bot) {
        return botRepository.save(bot);
    }


    public void deleteBot(Long id) {
        botRepository.deleteById(id);
    }


    public Bot updateBot(Long id, Bot updatedBot) {

        Bot existingBot = botRepository.findById(id).orElse(null);

        if (existingBot == null) {
            return null;
        }

        existingBot.setName(updatedBot.getName());
        existingBot.setType(updatedBot.getType());
        existingBot.setTelegramUsername(updatedBot.getTelegramUsername());
        existingBot.setDescription(updatedBot.getDescription());
        existingBot.setStatus(updatedBot.getStatus());
        existingBot.setCommunity(updatedBot.getCommunity());
        existingBot.setBotToken(updatedBot.getBotToken());

        return botRepository.save(existingBot);

    }

}
