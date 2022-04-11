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

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(
		name = "table_group",
		uniqueConstraints = @UniqueConstraint(
				name="group_unique",
				columnNames = "group_name"
				)
		)
public class Group {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="group_id")
	private Long groupId;
	@Column(name="group_name",nullable = false)
	private String name;
	
	@ManyToMany()
	@JoinTable(
			name = "user_followed_group",
			joinColumns = @JoinColumn(name = "group_id",referencedColumnName = "group_id"),
			inverseJoinColumns = @JoinColumn(name = "member_id",referencedColumnName = "member_id")
			)
	@JsonIgnore
	private List<Member> followedByMembers = new ArrayList<>();
	
	public void followGroup(Member member) {
		followedByMembers.add(member);
	}

	public void removeMember(Member fetchedMember) {
		followedByMembers.remove(fetchedMember);	
	}

}
