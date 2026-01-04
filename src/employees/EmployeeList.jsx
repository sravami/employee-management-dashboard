function EmployeeList({ employees, onDelete, onEdit, onToggle }) {
  if (employees.length === 0) {
    return <p>No employees found</p>;
  }

  return (
    <table border="1" cellPadding="8" width="100%">
      <thead>
        <tr>
          <th>Profile</th>
          <th>Full Name</th>
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
              {e.image && (
                <img
                  src={e.image}
                  alt="Profile"
                  width="50"
                  style={{ borderRadius: "50%" }}
                />
              )}
            </td>

            <td>{e.name}</td>
            <td>{e.gender}</td>
            <td>{e.dob}</td>
            <td>{e.state}</td>
            <td>{e.active ? "Active" : "Inactive"}</td>

            <td>
              <button onClick={() => onEdit(e)}>Edit</button>{" "}
              <button onClick={() => onToggle(e.id)}>
                {e.active ? "Deactivate" : "Activate"}
              </button>{" "}
              <button onClick={() => onDelete(e.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList;
