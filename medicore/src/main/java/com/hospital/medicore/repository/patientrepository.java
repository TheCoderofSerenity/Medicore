package com.hospital.medicore.repository;

import com.hospital.medicore.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface patientrepository extends JpaRepository<Patient, Long> {
}
