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

import com.Nafa.backendProject.Entity.Group;
import com.Nafa.backendProject.Entity.Member;
import com.Nafa.backendProject.Service.GroupService;

@RestController
@RequestMapping("/admin/group")
@CrossOrigin(origins="*")
public class AdminGroupController {

	@Autowired
	GroupService groupService;

	@PostMapping("/add")
	public Group addGroup(@RequestBody Group group) {
		return groupService.addGroup(group);
	}

	@PutMapping("/update")
	public Group updateGroup(@Valid @RequestBody Group group) {
		return groupService.updateGroup(group);

	}

	@DeleteMapping("/delete/{groupId}")
	public String deleteGroup(@PathVariable("groupId") Long group_id) {
		groupService.deleteMember(group_id);
		return "Group successfully deleted";
	}

	@GetMapping("/{groupId}")
	public Group getGroupById(@PathVariable("groupId") Long group_id) {
		return groupService.getGroupById(group_id);
	}

	@GetMapping("/members/all/{groupId}")
	public ArrayList<Member> getAllMembersInGroup(@PathVariable("groupId") Long groupId){
		return groupService.getAllMembersInGroup(groupId);
	}
}
