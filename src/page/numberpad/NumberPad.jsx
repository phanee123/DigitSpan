import { useState, useContext } from "react";
import { NUMPAD_DIGITS } from "../../constants/general";
import styles from "./styles.module.css";
import { ResultsContext } from "../../context/Results";
import { generateRandomNumbers, arrayEquals } from "../../common/common";

const NumberPad = () => {
  const [userInput, setUserInput] = useState([]);
  const { results, setResults, currentStep, setCurrentStep } = useContext(ResultsContext);

  const digitClickHandler = (currentInput) => {
    setUserInput((prev) => [...prev, currentInput]);
  };

  const submitHandler = () => {
    const updatedResult = results.map((eachStepResult, index) => {
      if (index === results.length - 1) {
        return { ...eachStepResult, userInput };
      } else return eachStepResult;
    });
    const currentStepResult = updatedResult[updatedResult.length - 1];
    if (arrayEquals(currentStepResult?.systemInput, currentStepResult?.userInput)) {
      updatedResult.push({ systemInput: generateRandomNumbers(currentStep + 1) });
      setCurrentStep(currentStep + 1);
    } else {
      debugger;
      updatedResult.push({ systemInput: generateRandomNumbers(currentStep) });
    }
    setResults(updatedResult);
  };

  console.log({ currentStep });
  return (
    <div className={styles.container}>
      <div className={styles.numberpadWrapper}>
        {NUMPAD_DIGITS.map((digit) => (
          <button className={styles.buttondigit} key={digit} onClick={() => digitClickHandler(digit)}>
            {digit}
          </button>
        ))}
      </div>
      <div className={styles.actionsWrapper}>
        <button className={styles.buttonAction}>Clear</button>
        <button className={styles.buttonAction} onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default NumberPad;
