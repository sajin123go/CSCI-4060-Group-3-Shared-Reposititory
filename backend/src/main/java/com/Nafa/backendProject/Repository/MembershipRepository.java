package com.Nafa.backendProject.Repository;

import com.Nafa.backendProject.Entity.Membership;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MembershipRepository extends JpaRepository<Membership,Long> {

}
