import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const ModalWrapper = ({ children, onCancel }) => {
  return (
    <>
      <div className="modal__container flex" onClick={onCancel}>
        {children}
      </div>
    </>
  );
};

function Modal({ children, onCancel }) {
  return ReactDOM.createPortal(
    <ModalWrapper onCancel={onCancel}>{children}</ModalWrapper>,
    document.querySelector("#modal-root")
  );
}

export default Modal;
