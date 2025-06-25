import React from "react";

const CartModal = ({ cartItems, onClose }) => {
  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">🛒 Cart Items</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {cartItems.length === 0 ? (
              <p className="text-center">Your cart is empty!</p>
            ) : (
              <ul className="list-group">
                {cartItems.map((item, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between">
                    <span>{item.title}</span>
                    <span className="text-success">₹{item.price}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
