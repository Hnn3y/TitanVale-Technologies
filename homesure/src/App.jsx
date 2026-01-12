import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/LandingPage";
import "./App.css";
import Welcome from "./pages/Welcome";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;