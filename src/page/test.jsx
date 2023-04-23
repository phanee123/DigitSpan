import { useState, useContext, useEffect } from "react";

import { ResultsContext } from "../context/Results";
import Flash from "../components/flash/Flash";

const Test = () => {
  const { results } = useContext(ResultsContext);
  const valuesToFlash = results[results.length - 1]?.systemInput;
  console.log({ valuesToFlash });
  console.log({ results });
  return <Flash toFlash={results[results.length - 1]?.systemInput} />;
};

export default Test;
