package com.Nafa.backendProject.Service;

import java.util.ArrayList;

import javax.validation.Valid;

import com.Nafa.backendProject.Entity.Event;
import com.Nafa.backendProject.Entity.Member;
import com.Nafa.backendProject.Entity.Scholarship;

public interface ScholarshipService {

	ArrayList<Scholarship> getAllScholarships();

	Scholarship getScholarshipById(Long scholarshipId);

	Scholarship getScholarshipByScholarshipName(String scholarshipName);

	void deleteScholarshipById(Long scholarshipId);

	Scholarship updateScholarship(@Valid Scholarship scholarship);

	Scholarship createScholarship(@Valid Scholarship scholarship);

	String memberDonateToScholarship(Long memberId, Long scholarshipId);

	ArrayList<Member> getAllMembersDonatedToScholarship(Long scholarshipId);
}
