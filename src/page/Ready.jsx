import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
const Ready = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(`/test`);
    }, 2500);
  }, []);
  return <h1>Ready</h1>;
};

export default Ready;
