package com.Nafa.backendProject.Service;

import com.Nafa.backendProject.Entity.OrganizationInfo;

public interface OrganizationInfoService {
    OrganizationInfo addInfo(OrganizationInfo organizationInfo);

    OrganizationInfo getInfo();

    OrganizationInfo updateInfo(OrganizationInfo organizationInfo);
}
