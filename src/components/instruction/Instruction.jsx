import styles from "./styles.module.css";
import Parser from "html-react-parser";

const Instruction = (props) => {
  const { children, label1, label2, handleBackClick, handleNextClick } = props;
  return (
    <div className={styles.card}>
      {Parser(children)}
      <div className={styles.buttonContainer}>
        {label1 && (
          <button onClick={props.handleBackClick} className={styles.buttonBack}>
            {label1}
          </button>
        )}
        {label2 && (
          <button onClick={props.handleNextClick} className={styles.button}>
            {label2}
          </button>
        )}
      </div>
    </div>
  );
};

export default Instruction;
