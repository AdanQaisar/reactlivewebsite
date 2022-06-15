
//Pfront includes nav bar -- introduction page -- footer 
import React from 'react'
import Navbar from './nav'
//introduction page
import Intro from './intro'
import { Footer } from './footer'


export default function FrontPage() {
  return (
<div>


    
  <Navbar />
  <Intro/>

<div className='row' id='footer'>
    <Footer/>
</div>
</div>


  )
}
