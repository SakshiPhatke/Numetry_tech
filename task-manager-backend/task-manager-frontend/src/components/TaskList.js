import React, { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../services/api";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const response = await getTasks();
        setTasks(response.data);
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        loadTasks(); // Refresh list
    };

    return (
        <div>
            <h2>Task Management</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Due Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.status}</td>
                            <td>{task.due_date}</td>
                            <td>
                                <button onClick={() => handleDelete(task.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;
