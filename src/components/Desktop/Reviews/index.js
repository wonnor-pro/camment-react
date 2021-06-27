import {Posts} from "../Posts";
import './index.css';
import Navigation from "../Navigation";
import Footer from "../Footer";
import React from "react";

const Reviews = () => {
  return (
    <div className="Reviews">
      <Navigation />
      <Posts />
      <Footer />
    </div>
  );
}


export default Reviews;