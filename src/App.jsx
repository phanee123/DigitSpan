import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Instructions from "./page/Instructions";
import NumberPad from "./page/numberpad/NumberPad";
import Test from "./page/test";
import ExitWithDownloadExcel from "./page/ExitWithDownloadExcel";
import Ready from "./page/Ready";
import PageNotFound from "./page/PageNotFound";
import { ResultsProvider } from "./context/Results";
import Intervention from "./page/intervention";
import LastPage from "./page/LastPage";

import "./App.css";

function App() {
  return (
    <main className="main-container">
      <BrowserRouter>
        <ResultsProvider>
          <Routes>
            <Route path="/" element={<Instructions />} />
            <Route path="/test" element={<Test />} />
            <Route path="/ready" element={<Ready />} />
            <Route path="/numberpad" element={<NumberPad />} />
            <Route path="/intervention" element={<Intervention />} />
            <Route path="/exitWithExcel" element={<ExitWithDownloadExcel />} />
            <Route path="/lastactivity" element={<LastPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ResultsProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
