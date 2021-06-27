import React from 'react';
import * as ROUTES from '../../constants/routes';
import raven_svg from './images/logo.svg';
import {withFirebase} from "../Firebase";
import {withRouter} from "react-router-dom";
import { compose } from 'recompose';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.props.firebase.auth
      .signInWithPopup(this.props.firebase.googleProvider)
      .then((result) => {
        this.props.history.push(ROUTES.ACCOUNT);
      }).catch((error) => {
      this.props.history.push(ROUTES.RAVEN_LANDING);
    });
  }

  render() {
    return (
      <div id="main">

        <div id="title">
          <h1># Camments _</h1>
        </div>
        <div id="nav">
          <div className="nav-button" id="home-button"><a href={ROUTES.LANDING}>Home</a></div>
          <div className="nav-button" id="review-button"><a href={ROUTES.REVIEWS}>Reviews</a></div>
        </div>

        <div className="user-box" id="user-container">
          <div className="user-box user-title">User Login</div>
          {/*<div className="user-box login-group">*/}
          {/*  <img className="user-box login-img" src={email_svg} alt="email logo" />*/}
          {/*  &nbsp;&nbsp;&nbsp;*/}
          {/*  <a className="user-box user-text" href={ROUTES.SIGN_IN}>Login or Register via Email</a>*/}
          {/*</div>*/}
          <div className="user-box login-group">
            <img className="user-box login-img" src={raven_svg} alt="raven logo" />
            &nbsp;&nbsp;&nbsp;
            <a className="user-box user-text" onClick={this.handleClick}>Login or Register via Raven</a>
          </div>
        </div>

        <div className="decoration">
          #
        </div>
        <div id="account-slogan">
          <p>Cambridge Course Review Platform</p>
        </div>
      </div>
    )
  }
}

export default compose(
  withFirebase,
  withRouter
)(Login);