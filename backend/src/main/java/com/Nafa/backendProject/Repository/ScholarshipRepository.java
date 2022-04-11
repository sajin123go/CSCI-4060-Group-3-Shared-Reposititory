package com.Nafa.backendProject.Repository;

import com.Nafa.backendProject.Entity.Scholarship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ScholarshipRepository extends JpaRepository<Scholarship, Long> {

    Scholarship findByScholarshipNameIgnoreCase(String scholarshipName);

	Scholarship save(Scholarship scholarship);
}
