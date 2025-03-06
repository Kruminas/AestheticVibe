import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
function Home() {
  return (
    <div>

    <div>
     <h1 className="Header bg-dark text-white d-flex justify-content-center mt-0 w-100">The Aesthetic Essential &nbsp; &nbsp; &nbsp; ⚝</h1>   
    </div>

    <div className="min-vh-100 bg-black d-flex align-items-center justify-content-center gap-3 ">
    <button type="button" class="btn btn-primary">Video</button>
    <button type="button" class="btn btn-secondary">Video</button>
    <button type="button" class="btn btn-success">Video</button>
    <button type="button" class="btn btn-danger">Video</button>
    </div>
    
    </div>
  );
}

export default Home;