import { Footer } from "./footer";
import Navbar from "./nav";
import Register from "./register";
import asimg from "../assets/nn.jpg";
import React from "react";
function Spage() {
  return (
    <div>
            <Navbar/>

      <div class="card bg-dark text-white">
        <img
          src={asimg}
          class="card-img"
          alt="..."
          style={{ height: "720px" }}
        ></img>
        <div class="card-img-overlay">
        <Register/>

        </div>
      </div>
      <Footer/>

    </div>
  );
}

export default Spage;
