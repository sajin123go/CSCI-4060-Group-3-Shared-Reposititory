package com.Nafa.backendProject.Repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Nafa.backendProject.Entity.Group;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long>{

	ArrayList<Group> findByNameIgnoreCaseContaining(String group_name);

}

