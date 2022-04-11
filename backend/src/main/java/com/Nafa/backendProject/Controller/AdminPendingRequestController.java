package com.Nafa.backendProject.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Nafa.backendProject.Entity.PendingRequest;
import com.Nafa.backendProject.Service.PendingRequestService;

@RestController
@RequestMapping("/admin/pendingrequest")
public class AdminPendingRequestController {

	@Autowired
	private PendingRequestService pendingRequestService;
	
	@GetMapping("/all")
	public ArrayList<PendingRequest> getAllPendingRequests(){
		return pendingRequestService.getAllPendingRequests();
	}
	
	@PutMapping("{requestId}/response/{response}")
	public String pendingReqestResponse(@PathVariable("response") Boolean response,@PathVariable("requestId") Long requestId) {
		return pendingRequestService.pendingRequestResponse(response,requestId);
	}
}
