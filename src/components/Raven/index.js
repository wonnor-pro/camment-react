import * as ROUTES from "../../constants/routes";
import React, {Component} from 'react';
import {withFirebase} from "../Firebase";
import axios from "axios";
const empty = require('is-empty');


class RavenLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {ravenData: {}, isFetching: false};

    this.fetchUsersAsync = this.fetchUsersAsync.bind(this);
  }

  async fetchUsersAsync() {
    try {
      this.setState({...this.state, isFetching: true});
      const response = await axios.get(ROUTES.USER_SERVICE_URL);
      console.log(response);
      this.setState({ravenData: response.data, isFetching: false});
      const ravenData = response.data;
      const email = ravenData.crsid + "@cam.ac.uk";
      this.props.firebase.doSignInWithEmailAndPassword(email, "135100")
        .then(() => {})
        .catch(() => {
          this.props.firebase.doCreateUserWithEmailAndPassword(email, "135100")
            .then(() => {
              const userRef = this.props.firebase.fs.collection("users").doc(ravenData.crsid);
              userRef.set({
                email: email,
                name: "",
                num_posts: 0,
                posts: []
              })
            })
        });
    } catch (e) {
      console.log(e);
      this.setState({...this.state, isFetching: false});
    }
  };


  componentDidMount() {
    const fetchUsers = this.fetchUsersAsync;
    fetchUsers();
  }

  render() {
    const ravenData = this.state.ravenData;
    console.log(Object.keys(ravenData));
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

    )
  };
}

export default withFirebase(RavenLanding);