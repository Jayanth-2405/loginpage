import React from 'react'
import { useState } from 'react'
import{Link} from "react-router-dom"
const Register = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const submitHandler  =(e)=>{
    e.preventDefault( );
    console.log( name,email,password);
  }
  return (
    <>
<h1>register</h1>
<div className="register">
<section>
        <form onSubmit={submitHandler}>
        <input value={name} onChange={(e)=>setName(e.target.value)} 
          type="text" placeholder="Name" required/>
          <input value={email} onChange={(e)=>setEmail(e.target.value)}
          type="email" placeholder="Email" required/>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} 
          type="password" placeholder="password" required/>
          <button type="submit">Sign Up</button>
          <h4>OR</h4>
          <Link to="/login"><button type="submit">Login</button></Link>
        </form>
      </section>
</div>
</>
  )
}

export default Register