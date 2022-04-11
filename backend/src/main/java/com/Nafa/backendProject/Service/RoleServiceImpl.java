package com.Nafa.backendProject.Service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.Nafa.backendProject.Entity.Role;
import com.Nafa.backendProject.Repository.MemberRepository;
import com.Nafa.backendProject.Repository.RoleRepository;

@Service
@Transactional
public class RoleServiceImpl implements RoleService{
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private MemberRepository memberRepository;

	@Override
	public void saveRole(Role role) {
		roleRepository.save(role);
		
	}

	@Override
	public ArrayList<Role> findAllRoles() {
		return (ArrayList<Role>) roleRepository.findAll();
	}
}
