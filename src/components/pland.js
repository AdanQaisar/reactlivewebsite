import React from "react";
import img from "../assets/small.JPG";
import img2 from "../assets/img2.JPG";
import img3 from "../assets/img3.JPG";
import Popular from "./popular";
import Courses from "./courses";
import { Link } from "react-router-dom";
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
export default function Pland() {
  return (
    <div>
      <div class="card text-center card text-black bg-light ">
        <div class="card-header" style={{background:"#FFEBCD"}}>
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="true" href="#">
                <Link to={"/Landing"}>Home</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="true" href="#">
                <Link to={"/Inprogress"}>Inprogress</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" >Completed</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <h5 class="card-title" align= "left">My Learning Profile</h5>
          <h2 class="card-text" align= "left">WELCOME! ADAN</h2>

  
        </div>
      </div>

      <div class="card bg-warning">
        <h3>Earn Your Degree</h3>
      </div>

      <div class="row">
        <div class="col-sm-3">
          <div class="card">
            <img src={img3} />

            <div class="card-body">
              <h5 class="card-title">Master in applied Data Science</h5>
              <p class="card-text">Univeristy of Michigan</p>
              <a href="#" class="btn btn-primary">
                Enroll
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-3">
          <div class="card">
            <img src={img} />

            <div class="card-body">
              <h5 class="card-title">Master in Computer Science</h5>
              <p class="card-text">Univeristy of Chicago</p>
              <a href="#" class="btn btn-primary">
                Enroll
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-3">
          <div class="card">
            <img src={img2} />

            <div class="card-body">
              <h5 class="card-title">Master Engviromental Engineering</h5>
              <p class="card-text">Univeristy of London</p>
              <a href="#" class="btn btn-primary">
                Enroll
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-3">
          <div class="card">
            <img src={img3} />

            <div class="card-body">
              <h5 class="card-title">Master in Machine Learning</h5>
              <p class="card-text">Univeristy of Michigan</p>
              <a href="#" class="btn btn-primary">
                Enroll
              </a>
            </div>
          </div>
        </div>
      </div>

      <Courses />

      <div>
        <Popular />
      </div>
    </div>
  );
}
