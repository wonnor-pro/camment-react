import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import Reviews from '../Reviews';

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
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.REVIEWS}>Reviews</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    {!!authUser.roles[ROLES.ADMIN] && (
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    )}
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <nav className="navbar">
    <div className="logo">
      <div id="logo-title">
        # Camment _
      </div>
      <div id="slogan">
        Cambridge Course Review Platform
      </div>
    </div>
    <ul className="nav-links">
      <li><a id="home_button" href="/">Home</a></li>
      <li><a id="review_button" href="/reviews">Reviews</a></li>
      <li><a id="user_button" href="/signin">Sign In</a></li>
    </ul>
    <div className="burger">
      <div id="line1"></div>
      <div id="line2"></div>
      <div id="line3"></div>
    </div>
  </nav>
);

export default Navigation;
