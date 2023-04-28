import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { INSTRUCTION_STEPS_FORWARD, INSTRUCTION_STEPS_BACKWARD } from "../constants/InstructionSteps";
import Instruction from "../components/instruction/Instruction";
import { ResultsContext } from "../context/Results";

const Instructions = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const { flowStatus } = useContext(ResultsContext);
  const CURRENT_INSTRUCTIONS = flowStatus === "FORWARD" ? INSTRUCTION_STEPS_FORWARD : INSTRUCTION_STEPS_BACKWARD;
  const { stepIndex, buttonLabel1 = "", content, buttonLabel2 = "" } = CURRENT_INSTRUCTIONS[currentStep];

  const handleNextClick =
    stepIndex === CURRENT_INSTRUCTIONS.length ? () => navigate("/ready") : () => setCurrentStep((prev) => prev + 1);
  const handleBackClick = () => setCurrentStep((prev) => prev - 1);
  return (
    <Instruction
      handleNextClick={handleNextClick}
      label1={buttonLabel1}
      label2={buttonLabel2}
      handleBackClick={handleBackClick}
    >
      {content}
    </Instruction>
  );
};

export default Instructions;
