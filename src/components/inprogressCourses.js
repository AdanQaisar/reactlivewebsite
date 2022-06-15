import React from 'react'

import img from '../assets/google.JPG'
import img2 from '../assets/ibm.JPG'
import img3 from '../assets/deep.JPG'
import ProgressBar from 'react-bootstrap/esm/ProgressBar'
const now = 60;
export default function InprogressCourses() {
  return (
    <div>
    
    <div class="card bg-warning">
            <h3>In Progess Courses</h3> 
            


    </div>

    <div class="card mb-4  bg-light" >
  <div class="row g-0">
    <div class="col-md-2">
      <img src={img} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">

      <div class="card-body">
        <h5 class="card-title">Google</h5>
        <h2 class="card-title">Five Weeks Left</h2>


        
        <ProgressBar now={now} label={`${now}%`} visuallyHidden />

        <p class="card-text">Data Analytics Offered By Google</p>
        <p class="card-text">Professional Certificate </p>

        <button type="button" class="btn btn-primary ">Go To Course</button>
        <button type="button" class="btn btn-success">Reset Deadline</button>

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
        <ProgressBar now={100} />
        <p class="card-text">It looks like you missed some important deadlines. Reset your deadlines and get started today. </p>

        <button type="button" class="btn btn-primary ">Go To Course</button>
        <button type="button" class="btn btn-success">Reset Deadline</button>
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
        <ProgressBar now={10} />

        <p class="card-text">It looks like you missed some important deadlines. Reset your deadlines and get started today. </p>

        <button type="button" class="btn btn-primary ">Go To Course</button>
        <button type="button" class="btn btn-success">Reset Deadline</button>
              </div>
    </div>
  </div>




</div>
    
    
    
    
    </div>
  )
}
