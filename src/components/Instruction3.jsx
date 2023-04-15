import Instruction from "./Instruction/Instruction";
import { useNavigate } from "react-router-dom";
const Content = () => (
  <>
    <h2>Precautions</h2>
    <p>1.The subject has to sit 1-2 ft away from the screen.</p>
    <p>2.The subject has to sit in an isolated room so that he/she will not get distracted.</p>
    <p>3.If the subject is using phones/ tabs then its mandatory to put the phone on DND mode.</p>
  </>
);
const Instruction3 = () => {
  const navigate = useNavigate();
  return (
    <Instruction handleOnClick={() => navigate("/inst4")} label="Next">
      <Content />
    </Instruction>
  );
};

export default Instruction3;
