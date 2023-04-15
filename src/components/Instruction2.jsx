import Instruction from "./Instruction/Instruction";
import { useNavigate } from "react-router-dom";
const Content = () => (
  <>
    <h2>Instructions</h2>
    <p>
      In this experiment, to study span of attention five different types of visual stimuli/ conditions will be
      presented.
    </p>
    <p>Each condition will be administered separately.</p>
    <p>And, instructions are given separately for each condition.</p>
    <p>*For Demo purposes we are only presenting one condition.</p>
  </>
);
const Instruction2 = () => {
  const navigate = useNavigate();
  return (
    <Instruction handleOnClick={() => navigate("/inst3")} label="Next">
      <Content />
    </Instruction>
  );
};

export default Instruction2;
