import { useState, useContext, useEffect } from "react";

import { ResultsContext } from "../context/Results";
import Flash from "../components/flash/Flash";

const Test = () => {
  const { results, currentStep } = useContext(ResultsContext);

  const valuesToFlash = results[results.length - 1]?.systemInput;
  console.log(valuesToFlash);
  return <Flash toFlash={results[results.length - 1]?.systemInput} />;
};

export default Test;
