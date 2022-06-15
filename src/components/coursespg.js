
//Pfront includes nav bar -- introduction page -- footer 
import React from 'react'
import Navbar from './nav'
//Courses page
import Courses from './courses'
import { Footer } from './footer'


export default function CoursesPage() {
  return (
<div>


    
  <Navbar />
  <Courses/>

<div className='row' id='footer'>
    <Footer/>
</div>
</div>


  )
}
