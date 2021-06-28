import React from 'react';
import * as ROUTES from '../../../constants/routes';
import raven_svg from './images/logo.svg';
import {withFirebase} from "../../Firebase";
import {withRouter} from "react-router-dom";
import {compose} from 'recompose';

class MobileLogin extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.firebase.auth
      .signInWithPopup(this.props.firebase.googleProvider)
      .then((result) => {
        const email = result.user.email;
        const crsid = email.slice(0, email.indexOf('@'));

        // Check if userRef is in the user database, if not set new userRef
        this.props.firebase.fs.collection("users").doc(crsid).get().then((doc) => {
          if (!(doc.exists)) {
            this.props.firebase.fs.collection("users").doc(crsid).set({
              email: email,
              name: "",
              num_posts: 0,
              posts: []
            })
          }
        });

        this.props.history.push(ROUTES.ACCOUNT);
      }).catch((e) => {
      this.props.history.push(ROUTES.RAVEN_LANDING);
    });
  }

  render() {
    return (
      <div className='Login'>
        <div className="mobile-login-main">
          <div className="mobile-user-box" id="mobile-user-container">
            <div className="mobile-user-title">User Login</div>
            <div className="mobile-login-group">
              <img className="mobile-login-img" src={raven_svg} alt="raven logo"/><br/><br/>
              <a className="mobile-user-text" onClick={this.handleClick}>Login or Register via Raven</a>
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

export default compose(
  withFirebase,
  withRouter
)(MobileLogin);