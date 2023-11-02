
import { Link } from "react-router-dom";
import "../css/card.css";
import { durationUnit, numDecider } from "../utils/utils";
import StarDisplay from "./StarDisplay";
import Card2Loader  from "./Card2Loader";
export default function Card({anonymous_user , courses , fetching }) {
  const is_user_anonymous = anonymous_user;
  const isFetching = fetching


  const arr = [1, 2, 3];
  const loader = arr.map((x, i) => {
    return (
      <div key={i}>
        <Card2Loader />
      </div>
    );
  });


  const card = courses.map((course, i) => {
    return (
      <div key={i} className="card2_container">
        <div className="itm card2_img">
          <img
            className="card2_course_img"
            src={course.video_thumbnail}
            alt="Boys studying  in group"
          />
        </div>
        <div className="itm card2_main_info">
          {!is_user_anonymous ? (
            <div>
              <img
                src={
                  course?.provider?.image
                    ? course.provider.image
                    : "images/images.png"
                }
                className="card2_provider_logo"
                alt="course provider logo "
              />
              <span className="card2_provider_name">
                {" "}
                {course?.provider?.name}{" "}
              </span>
            </div>
          ) : (
            <></>
          )}
          <p className="card2_course_title"> {course.name} </p>
          <div>
            <span className="card2_certification_detail">
              Certificate : {course?.certificate}
            </span>
          </div>
          {course?.trail_duration_unit ? (
            <div className="card2_trail_info">
              {numDecider(course.trial_duration)}{" "}
              {durationUnit(course.trail_duration_unit)} free trail
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="itm card2_other_info mt-1">
          <div className="card2_rating_container">
            <div className="card2_rating_star">
              <StarDisplay rating={course?.rating || 0} max_rating={5} />
            </div>
            <span>
              <span className="card2_rating">
                {numDecider(course?.rating || 0)}
              </span>
              {` / ${numDecider(5)}`}
            </span>
            {/* <span className="card2_rating_seprator" ></span>
          <span> 100 students </span> */}
          </div>
          <div className="card2_course_level">{course?.level}</div>
          
          {
                is_user_anonymous ?
                <Link to={"/login"} className="btn btn-success mt-2" >
                  Login to see Price
                </Link>:
                <div className="card2_course_level"> &#x20B9; {course?.price}</div>
              }
            
        </div>
      </div>
    );
  });
  return (
    <div>
      {isFetching ? <>{loader}</> : <></>}

      {!isFetching ? <>{card}</> : <></>}
    </div>
  );
}
//       <div className="card2_container">
//       <div className="itm card2_img">
//         <img
//           className="card2_course_img"
//           src={course.video_thumbnail}
//           alt="Boys studying  in group"
//         />
//       </div>
//       <div className="itm card2_main_info">
//         {
//           ! is_user_anonymous ?
//           <div>
//           <img
//             src={course.provider.image}
//             className="card2_provider_logo"
//             alt="course provider logo "
//           />
//           <span className="card2_provider_name"> {course.provider.name} </span>
//         </div>:<></>
//         }
//         <p className="card2_course_title"> {course.name} </p>
//         <div>
//           <span className="card2_certification_detail">{course.certificate}</span>
//         </div>
//         {
//           course?.trail_duration_unit
//           ?
//           <div className="card2_trail_info">{ numDecider(course.trial_duration) } {durationUnit(course.trail_duration_unit)} free trail</div>
//         :""
//         }
//       </div>
//       <div className="itm card2_other_info mt-1">
//         <div className="card2_rating_container">
//           <div className="card2_rating_star">
//             <StarDisplay rating={course.rating} max_rating={5} />
//           </div>
//           <span>
//             <span className="card2_rating">{numDecider(course.rating)}
//           </span>
//           {` / ${numDecider(5)}`}
//           </span>
//           {/* <span className="card2_rating_seprator" ></span>
//           <span> 100 students </span> */}
//         </div>
//         <div className="card2_course_level" >{course.level}</div>
//         <div className="card2_course_level" > &#x20B9;  {course.price}</div>

//         {
//           is_user_anonymous
//           ?
//           <Link to={'/login'} className="btn btn-success mt-1">Login to see details</Link>
//           :
//           <Link to={`/course-detail/${course.id}`} className="btn btn-success mt-1">Show details</Link>
//         }
//       </div>
//     </div>
//     )
//   })
//   return (
//     <div>
//       {searchKeyword? <div> {`Showing results for ${searchKeyword}` } </div> :<></>}
//       {isFetching ? (
//         <>
//           {loader}
//         </>
//       ) : (
//         <></>
//       )}

//       {
//         !isFetching ?
//         <>
//         {card}
//         </>
//         :<></>
//       }
//     </div>
//   );
// }
