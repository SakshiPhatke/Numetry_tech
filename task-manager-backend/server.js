const express = require("express");
const mysql = require("mysql2"); // ✅ Using mysql2
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ MySQL Database Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "taskmanager",
    password: process.env.DB_PASSWORD || "taskpassword",
    database: process.env.DB_NAME || "task_management"
});

db.connect(err => {
    if (err) {
        console.error("❌ Database connection failed:", err);
        process.exit(1); // Stop server if DB connection fails
    } else {
        console.log("✅ MySQL Connected...");
    }
});

// **Create Task**
app.post("/tasks", (req, res) => {
    const { title, description, status, due_date } = req.body;
    if (!title || !status) {
        return res.status(400).json({ error: "Title and status are required" });
    }
    const sql = "INSERT INTO tasks (title, description, status, due_date) VALUES (?, ?, ?, ?)";
    db.query(sql, [title, description, status, due_date], (err, result) => {
        if (err) {
            console.error("❌ Error adding task:", err);
            return res.status(500).json({ error: "Server Error" });
        }
        res.status(201).json({ message: "✅ Task added successfully", taskId: result.insertId });
    });
});

// **Get All Tasks**
app.get("/tasks", (req, res) => {
    db.query("SELECT * FROM tasks", (err, results) => {
        if (err) {
            console.error("❌ Error fetching tasks:", err);
            return res.status(500).json({ error: "Server Error" });
        }
        res.json(results);
    });
});

// **Update Task**
app.put("/tasks/:id", (req, res) => {
    const { title, description, status, due_date } = req.body;
    const { id } = req.params;
    if (!title || !status) {
        return res.status(400).json({ error: "Title and status are required" });
    }
    const sql = "UPDATE tasks SET title=?, description=?, status=?, due_date=? WHERE id=?";
    db.query(sql, [title, description, status, due_date, id], (err, result) => {
        if (err) {
            console.error("❌ Error updating task:", err);
            return res.status(500).json({ error: "Server Error" });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.json({ message: "✅ Task updated successfully" });
    });
});

// **Delete Task**
app.delete("/tasks/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM tasks WHERE id=?", [id], (err, result) => {
        if (err) {
            console.error("❌ Error deleting task:", err);
            return res.status(500).json({ error: "Server Error" });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.json({ message: "✅ Task deleted successfully" });
    });
});

// **Server Start**
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
