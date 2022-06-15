import React from 'react'

import img from '../assets/google.JPG'
import img2 from '../assets/ibm.JPG'
import img3 from '../assets/deep.JPG'

export default function Courses() {
  return (
    <div>
    
    <div class="card bg-warning">
            <h3>Courses</h3> 
            Best Choice for Your Bright Future


    </div>

    <div class="card mb-4  bg-light" >
  <div class="row g-0">
    <div class="col-md-2">
      <img src={img} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Google</h5>
        <p class="card-text">Data Analytics Offered By Google</p>
        <p class="card-text">Professional Certificate </p>

        <p class="card-text"><small class="text-muted">Last updated 2 mins ago</small></p>
      </div>
    </div>
  </div>



  <div class="row g-0">
    <div class="col-md-2">
      <img src={img2} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">IBM</h5>
        <p class="card-text">Data Analytics Offered By IBM </p>
        <p class="card-text">Specialization </p>

        <p class="card-text"><small class="text-muted">Last updated 2 mins ago</small></p>
      </div>
    </div>
  </div>

  <div class="row g-0">
    <div class="col-md-2">
      <img src={img3} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Deep Learning</h5>
        <p class="card-text">Univeristy of Allabama </p>
        <p class="card-text">Specialization </p>

        <p class="card-text"><small class="text-muted">Last updated 2 mins ago</small></p>
      </div>
    </div>
  </div>

  <div class="row g-0">
    <div class="col-md-2">
      <img src={img2} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">IBM</h5>
        <p class="card-text">Data Analytics Offered By IBM </p>
        <p class="card-text">Specialization </p>

        <p class="card-text"><small class="text-muted">Last updated 2 mins ago</small></p>
      </div>
    </div>
  </div>

  <div class="row g-0">
    <div class="col-md-2">
      <img src={img} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Deep Learning</h5>
        <p class="card-text">Univeristy of Allabama </p>
        <p class="card-text">Specialization </p>

        <p class="card-text"><small class="text-muted">Last updated 2 mins ago</small></p>
      </div>
    </div>
  </div>



</div>
    
    
    
    
    </div>
  )
}
