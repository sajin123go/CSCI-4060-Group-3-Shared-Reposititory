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
import com.Nafa.backendProject.Service.GroupService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@CrossOrigin(origins = "*")
@RequestMapping("/group")
public class GroupController {

	@Autowired
	private GroupService groupService;

	@GetMapping("/all")
	public ArrayList<Group> getAllGroups() {
		return groupService.getAllGroups();
	}

	@GetMapping("/name/{groupNameContains}")
	public ArrayList<Group> getGroupByNameContaining(@PathVariable("groupNameContains") String groupNameContains) {
		return groupService.getGroupByNameContaining(groupNameContains);
	}
}
