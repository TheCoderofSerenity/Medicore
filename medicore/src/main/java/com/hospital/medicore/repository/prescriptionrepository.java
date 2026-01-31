package com.hospital.medicore.repository;

import com.hospital.medicore.model.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface prescriptionrepository extends JpaRepository<Prescription, Long> {}
