import React from 'react';
import ReactDOM from 'react-dom';

var Modal = ({ open, children, toggleModal }) => {
  if (open === false) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay" id="modal-root">
      <a className="modal-close" onClick={toggleModal}>
        X
      </a>
      {children}
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
