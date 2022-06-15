import React from 'react'
import Navbar from './nav'
import { Footer } from './footer'
import DegreeFinder from './degreefinder'

export default function OnlineDegree() {
  return (
    <div>
    
    <div className = "row">
  <Navbar id= 'nav'/>
    </div>

<div className='row'>
  <DegreeFinder/>
</div>

<div className='row' id='footer'>
    <Footer/>
</div>

    
    </div>
  )
}
