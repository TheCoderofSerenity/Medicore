import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../axiosConfig";

function EditPatient() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    const fetchPatient = async () => {
      const res = await axios.get(`/patients/${id}`);
      setName(res.data.name);
      setAge(res.data.age);
      setGender(res.data.gender);
      setContact(res.data.contact);
    };
    fetchPatient();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/patients/${id}`, { name, age, gender, contact });
    navigate("/patients");
  };

  return (
    <div>
      <h2>Edit Patient</h2>
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
        <button type="submit">Update Patient</button>
      </form>
    </div>
  );
}

export default EditPatient;
