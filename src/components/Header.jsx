import React from "react";

const Header = ({ onFilter, cartCount, openCart }) => {
  return (
    <header className="py-3 shadow-sm sticky-top" style={{ backgroundColor: "#2c3e50" }}>
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        <h3 className="fw-bold" style={{ color: "#f1c40f" }}>DPR Mart</h3>

        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-outline-info btn-sm" onClick={() => onFilter("all")}>All</button>
          <button className="btn btn-outline-info btn-sm" onClick={() => onFilter("grocery")}>grocery</button>
          <button className="btn btn-outline-info btn-sm" onClick={() => onFilter("laptops")}>Laptops</button>
          <button className="btn btn-outline-info btn-sm" onClick={() => onFilter("watches")}>Watches</button>
        </div>

        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-cart-fill fs-5 text-warning" role="button" onClick={openCart}></i>
          <span className="badge rounded-pill" style={{ backgroundColor: "#f7dc6f", color: "#000" }}>{cartCount}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
