import React from 'react';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import {withRouter} from "react-router-dom";

class SignOutButton extends React.Component {
  constructor(props) {
    super(props);

    this.SignOut = this.SignOut.bind(this);
  }

  SignOut(){
    this.props.firebase.doSignOut();
    fetch("/raven/logout");
    alert("You have successfully logged out from Raven!")
    this.props.history.push("/");
  }

  render() {
    return(
      <a id="sign-out" onClick={this.SignOut}>Log Out</a>
    )
  }
}

export default compose(
  withFirebase,
  withRouter
)(SignOutButton);
