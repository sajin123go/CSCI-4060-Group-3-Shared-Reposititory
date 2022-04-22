package com.Nafa.backendProject.Service;

import com.Nafa.backendProject.Entity.Membership;
import com.Nafa.backendProject.Entity.OrganizationInfo;
import com.Nafa.backendProject.Repository.OrganizationInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class OrganizationInfoServiceImpl implements OrganizationInfoService{

    @Autowired
    private OrganizationInfoRepository organizationInfoRepository;

    @Override
    public OrganizationInfo addInfo(OrganizationInfo organizationInfo) {
        return organizationInfoRepository.save(organizationInfo);
    }
    @Override
    public OrganizationInfo getInfo() {
        return organizationInfoRepository.findById(1L).get();
    }

    @Override
    public OrganizationInfo updateInfo(OrganizationInfo organizationInfo) {
        OrganizationInfo fetchedOrgInfo = organizationInfoRepository.findById(1L).get();

        if (Objects.nonNull(organizationInfo.getName()) && !"".equalsIgnoreCase(organizationInfo.getName())) {
            fetchedOrgInfo.setName(organizationInfo.getName());
        }

        if (Objects.nonNull(organizationInfo.getEmailAddress()) && !"".equalsIgnoreCase(organizationInfo.getName())) {
            fetchedOrgInfo.setEmailAddress(organizationInfo.getEmailAddress());
        }

        if (Objects.nonNull(organizationInfo.getMotto()) && !"".equalsIgnoreCase(organizationInfo.getMotto())) {
            fetchedOrgInfo.setMotto(organizationInfo.getMotto());
        }

        if (Objects.nonNull(organizationInfo.getPhoneNumber()) && (organizationInfo.getPhoneNumber() != 0)) {
            fetchedOrgInfo.setPhoneNumber(organizationInfo.getPhoneNumber());
        }

        if (Objects.nonNull(organizationInfo.getAddress().getCity()) && !"".equalsIgnoreCase(organizationInfo.getAddress().getCity())) {
            fetchedOrgInfo.getAddress().setCity((organizationInfo.getAddress().getCity()));
        }

        if (Objects.nonNull(organizationInfo.getAddress().getState()) && !"".equalsIgnoreCase(organizationInfo.getAddress().getState())) {
            fetchedOrgInfo.getAddress().setState((organizationInfo.getAddress().getState()));
        }

        if (Objects.nonNull(organizationInfo.getAddress().getStreetName()) && !"".equalsIgnoreCase(organizationInfo.getAddress().getStreetName())) {
            fetchedOrgInfo.getAddress().setStreetName((organizationInfo.getAddress().getStreetName()));
        }

        if (Objects.nonNull(organizationInfo.getAddress().getZipcode()) && (organizationInfo.getAddress().getZipcode() != 0)) {
            fetchedOrgInfo.getAddress().setZipcode((organizationInfo.getAddress().getZipcode()));
        }

        return organizationInfoRepository.save(fetchedOrgInfo);
    }
}
