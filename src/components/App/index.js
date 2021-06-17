import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import Footer from '../Footer';
import Reviews from '../Reviews';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  // <Router>
  //   <div className="App">
  //     <div className="content">
  //       <Switch>
  //         <Route exact path="/home"><HomePage /></Route>
  //         <Route exact path="/signin"><SignInPage /></Route>
  //         <Route exact path="/signup"><SignUpPage /></Route>
  //         <Route exact path="/pw-forget"><PasswordForgetPage /></Route>
  //         <Route exact path="/account"><AccountPage /></Route>
  //         <Route exact path="/reviews"><Reviews /></Route>
  //         <Route exact path="/"><LandingPage /></Route>
  //       </Switch>
  //     </div>
  //   </div>
  //   <Footer />
  // </Router>
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.REVIEWS} component={Reviews} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);

export default withAuthentication(App);