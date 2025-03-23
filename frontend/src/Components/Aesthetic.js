import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import video from "../music/Aesthetic.mp4";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid text-white bg-black min-vh-100">
      <header className="Header text-center py-3">
        <h1>The Aesthetic Essential ⚝</h1>
      </header>

      <div className="d-flex flex-column align-items-center justify-content-center text-center gap-3 py-5">
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          <button type="button" className="btn btn-secondary" onClick={() => navigate("/")}>Home</button>
          <button type="button" className="btn btn-primary" onClick={() => navigate("/Aesthetic")}>Aesthetic</button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate("/Sekiro")}>Sekiro</button>
          <button type="button" className="btn btn-success" onClick={() => navigate("/Workout")}>Workout</button>
          <button type="button" className="btn btn-danger" onClick={() => navigate("/Energy")}>Energy</button>
        </div>

        <h1 className="song position-absolute">
        sometimes i wish you never 
        <span style={{color: "pink", fontFamily: "The Aesthetic Essential, sans-serif" }}> came. </span>i was fine before i heard your
        <span style={{color: "pink", fontFamily: "The Aesthetic Essential, sans-serif" }}> name </span>but then you came around and changed
        <span style={{color: "pink", fontFamily: "The Aesthetic Essential, sans-serif" }}> me. </span>now i'll never be the
        <span style={{color: "pink", fontFamily: "The Aesthetic Essential, sans-serif" }}> same. </span>oh will i trust a-
        <span style={{color: "pink", fontFamily: "The Aesthetic Essential, sans-serif" }}>again? </span>troubled minds am i 
        <span style={{color: "pink", fontFamily: "The Aesthetic Essential, sans-serif" }}> insane? </span>no you're the one to
        <span style={{color: "pink", fontFamily: "The Aesthetic Essential, sans-serif" }}> blame. </span>blame. no you're the one to  
        <span style={{color: "pink", fontFamily: "The Aesthetic Essential, sans-serif" }}> blame. </span>girl you're the one to-
        </h1>

        </div>
        <div className="aesthetic-video-container">
          <video controls>
            <source src={video} type="video/mp4" />
          </video>
      </div>
    </div>
  );
}

export default Home;