import React, { useState } from "react";

function EmployeeManagementSystem() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [form, setForm] = useState({
    name: "",
    dob: "",
    contact: "",
    email: "",
    address: "",
    department: "",
    designation: "",
    salary: "",
  });
  const [editingIndex, setEditingIndex] = useState(-1);
  let show = () => {
    let x = document.getElementById("show");
    x.style.display = "block";
  };

  const handleAddOrUpdate = () => {
    if (editingIndex > -1) {
      const updatedEmployees = [...employees];
      updatedEmployees[editingIndex] = form;
      setEmployees(updatedEmployees);
      setEditingIndex(-1);
    } else {
      setEmployees([...employees, form]);
    }

    setForm({
      name: "",
      dob: "",
      contact: "",
      email: "",
      address: "",
      department: "",
      designation: "",
      salary: "",
    });

    let y = document.getElementById("show");
    y.style.display = "none";
  };

  const handleEdit = (index) => {
    setForm(employees[index]);
    setEditingIndex(index);

    let z = document.getElementById("show");
    z.style.display = "block";
  };

  const handleDelete = (index) => {
    setEmployees(employees.filter((_, i) => i !== index));
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container  border border-2 bg-primary text-white">
      <h1>Employee Management System</h1>

      <div
        className="container border border-2 bg-danger text-white"
        id="show"
        style={{ display: "none" }}
      >
        <h2 className="text-center">
          {editingIndex > -1 ? "Edit Employee" : "Add New Employee"}
        </h2>

        <div className="row">
          <div className="col">
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="form-control"
            />
          </div>
          <div className="col">
            <input
              type="date"
              value={form.dob}
              onChange={(e) => setForm({ ...form, dob: e.target.value })}
              className="form-control"
            />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col">
            <input
              type="text"
              placeholder="Contact"
              value={form.contact}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
              className="form-control"
            />
          </div>
          <div className="col">
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="form-control"
            />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col">
            <textarea
              placeholder="Address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="form-control"
            />
          </div>

          <div className="col">
            {" "}
            <input
              type="text"
              placeholder="Department"
              value={form.department}
              onChange={(e) => setForm({ ...form, department: e.target.value })}
              className="form-control"
            />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col">
            <input
              type="text"
              placeholder="Designation"
              value={form.designation}
              onChange={(e) =>
                setForm({ ...form, designation: e.target.value })
              }
              className="form-control"
            />
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="Salary"
              value={form.salary}
              onChange={(e) => setForm({ ...form, salary: e.target.value })}
              className="form-control"
            />
          </div>
        </div>

        <button
          onClick={handleAddOrUpdate}
          className="btn btn-primary mt-2 mb-2"
        >
          {editingIndex > -1 ? "Update" : "Add"}
        </button>
      </div>

      <div>
        <h2>Employee List</h2>
        <div className="row mt-2 mb-2 ">
          <div className="col">
            <button onClick={show} className="btn btn-success">
              Add Employee
            </button>
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <table border="1" className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>DOB</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Address</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((emp, index) => (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.dob}</td>
                <td>{emp.contact}</td>
                <td>{emp.email}</td>
                <td>{emp.address}</td>
                <td>{emp.department}</td>
                <td>{emp.designation}</td>
                <td>{emp.salary}</td>
                <td>
                  <button
                    onClick={() => handleEdit(index)}
                    className="btn btn-success me-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeManagementSystem;
