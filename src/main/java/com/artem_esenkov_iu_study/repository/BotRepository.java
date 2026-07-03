package com.artem_esenkov_iu_study.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.artem_esenkov_iu_study.model.Bot;

public interface BotRepository extends JpaRepository<Bot, Long> {

    long countByStatus(String status);

}
