import React from "react";
import styles from "./styles.module.css";
// import Parser from "html-react-parser";

const Instruction = (props) => {
  const { children, label } = props;
  return (
    <div className={styles.card}>
      {/* {Parser(children)} */}
      <button onClick={props.handleOnClick} className={styles.button}>
        {label}
      </button>
    </div>
  );
};

export default Instruction;
