import db from '../config/db.js';

// Get all employees
export const getAllEmployees = (req, res) => {
  db.query('SELECT * FROM employees', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Add a new employee
export const addEmployee = (req, res) => {
  const { name, email, position, salary } = req.body;
  const sql = 'INSERT INTO employees (name, email, position, salary) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, position, salary], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Employee added successfully' });
  });
};

// Update employee details
export const updateEmployee = (req, res) => {
  const { id } = req.params;
  const { name, email, position, salary } = req.body;
  const sql = 'UPDATE employees SET name=?, email=?, position=?, salary=? WHERE id=?';
  db.query(sql, [name, email, position, salary, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Employee updated successfully' });
  });
};

// Delete an employee
export const deleteEmployee = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM employees WHERE id=?';
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Employee deleted successfully' });
  });
};
