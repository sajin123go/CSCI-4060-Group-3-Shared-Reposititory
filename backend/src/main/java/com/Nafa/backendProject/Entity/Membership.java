package com.Nafa.backendProject.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(
        name = "Table_membership",
        uniqueConstraints = @UniqueConstraint(name = "membershipName_unique", columnNames = "membership_name")
)
public class Membership {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long membershipId;
    @NotNull
    @Size(min = 1,message = "The name should be at least 1 character")
    @Column(name = "membership_name")
    private String membershipName;
    private String description;
    @Positive
    private Long membershipValidForDays;
    private Boolean isLifeTime = false;

    @OneToMany(mappedBy = "membership")
    @JsonIgnore
    private List<Member> members;
}
