import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import DoctorList from "./components/DoctorList";
import AddDoctor from "./components/AddDoctor";
import EditDoctor from "./components/EditDoctor";

import PatientList from "./components/PatientList";
import AddPatient from "./components/AddPatient";
import EditPatient from "./components/EditPatient";

import AppointmentList from "./components/AppointmentList";
import AddAppointment from "./components/AddAppointment";

import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Medicore Hospital System</h1>

        <nav>
          <Link to="/">Doctors</Link> |{" "}
          <Link to="/add-doctor">Add Doctor</Link> |{" "}
          <Link to="/patients">Patients</Link> |{" "}
          <Link to="/add-patient">Add Patient</Link> |{" "}
          <Link to="/appointments">Appointments</Link> |{" "}
          <Link to="/add-appointment">Add Appointment</Link> |{" "}
          <Link to="/login">Login</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<DoctorList />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/edit-doctor/:id" element={<EditDoctor />} />

          <Route path="/patients" element={<PatientList />} />
          <Route path="/add-patient" element={<AddPatient />} />
          <Route path="/edit-patient/:id" element={<EditPatient />} />

          <Route path="/appointments" element={<AppointmentList />} />
          <Route path="/add-appointment" element={<AddAppointment />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
