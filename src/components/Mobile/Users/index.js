import * as ROUTES from "../../../constants/routes";
import React from "react";

class MobileSuccessfulSubmissionBase extends React.Component {
  constructor(props) {
    super(props);
    this.ID = this.props.match.params.ID;
    console.log(this.ID);
  }

  render() {
    return (
      <div className='Login'>
        <div className="mobile-login-main">
          <div className="mobile-user-box" id="mobile-user-container">
            <div className="mobile-user-title">Successful</div>
            <div className="mobile-content-section">
              <div className="mobile-media">
                <div className="mobile-media-body">
                  <a href={"/Post/" + this.ID}>Click here to go back to the course page.</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-user-slogan">
            <p>Cambridge Course Review Platform</p>
          </div>
        </div>
      </div>
    )
  }
}

class MobileSuccessfulDeletionBase extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Login'>
        <div className="mobile-login-main">
          <div className="mobile-user-box" id="mobile-user-container">
            <div className="mobile-user-title">Successful</div>
            <div className="mobile-content-section">
              <div className="mobile-media">
                <div className="mobile-media-body">
                  <a href={ROUTES.MY_POSTS}>Click here to go back to my post.</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-user-slogan">
            <p>Cambridge Course Review Platform</p>
          </div>
        </div>
      </div>
    )
  }
}


export const MobileSuccessfulDeletion = MobileSuccessfulDeletionBase;
export const MobileSuccessfulSubmission = MobileSuccessfulSubmissionBase;
