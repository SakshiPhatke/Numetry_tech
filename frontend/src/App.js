import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: '', description: '', price: '', category: '', stock: ''
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
    };

    const handleChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };

    const addProduct = async () => {
        await axios.post('http://localhost:5000/products', newProduct);
        fetchProducts();
    };

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}`);
        fetchProducts();
    };

    return (
      <div className="container mt-4">
          <h2 className="mb-4 text-center">✨ Product Management System ✨</h2>
          <div className="mb-3 text-center">
              <input className="form-control mb-2" type="text" name="name" placeholder="Product Name" onChange={handleChange} />
              <input className="form-control mb-2" type="text" name="description" placeholder="Description" onChange={handleChange} />
              <input className="form-control mb-2" type="number" name="price" placeholder="Price" onChange={handleChange} />
              <input className="form-control mb-2" type="text" name="category" placeholder="Category" onChange={handleChange} />
              <input className="form-control mb-2" type="number" name="stock" placeholder="Stock" onChange={handleChange} />
              <button className="btn btn-primary w-100" onClick={addProduct}>➕ Add Product</button>
          </div>
  
          <div className="row">
              {products.map((product) => (
                  <div key={product.id} className="col-md-4">
                      <div className="card p-3">
                          <div className="card-body">
                              <h5 className="card-title">{product.name}</h5>
                              <p className="card-text">{product.description}</p>
                              <p><strong>Price:</strong> ${product.price}</p>
                              <p><strong>Category:</strong> {product.category}</p>
                              <p><strong>Stock:</strong> {product.stock}</p>
                              <button className="btn btn-danger w-100 mt-2" onClick={() => deleteProduct(product.id)}>🗑 Delete</button>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
}  
export default App;
