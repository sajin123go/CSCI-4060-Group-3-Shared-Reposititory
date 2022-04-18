package com.Nafa.backendProject.Entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "table_event", 
	   uniqueConstraints = @UniqueConstraint(name = "eventName_unique", columnNames = "event_name")
)
public class Event {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "event_id")
	private Long eventId;
	@Column(name = "event_name", nullable = false)
	@NotNull
	@NotEmpty
	@Size(min = 1, message = "Name should be at least 1 character")
	private String eventName;
	private String eventDescription;
	private String location;

	@ManyToMany()
	@JoinTable(name = "event_attended", 
			   joinColumns = @JoinColumn(name = "event_id", referencedColumnName = "event_id"), 
			   inverseJoinColumns = @JoinColumn(name = "member_id", referencedColumnName = "member_id")
	)
	@JsonIgnore
	private List<Member> eventAttended = new ArrayList<>();
	
	public String memberRsvpEvent(Member member) {
		eventAttended.add(member);
		return "Rsvp successful";
	}

	public String memberCancelRsvpEvent(Member member) {
		eventAttended.remove(member);
		return "Rsvp cancel successful";
	}

}
