package com.artem_esenkov_iu_study.controller;

import com.artem_esenkov_iu_study.Telegram.TelegramService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class TelegramController {
    
    private final TelegramService telegramService;
    
    public TelegramController(TelegramService telegramService) {
        this.telegramService = telegramService;
    }

    @GetMapping("/api/telegram/test")
    public String sendTestMessage() {
        telegramService.sendMessage("8576943559:AAEum0oyTvUHTWfGgSHzr_zGM2CjblF4Jg0", "-1004419434905", "Hello from Spring");
        return "Message sent";
    }
    

}
