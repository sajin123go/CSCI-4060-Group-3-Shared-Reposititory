package com.Nafa.backendProject.Controller;

import java.util.ArrayList;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Nafa.backendProject.Entity.Member;
import com.Nafa.backendProject.Entity.Scholarship;
import com.Nafa.backendProject.Service.ScholarshipService;

@RestController
@RequestMapping("/admin/scholarship")
public class AdminScholarshipController {
	
	@Autowired
	private ScholarshipService scholarshipService;
	
	@PostMapping("/add")
	public Scholarship createScholarship(@Valid @RequestBody Scholarship scholarship) {
		return scholarshipService.createScholarship(scholarship);
	}
	
	
	@DeleteMapping("/delete/{scholarshipId}")
	public String deleteScholarshipById(@PathVariable("scholarshipId") Long scholarshipId) {
		scholarshipService.deleteScholarshipById(scholarshipId);
		return "The scholarship is deleted";
	}
	
	@PutMapping("/update")
	public Scholarship updateScholarship(@Valid @RequestBody Scholarship scholarship) {
		return scholarshipService.updateScholarship(scholarship);
	}
	
	@GetMapping("/members/all/{scholarshipId}")
	public ArrayList<Member> getAllMembersDonatedToScholarship(@PathVariable Long scholarshipId){
		return scholarshipService.getAllMembersDonatedToScholarship(scholarshipId);
	}

}
