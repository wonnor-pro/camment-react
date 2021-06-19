import React, { Component } from 'react';
import * as ROUTES from '../../constants/routes';
import email_svg from './images/email.svg';
import raven_svg from './images/logo.svg';

const Login = () => (

  <div id="main">

    <div id="title">
      <h1># Camment _</h1>
    </div>
    <div id="nav">
      <div className="nav-button" id="home-button"><a href={ROUTES.LANDING}>Home</a></div>
      <div className="nav-button" id="review-button"><a href={ROUTES.REVIEWS}>Reviews</a></div>
    </div>

    <div className="user-box" id="user-container">
      <div className="user-box user-title">User Login</div>
      <div className="user-box login-group">
        <img className="user-box login-img" src={email_svg} alt="email logo" />
        &nbsp;&nbsp;&nbsp;
        <a className="user-box user-text" href={ROUTES.SIGN_IN}>Login or Register via Email</a>
      </div>
      <div className="user-box login-group">
        <img className="user-box login-img" src={raven_svg} alt="raven logo" />
        &nbsp;&nbsp;&nbsp;
        <a className="user-box user-text" href={ROUTES.RAVEN}>Login or Register via Raven</a>
      </div>
    </div>

    <div className="decoration">
      #
    </div>
    <div id="account-slogan">
      <p>Cambridge Course Review Platform</p>
    </div>
  </div>

);

export default Login;