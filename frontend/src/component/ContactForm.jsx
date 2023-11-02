import React, { useState } from 'react'
import "../css/contactForm.css"
import axiosInstance from '../utils/AxiosInstance';
const Result = () => {
    return (
      <p className="success-message">
        Your Message has been successfully sent. I will contact you soon.
      </p>
    );
  };
export default function ContactForm() {
    const [result, showresult] = useState(false);
    const [data, Setdata] = useState({
      name: "",
      number: "",
      message: "",
    });
    const sendEmail = (e) => {
      e.preventDefault();
      axiosInstance
        .post("api/v1/contact/savecontact", data)
        .then((response) => {
          // Handle response
          alert("Thank You Submitted Successfully" );
          Setdata({
            name: "",
            number: "",
            message: "",
          });
        })
        .catch((err) => {
          console.error(err);
        });
  
      showresult(true);
    };
  
    setTimeout(() => {
      showresult(false);
    }, 5000);
  
    return (
      <form className={`contact-form`} action="" onSubmit={sendEmail}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={data.name}
            required
            onChange={(e) => {
              Setdata({ ...data, [e.target.name]: e.target.value });
            }}
          />
        </div>
  
        {/* <div className="form-group">
                  <input 
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  />
              </div> */}
  
        <div className="form-group">
          <input
            type="text"
            name="number"
            placeholder="Phone Number"
            value={data.number}
            required
            max={10}
            min={10}
            onChange={(e) => {
              Setdata({ ...data, [e.target.name]: e.target.value });
            }}
          />
        </div>
  
        {/* <div className="form-group">
                  <input 
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  />
              </div> */}
  
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={data.message}
            onChange={(e) => {
              Setdata({ ...data, [e.target.name]: e.target.value });
            }}
          ></textarea>
        </div>
  
        <div className="form-group">
          <button className="btn btn-primary" style={{background:'#FF731D'}}>Submit Now</button>
        </div>
  
        <div className="form-group">{result ? <Result /> : null}</div>
      </form>
    );
}
