import Instruction from "../components/instruction/Instruction";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const clickHandler = () => navigate("/");
  const content = "<h3>Page Not Found</h3";
  return (
    <Instruction handleOnClick={clickHandler} label="Go Back to Home">
      {content}
    </Instruction>
  );
};

export default PageNotFound;
