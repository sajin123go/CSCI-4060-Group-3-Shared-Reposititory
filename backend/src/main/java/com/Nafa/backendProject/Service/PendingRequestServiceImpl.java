package com.Nafa.backendProject.Service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Nafa.backendProject.Entity.Group;
import com.Nafa.backendProject.Entity.PendingRequest;
import com.Nafa.backendProject.Repository.GroupRepository;
import com.Nafa.backendProject.Repository.MemberRepository;
import com.Nafa.backendProject.Repository.PendingRequestRepostitory;

@Service
public class PendingRequestServiceImpl implements PendingRequestService{
	
	@Autowired
	private PendingRequestRepostitory pendingRequestRepostitory;
	
	@Autowired
	private GroupRepository groupRepository;
	
	@Autowired
	private MemberRepository memberRepository;

	@Override
	public PendingRequest memberRequestGroup(PendingRequest pendingRequest) {
		
		return pendingRequestRepostitory.save(pendingRequest);
	}

	@Override
	public ArrayList<PendingRequest> getAllPendingRequests() {
		return (ArrayList<PendingRequest>) pendingRequestRepostitory.findAll();
	}

	@Override
	public String pendingRequestResponse(Boolean response,Long requestId) {
		if (response == true) {
			PendingRequest request  = pendingRequestRepostitory.findById(requestId).get();
			Group group = new Group();
			group.setName(request.getRequestedGroupName());
			group.followGroup(memberRepository.findByEmailIgnoreCase(request.getUserEmail()));
			groupRepository.save(group);
			pendingRequestRepostitory.deleteById(requestId);
			return "New group created";
		}
		else {
			pendingRequestRepostitory.deleteById(requestId);
		}
		return "The group is rejected";
	}


}
