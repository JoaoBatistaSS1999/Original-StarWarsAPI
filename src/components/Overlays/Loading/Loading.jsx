import React from "react";
import ReactDOM from "react-dom";
import styles from "./Loading.module.css";

function Loading({ open }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <React.Fragment>
      <div className={styles.backdrop} />
      <div className={styles.container}>
        <svg viewBox='25 25 50 50'>
          <circle cx='50' cy='50' r='20'></circle>
        </svg>
      </div>
    </React.Fragment>,
    document.getElementById("modal")
  );
}

export default Loading;
