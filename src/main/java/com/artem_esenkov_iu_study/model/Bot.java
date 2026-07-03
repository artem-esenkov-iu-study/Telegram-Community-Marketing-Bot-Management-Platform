package com.artem_esenkov_iu_study.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "bots")
public class Bot {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String type;
    private String telegramUsername;
    private String description;
    private String status;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String botToken;

    public Bot() {}

    public Bot(Long id, String name, String type, String telegramUsername, String description, String status) {

        this.id = id;
        this.name = name;
        this.type = type;
        this.telegramUsername = telegramUsername;
        this.description = description;
        this.status = status;

    }
    


    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public String getTelegramUsername() {
        return telegramUsername;
    }
    
    public String getDescription() {
        return description;
    }

    public String getStatus() {
        return status;
    }

    public String getBotToken() {
        return botToken;
    }



    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setTelegramUsername(String telegramUsername) {
        this.telegramUsername = telegramUsername;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setBotToken(String botToken) {
        this.botToken = botToken;
    }



    @ManyToOne
    @JoinColumn(name = "community_id")
    @JsonIgnoreProperties("bots")
    private Community community;


    public Community getCommunity() {
        return community;
    }

    public void setCommunity(Community community) {
         this.community = community;
    }

}
