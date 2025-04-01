import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
    return (
        <Router>
            <div>
                <h1>Task Management System</h1>
                <TaskForm />
                <TaskList />
            </div>
        </Router>
    );
};

export default App;
