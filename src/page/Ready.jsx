import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import readyAudio from "../assets/ready.mp3";

const Ready = () => {
  const navigate = useNavigate();
  const ready = new Audio(readyAudio);

  useEffect(() => {
    ready.play();
    setTimeout(() => {
      navigate(`/test`);
    }, 2500);
  }, []);
  return <h1>Ready</h1>;
};

export default Ready;
