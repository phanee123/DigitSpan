import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Instructions from "./pages/Instructions";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Instructions />,
  },
]);
function App() {
  return (
    <main className="main-container">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
