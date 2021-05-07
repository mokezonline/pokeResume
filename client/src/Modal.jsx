import React from 'react';
import ReactDOM from 'react-dom';

const Modal = React.memo(({ children, closeModal }) => {
  const domEl = document.getElementById('modal-root');
  if (!domEl) {
    return null;
  }
  return ReactDOM.createPortal(
    <div>
      <button onClick={closeModal}>X</button>
      {children}
    </div>,
    domEl
  )
});

export default Modal;