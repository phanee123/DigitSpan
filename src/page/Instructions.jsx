import { useState } from "react";
import { useNavigate } from "react-router-dom";
import INSTRUCTION_STEPS from "../constants/InstructionSteps";
import Instruction from "../components/instruction/Instruction";

const Instructions = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const { stepIndex, buttonLabel, content } = INSTRUCTION_STEPS[currentStep];

  const clickHandler = stepIndex === 6 ? () => navigate("/test") : () => setCurrentStep((prev) => prev + 1);
  return (
    <Instruction handleOnClick={clickHandler} label={buttonLabel}>
      {content}
    </Instruction>
  );
};

export default Instructions;
