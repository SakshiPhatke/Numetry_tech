import React, { useState } from "react";
import { addTask } from "../services/api";

const TaskForm = ({ onTaskAdded }) => {
    const [task, setTask] = useState({
        title: "",
        description: "",
        status: "Pending",
        due_date: "",
    });

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addTask(task);
        setTask({ title: "", description: "", status: "Pending", due_date: "" });
        onTaskAdded(); // Refresh task list
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title" value={task.title} onChange={handleChange} required />
            <textarea name="description" placeholder="Description" value={task.description} onChange={handleChange} required></textarea>
            <select name="status" value={task.status} onChange={handleChange}>
                <option value="Pending">Pending</option>
                <option value="Pending">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <input type="date" name="due_date" value={task.due_date} onChange={handleChange} required />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
