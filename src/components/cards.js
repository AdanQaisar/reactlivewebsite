import React from 'react';
import javaImg from '../assets/java.jpg'
import pythonImg from '../assets/python.jpg'
import mernImg from '../assets/mern.png'

export const Cards = () => {
  return (
    <div>

        <div class="container px-4 py-5" id="hanging-icons">
    <h2 class="pb-2 border-bottom"> EXPLORE THE RESEARCHES</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em"> </svg>
        </div>
        <div>
        <div id='image'>
        <img src={javaImg} width="200px"></img>
        </div>
          <h2>Java Language Projects</h2>
          <a href="#" class="btn btn-primary">
            Go to Article
          </a>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em"></svg>
        </div>
        <div>
        <div id='image'>
        <img src={pythonImg} width="250px" ></img>
        </div>
          <h2>Motoray Image Prediction</h2>
\          <a href="#" class="btn btn-primary">
            Read Article
          </a>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em"></svg>
        </div>
        <div>
        <div id='image'>
        <img src={mernImg} width="200px"></img>
        </div>
          <h2>Web Development</h2>
          <a href="#" class="btn btn-primary">
                Read Article
          </a>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}
