package com.artem_esenkov_iu_study.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.OneToMany;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "communities")
public class Community {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String telegramLink;
    private String category;
    private String memberCount;
    private String discription;
    private String status;

    public Community() {}

    public Community(Long id, String name, String telegramLink, String category, String memberCount, String discription, String status) {
        
        this.id = id;
        this.name = name;
        this.telegramLink = telegramLink;
        this.category = category;
        this.memberCount = memberCount;
        this.discription = discription;
        this.status = status;

    }



    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getTelegramLink() {
        return telegramLink;
    }

    public String getCategory() {
        return category;
    }

    public String getMemberCount() {
        return memberCount;
    }

    public String getDiscription() {
        return discription;
    }

    public String getStatus() {
        return status;
    }



    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setTelegramLink(String teleString) {
        this.telegramLink = teleString;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setMemberCount (String memberCount) {
        this.memberCount = memberCount;
    }

    public void setDiscription(String discription) {
        this.discription = discription;
    }

    public void setStatus(String status) {
        this.status = status;
    }



    @OneToMany(mappedBy = "community")
    @JsonManagedReference
    private List<Bot> bots;


    public List<Bot> getBots() {
        return bots;
    }

    public void setBots(List<Bot> bots) {
        this.bots = bots;
    }

}
