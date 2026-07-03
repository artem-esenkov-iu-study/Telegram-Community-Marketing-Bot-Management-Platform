package com.artem_esenkov_iu_study.controller;

import com.artem_esenkov_iu_study.model.DashboardStats;
import com.artem_esenkov_iu_study.service.DashboardService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin(origins = "http://localhost:5173")
public class DashboardController {
    
    private final DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("/stats")
    public DashboardStats getStats() {
        return dashboardService.getStats();
    }

}
