package com.Nafa.backendProject.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Embeddable
public class OrganizationInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long organizationInfoId;
    private String name;
    private Long phoneNumber;
    private String emailAddress;
    private String motto;
    @Embedded
    private Address address;
}
