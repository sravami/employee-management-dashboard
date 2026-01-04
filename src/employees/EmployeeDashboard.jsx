import { useEffect, useState } from "react";
import { getEmployees, saveEmployees } from "../services/employeeService";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";

function EmployeeDashboard() {
  const [employees, setEmployees] = useState([]);
  const [editingEmp, setEditingEmp] = useState(null);

  useEffect(() => {
    setEmployees(getEmployees());
  }, []);

  const saveEmployee = (emp) => {
    let updated;

    if (editingEmp) {
      updated = employees.map(e => e.id === emp.id ? emp : e);
      setEditingEmp(null);
    } else {
      updated = [...employees, emp];
    }

    setEmployees(updated);
    saveEmployees(updated);
  };

  const deleteEmployee = (id) => {
    if (!window.confirm("Are you sure?")) return;
    const updated = employees.filter(e => e.id !== id);
    setEmployees(updated);
    saveEmployees(updated);
  };

  const toggleStatus = (id) => {
    const updated = employees.map(e =>
      e.id === id ? { ...e, active: !e.active } : e
    );
    setEmployees(updated);
    saveEmployees(updated);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Employee Dashboard</h2>

      <div style={{ marginBottom: "20px" }}>
        <strong>Total:</strong> {employees.length} |{" "}
        <strong>Active:</strong> {employees.filter(e => e.active).length} |{" "}
        <strong>Inactive:</strong> {employees.filter(e => !e.active).length}
      </div>

      <EmployeeForm
        onAdd={saveEmployee}
        editingEmp={editingEmp}
        onCancel={() => setEditingEmp(null)}
      />

      <EmployeeList
        employees={employees}
        onDelete={deleteEmployee}
        onEdit={setEditingEmp}
        onToggle={toggleStatus}
      />
    </div>
  );
}

export default EmployeeDashboard;
