package com.artem_esenkov_iu_study.controller;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.artem_esenkov_iu_study.model.Bot;
import com.artem_esenkov_iu_study.service.BotService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class BotController {
    
    private final BotService botService;

    public BotController(BotService botService) {
        this.botService = botService;
    }



    @GetMapping("/bots")
    public List<Bot> getBots() {
        return botService.getAllBots();
    }


    @GetMapping("/bots/{id}")
    public Bot getBotById(@PathVariable Long id) {
        return botService.getBotById(id);
    }


    @PostMapping("/bots")
    public Bot createBot(@RequestBody Bot bot) {
        return botService.createBot(bot);
    }
    

    @DeleteMapping("/bots/{id}")
    public void deleteBot(@PathVariable Long id) {
        botService.deleteBot(id);
    }


    @PutMapping("bots/{id}")
    public Bot updateBot(@PathVariable Long id, @RequestBody Bot bot) {
        return botService.updateBot(id, bot);
    }

}    
