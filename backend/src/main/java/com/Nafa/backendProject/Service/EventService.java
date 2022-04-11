package com.Nafa.backendProject.Service;

import java.util.ArrayList;

import javax.validation.Valid;

import com.Nafa.backendProject.Entity.Event;
import com.Nafa.backendProject.Entity.Member;

public interface EventService {

	Event createEvent(Event event);

	ArrayList<Event> getAllEvent();

	Event getEventById(Long eventId);

	void deleteEventById(Long eventId);

	Event updateEvent(@Valid Event event);

    Event getEventByEventName(String eventName);

	String memberRsvpEvent(Long memberId,Long eventId);

	String memberCancelRsvpEvent(Long memberId, Long eventId);

	ArrayList<Member> getAllMembersAttendingEvent(Long eventId);
}
