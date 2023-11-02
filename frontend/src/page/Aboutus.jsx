import React from "react";
import GoToTop from "../component/GoToTop";
import LandingHeader from "../component/LandingHeader";
import "../css/aboutus.css"

export default function AboutUs() {
  return (
    <div className="aboutus_container">
      <div>
        <LandingHeader />
      </div>
      <div>
      <div className="aboutus_body">
        <div className="aboutus_body_info">
          <p className="aboutus_heading"> About Us</p>
          <p className="aboutus_body_content">
            We believe in achieving the access to knowledge to every person . At
            Course Compare , we are passionately dedicated to empowering people
            by knowledge and education because we believe that education opens
            the gate of opportunities for every individual.
          </p>
          <p className="aboutus_body_content">
            Learn confidently, feel valued, and build a career full of purpose
            with us.
          </p>
          <blockquote >
            Let's unlock your potential. Welcome to Course Compare.
          </blockquote>
        </div>
        <div className="aboutus_media">
            <img src="/images/studyingGirl.png" alt="descriving about the company"/>
        </div>
      </div>
      <div className="aboutus_vision">
        <p className="aboutus_heading">Vision</p>
        <p className="aboutus_body_content">
        Course Compare is founded on the idea that young India needs an innovative way to learn that equally harnesses people's talents, irrespective of their social stata. Course Compare is more than a company. We are a movement rooted in empowerment, professional ambition, and social impact. We are a culture that will make history by changing this dynamic of education and knowledge and writing the beautiful next chapter in this story.
        
        </p>
        <p className="mt-5 aboutus_body_content">
        Course Compare is passionate about elevating young women to become global leaders who are recognized for their myriad of talents and contributions. We believe that through education, opportunity, we will change the world of work for the better and providing all voices equal educated and confident .
        </p>
      </div>
      </div>
      <GoToTop/>
    </div>
  );
}
