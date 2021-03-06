import React from 'react';
import ReactDOM from 'react-dom';

var Modal = ({ open, children, toggleModal }) => {
  if (open === false) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay" id="modal-root">
      <div className="modal-controls">
        <a className="modal-close" onClick={toggleModal}>
          <img className="close-icon" src="./images/close-icon.png"></img>
        </a>
      </div>
      {children}
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
