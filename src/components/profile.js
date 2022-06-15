import React from "react";
import Courses from "./courses";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div>
      <div class="card text-center card text-black bg-light ">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="true" href="#">
                <Link to={"/Inprogress"}>Inprogress</Link>
              </a>{" "}
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="true" href="#">
                <Link to={"/Landing"}>Home</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Completed</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <h5 class="card-title">Welcome!</h5>
          <p class="card-text">Your Learning Profile</p>
          <p class="card-text">Keep Growing With Us.r</p>

          <a href="#" class="btn btn-success">
            Edit Profile
          </a>
        </div>
      </div>
    </div>
  );
}
