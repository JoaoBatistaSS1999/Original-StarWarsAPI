import React from "react";
import ReactDOM from "react-dom";
import styles from "./FetchError.module.css";

export default function FetchError({ open, children, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <React.Fragment>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.container}>
        <h3>Sorry, something went wrong.</h3>
        {children}
        <button className={styles.close} onClick={onClose}>
          Ok
        </button>
      </div>
    </React.Fragment>,
    document.getElementById("modal")
  );
}
