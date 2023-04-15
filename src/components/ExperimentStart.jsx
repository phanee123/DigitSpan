import Instruction from "./Instruction/Instruction";
import { useNavigate } from "react-router-dom";
const Content = () => <p>Experiment will start after you end instructions.</p>;
const ExperimentStart = () => {
  const navigate = useNavigate();
  return (
    <Instruction handleOnClick={() => navigate("/displayNums")} label="End Instructions">
      <Content />
    </Instruction>
  );
};

export default ExperimentStart;
