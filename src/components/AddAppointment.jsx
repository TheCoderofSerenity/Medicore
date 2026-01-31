import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axiosConfig";

function AddAppointment() {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [doctorId, setDoctorId] = useState("");
  const [patientId, setPatientId] = useState("");
  const [dateTime, setDateTime] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const doctorRes = await axios.get("/doctors");
      setDoctors(doctorRes.data);
      const patientRes = await axios.get("/patients");
      setPatients(patientRes.data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/appointments", {
      dateTime,
      doctor: { id: doctorId },
      patient: { id: patientId },
      status: "Scheduled",
    });
    navigate("/appointments");
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date & Time:</label>
          <input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} required />
        </div>
        <div>
          <label>Doctor:</label>
          <select value={doctorId} onChange={(e) => setDoctorId(e.target.value)} required>
            <option value="">Select</option>
            {doctors.map((d) => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Patient:</label>
          <select value={patientId} onChange={(e) => setPatientId(e.target.value)} required>
            <option value="">Select</option>
            {patients.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default AddAppointment;
