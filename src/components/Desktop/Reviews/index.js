import './index.css';
import Navigation from "../Navigation";
import React from "react";
import * as ROUTES from "../../../constants/routes";
import {Link} from "react-router-dom";
import StyledRating from "../Score";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarCheck} from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  return (
    <div className="Reviews">
      <Navigation/>
      <div className="part-selection">
        <div id="part-lists">
          <div className="part-record">
            <p className="review-counts">Engineering Tripos</p>
            <div className="score_wrapper">
              <StyledRating
                name="score"
                value={3}
                icon={<FontAwesomeIcon className={"part-icon"} icon={faCalendarCheck}/>}
                precision={1}
                max={4}
                size="medium"
                readOnly
              />
            </div>
            <Link to={"/reviews/iia"}
                  className="course-title">{"Part IIA"}</Link>
          </div>
          <div className="part-record">
            <p className="review-counts">Engineering Tripos</p>
            <div className="score_wrapper">
              <StyledRating
                name="score"
                value={4}
                icon={<FontAwesomeIcon className={"part-icon"} icon={faCalendarCheck}/>}
                precision={1}
                max={4}
                size="medium"
                readOnly
              />
            </div>
            <Link to={"/reviews/iib"}
                  className="course-title">{"Part IIB"}</Link>
          </div>
        </div>

      </div>
      <div className="report-issues">
        <p>Copyright &copy; 2021 ｜ <a href={ROUTES.REPORT}> Report an issue here</a> or contact us at <a
          href={"mailto:admin@camments.com"}>admin@camments.com</a></p>
      </div>
    </div>
  );
}


export default Reviews;