package com.Nafa.backendProject.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PendingRequest {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long requestId;
	private String requestedGroupName;
	private String userEmail;
	private String firstName;
	private String lastName;

}
