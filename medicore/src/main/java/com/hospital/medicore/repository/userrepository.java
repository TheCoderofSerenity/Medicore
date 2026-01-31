package com.hospital.medicore.repository;

import com.hospital.medicore.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userrepository extends JpaRepository<User, Long> {}
