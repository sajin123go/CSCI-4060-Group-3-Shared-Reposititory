package com.Nafa.backendProject.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Nafa.backendProject.Entity.Event;
import com.Nafa.backendProject.Entity.Member;
import com.Nafa.backendProject.Entity.Scholarship;
import com.Nafa.backendProject.Service.ScholarshipService;

@RestController
@RequestMapping("/scholarship")
public class ScholarshipController {
	
	@Autowired 
	private ScholarshipService scholarshipService;

	@GetMapping("/all")
	public ArrayList<Scholarship> getAllScholarships(){
		return scholarshipService.getAllScholarships();
	}
	
	@GetMapping("/{scholarshipId}")
	public Scholarship getScholarshipById(@PathVariable("scholarshipId") Long scholarshipId) {
		return scholarshipService.getScholarshipById(scholarshipId);
	}

	@GetMapping("/name/{scholarshipName}")
	public Scholarship getScholarshipByName(@PathVariable("scholarshipName") String scholarshipName) {
		return scholarshipService.getScholarshipByScholarshipName(scholarshipName);
	}
	
}
