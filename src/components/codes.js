import React from "react";
import javaImg from "../assets/java.jpg";
import { Carousel, Dropdown } from "react-bootstrap";
import Register from "./register";
function Codes() {
  const upload= (e) =>{
    
  }


  return (
    <div>
      <div>
        <div class="card text-center">
          <div class="card-header">Share Your Knowledge</div>
          <div class="card-body">
            <h5 class="card-title">UPLOAD CODE</h5>
            <p class="card-text">Help in learning others with your Knowledge</p>
            <a href="#" class="btn btn-warning" onClick={upload}>
              Upload
            </a>
            
          </div>
        </div>
        
      </div>

      <div>

      </div>

      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.codecademy.com/resources/blog/content/images/2020/08/what-programming-language-should-i-learn.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.codecademy.com/resources/blog/content/images/2021/07/Header-Image_2083x875-3-1.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.codecademy.com/resources/blog/content/images/2020/08/what-programming-language-should-i-learn.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Codes;
