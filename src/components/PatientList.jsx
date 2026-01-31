import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axiosConfig";

function PatientList() {
  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
    const res = await axios.get("/patients");
    setPatients(res.data);
  };

  const deletePatient = async (id) => {
    await axios.delete(`/patients/${id}`);
    fetchPatients();
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div>
      <h2>Patients List</h2>
      <Link to="/add-patient">Add Patient</Link>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.gender}</td>
              <td>{p.contact}</td>
              <td>
                <Link to={`/edit-patient/${p.id}`}>Edit</Link> |{" "}
                <button onClick={() => deletePatient(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientList;
