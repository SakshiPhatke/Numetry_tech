import React, { useState, useEffect } from 'react';
import { fetchEmployees, addEmployee, updateEmployee, deleteEmployee } from './api';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const data = await fetchEmployees();
    setEmployees(data);
  };

  const handleSave = async (employee) => {
    if (employee.id) {
      await updateEmployee(employee.id, employee);
    } else {
      await addEmployee(employee);
    }
    setSelectedEmployee(null);
    loadEmployees();
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    loadEmployees();
  };

  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <EmployeeForm onSave={handleSave} selectedEmployee={selectedEmployee} />
      <EmployeeList employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
