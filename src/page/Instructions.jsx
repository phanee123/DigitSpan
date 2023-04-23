import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { INSTRUCTION_STEPS_FORWARD, INSTRUCTION_STEPS_BACKWARD } from "../constants/InstructionSteps";
import Instruction from "../components/instruction/instruction";
import { ResultsContext } from "../context/Results";

const Instructions = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const { flowStatus } = useContext(ResultsContext);
  const CURRENT_INSTRUCTIONS = flowStatus === "FORWARD" ? INSTRUCTION_STEPS_FORWARD : INSTRUCTION_STEPS_BACKWARD;
  const { stepIndex, buttonLabel, content } = CURRENT_INSTRUCTIONS[currentStep];

  const clickHandler =
    stepIndex === CURRENT_INSTRUCTIONS.length ? () => navigate("/test") : () => setCurrentStep((prev) => prev + 1);
  return (
    <Instruction handleOnClick={clickHandler} label={buttonLabel}>
      {content}
    </Instruction>
  );
};

export default Instructions;
