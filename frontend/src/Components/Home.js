import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import video from "../music/shoegaze.mp4"
function Home() {
  return (
    <div>

    {/*Header*/}

    <div>
     <h1 className="Header bg-dark text-white d-flex justify-content-center mt-0 w-100">The Aesthetic Essential ⚝</h1>   
    </div>

    {/*Buttons*/}
    
    <div className="min-vh-100 bg-black d-flex align-items-center justify-content-center gap-3 ">
    <button type="button" className="btn btn-primary">Aesthetic</button>
    <button type="button" className="btn btn-secondary">Sekiro</button>
    <button type="button" className="btn btn-success">Workout</button>
    <button type="button" className="btn btn-danger">Energy</button>

    {/*Lyrics*/}

    <h1 className="song position-absolute">
    sometimes i wish you never 
    <span style={{color: "pink", fontFamily: "The Aesthetic Essential, sans-serif" }}> came. </span>i was fine before i heard your
    <span style={{color: "pink", fontFamily: "The Aesthetic Essential, sans-serif" }}> name </span>but then you came around and changed
    <span style={{color: "pink", fontFamily: "The Aesthetic Essential, sans-serif" }}> me. </span>now i'll never be the
    <span style={{color: "pink", fontFamily: "The Aesthetic Essential, sans-serif" }}> same. </span>oh will i trust a-
    <span style={{color: "pink", fontFamily: "The Aesthetic Essential, sans-serif" }}>again?</span>troubled minds am i 
    <span style={{color: "pink", fontFamily: "The Aesthetic Essential, sans-serif" }}> insane? </span>no you're the one to
    <span style={{color: "pink", fontFamily: "The Aesthetic Essential, sans-serif" }}> blame. </span>blame. no you're the one to  
    <span style={{color: "pink", fontFamily: "The Aesthetic Essential, sans-serif" }}> blame. </span>girl you're the one to-
    </h1>

    {/*Video*/}
    
    <video width="380" height="380" controls>
    <source src={video} type="video/mp4"></source>
    </video>
    
    </div>

    </div>
  );
}

export default Home;