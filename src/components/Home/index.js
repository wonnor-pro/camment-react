import './index.css';
import React from 'react';
import { compose } from 'recompose';

import { withAuthorization} from '../Session';
import SignOutButton from "../SignOut";

const HomePage = () => (
  <div className='home'>
    <div className='home_nav'>
      <a className='home_nav_button' id='home_button' href='/'>Home</a>
      <a className='home_nav_button' id='review_button' href='/reviews'>Reviews</a>
      <a className='home_nav_button' id='user_button' href='/account'>Account</a>
      <SignOutButton />
      {/*<a className='home_nav_button' id='logout_button' href='/signout'>SignOut</a>*/}
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
