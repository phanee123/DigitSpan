import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NUMBER_OF_SECONDS, getRandomInt, NUM_QUESTIONS_INTERVENTION } from "../../constants/general";
import styles from "./styles.module.css";

const randomNumbers = Array.from(Array(NUM_QUESTIONS_INTERVENTION * 2).keys()).map((_, i) => getRandomInt(10, 99));
let results = [];

for (let i = 0; i < randomNumbers.length; i = i + 2) {
  results.push([randomNumbers[i], randomNumbers[i + 1]]);
}
const Intervention = () => {
  const navigate = useNavigate();
  const [sum, setSum] = useState();
  const [currentSum, setCurrentSum] = useState({});
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, NUMBER_OF_SECONDS * 1000);
  }, []);
  console.log(currentSum);
  return (
    <div className={styles.container}>
      <h2>Find the sum of below numbers</h2>
      <div className={styles.questions}>
        {results.map((eachPair, _index) => (
          <h2 className={styles.sum} key={_index}>
            {`${eachPair[0]} + ${eachPair[1]}`} =
            <input
              value={currentSum._index}
              type="number"
              onChange={(e) => setCurrentSum((prev) => ({ ...prev, [_index]: e.target.value }))}
              className={styles.inputStyles}
            />
          </h2>
        ))}
      </div>
    </div>
  );
};

export default Intervention;
