import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axiosConfig";

function AddDoctor() {
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !specialization) {
      alert("All fields are required");
      return;
    }

    try {
      await axios.post("/doctors", {
        name: name,
        specialization: specialization,
      });

      alert("Doctor added successfully");
      navigate("/"); // go back to doctor list
    } catch (error) {
      console.error(error);
      alert("Error adding doctor");
    }
  };

  return (
    <div>
      <h2>Add Doctor</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter doctor name"
          />
        </div>

        <br />

        <div>
          <label>Specialization:</label><br />
          <input
            type="text"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            placeholder="Enter specialization"
          />
        </div>

        <br />

        <button type="submit">Add Doctor</button>
      </form>
    </div>
  );
}

export default AddDoctor;
