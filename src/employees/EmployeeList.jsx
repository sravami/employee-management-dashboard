function EmployeeList({ employees, onDelete }) {
  return (
    <ul>
      {employees.map(emp => (
        <li key={emp.id}>
          {emp.name}
          <button onClick={() => onDelete(emp.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default EmployeeList;
