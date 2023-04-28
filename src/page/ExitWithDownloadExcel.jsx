import { CSVLink } from "react-csv";
import { useContext } from "react";
import { ResultsContext } from "../context/Results";
const headers = [
  { label: "System Input", key: "systemInput" },
  { label: "User Input", key: "userInput" },
  { label: "Input Status", key: "isTrue" },
  { label: "Backward Flow", key: "flowStatus" },
  { label: "Number of digits", key: "numOfDigits" },
];

const styles = {
  display: "flex",
  gap: "8px",
  flexDirection: "column",
};

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
  console.log(results);

  const csvReport = {
    data: results,
    headers: headers,
    filename: `DigitsSpan_${new Date().toLocaleString()}`,
    extension: ".csv",
  };

  return (
    <div style={{ ...styles }}>
      <h2>Results</h2>
      <h4>Forward Score: {getScore(results, "FORWARD")}</h4>
      <h4>Reverse Score: {getScore(results, "REVERSE")}</h4>
      <h4>Please click the below link to download the results</h4>
      <CSVLink {...csvReport}>Download me</CSVLink>
    </div>
  );
};

export default ExitWithDownloadExcel;
