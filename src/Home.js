import "./index.css";

const Home = () => {

  const logged_in = false;

  if (logged_in) {
    return (
      <div className="home">
        <div className="home_nav">
          <a className="home_nav_button" id="home_button" href="/">Home</a>
          <a className="home_nav_button" id="review_button" href="/reviews">Reviews</a>
          <a className="home_nav_button" id="user_button" href="/account">Account</a>
          <a className="home_nav_button" id="logout_button" href="/logout">Logout</a>
        </div>
        <div className="home_title">
          # Camment _
        </div>
        <div className="home_slogan">
          <p>Cambridge Engineering Course Review Platform</p>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="home">
        <div className="home_nav">
          <a className="home_nav_button" id="home_button" href="/">Home</a>
          <a className="home_nav_button" id="review_button" href="/reviews">Reviews</a>
          <a className="home_nav_button" id="user_button" href="/login">Login</a>
          <a className="home_nav_button" id="register_button" href="/register">Register</a>
        </div>
        <div className="home_title">
          # Camment _
        </div>
        <div className="home_slogan">
          <p>Cambridge Engineering Course Review Platform</p>
        </div>
      </div>
    );
  }
}

export default Home;