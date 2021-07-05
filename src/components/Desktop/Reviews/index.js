import {Posts} from "../Posts";
import './index.css';
import Navigation from "../Navigation";
import Footer from "../Footer";
import React from "react";
import * as ROUTES from "../../../constants/routes";

const Reviews = () => {
  return (
    <div className="Reviews">
      <Navigation />
      <Posts />
      <div className="report-issues">
        <p>Copyright &copy; 2021 ｜ <a href={ROUTES.REPORT}> Report an issue here</a> or contact us at <a
          href={"mailto:admin@camments.com"}>admin@camments.com</a></p>
      </div>
    </div>
  );
}


export default Reviews;