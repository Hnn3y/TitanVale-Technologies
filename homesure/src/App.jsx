import { Routes, Route } from "react-router-dom";
import Landing from "../pages/LandingPage";
import "./App.css";
import Welcome from "../pages/Welcome";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
  );
}

export default App;