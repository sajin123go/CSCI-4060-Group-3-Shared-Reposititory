package com.Nafa.backendProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Nafa.backendProject.Entity.PendingRequest;

@Repository
public interface PendingRequestRepostitory extends JpaRepository<PendingRequest, Long>{

}
