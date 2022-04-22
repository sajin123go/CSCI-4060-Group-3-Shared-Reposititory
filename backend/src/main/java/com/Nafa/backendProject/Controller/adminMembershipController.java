package com.Nafa.backendProject.Controller;

import com.Nafa.backendProject.Entity.Membership;
import com.Nafa.backendProject.Service.MembershipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/admin/membership")
public class adminMembershipController {

    @Autowired
    private MembershipService membershipService;

    @PostMapping("/add")
    public Membership addMembership(@Valid @RequestBody Membership membership){
        return membershipService.addMembership(membership);
    }

    @PutMapping("/{membershipId}/update")
    public Membership updateMembership( @PathVariable Long membershipId, @Valid @RequestBody Membership membership){
        return membershipService.updateMembership(membershipId,membership);
    }

    @DeleteMapping("/{membershipId}/delete")
    public String deleteMembership(@PathVariable Long membershipId ){
        return membershipService.deleteMembership(membershipId);
    }
}
