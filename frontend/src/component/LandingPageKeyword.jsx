import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/landingPageKeyword.css";
import axiosInstance from "../utils/AxiosInstance";
import LandingPageCourseOutlet from "./LandingPageCourseOutlet";

export default function LandingPageKeyword() {
const [ fetcing , setFetching  ] = useState( false );
  const api = axiosInstance
  const [activeTab, setActiveTab] = useState("python");
  const navigate = useNavigate()
  const [ keywords , setKeywords ] = useState( [] )
  useEffect(() => {
    let mounted = true;
    setFetching(true)
    setTimeout( (  )=>{
        setFetching( false )
        setKeywords( ["python" , "ReactJs" , "nodejs" , "golang" , "solidity" , "C++" , "Java" , "JavaScript" ]  )
    } , 2000)

    return () => (mounted = false);
  }, []);

  let keys = keywords.map((key, i) => {
    return (
      <button
        onClick={(e) => {
          setActiveTab(key);
          // navigate("/courselist/"+key.trim().toLowerCase())
        }}
        key={i}
        className={`landingPageKeyword_keys ${
          activeTab.toLowerCase() == key.toLowerCase(  ) ? "landingPageKeyword_active" : ""
        }`}
      >
        <span className="text-capitalize">{key} </span>
      </button>
    );
  });
  return (
    <div className="landingPageKeyword_main">
      <p className="landingPageKeyword_subHeading"> Popular Courses </p>
      <div className="landingPageKeyword_keys_container ">{keys}</div>
      {activeTab ? (
        <>
          <div >
            <LandingPageCourseOutlet setFetching={setFetching} searchKeyword = { activeTab } fetcing={fetcing}  />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
