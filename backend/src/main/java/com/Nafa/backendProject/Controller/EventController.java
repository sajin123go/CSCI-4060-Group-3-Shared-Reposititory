package com.Nafa.backendProject.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Nafa.backendProject.Entity.Event;
import com.Nafa.backendProject.Entity.Member;
import com.Nafa.backendProject.Service.EventService;

@RestController
@RequestMapping("/event")
public class EventController {
	
	@Autowired 
	private EventService eventService;

	@GetMapping("/all")
	public ArrayList<Event> getAllEvents(){
		return eventService.getAllEvent();
	}
	
	@GetMapping("/{eventId}")
	public Event getEventById(@PathVariable("eventId") Long eventId) {
		return eventService.getEventById(eventId);
	}

	@GetMapping("/name/{eventName}")
	public Event getEventByName(@PathVariable("eventName") String eventName) {
		return eventService.getEventByEventName(eventName);
	}
	
	
}
