import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';


const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (

  <nav>
    <div className="logo">
      <div id="logo-title">
        # Camment _
      </div>
      <div id="slogan">
        Cambridge Course Review Platform
      </div>
    </div>
    <ul className="nav-links">
      <li><Link id="home_button" to={ROUTES.HOME}>Home</Link></li>
      <li><Link id="review_button" to={ROUTES.REVIEWS}>Reviews</Link></li>
      <li><Link id="user_button" to={ROUTES.ACCOUNT}>Account</Link></li>
      <li><SignOutButton /></li>
    </ul>
    <div className="burger">
      <div id="line1"></div>
      <div id="line2"></div>
      <div id="line3"></div>
    </div>
  </nav>


);

const NavigationNonAuth = () => (

  <nav>
    <div className="logo">
      <div id="logo-title">
        # Camment _
      </div>
      <div id="slogan">
        Cambridge Course Review Platform
      </div>
    </div>
    <ul className="nav-links">
      <li><Link id="home_button" to={ROUTES.LANDING}>Home</Link></li>
      <li><Link id="review_button" to={ROUTES.REVIEWS}>Reviews</Link></li>
      <li><Link id="signin_button" to={ROUTES.LOG_IN}>Log In</Link></li>
    </ul>
    <div className="burger">
      <div id="line1"></div>
      <div id="line2"></div>
      <div id="line3"></div>
    </div>
  </nav>

);

export default Navigation;
