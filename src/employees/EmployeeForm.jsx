import { useEffect, useState } from "react";

const STATES = [
  "Andhra Pradesh",
  "Telangana",
  "Karnataka",
  "Tamil Nadu",
];

function EmployeeForm({ onAdd, editingEmp, onCancel }) {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    dob: "",
    state: "",
    active: true,
    image: "",
  });

  // Load data into form when editing
  useEffect(() => {
    if (editingEmp) {
      setForm(editingEmp);
    }
  }, [editingEmp]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

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
      alert("All fields are required");
      return;
    }

    onAdd({
      ...form,
      id: editingEmp ? editingEmp.id : Date.now(),
    });

    // Reset form after save
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
    <form onSubmit={handleSubmit} style={{ marginBottom: "25px" }}>
      <h3>{editingEmp ? "Edit Employee" : "Add Employee"}</h3>

      <input
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
      />

      <br /><br />

      <select name="gender" value={form.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <br /><br />

      <input
        type="date"
        name="dob"
        value={form.dob}
        onChange={handleChange}
      />

      <br /><br />

      <select name="state" value={form.state} onChange={handleChange}>
        <option value="">Select State</option>
        {STATES.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>

      <br /><br />

      <input type="file" accept="image/*" onChange={handleImage} />

      <br /><br />

      {form.image && (
        <img
          src={form.image}
          alt="Preview"
          width="80"
          style={{ borderRadius: "5px" }}
        />
      )}

      <br /><br />

      <button type="submit">
        {editingEmp ? "Update Employee" : "Add Employee"}
      </button>

      {editingEmp && (
        <button
          type="button"
          onClick={onCancel}
          style={{ marginLeft: "10px" }}
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default EmployeeForm;
