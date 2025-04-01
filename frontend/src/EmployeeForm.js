import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ onSave, selectedEmployee }) => {
  const [employee, setEmployee] = useState({ name: '', email: '', position: '', salary: '' });

  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(employee);
    setEmployee({ name: '', email: '', position: '', salary: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={employee.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={employee.email} onChange={handleChange} required />
      <input name="position" placeholder="Position" value={employee.position} onChange={handleChange} required />
      <input name="salary" placeholder="Salary" value={employee.salary} onChange={handleChange} required />
      <button type="submit">{selectedEmployee ? 'Update Employee' : 'Add Employee'}</button>
    </form>
  );
};

export default EmployeeForm;
