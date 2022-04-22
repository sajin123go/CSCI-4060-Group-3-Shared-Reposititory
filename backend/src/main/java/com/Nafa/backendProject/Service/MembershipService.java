package com.Nafa.backendProject.Service;

import com.Nafa.backendProject.Entity.Membership;

import java.util.ArrayList;

public interface MembershipService {


    Membership addMembership(Membership membership);

    ArrayList<Membership> getAllMemberships();

    Membership updateMembership(Long membershipId,Membership membership);

    String deleteMembership(Long membershipId);
}
