import { React } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

// Componente genérico para encapsular contenido y mostrarlo destacado en la App.
function Modal({ children }) {
  return createPortal(
    <div className='modal-bg'>{children}</div>,
    document.getElementById("modal")
  );
}

export { Modal };
