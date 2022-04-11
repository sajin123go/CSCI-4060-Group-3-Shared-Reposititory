package com.Nafa.backendProject.Service;

import java.util.ArrayList;

import javax.validation.Valid;

import com.Nafa.backendProject.Entity.Event;
import com.Nafa.backendProject.Entity.Group;
import com.Nafa.backendProject.Entity.Member;

public interface MemberService {

	void registerMember(Member member);

	ArrayList<Member> getAllMembers();

	void assignMemberARole(Long memberId, Long role_id);

	Member updateMember(@Valid Member member);

	void deleteMember(Long memberId);

	Member getMemberById(Long memberId);

	Member getMemberByEmail(String email);

	ArrayList<Member> getAllByFirstNameContaining(String firstName);

	ArrayList<Member> getAllByLastNameContaining(String lastName);

	ArrayList<Member> getAllByFirstNameAndLastNameContaining(String firstName, String lastName);

	Member memberFollowGroup(Long memberId, Long groupId);

	Member memberLeaveGroup(Long memberId, Long groupId);

	ArrayList<Group> getAllGroupsOfMember(Long memberId);

	ArrayList<Event> getAllAttendingEvents(Long memberId);


}
