package com.Nafa.backendProject.Service;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.Nafa.backendProject.Entity.Role;

@Service
public interface RoleService {

	void saveRole(Role role);

	ArrayList<Role> findAllRoles();

}
