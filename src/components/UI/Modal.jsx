import React from "react";
import styles from "./Modal.module.css";

function Modal({ children, setIsFormOpen }) {
  return (
    <>
      <div
        className={styles.modalBackDrop}
        onClick={() => {
          setIsFormOpen(false);
        }}></div>
      <div className={styles.modalContent}>{children}</div>
    </>
  );
}

export default Modal;
