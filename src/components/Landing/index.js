import * as ROUTES from '../../constants/routes';

const Landing = () => (
  <div className='home'>
    <div className='home_nav'>
      <a className='home_nav_button' id='home_button' href={ROUTES.LANDING}>Home</a>
      <a className='home_nav_button' id='review_button' href={ROUTES.REVIEWS}>Reviews</a>
      <a className='home_nav_button' id='user_button' href={ROUTES.LOG_IN}>Log In</a>
      <a className='home_nav_button' id='register_button' href={ROUTES.SIGN_UP}>Register</a>
    </div>
    <div className='home_title'>
      # Camment _
    </div>
    <div className='home_slogan'>
      <p>Cambridge Engineering Course Review Platform</p>
    </div>
  </div>
);

export default Landing;
