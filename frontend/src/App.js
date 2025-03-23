import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Aesthetic from "./Components/Aesthetic"
import Sekiro from "./Components/Sekiro"
import Workout from "./Components/Workout"
import Society from "./Components/Society"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aesthetic" element={<Aesthetic />} />
        <Route path="/Sekiro" element={<Sekiro />} />
        <Route path="/Workout" element={<Workout />} />
        <Route path="/Society" element={<Society />} />
      </Routes>
    </Router>
  );
}

export default App;