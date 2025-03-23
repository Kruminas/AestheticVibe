import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Aesthetic from "./Components/Aesthetic"
import Sekiro from "./Components/Sekiro"
import Workout from "./Components/Workout"
import Energy from "./Components/Energy"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aesthetic" element={<Aesthetic />} />
        <Route path="/Sekiro" element={<Sekiro />} />
        <Route path="/Workout" element={<Workout />} />
        <Route path="/Energy" element={<Energy />} />
      </Routes>
    </Router>
  );
}

export default App;