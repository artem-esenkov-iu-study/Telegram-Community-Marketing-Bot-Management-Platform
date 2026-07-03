package com.artem_esenkov_iu_study.service;

import com.artem_esenkov_iu_study.model.Bot;
import com.artem_esenkov_iu_study.model.Community;
import com.artem_esenkov_iu_study.repository.CommunityRepository;
import com.artem_esenkov_iu_study.repository.BotRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import com.artem_esenkov_iu_study.Telegram.TelegramService;

@Service
public class CommunityService {
    
    private final CommunityRepository communityRepository;
    private final BotRepository botRepository;
    private final TelegramService telegramService;


    public CommunityService(CommunityRepository communityRepository, BotRepository botRepository, TelegramService telegramService) {
        this.communityRepository = communityRepository;
        this.botRepository = botRepository;
        this.telegramService = telegramService;
    }


    public List<Community> getAllCommunities() {
        return communityRepository.findAll();
    }


    public Community getCommunityById (Long id) {

        Community community = communityRepository.findById(id).orElse(null);

        if (community == null) {
            return null;
        }

        if (community.getChatId() != null && community.getBots() != null && !community.getBots().isEmpty()) {

            Bot bot = community.getBots().get(0);

            if (bot.getBotToken() != null) {

                Integer memberCount = telegramService.getChatMemberCount(bot.getBotToken(), community.getChatId());

                community.setMemberCount(String.valueOf(memberCount));
                communityRepository.save(community);
            }

        }

        return community;

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
        existingCommunity.setDescription(updatedCommunity.getDescription());
        existingCommunity.setStatus(updatedCommunity.getStatus());
        existingCommunity.setChatId(updatedCommunity.getChatId());

        return communityRepository.save(existingCommunity);

    }


    public List<Bot> getCommunityBots(Long communityId) {
        
        Community community = communityRepository.findById(communityId).orElse(null);

        if (communityId == null) {
            return null;
        }

        return community.getBots();

    }


    public Bot addBotToCommunity(Long communityId, Long botId) {

        Community community = communityRepository.findById(communityId).orElseThrow();
        Bot bot = botRepository.findById(botId).orElseThrow();

        bot.setCommunity(community);

        return botRepository.save(bot);

    }


    public void sendMessageToCommunity(Long communityId, Long botId, String message) {

        Community community = communityRepository.findById(communityId).orElseThrow();
        Bot bot = botRepository.findById(botId).orElseThrow();
        telegramService.sendMessage(bot.getBotToken(), community.getChatId(), message);

    }





}
