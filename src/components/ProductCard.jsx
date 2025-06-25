import React, { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleCartClick = () => {
    if (!product.stock) return;
    onAddToCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-card shadow rounded position-relative">
      {!product.stock && (
        <span className="badge bg-danger out-of-stock">Out of Stock</span>
      )}

      <div className="image-wrapper">
        <img src={product.thumbnail} alt={product.title} className="w-100" />
      </div>

      <div className="p-3 text-center">
        <h5 className="product-title">{product.title}</h5>

        <div className="text-warning mb-2">
          {"★".repeat(Math.round(product.rating))}
          {"☆".repeat(5 - Math.round(product.rating))}
        </div>

        <h6 className="text-success mb-3">₹{product.price}</h6>

        <button
          className={`btn ${product.stock ? "btn-primary" : "btn-secondary"} w-100`}
          disabled={!product.stock}
          onClick={handleCartClick}
        >
          <i className={`bi ${added ? "bi-check-circle-fill" : "bi-cart-plus"} me-2`}></i>
          {added ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
