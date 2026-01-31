package com.hospital.medicore.controller;

import com.hospital.medicore.model.Patient;
import com.hospital.medicore.repository.patientrepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
public class Patientcontroller {

    private final patientrepository patientRepository;

    public Patientcontroller(patientrepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    // CREATE patient
    @PostMapping
    public Patient addPatient(@RequestBody Patient patient) {
        return patientRepository.save(patient);
    }

    // READ all patients
    @GetMapping
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    // READ patient by id
    @GetMapping("/{id}")
    public Patient getPatientById(@PathVariable Long id) {
        return patientRepository.findById(id).orElse(null);
    }

    // DELETE patient
    @DeleteMapping("/{id}")
    public String deletePatient(@PathVariable Long id) {
        patientRepository.deleteById(id);
        return "Patient deleted successfully";
    }
}
