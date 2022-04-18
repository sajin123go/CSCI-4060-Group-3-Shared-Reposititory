package com.Nafa.backendProject.Repository;

import com.Nafa.backendProject.Entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {

    Optional<Event> findByEventNameIgnoreCase(String eventName);


    Event findByEventName(String eventName);
}
