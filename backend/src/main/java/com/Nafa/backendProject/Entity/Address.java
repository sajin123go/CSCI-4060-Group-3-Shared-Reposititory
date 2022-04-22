package com.Nafa.backendProject.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Address {

    private String streetName;
    private int zipcode;
    private String city;
    private String State;

}
