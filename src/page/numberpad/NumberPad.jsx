import { useState, useContext } from "react";
import { NUMPAD_DIGITS, END_TEST_WITH_DIGIT, START_TEST_WITH_DIGIT } from "../../constants/general";
import styles from "./styles.module.css";
import { ResultsContext } from "../../context/Results";
import { generateRandomNumbers, arrayEquals } from "../../common/common";
import { useNavigate } from "react-router-dom";
import sound from "../../assets/click.wav"

const NumberPad = () => {
  const [userInput, setUserInput] = useState([]);
  const navigate = useNavigate();
  const { results, setResults, currentStep, setCurrentStep, flowStatus, setFlowStatus } = useContext(ResultsContext);
  const clickAudio = new Audio(sound);

  const digitClickHandler = (currentInput) => {
    clickAudio.play();
    setUserInput((prev) => [...prev, currentInput]);
  };

  const clearHandler = () => {
    const currentUserInput = [...userInput];
    currentUserInput.pop();
    setUserInput(currentUserInput);
  };
  const submitHandler = () => {
    if (flowStatus === "REVERSE") {
      let currentStepResultValue = results[results.length - 1];
      currentStepResultValue = {
        ...currentStepResultValue,
        userInput,
        flowStatus,
        isTrue: arrayEquals(currentStepResultValue.systemInput, userInput, flowStatus),
      };

      const currentResults = [...results];
      currentResults.pop();
      currentResults.push(currentStepResultValue);
      if (
        currentResults.length % 3 === 0 &&
        currentResults.length !== (END_TEST_WITH_DIGIT - START_TEST_WITH_DIGIT + 1) * 6
      ) {
        const checkLast3False = currentResults.slice(-3).some((eachResult) => eachResult.isTrue);
        if (checkLast3False) {
          currentResults.push({ systemInput: generateRandomNumbers(currentStep + 1), numOfDigits: currentStep + 1 });
          setCurrentStep(currentStep + 1);
          setResults(currentResults);
          navigate("/test");
        } else {
          setResults(currentResults);
          // terminate the flow & download the excel
          navigate("/exitWithExcel");
        }
      } else if (currentResults.length === (END_TEST_WITH_DIGIT - START_TEST_WITH_DIGIT + 1) * 6) {
        setResults(currentResults);
        navigate("/exitWithExcel");
        // terminate the flow & download the excel
      } else {
        currentResults.push({ systemInput: generateRandomNumbers(currentStep), numOfDigits: currentStep, flowStatus });
        setResults(currentResults);
        navigate("/test");
      }
    } else {
      let currentStepResultValue = results[results.length - 1];
      currentStepResultValue = {
        ...currentStepResultValue,
        userInput,
        flowStatus,
        isTrue: arrayEquals(currentStepResultValue.systemInput, userInput, flowStatus),
      };

      const currentResults = [...results];
      currentResults.pop();
      currentResults.push(currentStepResultValue);
      if (
        currentResults.length % 3 === 0 &&
        currentResults.length !== (END_TEST_WITH_DIGIT - START_TEST_WITH_DIGIT + 1) * 3
      ) {
        const checkLast3False = currentResults.slice(-3).some((eachResult) => eachResult.isTrue);
        if (checkLast3False) {
          currentResults.push({ systemInput: generateRandomNumbers(currentStep + 1), numOfDigits: currentStep + 1 });
          setCurrentStep(currentStep + 1);
          setResults(currentResults);
          navigate("/test");
        } else {
          setCurrentStep(START_TEST_WITH_DIGIT);
          setFlowStatus("REVERSE");
          currentResults.push({
            systemInput: generateRandomNumbers(START_TEST_WITH_DIGIT),
            numOfDigits: START_TEST_WITH_DIGIT,
          });
          setResults(currentResults);
          navigate("/");
        }
      } else if (currentResults.length === (END_TEST_WITH_DIGIT - START_TEST_WITH_DIGIT + 1) * 3) {
        setCurrentStep(START_TEST_WITH_DIGIT);
        setFlowStatus("REVERSE");
        currentResults.push({
          systemInput: generateRandomNumbers(START_TEST_WITH_DIGIT),
          numOfDigits: START_TEST_WITH_DIGIT,
        });
        setResults(currentResults);
        navigate("/");
        // move to reverse
      } else {
        currentResults.push({ systemInput: generateRandomNumbers(currentStep), numOfDigits: currentStep, flowStatus });
        setResults(currentResults);
        navigate("/test");
      }
    }
  };

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
        <button className={styles.buttonAction} disabled={!userInput.length} onClick={clearHandler}>
          Clear
        </button>
        <button className={styles.buttonAction} disabled={!userInput.length} onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default NumberPad;
