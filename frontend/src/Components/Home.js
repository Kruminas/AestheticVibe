import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
function Home() {
  return (
    <div>

    {/*Header*/}
    <div>
     <h1 className="Header bg-dark text-white d-flex justify-content-center mt-0 w-100">The Aesthetic Essential &nbsp; &nbsp; &nbsp; ⚝</h1>   
    </div>

    {/*Buttons*/}
    <div className="min-vh-100 bg-black d-flex align-items-center justify-content-center gap-3 ">
    <button type="button" class="btn btn-primary">Aesthetic</button>
    <button type="button" class="btn btn-secondary">Sekiro</button>
    <button type="button" class="btn btn-success">Workout</button>
    <button type="button" class="btn btn-danger">Energy</button>
    
    </div>

    </div>
  );
}

export default Home;