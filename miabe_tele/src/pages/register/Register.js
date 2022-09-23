import { useRef } from "react";
import { useState } from "react";
import "./Register.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from "../../image/logo.png"

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
   const usernameRef = useRef ()


   const handleLogin = () =>{
    navigate("/login");
   }
  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish =async (e) => {
    e.preventDefault()
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try{
      await axios.post("auth/register",{email,username,password});
      navigate("/login");
    }catch(err){}
  };
  return (
    <div className="test">
          <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src={img}
            alt=""
          />
          <button className="loginButton" onClick ={handleLogin} >Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
    </div>

  );
}