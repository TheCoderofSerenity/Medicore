import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../axiosConfig";

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    const res = await axios.get("/appointments");
    setAppointments(res.data);
  };

  const deleteAppointment = async (id) => {
    await axios.delete(`/appointments/${id}`);
    fetchAppointments();
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Appointments</h2>
      <Link to="/add-appointment">Book Appointment</Link>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date & Time</th>
            <th>Doctor</th>
            <th>Patient</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.dateTime}</td>
              <td>{a.doctor?.name}</td>
              <td>{a.patient?.name}</td>
              <td>{a.status}</td>
              <td>
                <button onClick={() => deleteAppointment(a.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentList;
