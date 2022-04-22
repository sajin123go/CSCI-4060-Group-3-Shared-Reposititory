package com.Nafa.backendProject.Service;

import com.Nafa.backendProject.Entity.Membership;
import com.Nafa.backendProject.Repository.MembershipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Objects;

@Service
@Transactional
public class MembershipServiceImpl implements MembershipService{

    @Autowired
    private MembershipRepository membershipRepository;
    @Override
    public Membership addMembership(Membership membership) {
            return membershipRepository.save(membership);

    }

    @Override
    public ArrayList<Membership> getAllMemberships() {
        return (ArrayList<Membership>) membershipRepository.findAll();
    }

    @Override
    public Membership updateMembership(Long membershipId, Membership membership) {
        Membership fetchedMembership = membershipRepository.findById(membershipId).get();
        if (Objects.nonNull(membership.getMembershipName()) && !"".equalsIgnoreCase(membership.getMembershipName())) {
            fetchedMembership.setMembershipName((membership.getMembershipName()));
        }

        if (Objects.nonNull(membership.getDescription()) && !"".equalsIgnoreCase(membership.getDescription())) {
            fetchedMembership.setDescription(membership.getDescription());
        }

        if (Objects.nonNull(membership.getMembershipValidForDays()) && (membership.getMembershipValidForDays() != 0)) {
            fetchedMembership.setMembershipValidForDays(membership.getMembershipValidForDays());
        }

        return membershipRepository.save(fetchedMembership);
    }

    @Override
    public String deleteMembership(Long membershipId) {
        membershipRepository.deleteById(membershipId);
        return "deleted successfully";
    }
}
