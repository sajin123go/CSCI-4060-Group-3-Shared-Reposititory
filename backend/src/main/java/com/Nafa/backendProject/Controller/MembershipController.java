package com.Nafa.backendProject.Controller;
import com.Nafa.backendProject.Entity.Membership;
import com.Nafa.backendProject.Service.MembershipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/membership")
@CrossOrigin(origins = "*")
public class MembershipController {

    @Autowired
    private MembershipService membershipService;

    @GetMapping("/all")
    public ArrayList<Membership> getAllMemberships(){
        return membershipService.getAllMemberships();
    }
}
