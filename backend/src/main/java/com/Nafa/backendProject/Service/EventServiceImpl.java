package com.Nafa.backendProject.Service;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.Nafa.backendProject.Entity.Event;
import com.Nafa.backendProject.Entity.Member;
import com.Nafa.backendProject.Repository.EventRepository;
import com.Nafa.backendProject.Repository.MemberRepository;

@Service
@Transactional
public class EventServiceImpl implements EventService{

	@Autowired
	private EventRepository eventRepository;
	
	@Autowired MemberRepository memberRepository;
	
	@Override
	public Event createEvent(Event event) {
		return eventRepository.save(event);
	}

	@Override
	public ArrayList<Event> getAllEvent() {
		return (ArrayList<Event>) eventRepository.findAll();
	}

	@Override
	public Event getEventById(Long eventId) {
		return eventRepository.findById(eventId).get();
	}

	@Override
	public void deleteEventById(Long eventId) {
		eventRepository.deleteById(eventId);
	}

	@Override
	public Event updateEvent(@Valid Event event) {
		Event fetchedEvent = eventRepository.findById(event.getEventId()).get();
		fetchedEvent.setEventName(event.getEventName());
		fetchedEvent.setEventDescription(event.getEventDescription());
		fetchedEvent.setLocation(event.getLocation());
		
		return eventRepository.save(fetchedEvent);
	}

	@Override
	public Event getEventByEventName(String eventName) {
		return eventRepository.findByEventName(eventName);
	}

	@Override
	public String memberRsvpEvent(Long memberId, Long eventId) {
		Event event = eventRepository.findById(eventId).get();
		Member member = memberRepository.findById(memberId).get();
		return event.memberRsvpEvent(member);
	}

	@Override
	public String memberCancelRsvpEvent(Long memberId, Long eventId) {
		Event event = eventRepository.findById(eventId).get();
		Member member = memberRepository.findById(memberId).get();
		return event.memberCancelRsvpEvent(member);
	}

	@Override
	public ArrayList<Member> getAllMembersAttendingEvent(Long eventId) {
		Event event = eventRepository.findById(eventId).get();
		List<Member> attendingMembers = new ArrayList<>();
		for(Member member : event.getEventAttended()) {
			attendingMembers.add(member);
		}
		return (ArrayList<Member>) attendingMembers;
	}


}
