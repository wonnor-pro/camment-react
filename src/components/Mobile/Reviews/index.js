import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarCheck, faStar as faStarS} from '@fortawesome/free-solid-svg-icons';
import {withFirebase} from "../../Firebase";
import {Link} from "react-router-dom";
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {withStyles} from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Navigation from "../../Desktop/Navigation";
import * as ROUTES from "../../../constants/routes";

const StyledRating = withStyles({
  iconFilled: {
    color: '#FA9600',
  },
  iconHover: {
    color: '#FA9600',
  },
})(Rating);

const MobileReviews = () => {
  return (
    <div className="mobile-main">
      <div className="mobile-part-selection">
        <div id="mobile-part-lists">
          <div className="mobile-part-record">
            <p className="mobile-part-review-counts">Engineering Tripos</p>
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
                  className="mobile-part-course-title">{"Part IIA"}</Link>
          </div>
          <div className="mobile-part-record">
            <p className="mobile-part-review-counts">Engineering Tripos</p>
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
                  className="mobile-part-course-title">{"Part IIB"}</Link>
          </div>
        </div>
      </div>
    </div>

  );
}


export default withFirebase(MobileReviews);