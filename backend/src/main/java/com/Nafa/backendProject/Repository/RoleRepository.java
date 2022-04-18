package com.Nafa.backendProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Nafa.backendProject.Entity.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{

}
