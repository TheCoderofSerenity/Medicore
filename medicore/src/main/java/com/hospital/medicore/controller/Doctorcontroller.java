package com.hospital.medicore.controller;

import com.hospital.medicore.model.Doctor;
import com.hospital.medicore.repository.doctorrepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctors")
public class Doctorcontroller {

    private final doctorrepository doctorRepository;

    public Doctorcontroller(doctorrepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    // CREATE doctor
    @PostMapping
    public Doctor addDoctor(@RequestBody Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    // READ all doctors
    @GetMapping
    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    // READ doctor by id
    @GetMapping("/{id}")
    public Doctor getDoctorById(@PathVariable Long id) {
        return doctorRepository.findById(id).orElse(null);
    }

    // DELETE doctor
    @DeleteMapping("/{id}")
    public String deleteDoctor(@PathVariable Long id) {
        doctorRepository.deleteById(id);
        return "Doctor deleted successfully";
    }
}
