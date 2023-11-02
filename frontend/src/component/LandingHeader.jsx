import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../css/landingHeader.css"
// import { logOut } from "../feature/auth/authSlice";
export default function LandingHeader() {
  const navigate  = useNavigate()
//   const dispatch = useDispatch()
  const handleLogout = ()=>{
    localStorage.removeItem( "token" )
    navigate("/login")
  }
  const token = localStorage.getItem( "token" )
  const isLogin = (token && token?.length) ? true : false ; 
  return (
    <div>
      <header className="landing_header_container">
        <div className="d-flex landing_header">
        <div>
          <Link to="/">
            <img
              className="landing_brand"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdg1Mdh55R-GQiGK-BOFG9iBtHI8fsTGwzGw&usqp=CAU"
              alt="company brand "
            />
          </Link>
        </div>
        <div className="landing_nav_top_menu">
        <div>
            <Link to="/contactus" className="landing_join_btn">
              {" "}
              contact us
            </Link>
          </div>
          {
            !isLogin ?
            <>
            <div>
            <Link to="/signup" className="landing_join_btn">
              {" "}
              Join now
            </Link>
          </div>
          <div className="landing_top_partition"></div>
          <div>
            <Link to="/login" className="landing_top_signin">
              {" "}
              Sign in{" "}
            </Link>
          </div>
            </>
            :
            <>
            <div>
            <button onClick={e=> handleLogout()} className="btn btn-primary ">
              logOut
            </button>
          </div>
            </>
          }
        </div>
        </div>
      </header>
    </div>
  );
}
