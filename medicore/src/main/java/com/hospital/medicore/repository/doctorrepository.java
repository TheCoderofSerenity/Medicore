package com.hospital.medicore.repository;

import com.hospital.medicore.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface doctorrepository extends JpaRepository<Doctor, Long> {
}
