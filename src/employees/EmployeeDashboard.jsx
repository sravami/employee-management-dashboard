import { useEffect, useState } from "react";
import { getEmployees, saveEmployees } from "../services/employeeService";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";

function EmployeeDashboard() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(getEmployees());
  }, []);

  const addEmployee = (emp) => {
    const updated = [...employees, emp];
    setEmployees(updated);
    saveEmployees(updated);
  };

  const deleteEmployee = (id) => {
    const updated = employees.filter(e => e.id !== id);
    setEmployees(updated);
    saveEmployees(updated);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Employee Dashboard</h2>

      <EmployeeForm onAdd={addEmployee} />
      <EmployeeList employees={employees} onDelete={deleteEmployee} />
    </div>
  );
}

export default EmployeeDashboard;
