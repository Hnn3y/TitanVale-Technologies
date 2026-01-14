import { Routes, Route } from "react-router-dom";
import Landing from "../pages/LandingPage";
import Welcome from "../pages/Welcome";
import Login from "../pages/LoginPage";
import "./App.css";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;