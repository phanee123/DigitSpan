import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Instructions from "./page/Instructions";
import NumberPad from "./page/numberpad/NumberPad";
import Test from "./page/test";
import ExitWithDownloadExcel from "./page/ExitWithDownloadExcel";
import PageNotFound from "./page/PageNotFound";
import { ResultsProvider } from "./context/Results";
import "./App.css";

function App() {
  return (
    <main className="main-container">
      <BrowserRouter>
        <ResultsProvider>
          <Routes>
            <Route path="/" element={<Instructions />} />
            <Route path="/test" element={<Test />} />
            <Route path="/numberpad" element={<NumberPad />} />
            <Route path="/exitWithExcel" element={<ExitWithDownloadExcel />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ResultsProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
