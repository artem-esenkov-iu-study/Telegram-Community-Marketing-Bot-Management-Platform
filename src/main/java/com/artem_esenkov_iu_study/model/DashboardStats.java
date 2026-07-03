package com.artem_esenkov_iu_study.model;

public class DashboardStats {
    
    private long activeCommunities;
    private long activeBots;
    private long totalSubscribers;
    private long activeCampaigns;

    
    public Long getActiveCommunities() {
        return activeCommunities;
    }

    public Long getActiveBots() {
        return activeBots;
    }

    public Long getTotalSubscribers() {
        return totalSubscribers;
    }

    public Long getActiveCampaings() {
        return activeCampaigns;
    }


    public void setActiveCommunities(long activeCommunities) {
        this.activeCommunities = activeCommunities;
    }

    public void setActiveBots(long activeBots) {
        this.activeBots = activeBots;
    }

    public void setTotalSubscribers(long totalSubscribers) {
        this.totalSubscribers = totalSubscribers;
    }

    public void setActiveCampaings(long activeCampaigns) {
        this.activeCampaigns = activeCampaigns;
    }

}
