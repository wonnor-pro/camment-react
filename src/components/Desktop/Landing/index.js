import * as ROUTES from '../../../constants/routes';
import CookieConsent from "react-cookie-consent";
import React from "react";

const Landing = () => (
  <div className='home'>
    <div className='home_nav'>
      <a className='home_nav_button' id='home_button' href={ROUTES.LANDING}>Home</a>
      <a className='home_nav_button' id='review_button' href={ROUTES.REVIEWS}>Reviews</a>
      <a className='home_nav_button' id='user_button' href={ROUTES.LOG_IN}>Log In</a>
    </div>
    <div className='home_title'>
      # Camments _
    </div>
    <div className='home_slogan'>
      <p>Cambridge Engineering Course Review Platform</p>
    </div>
  </div>
);

export default Landing;
