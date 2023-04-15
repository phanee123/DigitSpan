import React from "react";
import styles from "./Styles.module.css";

const Instruction = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          {props.children}
          <button onClick={props.handleOnClick} className={styles.button}>
            {props.label}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
