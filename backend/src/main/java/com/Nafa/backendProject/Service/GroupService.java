package com.Nafa.backendProject.Service;

import java.util.ArrayList;

import javax.validation.Valid;

import com.Nafa.backendProject.Entity.Group;
import com.Nafa.backendProject.Entity.Member;

public interface GroupService {

	Group addGroup(Group group);

	ArrayList<Group> getAllGroups();

	Group updateGroup(@Valid Group group);

	void deleteMember(Long group_id);
	
	Group getGroupById(Long group_id);

	ArrayList<Group> getGroupByNameContaining(String group_name);

	ArrayList<Member> getAllMembersInGroup(Long groupId);

}
