const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Create a product
app.post('/products', (req, res) => {
    const { name, description, price, category, stock } = req.body;
    const query = 'INSERT INTO products (name, description, price, category, stock) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, description, price, category, stock], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Product added successfully', productId: result.insertId });
    });
});

// Get all products
app.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (err, result) => {
        if (err) return res.status(500).send(err);
        res.json(result);
    });
});

// Update a product
app.put('/products/:id', (req, res) => {
    const { name, description, price, category, stock } = req.body;
    const query = 'UPDATE products SET name=?, description=?, price=?, category=?, stock=? WHERE id=?';
    db.query(query, [name, description, price, category, stock, req.params.id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Product updated successfully' });
    });
});

// Delete a product
app.delete('/products/:id', (req, res) => {
    db.query('DELETE FROM products WHERE id=?', [req.params.id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Product deleted successfully' });
    });
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
