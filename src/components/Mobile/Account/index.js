import React from 'react';
import {compose} from 'recompose';
import {Button} from "@material-ui/core";
import {
  AuthUserContext,
  withAuthorization
} from '../../Session';
import {withRouter} from "react-router-dom";
import * as ROUTES from '../../../constants/routes';
import {withFirebase} from "../../Firebase";

class MobileAccountPage extends React.Component{
  constructor(props) {
    super(props);

    this.handleMyPostRedirect = this.handleMyPostRedirect.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleMyPostRedirect(event) {
    this.props.history.push(ROUTES.MY_POSTS)
  }

  handleLogout(event){
    this.props.firebase.doSignOut();
    this.props.history.push("/");
  }

  render(){
    return(
      <AuthUserContext.Consumer>
        {authUser => (
          <div className='Account'>
            <div className="mobile-account-main">
              <div className="mobile-user-box" id="mobile-user-container">
                <div className="mobile-user-title">User Portal</div>
                <div className="mobile-content-section">
                  <div className="mobile-media">
                    <div className="mobile-media-body">
                      <p className="mobile-account-heading">Username</p>
                      <p className="mobile-text-secondary">{authUser.email.slice(0, authUser.email.indexOf('@'))}</p>
                      <p className="mobile-account-heading">Email</p>
                      <p className="mobile-text-secondary">{authUser.email}</p>
                      <br/>
                      <Button className="mobile-btn-my-posts" variant="contained" color="primary" onClick={this.handleMyPostRedirect}>
                        My Posts
                      </Button>
                      &nbsp;&nbsp;&nbsp;
                      <Button className="mobile-btn-my-posts" variant="contained" color="primary" onClick={this.handleLogout}>
                        Log out
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mobile-user-slogan">
                <p>Student-Run Course Review Platform</p>
              </div>
            </div>
          </div>

        )}
      </AuthUserContext.Consumer>
    )
  }
}


const condition = authUser => !!authUser;

export default compose(
  withAuthorization(condition),
  withRouter,
  withFirebase
)(MobileAccountPage);
