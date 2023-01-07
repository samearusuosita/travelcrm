import React from 'react';
import "./Login.scss";
import {Images} from "../../Constants";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div  className='app__login'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,320L80,277.3C160,235,320,149,480,138.7C640,128,800,192,960,218.7C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <div className="bg"></div>
        <div className="app__login-box">
            <div className="app__login-head">
                <div>
                <p className='app__login-title'>Login</p>
                <p>Log into your account</p>
                </div>
                <img src={Images.logo} alt="" />
            </div>
            <div className="app__login-input">
                <form action="">
                    <label htmlFor="name">Email</label><br/>
                    <input type="text" /><br/>
                    <label htmlFor="">Password</label><br/>
                    <input type="password" /><br/>
                    
                    <Link to="/Dashb"><button type='submit'>Signin</button></Link>
                </form>
                
                
            </div>
        </div>
        

    </div>
  )
}

export default Login
