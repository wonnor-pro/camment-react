import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from '../Landing';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import Reviews from '../Reviews';
import * as ROUTES from '../../constants/routes';
import {withAuthentication} from '../Session';
import {Post} from "../Post";
import Login from "../Login";
import MyPost from "../MyPost";
import NotFound from "../NotFound";
import {SuccessfulSubmission} from "../UserAction";
import {SuccessfulDeletion} from "../UserAction";
import Report from "../Report";
import Footer from "../Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {windowWidth: window.innerWidth};
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize = (e) => {
    this.setState({windowWidth: window.innerWidth});
  };

  web_render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path={ROUTES.HOME} component={HomePage}/>
            <Route path={ROUTES.LANDING} component={LandingPage}/>
            <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
            <Route path={ROUTES.ACCOUNT} component={AccountPage}/>
            <Route path={ROUTES.REVIEWS} component={Reviews}/>
            <Route exact path="/Post" component={Post}/>
            <Route path="/Post/:ID" component={Post}/>
            <Route path="/successful-submission/:ID" component={SuccessfulSubmission}/>
            <Route path="/successful-deletion" component={SuccessfulDeletion}/>
            <Route path={ROUTES.LOG_IN} component={Login}/>
            <Route path={ROUTES.MY_POSTS} component={MyPost}/>
            <Route path={ROUTES.REPORT} component={Report}/>
            <Route path='*' exact={true} component={NotFound}/>
          </Switch>
        </div>
      </Router>
    )
  }

  mobile_render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path={ROUTES.HOME} component={Reviews}/>
            <Route path={ROUTES.LANDING} component={LandingPage}/>
            <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
            <Route path={ROUTES.ACCOUNT} component={AccountPage}/>
            <Route path={ROUTES.REVIEWS} component={HomePage}/>
            <Route exact path="/Post" component={Post}/>
            <Route path="/Post/:ID" component={Post}/>
            <Route path="/successful-submission/:ID" component={SuccessfulSubmission}/>
            <Route path="/successful-deletion" component={SuccessfulDeletion}/>
            <Route path={ROUTES.LOG_IN} component={Login}/>
            <Route path={ROUTES.MY_POSTS} component={MyPost}/>
            <Route path={ROUTES.REPORT} component={Report}/>
            <Route path='*' exact={true} component={NotFound}/>
          </Switch>
        </div>
      </Router>
    )
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    console.log(window.innerWidth);
  }


  render() {
    if (window.innerWidth < 960) {
      return <this.mobile_render/>
    } else {
      return <this.web_render/>
    }
  }
}

export default withAuthentication(App);