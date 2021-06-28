import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {withFirebase} from "../../Firebase";
import {withRouter} from "react-router-dom";
import {compose} from "recompose";
import * as ROUTES from '../../../constants/routes';
import {AuthUserContext} from "../../Session";


class MenuAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userAnchorEl: null, menuAnchorEl: null};

    this.handleUserMenu = this.handleUserMenu.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleHomeRedirect = this.handleHomeRedirect.bind(this);
    this.handleReviewRedirect = this.handleReviewRedirect.bind(this);
    this.handleReportRedirect = this.handleReportRedirect.bind(this);
    this.handleLoginRedirect = this.handleLoginRedirect.bind(this);
    this.handleAccountRedirect = this.handleAccountRedirect.bind(this);
    this.handleMyPostRedirect = this.handleMyPostRedirect.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleHomeRedirect(event) {
    this.props.history.push(ROUTES.HOME);
    this.handleClose();
  }

  handleReviewRedirect(event) {
    this.props.history.push(ROUTES.REVIEWS);
    this.handleClose();
  }

  handleReportRedirect(event) {
    this.props.history.push(ROUTES.REPORT);
    this.handleClose();
  }

  handleLoginRedirect(event) {
    this.props.history.push(ROUTES.LOG_IN);
    this.handleClose();
  }

  handleAccountRedirect(event) {
    this.props.history.push(ROUTES.ACCOUNT);
    this.handleClose();
  }

  handleMyPostRedirect(event) {
    this.props.history.push(ROUTES.MY_POSTS);
    this.handleClose();
  }

  handleLogout(event){
    this.props.firebase.doSignOut();
    this.props.history.push("/");
    this.handleClose();
  }

  handleUserMenu(event) {
    this.setState({...this.state, userAnchorEl: event.currentTarget});
    console.log(this.state);
  }

  handleMenu(event) {
    this.setState({...this.state, menuAnchorEl: event.currentTarget});
    console.log(this.state);
  }

  handleClose() {
    this.setState({...this.state, userAnchorEl: null, menuAnchorEl: null});
  }

  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div className="root" style={{flexGrow: 1}}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" className="menuButton" onClick={this.handleMenu} color="inherit"
                            aria-label="menu">
                  <MenuIcon/>
                </IconButton>
                <Menu
                  id="left-menu-appbar"
                  anchorEl={this.state.menuAnchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  getContentAnchorEl={null}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(this.state.menuAnchorEl)}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleHomeRedirect}>Home</MenuItem>
                  <MenuItem onClick={this.handleReviewRedirect}>Reviews</MenuItem>
                  <MenuItem onClick={this.handleReportRedirect}>Report Issues</MenuItem>
                </Menu>
                <Typography variant="h6" className="app-bar-title" style={{flexGrow: 1}}>
                  # Camments _
                </Typography>
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={this.handleUserMenu}
                    color="inherit"
                  >
                    <AccountCircle/>
                  </IconButton>
                  {!authUser && (
                    <Menu
                      id="menu-appbar"
                      anchorEl={this.state.userAnchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(this.state.userAnchorEl)}
                      onClose={this.handleClose}
                    >
                      <MenuItem onClick={this.handleLoginRedirect}>Login</MenuItem>
                    </Menu>
                  )}
                  {authUser && (
                    <Menu
                      id="menu-appbar"
                      anchorEl={this.state.userAnchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(this.state.userAnchorEl)}
                      onClose={this.handleClose}
                    >
                      <MenuItem onClick={this.handleAccountRedirect}>Account</MenuItem>
                      <MenuItem onClick={this.handleMyPostRedirect}>My post</MenuItem>
                      <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                    </Menu>
                  )}

                </div>
              </Toolbar>
            </AppBar>
          </div>
        )}
      </AuthUserContext.Consumer>

    );
  }
}

export default compose(
  withFirebase,
  withRouter
)(MenuAppBar);