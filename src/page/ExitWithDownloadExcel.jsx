import { CSVLink } from "react-csv";
import { useContext } from "react";
import { ResultsContext } from "../context/Results";
import { useNavigate } from "react-router-dom";

/*Adding CSS for Button*/

const styles = {
  container: {
    display: "flex",
    minHeight: "50vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  button: {
    display: "block",
    outline: "0",
    border: "0",
    padding: "8px 32px",
    backgroundColor: "#6666ff",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "600",
  },
};

const headers = [
  { label: "System Input", key: "systemInput" },
  { label: "User Input", key: "userInput" },
  { label: "Input Status", key: "isTrue" },
  { label: "Backward Flow", key: "flowStatus" },
  { label: "Number of digits", key: "numOfDigits" },
];

// const styles = {
//   display: "flex",
//   gap: "8px",
//   flexDirection: "column",
// };

const getScore = (array, key) => {
  const filteredResults = array.filter((item) => item.flowStatus === key);
  const lastResult = filteredResults.splice(-3).filter((item) => item.isTrue);
  if (lastResult.length === 3 || lastResult.length === 2) {
    return lastResult.slice(-1)[0].numOfDigits;
  }
  if (lastResult.length === 1) {
    return lastResult.slice(-1)[0].numOfDigits - 1;
  }
  if (lastResult.length === 0) {
    const lastResult = filteredResults.splice(-3).filter((item) => item.isTrue);
    if (lastResult.length === 3 || lastResult.length === 2) {
      return lastResult.slice(-1)[0].numOfDigits;
    }
    if (lastResult.length === 1) {
      return lastResult.slice(-1)[0].numOfDigits - 1;
    }
  }
};
const ExitWithDownloadExcel = () => {
  const { results } = useContext(ResultsContext);
  const navigate = useNavigate();
  console.log(results);

  const csvReport = {
    data: results,
    headers: headers,
    filename: `DigitsSpan_${new Date().toLocaleString()}`,
    extension: ".csv",
  };

  return (
    <div style={{ ...styles.container }}>
      <h2>Results</h2>
      <h4>
        Your Immediate memory span for forward series is:{" "}
        {getScore(results, "FORWARD")}
      </h4>
      <h4>
        Your Immediate memory span for backward series is:{" "}
        {getScore(results, "REVERSE")}
      </h4>
      <h4>
        Click on link below for your experiment result indicating digits
        presented in forward condition and backward condition
      </h4>
      <CSVLink {...csvReport}>Download me</CSVLink>
      <button style={styles.button} onClick={() => navigate("/lastactivity")}>
        Next
      </button>
    </div>
  );
};

export default ExitWithDownloadExcel;
