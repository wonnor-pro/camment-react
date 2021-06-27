import * as ROUTES from "../../../constants/routes";
import React from "react";

const Notfound = () => {

  return (
    <div id="main">
      <div id="title">
        <h1># Camment _</h1>
      </div>
      <div id="nav">
        <div className="nav-button" id="home-button"><a href={ROUTES.HOME}>Home</a></div>
        <div className="nav-button" id="review-button"><a href={ROUTES.REVIEWS}>Reviews</a></div>
      </div>

      <div className="user-box" id="user-container">
        <div className="user-box user-title" id="user-portal">404 Page</div>
        <div className="content-section">
          <div className="media">
            <div className="media-body">
              It seems that you are lost...
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


export default Notfound;