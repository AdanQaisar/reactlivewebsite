import React from "react";
import asimg from "../assets/nn.jpg";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <div>
      <div class="card bg-dark text-white">
        <img src={asimg} class="card-img" alt="..." style={{height:"720px"}}></img>
        <div class="card-img-overlay">
          <h1 class="card-title">Joing Our Community</h1>
          <h2 class="card-text">Start, switch, or advance </h2>
          <h2 class="card-text">Your career with more than 5,000 courses</h2>
          <p class="card-text">
            Professional Certificates, and degrees from world-class universities
            and companies.
          </p>
          <p class="card-text">Singup for free</p>

          <Link to="/Spage">
            <button type="button" class="btn btn-warning">
              Sign-up
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
