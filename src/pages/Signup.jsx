
import { useState } from "react";
import { Form , useNavigate, useLocation, Link } from "react-router";
import { useAuth } from "../contexts/Authcontext";

import { FiArrowLeft } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

export default function Signup() {
  const [error, setError] = useState();
  const { login } = useAuth();
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/list"
  console.log(from);
  
  async function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
  
    const userData = await response.json()
    
    if (!response.ok) {
      setError("Please provide Signup credentials")
    } else {
      login(userData.accessToken)
      navigate(from, { replace: true })
    }    
  }

  return (
    <div className="login disFlexColumn">
      <Link to="/" className="left-arrow"><FiArrowLeft /></Link>
      <h4>Sign Up</h4>
      <Form onSubmit={handleLogin}>
        <div className="formgroup">
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="formgroup">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="formgroup">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="formgroup">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input type="password" name="confirmpassword" id="confirmpassword" />
        </div>
        {error && (<div className="errorSms">{error}</div>)}
        <button type="submit" className="btn">Sign Up<FaArrowRight /></button>
      </Form>
    </div>
  )
}