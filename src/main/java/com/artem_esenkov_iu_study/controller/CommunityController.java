package com.artem_esenkov_iu_study.controller;

import java.util.List;
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
    
}
