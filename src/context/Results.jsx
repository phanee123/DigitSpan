import { createContext, useEffect, useState } from "react";
import { generateRandomNumbers } from "../common/common";
import { useNavigate } from "react-router-dom";

export const ResultsContext = createContext({
  results: [],
  setResults: () => {},
  currentStep: 3,
  setCurrentStep: () => {},
  isRetry: false,
  setIsRetry: () => {},
});

export const ResultsProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(3);
  const [results, setResults] = useState([{ systemInput: generateRandomNumbers(currentStep) }]);
  const [isRetry, setIsRetry] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/test");
  }, [results.length]);

  const value = { results, setResults, currentStep, setCurrentStep, isRetry, setIsRetry };
  return <ResultsContext.Provider value={value}>{children}</ResultsContext.Provider>;
};
