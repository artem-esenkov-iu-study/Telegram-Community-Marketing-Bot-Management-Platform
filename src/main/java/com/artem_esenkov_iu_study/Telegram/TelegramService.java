package com.artem_esenkov_iu_study.Telegram;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.client.support.RestTemplateAdapter;
import org.springframework.beans.factory.annotation.Value;
import java.util.HashMap;
import java.util.Map;

@Service
public class TelegramService {
    
    @Autowired
    private RestTemplate restTemplate;

    public void sendMessage(String botToken, String chatId, String text) {

        String url = "https://api.telegram.org/bot" + botToken + "/sendMessage";

        Map<String, Object> request = new HashMap<>();

        request.put("chat_id", chatId);
        request.put("text", text);

        restTemplate.postForObject(url, request, String.class);

    }


    public Integer getChatMemberCount(String botToken, String chatId) {

        String url = "https://api.telegram.org/bot" + botToken + "/getChatMemberCount?chat_id=" + chatId;

        Map response = restTemplate.getForObject(url, Map.class);

        if (response == null || response.get("result") == null) {
            return 0;
        }

        return (Integer) response.get("result");

    }

}
