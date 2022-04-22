package com.Nafa.backendProject.Controller;

import java.util.ArrayList;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Nafa.backendProject.Entity.Event;
import com.Nafa.backendProject.Entity.Group;
import com.Nafa.backendProject.Entity.Member;
import com.Nafa.backendProject.Entity.PendingRequest;
import com.Nafa.backendProject.Entity.Scholarship;
import com.Nafa.backendProject.Service.EventService;
import com.Nafa.backendProject.Service.MemberService;
import com.Nafa.backendProject.Service.PendingRequestService;
import com.Nafa.backendProject.Service.ScholarshipService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@CrossOrigin(origins = "*")
@RequestMapping("/member")
public class MemberController {

	@Autowired
	private MemberService memberService;
	
	@Autowired
	private PendingRequestService pendingRequestService;
	
	@Autowired
	private EventService eventService;
	
	@Autowired
	private ScholarshipService scholarshipService;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/register")
	public String registerMember(@Valid @RequestBody Member member) {
		memberService.registerMember(member);
		return "Member registered";
	}

	@PutMapping("/update")
	public Member updateMember(@Valid @RequestBody Member member) {
		return memberService.updateMember(member);
	}

	@DeleteMapping("/delete/{memberId}")
	public String deleteMember(@PathVariable("memberId") Long member_id) {
		memberService.deleteMember(member_id);
		return "Member successfully deleted";
	}

	@PutMapping("/{memberId}/follow/{groupId}")
	public Member memberFollowGroup(@PathVariable("memberId") Long member_id, @PathVariable("groupId") Long group_id) {
		return memberService.memberFollowGroup(member_id, group_id);
	}
	
	@PostMapping("/request/group")
	public PendingRequest memberRequestGroup(@RequestBody PendingRequest pendingRequest) {
		return pendingRequestService.memberRequestGroup(pendingRequest);
	}
	
	@PutMapping("/{memberId}/leave/{groupId}")
	public Member memberLeaveGroup(@PathVariable("memberId") Long member_id, @PathVariable("groupId") Long group_id) {
		return memberService.memberLeaveGroup(member_id, group_id);
	}
	
	@GetMapping("/{memberId}/group/all")
	public ArrayList<Group> getAllGroupsOfMember(@PathVariable("memberId") Long memberId){
		return memberService.getAllGroupsOfMember(memberId);
	}
	
	@PutMapping("/{memberId}/event/{eventId}/rsvp")
	public String memberRsvpEvent(@PathVariable Long memberId,@PathVariable Long eventId) {
		return eventService.memberRsvpEvent(memberId,eventId);
	}
	
	@PutMapping("/{memberId}/event/{eventId}/rsvp-cancel")
	public String memberCancelRsvpEvent(@PathVariable Long memberId,@PathVariable Long eventId) {
		return eventService.memberCancelRsvpEvent(memberId,eventId);
	}
	
	@GetMapping("/{memberId}/event/all")
	public ArrayList<Event> getAllAttendingEvents(@PathVariable Long memberId){
		return memberService.getAllAttendingEvents(memberId);
	}
	
	@PutMapping("/{memberId}/scholarship/{scholarshipId}/donate")
	public String memberDonateToScholarship(@PathVariable Long memberId,@PathVariable Long scholarshipId) {
		return scholarshipService.memberDonateToScholarship(memberId,scholarshipId);
	}
	
	@GetMapping("/{memberId}/shcholarship/all")
	public ArrayList<Scholarship> getAllScholarshipDonationsOfMember(@PathVariable Long memberId){
		return memberService.getAllScholarshipDonationsOfMember(memberId);
	}

	@PostMapping("/{memberId}/purchase-membership/{membershipId}")
	public String memberPurchaseMembership(@PathVariable Long memberId, @PathVariable Long membershipId){
		return memberService.memberPurchaseMembership(memberId,membershipId);
	}
	
	
	
}
