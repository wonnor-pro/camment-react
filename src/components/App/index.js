import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import Reviews from '../Reviews';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import {Post} from "../Post";
import Login from "../Login";
import RavenLanding from "../Raven";
import MyPost from "../MyPost";
import NotFound from "../NotFound";
import {SuccessfulSubmission} from "../UserAction";
import Footer from "../Footer";
const App = () => (

  <Router>
    <div className="App">
      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.REVIEWS} component={Reviews} />
        <Route exact path="/Post" component={Post} />
        <Route path="/Post/:ID" component={Post} />
        <Route path="/successful-submission/:ID" component={SuccessfulSubmission} />
        <Route path={ROUTES.LOG_IN} component={Login} />
        <Route path={ROUTES.RAVEN_LANDING} component={RavenLanding} />
        <Route path={ROUTES.MY_POSTS} component={MyPost} />
        <Route path='*' exact={true} component={NotFound} />
      </Switch>
    </div>
    {/*<Footer />*/}
  </Router>
);

export default withAuthentication(App);