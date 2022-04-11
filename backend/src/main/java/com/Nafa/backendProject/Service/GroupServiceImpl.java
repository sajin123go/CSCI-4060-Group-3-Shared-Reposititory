package com.Nafa.backendProject.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.Nafa.backendProject.Entity.Group;
import com.Nafa.backendProject.Entity.Member;
import com.Nafa.backendProject.Repository.GroupRepository;
import com.Nafa.backendProject.Repository.MemberRepository;

@Service
@Transactional
public class GroupServiceImpl implements GroupService{

	@Autowired
	private GroupRepository groupRepository;
	
	@Autowired
	private MemberRepository memberRepository;
	
	@Override
	public Group addGroup(Group group) {
		return groupRepository.save(group);
	}

	@Override
	public ArrayList<Group> getAllGroups() {
		return (ArrayList<Group>) groupRepository.findAll();
	}


	@Override
	public Group updateGroup(@Valid Group group) {
		Group fetchedGroup = groupRepository.findById(group.getGroupId()).get();

		if (Objects.nonNull(group.getName()) && !"".equalsIgnoreCase(group.getName())) {
			fetchedGroup.setName(group.getName());
		}
		return groupRepository.save(fetchedGroup);
	}

	@Override
	public void deleteMember(Long groupId) {
		groupRepository.deleteById(groupId);	
		
	}
	
	@Override
	public Group getGroupById(Long groupId) {
		return groupRepository.findById(groupId).get();
	}

	@Override
	public ArrayList<Group> getGroupByNameContaining(String group_name) {
		return groupRepository.findByNameIgnoreCaseContaining(group_name);
	}

	@Override
	public ArrayList<Member> getAllMembersInGroup(Long groupId) {
		Group group = groupRepository.findById(groupId).get();
		List<Long> memberId = new ArrayList<>();
		for (Member member : group.getFollowedByMembers()) {
			memberId.add(member.getMemberId());
		}
		return (ArrayList<Member>) memberRepository.findAllById(memberId);
	}

}
