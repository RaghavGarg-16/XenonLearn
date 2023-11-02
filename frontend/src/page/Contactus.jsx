import ContactForm from "../component/ContactForm";
import GoToTop from "../component/GoToTop";
import LandingHeader from "../component/LandingHeader";
import "../css/contactus.css";
import "../css/footer.css";
export default function ContactUs() {
  return (
    <>
      <LandingHeader />
      {/* <div className='container mt-5 pt-5'>
        <div className="mt-3 container footer_contact">
          <p className="footer_heading"> Contact Us  </p>
          <p className="footer_subheading">
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
          </ul>
        </div>
    </div> */}

      <div className="container mt-5 pt-5">
        <h3>Contact Us </h3>
        <div className="row row--15 ">
          <div className="col-lg-12">
            <div className="rn-contact-address mt_dec--30">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 rn-address-cont">
                  <div className="rn-address">
                    <div className="icon">
                      <i class="fas fa-phone"></i>
                    </div>
                    <div className="inner">
                      <h4 className="title">Contact Phone Number</h4>
                      <p>
                        <a href="tel:+444 555 666 777">+91 938 9797 281</a>
                      </p>
                      {/* <p>
                      <a href="tel:+222 222 222 333">+222 222 222 333</a>
                    </p> */}
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 rn-address-cont">
                  <div className="rn-address">
                    <div className="icon">
                      <i class="far fa-envelope"></i>
                    </div>
                    <div className="inner">
                      <h4 className="title">Our Email Address</h4>
                      <p>
                        <a href="mailto:raghavgarg.20343@gmail.com">
                          raghavgarg.20343@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                  <div className="rn-address">
                    <div className="icon">
                      <i class="fas fa-search-location"></i>
                    </div>
                    <div className="inner">
                      <h4 className="title">Our Location</h4>
                      <p>Hoshiarpur , panjab , India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 pt-5 ">
          <div className="col-lg-7  ">
            <ContactForm/>
          </div>
        </div>
      </div>
      <GoToTop />
    </>
  );
}
