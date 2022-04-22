package com.Nafa.backendProject.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.Nafa.backendProject.Entity.Role;
import com.Nafa.backendProject.Service.RoleService;

@RestController
@CrossOrigin(origins="*")
public class RoleController {
	
	@Autowired
	private RoleService roleService;
	
	@PostMapping("/admin/role/save")
	public String saveRole(@RequestBody Role role) {
		roleService.saveRole(role);
		return "New role saved";
	}
	
	@GetMapping("/admin/role/all")
	public ArrayList<Role> getAllRoles(){
		return roleService.findAllRoles();
	}

	
}
