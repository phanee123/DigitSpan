import Instruction from "./Instruction/Instruction";
import { useNavigate } from "react-router-dom";
const Content = () => (
  <>
    <h2>Condition 1 - Digits</h2>
    <p>Please sit comfortably and feel relaxed. Look at the screen carefully.</p>
    <p>The word "Ready" will appear on the screen.</p>
    <p>After that, few digits will be presented on the screen for a short duration on the screen.</p>
    <p>Remember the numbers you see.</p>
  </>
);
const Instruction4 = () => {
  const navigate = useNavigate();
  return (
    <Instruction handleOnClick={() => navigate("/inst5")} label="Next">
      <Content />
    </Instruction>
  );
};

export default Instruction4;
