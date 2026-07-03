package com.artem_esenkov_iu_study.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.artem_esenkov_iu_study.model.Community;

public interface CommunityRepository extends JpaRepository<Community, Long> {

    long countByStatus(String status);

}
