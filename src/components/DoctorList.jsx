import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../axiosConfig";

function EditDoctor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
  });

  // fetch doctor by id
  useEffect(() => {
    axios
      .get(`/doctors/${id}`)
      .then((res) => {
        setDoctor(res.data);
      })
      .catch(() => {
        alert("Doctor not found");
        navigate("/");
      });
  }, [id, navigate]);

  // handle input change
  const handleChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value,
    });
  };

  // update doctor
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`/doctors/${id}`, doctor)
      .then(() => {
        alert("Doctor updated successfully");
        navigate("/");
      })
      .catch(() => alert("Update failed"));
  };

  return (
    <div>
      <h2>Edit Doctor</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label><br />
          <input
            type="text"
            name="name"
            value={doctor.name}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Specialization</label><br />
          <input
            type="text"
            name="specialization"
            value={doctor.specialization}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <button type="submit">Update</button>
        &nbsp;
        <button type="button" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditDoctor;
