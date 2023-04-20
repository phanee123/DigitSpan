import { useState, useContext, useEffect } from "react";

import { ResultsContext } from "../context/Results";
import Flash from "../components/flash/Flash";

const Test = () => {
  const { results, currentStep } = useContext(ResultsContext);
  return <Flash toFlash={results[currentStep - 3]?.systemInput} />;
};

export default Test;
