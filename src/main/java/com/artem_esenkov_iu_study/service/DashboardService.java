package com.artem_esenkov_iu_study.service;

import org.springframework.stereotype.Service;
import com.artem_esenkov_iu_study.model.Community;
import com.artem_esenkov_iu_study.repository.BotRepository;
import com.artem_esenkov_iu_study.repository.CommunityRepository;
import com.artem_esenkov_iu_study.model.DashboardStats;
import com.artem_esenkov_iu_study.Telegram.TelegramService;

@Service
public class DashboardService {

    private final CommunityRepository communityRepository;
    private final BotRepository botRepository;
    private final TelegramService telegramService;


    public DashboardService(CommunityRepository communityRepository, BotRepository botRepository, TelegramService telegramService) {

        this.communityRepository = communityRepository;
        this.botRepository = botRepository;
        this.telegramService = telegramService;

    }


    public DashboardStats getStats() {

        DashboardStats stats = new DashboardStats();

        long activeCommunities = communityRepository.findAll().stream()
        .filter(c -> c.getStatus().equalsIgnoreCase("active")).count();

        long activeBots = botRepository.findAll().stream()
        .filter(b -> b.getStatus().equalsIgnoreCase("active")).count();

        long totalSubscribers = communityRepository.findAll().stream().mapToLong(community -> {

            if (community.getBots() == null || community.getBots().isEmpty()) {
                return 0;
            }

            String botToken = community.getBots().get(0).getBotToken();

            if (botToken == null || community.getChatId() == null) {
                return 0;
            }

            return telegramService.getChatMemberCount(
                    botToken,
                    community.getChatId()
            );
        })
        .sum();


        stats.setActiveCommunities(activeCommunities);
        stats.setActiveBots(activeBots);
        stats.setTotalSubscribers(totalSubscribers);
        stats.setActiveCampaings(0L);


        return stats;

    }
    
}
