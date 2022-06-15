import React, {useState} from 'react'
import "./login.css";
import { Link } from 'react-router-dom';

function Login() {


    const [user, setUser] = useState({
        email:"",
        password:"",
      })
    
      const handlechange = e => {
        const { name, value} = e.target
        setUser({
          ...user,
          [name]:value
        })
      }
    
  return (
    <div className="full">
      <div className="login">
          {console.log("User" , user)}

            <h1>Login</h1>
            <input type="text" name='email'value={user.email} placeholder="Enter your Email" onChange={handlechange}></input>
            <input type="password" name='password' value={user.password} placeholder="Enter your Password" onChange={handlechange} ></input>
            <div className="button" ><Link to="/Login">Login</Link></div>
            <div>or</div>
            <div className="button"><Link to="/Spage">Register</Link></div>
        </div>
    </div>
  )
}

export default Login