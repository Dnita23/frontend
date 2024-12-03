import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignupcontainer">
        <h1>SignUp</h1>
        <div className="loginsignup-feilds">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account<span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type= "checkbox" name="" id =""/>
          <p>By Continue, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp 
