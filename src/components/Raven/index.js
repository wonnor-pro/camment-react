import * as ROUTES from "../../constants/routes";
import SignOutButton from "../SignOut";
import PasswordChangeForm from "../PasswordChange";
import React, {Component} from 'react';
import {withFirebase} from "../Firebase";

const empty = require('is-empty');


class RavenLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {ravenData: {}};
  }

  componentDidMount() {
    fetch("/raven/user")
      .then(res => res.json())
      .then(result => {
        this.setState = ({ravenData: result});
        console.log(this.props.firebase);
        // console.log(result);
        console.log(result.crsid);
        console.log(result.sig);
        const email = result.crsid + "@cam.ac.uk";
        this.props.firebase.doSignInWithEmailAndPassword(email, "135100")
          .then(() => {
            // this.props.history.push(ROUTES.ACCOUNT);
            // this.props.firebase.doSignInWithEmailAndPassword(email, "135100")
            //   .then(() => {
            //     // this.props.history.push(ROUTES.HOME);
            //   })
          })
          .catch(() => {
            this.props.firebase.doCreateUserWithEmailAndPassword(email, "135100")
              .then(() => {
                const userRef = this.props.firebase.fs.collection("users").doc(result.crsid);
                userRef.set({
                  email: email,
                  name: "",
                  num_posts: 0,
                  posts: []
                })
              })
          });

      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const ravenData = this.setState.ravenData;
    // console.log(Object.keys(ravenData));

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
          <div className="user-nav-button" id="post-button"><a href={ROUTES.ACCOUNT}>Account</a></div>
        </div>


        <div className="user-box" id="user-container">
          <div className="user-box user-title" id="user-portal">Raven Gate</div>
          <div className="content-section">
            <div className="media">
              {
                !empty(ravenData) &&
                <div className="media-body">
                  <p className="account-heading">CRSID</p>
                  <p className="text-secondary">{ravenData.crsid}</p>
                  <p className="account-heading">Current Student</p>
                  <p className="text-secondary">{ravenData.isCurrent ? "Yes" : "No"}</p>
                  {/*<p className="account-heading">signature</p>*/}
                  {/*<p className="text-secondary">{ravenData.sig}</p>*/}

                </div>
              }
              {
                empty(ravenData) &&
                <div className="media-body">
                  This page is only for cambridge students/staff.
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
  }
};

export default withFirebase(RavenLanding);