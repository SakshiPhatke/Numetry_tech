import React from "react";
import ProductCard from "./components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

// Importing images
import dressImage from "./assets/dress.jpg";
import jacketImage from "./assets/jacket.jpg";
import hushPuppiesImage from "./assets/headphone.jpg"; 
import skirtImage from "./assets/smartwatch.jpg"; 

const products = [
  { id: 1, name: "White traditional long dress", price: 7.99, discount: 30, image: dressImage, timer: 3600 },
  { id: 2, name: "Long sleeve denim jacket", price: 8.99, discount: 50, image: jacketImage, timer: 7200 },
  { id: 3, name: "Black Wireless Headphones", price: 9.42, discount: 25, image: hushPuppiesImage, timer: 5400 },
  { id: 4, name: " Digital Smart Watch", price: 3.99, discount: 40, image: skirtImage, timer: 6000 },
  { id: 1, name: "White traditional long dress", price: 9.99, discount: 20, image: dressImage, timer: 3600 },
  { id: 2, name: "Long sleeve denim jacket", price: 5.99, discount: 25, image: jacketImage, timer: 7200 },
];

const App = () => {
  return (
    <div className="container-fluid"> {/* Full Width Container */}
      <h1 className="text-center my-4">Product Showcase</h1>
      
      <div className="row justify-content-center">  
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
