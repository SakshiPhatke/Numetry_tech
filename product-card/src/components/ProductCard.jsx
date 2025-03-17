import React from "react";
import CountdownTimer from "./CountdownTimer";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3">
      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.name} className="img-fluid" />
          <div className="discount-badge">{product.discount}%</div>
        </div>
        <div className="product-info">
          <h5>{product.name}</h5>
          <p className="price">${product.price}</p>
          <CountdownTimer initialTime={product.timer} />
          <button className="buy-btn">BUY +</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
