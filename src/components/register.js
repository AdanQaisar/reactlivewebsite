import React, {useState} from 'react'
import "./register.css";
import { Link } from 'react-router-dom';
import {addApplicant} from "../Service/api.js"

function Register() {

  const [user, setUser] = useState({
    name:"",
    email:"",
    password:"",
    reEnterpassword:"",
    major: ""
  })

  const handlechange = (e) => {
    setUser({...user,[e.target.name]: [ e.target.value]})
  }

const register = async (e) =>{
  e.preventDefault();
  //calling
  await addApplicant(user)
  //to check
}






  return (
    <div>

      <div className="register">

            <h1>Register</h1>
            <input type="text" name='name' value={user.name} placeholder="Enter your Name" onChange={handlechange}></input>
            <input type="text" name='email'value={user.email} placeholder="Enter your Email" onChange={handlechange}></input>
            <input type="password" name='password' value={user.password} placeholder="Enter your Password" onChange={handlechange} ></input>
            <input type="password"  name='reEnterpassword' value={user.reEnterpassword} placeholder="Re-Enter your Password" onChange={handlechange} ></input>
            <input type="text"  name='major' value={user.major} placeholder="Enter your Major" onChange={handlechange} ></input>

            <div className="button"><Link to="/Login">Login</Link></div>
            <div>or</div>
            <div className="button" onClick={register} ><Link to="/Landing">Register</Link></div>
        </div>
    
    </div>
  )
}

export default Register;