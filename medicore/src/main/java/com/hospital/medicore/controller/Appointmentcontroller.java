package com.hospital.medicore.controller;

import com.hospital.medicore.model.Appointment;
import com.hospital.medicore.model.Doctor;
import com.hospital.medicore.model.Patient;
import com.hospital.medicore.repository.appointmentrepository;
import com.hospital.medicore.repository.doctorrepository;
import com.hospital.medicore.repository.patientrepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointments")
public class Appointmentcontroller {

    private final appointmentrepository appointmentRepository;
    private final doctorrepository doctorRepository;
    private final patientrepository patientRepository;

    public Appointmentcontroller(appointmentrepository appointmentRepository,
                                 doctorrepository doctorRepository,
                                 patientrepository patientRepository) {
        this.appointmentRepository = appointmentRepository;
        this.doctorRepository = doctorRepository;
        this.patientRepository = patientRepository;
    }

    // CREATE appointment
    @PostMapping("/{doctorId}/{patientId}")
    public Appointment createAppointment(
            @PathVariable Long doctorId,
            @PathVariable Long patientId,
            @RequestBody Appointment appointment) {

        Doctor doctor = doctorRepository.findById(doctorId).orElse(null);
        Patient patient = patientRepository.findById(patientId).orElse(null);

        appointment.setDoctor(doctor);
        appointment.setPatient(patient);

        return appointmentRepository.save(appointment);
    }

    // READ all appointments
    @GetMapping
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }
}
