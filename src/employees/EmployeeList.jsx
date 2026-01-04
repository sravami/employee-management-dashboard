function EmployeeList({ employees, onDelete }) {
  if (employees.length === 0) {
    return <p>No employees found</p>;
  }

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>State</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((e) => (
          <tr key={e.id}>
            <td>
              {e.image && <img src={e.image} width="50" />}
            </td>
            <td>{e.name}</td>
            <td>{e.gender}</td>
            <td>{e.dob}</td>
            <td>{e.state}</td>
            <td>{e.active ? "Active" : "Inactive"}</td>
            <td>
              <button onClick={() => onDelete(e.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList;
