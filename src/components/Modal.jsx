// Modal.jsx
import React from 'react';
import './css/Modal.css';

function Modal({ children, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
}

export default Modal;