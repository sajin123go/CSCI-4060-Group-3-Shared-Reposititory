package com.Nafa.backendProject.Service;

import java.util.ArrayList;

import com.Nafa.backendProject.Entity.PendingRequest;

public interface PendingRequestService {

	PendingRequest memberRequestGroup(PendingRequest pendingRequest);

	ArrayList<PendingRequest> getAllPendingRequests();

	String pendingRequestResponse(Boolean response, Long requestId);
	

}
