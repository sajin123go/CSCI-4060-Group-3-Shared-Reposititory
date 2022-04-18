package com.Nafa.backendProject.Repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.Nafa.backendProject.Entity.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long>{

	Member findByEmailIgnoreCase(String email);
	
	//Find members where first name contains
	ArrayList<Member> findByFirstNameIgnoreCaseContaining(String firstName);

	//Find members where last name contains
	ArrayList<Member> findByLastNameIgnoreCaseContaining(String lastName);

	//Find members by first name and last name containing the provided characters
	@Query(value="SELECT * from table_member where table_member.first_name ilike %:firstName% and table_member.last_name ilike %:lastName% ",nativeQuery = true)
	ArrayList<Member> findAllByFristNameAndLastNameContaining(@Param("firstName") String firstName,@Param("lastName") String lastName);

	

}