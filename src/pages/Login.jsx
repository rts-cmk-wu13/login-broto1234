import { useState } from "react";
import { Form , useNavigate, useLocation, Link } from "react-router";
import { useAuth } from "../contexts/Authcontext";

import bird from '../assets/emojione_bird.svg';
import { FiArrowLeft } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

export default function Login() {

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
  
    const userdata = await response.json()
    
    if (!response.ok) {
      setError("Please provide login credentials")
    } else {
      login(userdata.accessToken)
      navigate(from, { replace: true })
    }    
  }

  return (
    <div className="login disFlexColumn">
      <Link to="/" className="left-arrow"><FiArrowLeft /></Link>
      <h4>Login</h4>
      <div className="bird--img">
        <img src={bird} alt="Bird" />
      </div>
      <Form onSubmit={handleLogin}>
        <div className="formgroup">
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="formgroup">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        {error && (<div className="errorSms">{error}</div>)}
        <button type="submit" className="btn">Login<FaArrowRight /></button>
      </Form>
    </div>
  )
}