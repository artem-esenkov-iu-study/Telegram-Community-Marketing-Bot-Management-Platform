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
import com.artem_esenkov_iu_study.model.Community;
import com.artem_esenkov_iu_study.service.CommunityService;
import com.artem_esenkov_iu_study.repository.CommunityRepository;
import com.artem_esenkov_iu_study.model.MessageRequest;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class CommunityController {

    private final CommunityService communityService;

    public CommunityController(CommunityService communityService) {
        this.communityService = communityService;
    }



    @GetMapping("/communities")
    public List<Community> getAllCommunities() {
        return communityService.getAllCommunities();
    }


    @GetMapping("/communities/{id}")
    public Community getCommunityById(@PathVariable Long id) {
        return communityService.getCommunityById(id);
    }


    @PostMapping("/communities")
    public Community createCommunity(@RequestBody Community community) {
        return communityService.createCommunity(community);
    }


    @DeleteMapping("/communities/{id}")
    public void deleteCommunity(@PathVariable Long id) {
        communityService.deleteCommunity(id);
    }


    @PutMapping("/communities/{id}")
    public Community updateCommunity(@PathVariable Long id, @RequestBody Community community) {
        return communityService.updateCommunity(id, community);
    }


    @GetMapping("/communities/{id}/bots")
    public List<Bot> getCommunityBots(@PathVariable Long id) {
        return communityService.getCommunityBots(id);
    }


    @PostMapping("/communities/{communityId}/bots/{botId}")
    public Bot addBotToCommunity(@PathVariable Long communityId, @PathVariable Long botId) {
        return communityService.addBotToCommunity(communityId, botId);
    }


    @PostMapping("/communities/{id}/send-message")
    public String sendMessageToCommunity(@PathVariable Long id, @RequestBody MessageRequest request) {
        communityService.sendMessageToCommunity(id, request.getBotId(), request.getMessage());
        return "Message sent";
    }
    

}    
