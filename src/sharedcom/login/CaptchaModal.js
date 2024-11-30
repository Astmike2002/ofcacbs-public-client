import React from 'react';
import Modal from 'react-modal';
import Captcha from './Captcha';

Modal.setAppElement('#root'); // Accessibility setting

const CaptchaModal = ({ isOpen, closeModal }) => {

  const handleCaptchaSubmit = (captchaValue) => {
    // console.log("Submitting Captcha value to the server:", captchaValue);
    // Implement your server-side verification logic here

    // Close modal after submission (optional)
    closeModal();
  };

  return (
    <Modal
      // isOpen={isOpen}
      // onRequestClose={closeModal}
      // contentLabel="Captcha Modal"
      // className="Modal"
      // overlayClassName="Overlay"
    >
      {/* <h2>Captcha Verification</h2> */}
      <Captcha onSubmit={handleCaptchaSubmit} />
      {/* <button onClick={closeModal}>Close</button> */}
    </Modal>
  );
};

export default CaptchaModal;