package com.Nafa.backendProject.Entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
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
@Table(
    name = "table_member",
    uniqueConstraints = @UniqueConstraint(name = "emailId_unique", columnNames = "email_address"))
public class Member {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "member_id")
  private Long memberId;

  @Column(name = "email_address", nullable = false)
  @NotNull
  @Email
  private String email;

  @NotNull
  @NotBlank
  @Size(min = 8, message = "The password should be at least 8 characters")
  private String password;

  @NotNull
  @NotEmpty
  @Size(min = 1, message = "First name should be at least 1 character")
  private String firstName;

  @NotNull
  @NotEmpty
  @Size(min = 1, message = "Last name should be at least 1 character")
  private String lastName;

  private String maidenName;
  private Date birthdate;
  private Boolean isAlumni;
  private String phone;

  @ManyToOne(cascade = CascadeType.PERSIST)
  @JoinColumn(name = "role_id", referencedColumnName = "role_id")
  private Role role;

  @ManyToMany(mappedBy = "followedByMembers",cascade = CascadeType.ALL)
  @JsonIgnore
  private List<Group> groups = new ArrayList<>();
  
  @ManyToMany(mappedBy = "eventAttended",cascade = CascadeType.ALL)
  @JsonIgnore
  private List<Event> events = new ArrayList<>();
  
  @ManyToMany(mappedBy = "scholarshipDonated",cascade = CascadeType.ALL)
  @JsonIgnore
  private List<Scholarship> scholarships = new ArrayList<>();

  //	private LocalDateTime registered_date;
  //	private LocalDateTime membership_valid_until;
  //	private Boolean isSubscribed;
  //	private String image_url;
}
