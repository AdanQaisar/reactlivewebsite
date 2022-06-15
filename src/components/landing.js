import React from 'react'
import { Footer } from './footer';
import Navbar from './nav';
import Pland from './pland';
import Navbar2 from './nav2';
export default function Landing() {
  return (
    <div>
<div>


<div className = "row">
  <Navbar2 id= 'nav'/>
</div>

<div className='row'>
  <Pland/>
</div>
<div className='row' id='footer'>
    <Footer/>
</div>


</div>



    </div>
  )
}
