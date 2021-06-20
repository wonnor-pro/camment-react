import {Posts} from "../Posts/index";
import './index.css';
import Navigation from "../Navigation";
import React from "react";

const Reviews = () => {
  return (
    <div className="Reviews">
      <Navigation />
      <Posts />
    </div>
  );
}


export default Reviews;