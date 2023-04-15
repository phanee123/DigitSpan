import Instruction from "../components/Instruction/Instruction";
import INSTRUCTION_STEPS from "../constants/InstructionSteps";
import { useState } from "react";
const Instructions = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { buttonLabel, content } = INSTRUCTION_STEPS[currentStep];
  return (
    <Instruction handleOnClick={() => setCurrentStep((prev) => prev + 1)} label={buttonLabel}>
      {content}
    </Instruction>
  );
};

export default Instructions;
