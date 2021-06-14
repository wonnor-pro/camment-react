const Navbar = () => {
  return (
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
        <li><a id="review_button" href="/reviews">Review</a></li>
        <li><a id="user_button" href="/login">Login</a></li>
      </ul>
      <div className="burger">
        <div id="line1"></div>
        <div id="line2"></div>
        <div id="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;