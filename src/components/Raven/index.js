import RavenProvider from "../Context";
import * as ROUTES from "../../constants/routes";
import SignOutButton from "../SignOut";
import PasswordChangeForm from "../PasswordChange";
import { useContext } from 'react';

const empty =require('is-empty');

const RavenLanding = () => {
  const ravenData = useContext(RavenProvider.context);
  console.log(ravenData);
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
        <div className="user-nav-button" id="logout-button"><SignOutButton/></div>
      </div>


      <div className="user-box" id="user-container">
        <div className="user-box user-title" id="user-portal">User Portal</div>
        <div className="content-section">
          <div className="media">
            {
              !empty(ravenData) &&
                <div className="media-body">
                  <p className="account-heading">CRSID</p>
                  <p className="text-secondary">{ravenData.crsid}</p>
                  <p className="account-heading">Email</p>
                  <p className="text-secondary">{ravenData.isCurrent}</p>
                </div>
            }
            {
              empty(ravenData) &&
              <div className="media-body">
                This page is only for cambridge students/stuff.
              </div>
            }

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

    // <div>
    //   <h1>Account: {authUser.email}</h1>
    //   <PasswordForgetForm />
    //   <PasswordChangeForm />
    //   <LoginManagement authUser={authUser} />
    // </div>

  );
};

export default RavenLanding;