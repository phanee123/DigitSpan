import React from "react";
import styles from "./styles.module.css";

const Instruction = (props) => {
  return (
    <div className={styles.card}>
      {props.children}
      <button onClick={props.handleOnClick} className={styles.button}>
        {props.label}
      </button>
    </div>
  );
};

export default Instruction;
