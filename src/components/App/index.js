import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from '../Desktop/Landing';
import SignInPage from '../Desktop/SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Desktop/Home';
import AccountPage from '../Desktop/Account';
import Reviews from '../Desktop/Reviews';
import * as ROUTES from '../../constants/routes';
import {withAuthentication} from '../Session';
import {Post} from "../Desktop/Post";
import Login from "../Desktop/Login";
import MyPost from "../Desktop/MyPost";
import NotFound from "../Desktop/NotFound";
import {SuccessfulSubmission} from "../Desktop/UserAction";
import {SuccessfulDeletion} from "../Desktop/UserAction";
import Report from "../Desktop/Report";
import {YearReviews} from "../Desktop/YearReviews";

// Mobile
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import MenuAppBar from "../Mobile/AppBar";
import MobileHomePage from "../Mobile/Home";
import MobileReviews from "../Mobile/Reviews";
import {MobilePost} from "../Mobile/Post";
import MobileLogin from "../Mobile/Login";
import MobileMyPost from "../Mobile/MyPost";
import MobileReport from "../Mobile/Report";
import {MobileSuccessfulSubmission, MobileSuccessfulDeletion} from "../Mobile/Users";
import MobileNotFound from "../Mobile/NotFound";
import MobileAccountPage from "../Mobile/Account";
import MobileYearReviews from "../Mobile/YearReviews";
import CookieConsent from "react-cookie-consent";

// Set theme
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'JetBrains Mono',
      'serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: "#3B434D",
    },
    secondary: {
      main: "#FA9600",
    },
  },

});


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
            <Route path={ROUTES.ACCOUNT} component={AccountPage}/>
            <Route path={ROUTES.REVIEWS} exact={true} component={Reviews}/>
            <Route path="/reviews/:YEAR" component={YearReviews}/>
            <Route path="/Post/:ID" component={Post}/>
            <Route path="/successful-submission/:ID" component={SuccessfulSubmission}/>
            <Route path="/successful-deletion" component={SuccessfulDeletion}/>
            <Route path={ROUTES.LOG_IN} component={Login}/>
            <Route path={ROUTES.MY_POSTS} component={MyPost}/>
            <Route path={ROUTES.REPORT} component={Report}/>
            <Route path='*' exact={true} component={NotFound}/>
          </Switch>
        </div>
        <CookieConsent
          style={{ background: "#3B434DFF" }}
          buttonStyle={{ color: "#3B434DFF", fontSize: "13px", background: "#EBEBEB" }}>
          This website only uses functional cookies to enhance the user experience.</CookieConsent>
      </Router>
    )
  }

  mobile_render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div className="mobileApp">
            <MenuAppBar/>
            <Switch>
              <Route exact path={ROUTES.HOME} component={MobileHomePage}/>
              <Route path={ROUTES.LANDING} component={MobileHomePage}/>
              <Route path={ROUTES.ACCOUNT} component={MobileAccountPage}/>
              <Route path={ROUTES.REVIEWS} exact={true} component={MobileReviews}/>
              <Route path="/reviews/:YEAR" component={MobileYearReviews}/>
              <Route path="/Post/:ID" component={MobilePost}/>
              <Route path="/successful-submission/:ID" component={MobileSuccessfulSubmission}/>
              <Route path="/successful-deletion" component={MobileSuccessfulDeletion}/>
              <Route path={ROUTES.LOG_IN} component={MobileLogin}/>
              <Route path={ROUTES.MY_POSTS} component={MobileMyPost}/>
              <Route path={ROUTES.REPORT} component={MobileReport}/>
              <Route path='*' exact={true} component={MobileNotFound}/>
            </Switch>
          </div>
        </ThemeProvider>
        <CookieConsent
          style={{ background: "#3B434DFF", fontSize: "13px", }}
          buttonStyle={{ color: "#3B434DFF", background: "#EBEBEB" }}>
          This website only uses functional cookies to enhance the user experience.</CookieConsent>
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