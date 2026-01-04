import { useState } from "react";

const STATES = ["Andhra Pradesh", "Telangana", "Karnataka", "Tamil Nadu"];

function EmployeeForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    dob: "",
    state: "",
    active: true,
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, gender, dob, state } = form;
    if (!name || !gender || !dob || !state) {
      return alert("All fields are required");
    }

    onAdd({
      ...form,
      id: Date.now(),
    });

    setForm({
      name: "",
      gender: "",
      dob: "",
      state: "",
      active: true,
      image: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
      />

      <select name="gender" value={form.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <input type="date" name="dob" value={form.dob} onChange={handleChange} />

      <select name="state" value={form.state} onChange={handleChange}>
        <option value="">Select State</option>
        {STATES.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>

      <input type="file" accept="image/*" onChange={handleImage} />

      {form.image && (
        <img src={form.image} alt="preview" width="80" />
      )}

      <button>Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
