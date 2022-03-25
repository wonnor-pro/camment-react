import * as ROUTES from "../../../constants/routes";
import React, {Component} from 'react';
import {withFirebase} from "../../Firebase";
import axios from "axios";
const empty = require('is-empty');


class RavenLanding extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ravenData = this.state.ravenData;
    console.log(Object.keys(ravenData));
    console.log(ravenData);

    return (
      <div id="main">

        <div id="title">
          <h1># Camments _</h1>
        </div>
        <div id="nav">
          <div className="nav-button" id="home-button"><a href={ROUTES.HOME}>Home</a></div>
          <div className="nav-button" id="review-button"><a href={ROUTES.REVIEWS}>Reviews</a></div>
        </div>
        <div id="user-nav">
          <div className="user-nav-button" id="post-button"><a href={ROUTES.ACCOUNT}>Account</a></div>
        </div>


        <div className="user-box" id="user-container">
          <div className="user-box user-title" id="user-portal">Raven Gate</div>
          <div className="content-section">
            <div className="media">
              <div className="media-body">
                This page is only for Cambridge students/staff.
              </div>
            </div>
          </div>
        </div>

        <div className="decoration">
          {"<?"}
        </div>
        <div id="account-slogan">
          <p>Camments Course Review Platform</p>
        </div>

      </div>

      // <div>
      //   <h1>Account: {authUser.email}</h1>
      //   <PasswordForgetForm />
      //   <PasswordChangeForm />
      //   <LoginManagement authUser={authUser} />
      // </div>

    )
  };
}

export default withFirebase(RavenLanding);