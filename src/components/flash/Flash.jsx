import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Flash = ({ toFlash }) => {
  console.log({ toFlash });
  const [flashValue, setFlashValue] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    for (let i = 0; i <= toFlash?.length; i++) {
      setTimeout(() => {
        setFlashValue(toFlash[i]);
        if (i === toFlash.length) navigate("/numberpad");
      }, i * 1000);
    }
  }, []);

  return <p style={{ fontSize: "64px" }}>{flashValue}</p>;
};

export default Flash;
