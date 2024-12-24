import React from 'react'
import{Link} from "react-router-dom";
const Login = () => {
  return (
    <>
    <div style={{color:'blue'}}>login</div>
    <div className="login">
      <section>
        <form>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='password'/>
          <Link to={"/profile"}><button type="submit">Login</button></Link>
          <h4>OR</h4>
          <Link to="/register">sign up</Link>
        </form>
      </section>
    </div>
    </>
  );
};

export default Login;