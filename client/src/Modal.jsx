import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  display: flex;
  margin-top: 5vh;
`;

const Xbutton = styled.button`
  position: absolute;
  margin-top: 1.5vh;
  margin-left: 75.3vw;
  z-index: 2;
  width: 3vw;
  height: 4vh;
  background-color: #98c9f5;
  border-color: black;
  border-width: 1px;
  border-radius: 5px;
  font-size: 2vh;
  color: #edfbff;
`;

const Modal = React.memo(({ children, closeModal }) => {
  const domEl = document.getElementById('modal-root');
  if (!domEl) {
    return null;
  }
  return ReactDOM.createPortal(
    <ModalWrapper>
      <Xbutton onClick={closeModal}>X</Xbutton>
      {children}
    </ModalWrapper>,
    domEl
  )
});

export default Modal;