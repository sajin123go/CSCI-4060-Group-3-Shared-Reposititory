package com.Nafa.backendProject.Controller;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Nafa.backendProject.Entity.Member;
import com.Nafa.backendProject.Service.MemberService;

@RestController
@RequestMapping("/admin/member")
@CrossOrigin(origins="*")
public class AdminMemberController {

	@Autowired
	private MemberService memberService;

	@GetMapping("/allMembers")
	public ArrayList<Member> getAllMembers() {
		return memberService.getAllMembers();
	}

	@PostMapping("/assign/{memberId}/role/{roleId}")
	public String assignMemberARole(@PathVariable("memberId") Long member_id, @PathVariable("roleId") Long role_id) {
		memberService.assignMemberARole(member_id, role_id);
		return "Member is successfully assigned a role";
	}

	@GetMapping("/{memberId}")
	public Member getMemberById(@PathVariable("memberId") Long member_id) {
		return memberService.getMemberById(member_id);
	}

	@GetMapping("/firstname/{memberFirstName}")
	public ArrayList<Member> getMemberByFirstNameContaining(@PathVariable("memberFirstName") String firstName) {
		return memberService.getAllByFirstNameContaining(firstName);
	}

	@GetMapping("/lastname/{memberLastName}")
	public ArrayList<Member> getMemberByLastNameContaining(@PathVariable("memberLastName") String lastName) {
		return memberService.getAllByLastNameContaining(lastName);
	}

	@GetMapping("/email/{memberEmail}")
	public Member getMemberByEmail(@PathVariable("memberEmail") String email) {
		return memberService.getMemberByEmail(email);
	}

	@GetMapping("/firstname/{memberFirstName}/lastname/{memberLastName}")
	public ArrayList<Member> getAllByFirstNameAndLastNameContaining(@PathVariable("memberFirstName") String firstName,
			@PathVariable("memberLastName") String lastName) {
		return memberService.getAllByFirstNameAndLastNameContaining(firstName, lastName);
	}

}
