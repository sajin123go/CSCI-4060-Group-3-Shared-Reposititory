package com.Nafa.backendProject.Service;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.Nafa.backendProject.Entity.Member;
import com.Nafa.backendProject.Entity.Scholarship;
import com.Nafa.backendProject.Repository.MemberRepository;
import com.Nafa.backendProject.Repository.ScholarshipRepository;

@Service
@Transactional
public class ScholarshipServiceImpl implements ScholarshipService{

	@Autowired
	private ScholarshipRepository scholarshipRepository;
	
	@Autowired MemberRepository memberRepository;
	
	@Override
	public Scholarship createScholarship(Scholarship scholarship) {
		return scholarshipRepository.save(scholarship);
	}

	@Override
	public ArrayList<Scholarship> getAllScholarships() {
		return (ArrayList<Scholarship>) scholarshipRepository.findAll();
	}

	@Override
	public Scholarship getScholarshipById(Long scholarshipId) {
		return scholarshipRepository.findById(scholarshipId).get();
	}

	@Override
	public void deleteScholarshipById(Long scholarshipId) {
		scholarshipRepository.deleteById(scholarshipId);
	}

	@Override
	public Scholarship updateScholarship(@Valid Scholarship scholarship) {
		Scholarship fetchedScholarship = scholarshipRepository.findById(scholarship.getScholarshipId()).get();
		fetchedScholarship.setScholarshipName(scholarship.getScholarshipName());
		fetchedScholarship.setScholarshipDescription(scholarship.getScholarshipDescription());
		
		return scholarshipRepository.save(fetchedScholarship);
	}

	@Override
	public Scholarship getScholarshipByScholarshipName(String scholarshipName) {
		return scholarshipRepository.findByScholarshipNameIgnoreCase(scholarshipName);
	}

	@Override
	public String memberDonateToScholarship(Long memberId, Long scholarshipId) {
		Scholarship scholarship = scholarshipRepository.findById(scholarshipId).get();
		Member member = memberRepository.findById(memberId).get();
		return scholarship.memberDonateToScholarship(member);
	}

	@Override
	public ArrayList<Member> getAllMembersDonatedToScholarship(Long scholarshipId) {
		Scholarship scholarship = scholarshipRepository.findById(scholarshipId).get();
		List<Member> donatedMembers = new ArrayList<>();
		for(Member member : scholarship.getScholarshipDonated()) {
			donatedMembers.add(member);
		}
		return (ArrayList<Member>) donatedMembers;
	}

	@Override
	public ArrayList<Scholarship> getAllScholarshipDonationsOfMember(Long memberId) {
		Member member = memberRepository.findById(memberId).get();
		return (ArrayList<Scholarship>) member.getScholarships();
	}


}
