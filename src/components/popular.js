import React from 'react'
import img from '../assets/small.JPG'
import img2 from '../assets/img2.JPG'
import img3 from '../assets/img3.JPG'
export default function Popular() {
  return (
    <div>



<div style = {{background:"rgb(238, 202, 57)"}}>
        <h3>Most Popular</h3>
</div>


<div class="row">
<div class="col-sm-3">
    <div class="card">
    <img src={img3} class = "card-img-top" />

      <div class="card-body" >
        <h5 class="card-title">Master in applied Data Science</h5>
        <p class="card-text">Univeristy of Michigan</p>
        <a href="#" class="btn btn-primary">Enroll</a>
      </div>
    </div>
  </div>


  <div class="col-sm-3">
    <div class="card">
    <img src={img} />

      <div class="card-body">
        <h5 class="card-title">Master in Computer Science</h5>
        <p class="card-text">Univeristy of Chicago</p>
        <a href="#" class="btn btn-primary">Enroll</a>
      </div>
    </div>
  </div>


  <div class="col-sm-3">
    <div class="card">
    <img src={img2} />

      <div class="card-body">
        <h5 class="card-title">Master Engviromental Engineering</h5>
        <p class="card-text">Univeristy of London</p>
        <a href="#" class="btn btn-primary">Enroll</a>
      </div>
    </div>
  </div>

  <div class="col-sm-3">
    <div class="card">
    <img src={img3} />

      <div class="card-body">
        <h5 class="card-title">Master in Machine Learning</h5>
        <p class="card-text">Univeristy of Michigan</p>
        <a href="#" class="btn btn-primary">Enroll</a>
      </div>
    </div>
  </div>
  
</div>





    </div>
  )
}
