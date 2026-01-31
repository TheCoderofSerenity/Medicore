import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axiosConfig";

function AddPatient() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/patients", { name, age, gender, contact });
    navigate("/patients");
  };

  return (
    <div>
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Age:</label>
          <input value={age} onChange={(e) => setAge(e.target.value)} required />
        </div>
        <div>
          <label>Gender:</label>
          <input value={gender} onChange={(e) => setGender(e.target.value)} required />
        </div>
        <div>
          <label>Contact:</label>
          <input value={contact} onChange={(e) => setContact(e.target.value)} required />
        </div>
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
}

export default AddPatient;
