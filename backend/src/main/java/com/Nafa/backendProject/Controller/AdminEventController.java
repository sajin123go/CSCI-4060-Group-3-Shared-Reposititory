package com.Nafa.backendProject.Controller;

import java.util.ArrayList;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Nafa.backendProject.Entity.Event;
import com.Nafa.backendProject.Entity.Member;
import com.Nafa.backendProject.Service.EventService;

@RestController
@RequestMapping("/admin/event")
public class AdminEventController {
	
	@Autowired
	private EventService eventService;
	
	@PostMapping("/add")
	public Event createEvent(@Valid @RequestBody Event event) {
		return eventService.createEvent(event);
	}
	
	
	@DeleteMapping("/delete/{eventId}")
	public String deleteEventById(@PathVariable("eventId") Long eventId) {
		eventService.deleteEventById(eventId);
		return "The event is deleted";
	}
	
	@PutMapping("/update")
	public Event updateEvent(@Valid @RequestBody Event event) {
		return eventService.updateEvent(event);
	}
	
	@GetMapping("/members/all/{eventId}")
	public ArrayList<Member> getAllMembersAttendingEvent(@PathVariable Long eventId){
		return eventService.getAllMembersAttendingEvent(eventId);
	}

}
