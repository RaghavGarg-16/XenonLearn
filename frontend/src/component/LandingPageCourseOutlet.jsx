import React, { useEffect, useState } from "react";
// import {
//   setAnonymous_user,
//   setCourse_list,
//   setFetching,
//   setTotal_page,
// } from "../feature/course/courseSlice";
import Card from "./Card";
import "../css/landingPageCourseOutlet.css";
import axiosInstance from "../utils/AxiosInstance";
import course_data from "../data/courseList.json"

export default function LandingPageCourseOutlet({ searchKeyword  }) {

  const api = axiosInstance
  const [ course_list , setCourse_list ] = useState( [  ] )
  const [ anonymous_user , setAnonymous_user ] = useState( false )
  const [ fetching , setFetching ] = useState( false )
//   const searchKeyword = useSelector(
//     (state) => state?.courses?.filters.searchKeyword
//   );
  

  useEffect(() => {
    let mounted = true;
    if ((searchKeyword != null) || (searchKeyword != "null")) {
    setFetching( true )
    setTimeout( (  )=>{
      setCourse_list( course_data[searchKeyword.toLowerCase()] ? course_data[searchKeyword.toLowerCase()] : [] );
      console.log( course_data[searchKeyword.toLowerCase()]  , searchKeyword.toLowerCase(  ))
      setAnonymous_user( ( localStorage.getItem( "token" )  ) ? false : true  )
      setFetching( false )
    } , 950 )
      // api
      //   .get(`/api/v1/courses/list/?search=${searchKeyword}`)
      //   .then((res) => {
      //     if (mounted) {
      //       setCourse_list(res.data.results);
      //       setTotal_page(res.data.total_pages);
      //       setAnonymous_user(res.data.user_is_anonymous);
      //     }
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //   })
      //   .finally((s) => {
      //     setTimeout( (  )=>{
      //       setFetching( false )
      //     } , 1000 )
      //   });
    }
    return () => {
      mounted = false;
      setCourse_list([]);
      setAnonymous_user(true);
    };
  }, [searchKeyword]);



  return (
    <div className="landingPageCourseOutlet_container">
      <div className="landingPageCourseOutlet_active">
        Showing results for <span>{searchKeyword}</span>
      </div>
      <Card anonymous_user = { anonymous_user } courses = { course_list }  fetching = {fetching} searchKeyword={searchKeyword} />
    </div>
  );
}
