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
@Table(name = "table_scholarship", 
	   uniqueConstraints = @UniqueConstraint(name = "scholarshipName_unique", columnNames = "scholarship_name")
)
public class Scholarship {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "scholarship_id")
	private Long scholarshipId;
	@NotNull
	@NotEmpty
	@Size(min = 1, message = "Name should be at least 1 character")
	@Column(name = "scholarship_name", nullable = false)
	private String scholarshipName;
	private String scholarshipDescription;

	@ManyToMany()
	@JoinTable(name = "donated_to_scholarship", 
			   joinColumns = @JoinColumn(name = "scholarship_id", referencedColumnName = "scholarship_id"), 
			   inverseJoinColumns = @JoinColumn(name = "member_id", referencedColumnName = "member_id")
	)
	@JsonIgnore
	private List<Member> scholarshipDonated = new ArrayList<>();
	
	public String memberDonateToScholarship(Member member) {
		scholarshipDonated.add(member);
		return "Donation successful";
	}

}
