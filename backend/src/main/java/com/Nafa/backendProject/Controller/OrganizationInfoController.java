package com.Nafa.backendProject.Controller;

import com.Nafa.backendProject.Entity.OrganizationInfo;
import com.Nafa.backendProject.Service.OrganizationInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin/organization-info")
public class OrganizationInfoController {

    @Autowired
    private OrganizationInfoService organizationInfoService;
    @PostMapping("/add")
    public OrganizationInfo addInfo(@RequestBody OrganizationInfo organizationInfo){
        return organizationInfoService.addInfo(organizationInfo);
    }

    @GetMapping("/get")
    public OrganizationInfo getInfo(){
        return organizationInfoService.getInfo();
    }

    @PutMapping("/update")
    public OrganizationInfo updateInfo(@RequestBody OrganizationInfo organizationInfo){
        return organizationInfoService.updateInfo(organizationInfo);
    }
}
