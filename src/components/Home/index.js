import './index.css';
import React from 'react';
import { compose } from 'recompose';

import { withAuthorization} from '../Session';
import SignOutButton from "../SignOut";
import * as ROUTES from '../../constants/routes';

const HomePage = () => (
  <div className='home'>
    <div className='home_nav'>
      <a className='home_nav_button' id='home_button' href={ROUTES.LANDING}>Home</a>
      <a className='home_nav_button' id='review_button' href={ROUTES.REVIEWS}>Reviews</a>
      <a className='home_nav_button' id='user_button' href={ROUTES.ACCOUNT}>Account</a>
      <SignOutButton />
    </div>
    <div className='home_title'>
      # Camment _
    </div>
    <div className='home_slogan'>
      <p>Cambridge Engineering Course Review Platform</p>
    </div>
  </div>
);

const condition = authUser => !!authUser;

export default compose(
  withAuthorization(condition),
)(HomePage);
