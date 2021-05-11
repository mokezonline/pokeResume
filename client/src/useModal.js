import React, { useState } from 'react';

import Modal from './Modal';

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const RenderModal = ({ children, onClose }) => (
    <React.Fragment>
      {isVisible && <Modal closeModal={hide} onClose={onClose}>{children}</Modal>}
    </React.Fragment>
  );

  return {
    show,
    hide,
    RenderModal,
  }
};