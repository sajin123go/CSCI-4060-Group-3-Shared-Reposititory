package com.Nafa.backendProject.Repository;

import com.Nafa.backendProject.Entity.OrganizationInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrganizationInfoRepository extends JpaRepository<OrganizationInfo,Long> {
}
