import React, { useState, useRef, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation} from "react-router-dom";
import "../css/login.css";
// import { selectCurrentToken, setToken } from "../feature/auth/authSlice";
import axiosInstance from "../utils/AxiosInstance"
// import LandingHeader from "../component/LandingHeader";
// import GoToTop from "../component/GoToTop";
import LandingHeader from "../component/LandingHeader";
import axios from "axios";
import GoToTop from "../component/GoToTop";
export default function Login() {
  const [email, setEmail] = useState("");
  const [error , setError] = useState("")
  const emailRef = useRef();
  const passRef = useRef();
  const location = useLocation()
//   const dispatch = useDispatch()
  const [ token , setToken  ] = useState( localStorage.getItem( "token" ) )


  const api = axiosInstance

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    setError("You have entered an invalid email address!")
    setEmail("")
    // alert("You have entered an invalid email address!");
    return false;
  }

  const handleLogin = async (  ) =>{
    if (!ValidateEmail(emailRef.current.value)) {
      emailRef.current.value = "";
      return;}
    setEmail( emailRef.current.value);
    const credentials = { email, password: passRef.current.value };
    if (!credentials.email || !credentials.password ) {
      setError("Please enter all Values")
      return
    }
    api.post( `api/v1/auth/login` , { 
      email : emailRef.current.value , password : passRef.current.value
     } )
    .then((res) => {
      if (res.status < 300) {
        localStorage.setItem("token", res.data?.accessToken);
        setToken( res.data?.accessToken )
      }
    })
    .catch((e) => {
      console.log(e);
      setError(e.response?.data?.msg||"Something went wrong")
      // alert("something went wrong");
    })
    .finally( s =>{
      passRef.current.value = ""
    } )
  }

  if (token){
    return <Navigate to = {`${location?.state?.from || "/"}`} replace={true}/>
  }

  return (
    <div className="login_body">
      <LandingHeader/>
      <section className="login_main">
        <div className="login_left">
          <h1>Welcome !</h1>
          <div className="login_login_form">
            {error?<p className="text-danger">{error}</p> : <></>}
              <>
                <div>
                  <label className="login_label" htmlFor="login_email_input">
                    {" "}
                    Please enter your email {" "}
                  </label>
                  <input
                    id="login_email_input"
                    ref={emailRef}
                    className="login_input_email"
                    placeholder="eg: sample@gmail.com"
                    type="text"
                  />
                </div>

              </>
              <>
                <div>
                  <label className="login_label" htmlFor="login_otp_input">
                    {" "}
                    please enter your password
                  </label>
                  <input
                    ref={ passRef}
                    id="login_otp_input"
                    className="login_input_email"
                    placeholder="eg: password"
                    type="password"
                  />
                </div>

                <div>
                  <button onClick={handleLogin} className="login_submit_btn">Sign In</button>
                </div>
              </>
            
          </div>
        </div>
        <div className="login_right">
          <img src="/images/login-hero.svg" alt="hero" />
        </div>
      </section>
      <GoToTop/>
    </div>
  );
}
