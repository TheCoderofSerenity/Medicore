package com.hospital.medicore.repository;

import com.hospital.medicore.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface appointmentrepository extends JpaRepository<Appointment, Long> {}