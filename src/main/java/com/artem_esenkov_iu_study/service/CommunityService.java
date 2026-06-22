package com.artem_esenkov_iu_study.service;

import com.artem_esenkov_iu_study.model.Bot;
import com.artem_esenkov_iu_study.model.Community;
import com.artem_esenkov_iu_study.repository.CommunityRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CommunityService {
    
    private final CommunityRepository communityRepository;

    public CommunityService(CommunityRepository communityRepository) {
        this.communityRepository = communityRepository;
    }


    public List<Community> getAllCommunities() {
        return communityRepository.findAll();
    }


    public Community getCommunityById (Long id) {
        return communityRepository.findById(id).orElse(null);
    }


    public Community createCommunity(Community community) {
        return communityRepository.save(community);
    }


    public void deleteCommunity(Long id) {
        communityRepository.deleteById(id);
    }


    public Community updateCommunity(Long id, Community updatedCommunity) {
        
        Community existingCommunity = communityRepository.findById(id).orElse(null);

        if (existingCommunity == null) {
            return null;
        }

        existingCommunity.setName(updatedCommunity.getName());
        existingCommunity.setTelegramLink(updatedCommunity.getTelegramLink());
        existingCommunity.setCategory(updatedCommunity.getCategory());
        existingCommunity.setMemberCount(updatedCommunity.getMemberCount());
        existingCommunity.setDiscription(updatedCommunity.getDiscription());
        existingCommunity.setStatus(updatedCommunity.getStatus());

        return communityRepository.save(existingCommunity);

    }


    public List<Bot> getCommunityBots(Long communityId) {
        
        Community community = communityRepository.findById(communityId).orElse(null);

        if (communityId == null) {
            return null;
        }

        return community.getBots();

    }

}
