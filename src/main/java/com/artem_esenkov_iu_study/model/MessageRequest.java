package com.artem_esenkov_iu_study.model;

public class MessageRequest {
    
    private String message;
    private Long botId;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Long getBotId() {
        return botId;
    }

    public void setBotId(Long botId) {
        this.botId = botId;
    }

}
