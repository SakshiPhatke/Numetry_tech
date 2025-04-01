import axios from 'axios';

const API_URL = 'http://localhost:5000/employees';

// Fetch all employees
export const fetchEmployees = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add a new employee
export const addEmployee = async (employee) => {
  const response = await axios.post(API_URL, employee);
  return response.data;
};

// Update an employee
export const updateEmployee = async (id, employee) => {
  const response = await axios.put(`${API_URL}/${id}`, employee);
  return response.data;
};

// Delete an employee
export const deleteEmployee = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
