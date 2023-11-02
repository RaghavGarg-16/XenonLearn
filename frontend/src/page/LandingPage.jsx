import React from "react";
import { Link } from "react-router-dom";
import GoToTop from "../component/GoToTop";
import LandingHeader from "../component/LandingHeader";
import LandingPageKeyword from "../component/LandingPageKeyword";
import "../css/landingPage.css";

export default function LandingPage() {
  return (
    <>
      <div>
        <LandingHeader />
      </div>
      <div className="landingPage_main">
        <div className="landingPage_intro">
          <div className="landingPage_intro_left">
            <div>
              <p className="landingPage_brand_name"> Course Compare </p>
            </div>
            <div>
              <p className="landingPage_text">
                Unlimited access to 7,000+ world-class courses, hands-on
                projects, and job-ready certificate programs, for one
                all-inclusive subscription price
              </p>
            </div>
            <div className="landingPage_media_phn">
              <img
                className="landingPage_media_adv"
                src="/images/studyingGirl.png"
                alt="studying girl "
              />
            </div>
            <div className="landingPage_btn_container">
              <Link to="/courselist" className="btn btn-primary landingPage_adv_btn">
                Start your journey
              </Link>
            </div>
          </div>
          <div className="landingPage_media_big">
              <img
                className="landingPage_media_adv"
                src="/images/studyingGirl.png"
                alt="studying girl "
              />
            </div>
        </div>
        <div>
          <LandingPageKeyword />
        </div>
        <GoToTop/>
      </div>
    </>
  );
}
