package com.Nafa.backendProject.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.Nafa.backendProject.Entity.Event;
import com.Nafa.backendProject.Entity.Group;
import com.Nafa.backendProject.Entity.Member;
import com.Nafa.backendProject.Entity.Role;
import com.Nafa.backendProject.Repository.GroupRepository;
import com.Nafa.backendProject.Repository.MemberRepository;
import com.Nafa.backendProject.Repository.RoleRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@Transactional
public class MemberServiceImpl implements MemberService{

	@Autowired
	private MemberRepository memberRepository;
	
	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private GroupRepository groupRepository;
	
	@Override
	public void registerMember(Member member) {
//		member.setRole(roleRepository.getById((long) 2));
		memberRepository.save(member);
		
	}

	@Override
	public ArrayList<Member> getAllMembers() {
		
		return (ArrayList<Member>) memberRepository.findAll();
	}

	@Override
	public void assignMemberARole(Long member_id, Long role_id) {
		Member member = memberRepository.findById(member_id).get();
		Role role = roleRepository.findById(role_id).get();
		member.setRole(role);	
	}

	@Override
	public Member updateMember(@Valid Member member) {
		Member fetchedMember = memberRepository.findById(member.getMemberId()).get();
		
		if (Objects.nonNull(member.getEmail()) && !"".equalsIgnoreCase(member.getEmail())) {
			fetchedMember.setEmail(member.getEmail());
		}

		if (Objects.nonNull(member.getFirstName()) && !"".equalsIgnoreCase(member.getFirstName())) {
			fetchedMember.setFirstName(member.getFirstName());
		}

		if (Objects.nonNull(member.getLastName()) && !"".equalsIgnoreCase(member.getLastName())) {
			fetchedMember.setLastName(member.getLastName());
		}
		
		if (Objects.nonNull(member.getPassword()) && !"".equalsIgnoreCase(member.getPassword())) {
			fetchedMember.setPassword(member.getPassword());
		}
		return memberRepository.save(fetchedMember);
	}

	@Override
	public void deleteMember(Long member_id) {
		memberRepository.deleteById(member_id);	
	}

	@Override
	public Member getMemberByEmail(String email) {
		return memberRepository.findByEmailIgnoreCase(email);
	}

	@Override
	public Member getMemberById(Long member_id) {
		return memberRepository.findById(member_id).get();
	}
	
	@Override
	public ArrayList<Member> getAllByFirstNameContaining(String firstName) {
		return memberRepository.findByFirstNameIgnoreCaseContaining(firstName);
	}

	@Override
	public ArrayList<Member> getAllByLastNameContaining(String lastName) {
		return memberRepository.findByLastNameIgnoreCaseContaining(lastName);
	}

	@Override
	public ArrayList<Member> getAllByFirstNameAndLastNameContaining(String firstName, String lastName) {
		return memberRepository.findAllByFristNameAndLastNameContaining(firstName,lastName);
	}

	@Override
	public Member memberFollowGroup(Long memberId, Long groupId) {
		Member fetchedMember = memberRepository.findById(memberId).get();
		Group fetchedGroup = groupRepository.findById(groupId).get();
		fetchedGroup.followGroup(fetchedMember);
		return fetchedMember;
	}

	@Override
	public Member memberLeaveGroup(Long memberId, Long groupId) {
		Member fetchedMember = memberRepository.findById(memberId).get();
		Group fetchedGroup = groupRepository.findById(groupId).get();
		fetchedGroup.removeMember(fetchedMember);
		return null;
	}

	@Override
	public ArrayList<Group> getAllGroupsOfMember(Long memberId) {
		Member member = memberRepository.findById(memberId).get();
		List<Group> memberGroups = new ArrayList<>();
		for(Group group : member.getGroups()) {
			memberGroups.add(group);
		}
		return (ArrayList<Group>) memberGroups;
	}

	@Override
	public ArrayList<Event> getAllAttendingEvents(Long memberId) {
		Member member = memberRepository.findById(memberId).get();
		List<Event> attendingEvents = new ArrayList<>();
		for(Event event : member.getEvents()) {
			attendingEvents.add(event);
		}
		return (ArrayList<Event>) attendingEvents;
	}

	

}
