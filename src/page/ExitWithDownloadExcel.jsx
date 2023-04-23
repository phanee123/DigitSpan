import { CSVDownload, CSVLink } from "react-csv";
import { useContext } from "react";
import { ResultsContext } from "../context/Results";
const headers = [
  { label: "System Input", key: "systemInput" },
  { label: "User Input", key: "userInput" },
  { label: "Input Status", key: "isTrue" },
  { label: "Backward Flow", key: "flowStatus" },
  { label: "Number of digits", key: "numOfDigits" },
];

const ExitWithDownloadExcel = () => {
  const { results } = useContext(ResultsContext);

  const csvReport = {
    data: results,
    headers: headers,
    filename: `DigitsSpan_${new Date().toLocaleString()}`,
    extension: ".csv",
  };

  return (
    <div>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, iure.</h3>
      <CSVLink {...csvReport}>Download me</CSVLink>;
    </div>
  );
};

export default ExitWithDownloadExcel;
