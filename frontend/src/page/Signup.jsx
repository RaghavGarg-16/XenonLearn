import React, { useState, useRef, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import GoToTop from "../component/GoToTop";
import LandingHeader from "../component/LandingHeader";
import "../css/login.css";
import axiosInstance from "../utils/AxiosInstance";
export default function Signup() {
  const api = axiosInstance
  const emailRef = useRef();
  const fNameRef = useRef();
  const lNameRef = useRef();
  const passRef = useRef(  )
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error , setError] = useState("")
  const [success , setSuccess] = useState("")
  const navigate = useNavigate();
  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    setError("You have entered an invalid email address!")
    setIsSubmitting(false)
    return false;
  }

  useEffect(() => {
    if (isSubmitting) {
      const credentials = {
        first_name: fNameRef.current?.value,
        last_name: lNameRef.current?.value,
        email: emailRef.current?.value,
      };
      if (
        credentials.email != null &
        ValidateEmail(credentials.email)   &
        credentials.first_name !=null &
        credentials.last_name !=null
      ) 
      {
        api
          .post("/api/v1/auth/register/", {
            first_name: fNameRef.current.value,
            last_name: lNameRef.current.value,
            email: emailRef.current.value,
            password : passRef.current.value
          })
          .then((res) => {
            // console.log(res.data, "this is ther data");
            if (res.status < 300) {
              setTimeout(()=>navigate("/login") , 1500)
              setSuccess("user created sucessfully")
              setError("")
            }
          })
          .catch((err) => {
            console.log(err);
          })
          .finally((res) => {
            setIsSubmitting(false);
            emailRef.current.value = "";
            lNameRef.current.value = "";
            fNameRef.current.value = "";
            passRef.current.value = ""
          });
      }
      else{
        setIsSubmitting(false)
        if(!ValidateEmail(credentials.email)){
          setError("Invalid email address")
        }
        else setError("please enter all the values")

      }
    }

    return () => {};
  }, [isSubmitting]);

  return (
    <div className="login_body">
      <LandingHeader/>
      <section className="login_main">
        <div className="login_left">
          <h1>Please Fill Your Info</h1>
          <div className="login_login_form">
          {error?<p className="text-danger">{error}</p> : <></>}
          {success?<p className="text-success">{success}</p> : <></>}
            <>
              <div>
                <label className="login_label" htmlFor="firstName">
                  {" "}
                  First Name{" "}
                </label>
                <input
                  id="firstName"
                  ref={fNameRef}
                  className="login_input_email"
                  placeholder="First Name "
                  type="text"
                />
              </div>
              <div>
                <label className="login_label" htmlFor="lastName">
                  {" "}
                  Last Name{" "}
                </label>
                <input
                  id="lastName"
                  ref={lNameRef}
                  className="login_input_email"
                  placeholder="Last Name"
                  type="text"
                />
              </div>
              <div>
                <label className="login_label" htmlFor="login_email">
                  {" "}
                  your email{" "}
                </label>
                <input
                  id="login_email"
                  ref={emailRef}
                  className="login_input_email"
                  placeholder="Email"
                  type="text"
                />
              </div>
              <div>
                <label className="login_label" htmlFor="login_email">
                  {" "}
                  your password{" "}
                </label>
                <input
                  id="login_email"
                  ref={passRef}
                  className="login_input_email"
                  placeholder="Email"
                  type="password"
                />
              </div>

              <div>
                <button
                  className="login_submit_btn"
                  onClick={() => {
                    setIsSubmitting(true);
                    console.log("true")
                  }}
                >
                  Sign Up
                </button>
              </div>
            </>

          </div>
        </div>
        <div className="login_right">
          <img src="/images/login-hero.svg" alt="image-hero " />
        </div>
      </section>
      <GoToTop/>
    </div>
  );
}
