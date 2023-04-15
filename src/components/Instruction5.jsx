import Instruction from "./Instruction/Instruction";
import { useNavigate } from "react-router-dom";
const Content = () => (
  <>
    <p>Once you have remembered the numbers presented, you need to repeat them.</p>
    <p>You will see a key pad on the screen to enter your responses.</p>
    <p>Use the mouse to enter the numbers.</p>
  </>
);
const Instruction5 = () => {
  const navigate = useNavigate();
  return (
    <Instruction handleOnClick={() => navigate("/start")} label="Next">
      <Content />
    </Instruction>
  );
};

export default Instruction5;
