import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <React.Fragment>
      <div className={classes.backdrop} onClick={onClose} />
      <div className={classes.container}>
        {children}
        <button className={classes.close} onClick={onClose}>
          Close Modal
        </button>
      </div>
    </React.Fragment>,
    document.getElementById("portal")
  );
}
