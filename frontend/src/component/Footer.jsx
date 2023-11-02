import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_main">
        <div className="footer_contact">
          <p className="footer_heading"> Contact Us form coming soon... </p>
          {/* <p className="footer_subheading">
            We believe in access to quality education for everyone. Education
            opens up doors, breaks down barriers, fosters growth and
            collaboration
          </p>
          <ul className="footer_ul">
            <li>
              {" "}
              <i class="fa-solid fa-globe"></i> Course Compare (XYZ Pvt. Ltd.)
            </li>
            <li>
              {" "}
              <i class="fa-solid fa-envelope"></i> Shashank@gmail.com{" "}
            </li>
            <li>
              {" "}
              <i class="fa-solid fa-clock"></i> 24 X 7
            </li>
          </ul> */}
        </div>
        <div className="footer_info">
          <p className="footer_heading">Information</p>
          <ul className="footer_ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer_social">
          <p className="footer_heading">Social Media</p>
          <p className="footer_subheading"> Connect us on the social media </p>
          <ul className="footer_ul">
            <li className="footer_social_link">
              <a target="_blank" href="https://www.instagram.com/">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a target="_blank" href="https://www.facebook.com/">
                <i class="fa-brands fa-facebook-messenger"></i>
              </a>
              <a target="_blank" href="https://www.youtube.com/">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
