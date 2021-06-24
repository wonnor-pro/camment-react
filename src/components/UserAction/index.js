import * as ROUTES from "../../constants/routes";
import React from "react";
import SignOutButton from "../SignOut";


class SuccessfulSubmissionBase extends React.Component {
  constructor(props) {
    super(props);
    this.ID = this.props.match.params.ID;
    console.log(this.ID);
  }

  render() {
    return (
      <div id="main">
        <div id="title">
          <h1># Camment _</h1>
        </div>
        <div id="nav">
          <div className="nav-button" id="home-button"><a href={ROUTES.HOME}>Home</a></div>
          <div className="nav-button" id="review-button"><a href={ROUTES.REVIEWS}>Reviews</a></div>
        </div>
        <div id="user-nav">
          <div className="user-nav-button" id="post-button"><a href={ROUTES.MY_POSTS}>My Posts</a></div>
          <div className="user-nav-button" id="logout-button"><SignOutButton /></div>
        </div>

        <div className="user-box" id="user-container">
          <div className="user-box user-title" id="user-portal">Successful Submission</div>
          <div className="content-section">
            <div className="media">
              <div className="media-body">
                <a href={"/Post/" + this.ID}>Click here to go back to the course page.</a>
              </div>

            </div>
          </div>
        </div>

        <div className="decoration">
          {"<?"}
        </div>
        <div id="account-slogan">
          <p>Cambridge Course Review Platform</p>
        </div>

      </div>
    )
  }
}

class SuccessfulDeletionBase extends React.Component {
  constructor(props) {
    super(props);
    this.ID = this.props.match.params.ID;
    console.log(this.ID);
  }

  render() {
    return (
      <div id="main">
        <div id="title">
          <h1># Camment _</h1>
        </div>
        <div id="nav">
          <div className="nav-button" id="home-button"><a href={ROUTES.HOME}>Home</a></div>
          <div className="nav-button" id="review-button"><a href={ROUTES.REVIEWS}>Reviews</a></div>
        </div>
        <div id="user-nav">
          <div className="user-nav-button" id="post-button"><a href={ROUTES.MY_POSTS}>My Posts</a></div>
          <div className="user-nav-button" id="logout-button"><SignOutButton /></div>
        </div>

        <div className="user-box" id="user-container">
          <div className="user-box user-title" id="user-portal">Successful Submission</div>
          <div className="content-section">
            <div className="media">
              <div className="media-body">
                <a href={ROUTES.MY_POSTS}>Click here to go back to my posts.</a>
              </div>

            </div>
          </div>
        </div>

        <div className="decoration">
          {"<?"}
        </div>
        <div id="account-slogan">
          <p>Cambridge Course Review Platform</p>
        </div>

      </div>
    )
  }
}


export const SuccessfulDeletion = SuccessfulDeletionBase;
export const SuccessfulSubmission = SuccessfulSubmissionBase;
