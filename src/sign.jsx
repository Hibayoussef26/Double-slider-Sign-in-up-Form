import { useState } from "react"
import "./style.css/sign.css"

import { FaFacebook , FaGoogle , FaLinkedin} from 'react-icons/fa'

export default function Sign (){

const [chengclass , setclass]=useState(false);

const toggleBtn=(e)=>{
  if (e.target.id === "signUp")
  setclass(true);
  if (e.target.id === "signIn")
    setclass(false);
  
}
    return(
       <div className={chengclass ? "right-panel-active" : ""} id="container">
  <div className="form-container sign-up-container">
    <form action="#">
      <h1>Create Account</h1>
      <div className="social-container">
        <a href="#" className="social"><FaFacebook/></a>
        <a href="#" className="social"><FaGoogle/></a>
        <a href="#" className="social"><FaLinkedin/></a>
      </div>
      <span>or use your email for registration</span>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button >Sign Up</button>
    </form>
  </div>
  <div className="form-container sign-in-container">
    <form action="#">
      <h1>Sign in</h1>
      <div className="social-container">
        <a href="#" className="social"><FaFacebook/></a>
        <a href="#" className="social"><FaGoogle/></a>
        <a href="#" className="social"><FaLinkedin/></a>
      </div>
      <span>or use your account</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <a href="#">Forgot your password?</a>
      <button >Sign In</button>
    </form>
  </div>
  <div className="overlay-container">
    <div className="overlay">
      <div className="overlay-panel overlay-left">
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button onClick={toggleBtn} className="ghost" id="signIn">Sign In</button>
      </div>
      <div className="overlay-panel overlay-right">
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start journey with us</p>
        <button onClick={toggleBtn} className="ghost" id="signUp">Sign Up</button>
      </div>
    </div>
  </div>
</div>

    )
}