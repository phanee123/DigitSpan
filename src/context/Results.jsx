import { createContext, useEffect, useState } from "react";
import { generateRandomNumbers } from "../common/common";
import { useNavigate } from "react-router-dom";
import { START_TEST_WITH_DIGIT } from "../constants/general";

export const ResultsContext = createContext({
  results: [],
  setResults: () => {},
  currentStep: 3,
  setCurrentStep: () => {},
  flowStatus: "FORWARD",
  setFlowStatus: () => {},
});

export const ResultsProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(START_TEST_WITH_DIGIT);
  const [flowStatus, setFlowStatus] = useState("FORWARD");
  const [results, setResults] = useState([
    { systemInput: generateRandomNumbers(currentStep), numOfDigits: START_TEST_WITH_DIGIT, flowStatus },
  ]);
  const navigate = useNavigate();

  const value = { results, setResults, currentStep, setCurrentStep, flowStatus, setFlowStatus };
  return <ResultsContext.Provider value={value}>{children}</ResultsContext.Provider>;
};
