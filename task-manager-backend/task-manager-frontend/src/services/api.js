import axios from "axios";

const API_URL = "http://localhost:5000/tasks";

// Fetch all tasks
export const getTasks = () => axios.get(API_URL);

// Add a new task
export const addTask = (task) => axios.post(API_URL, task);

// Update a task
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);

// Delete a task
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
