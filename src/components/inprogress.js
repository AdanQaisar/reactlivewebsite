import React from 'react'
import Navbar from './nav'
import { Footer } from './footer'
import Profile from './profile'
import InprogressCourses from './inprogressCourses'
export default function Inprogress() {
  return (
    <div>
    
<div className = "row">
  <Navbar id= 'nav'/>
</div>

<div className='row'>
  <Profile/>
</div>

<div className='row'>
  <InprogressCourses/>
</div>

<div className='row' id='footer'>
    <Footer/>
</div>
    
    
    </div>
  )
}
