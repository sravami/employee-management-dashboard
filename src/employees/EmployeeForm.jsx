import { useState } from "react";

function EmployeeForm({ onAdd }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return alert("Name required");

    onAdd({
      id: Date.now(),
      name,
      active: true,
    });

    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
