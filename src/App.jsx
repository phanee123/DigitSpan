import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Instructions from "./page/Instructions";
import "./App.css";
import NumberPad from "./page/numberpad/NumberPad";
import Flash from "./components/flash/Flash";
import Test from "./page/test";
import { ResultsProvider } from "./context/Results";
function App() {
  return (
    <main className="main-container">
      <BrowserRouter>
        <ResultsProvider>
          <Routes>
            <Route path="/" element={<Instructions />} />
            <Route path="/test" element={<Test />} />
            <Route path="/numberpad" element={<NumberPad />} />
          </Routes>
        </ResultsProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
