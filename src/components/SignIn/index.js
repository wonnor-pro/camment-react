import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
  <div id="main">

    <div id="title">
      <h1># Camment _</h1>
    </div>

    <div id="nav">
      <div className="nav-button" id="home-button"><a href={ROUTES.HOME}>Home</a></div>
      <div className="nav-button" id="review-button"><a href={ROUTES.REVIEWS}>Reviews</a></div>
    </div>
    {/*<div id="user-nav">*/}
    {/*  <div className="user-nav-button" id="logout-button"><a href={ROUTES.SIGN_UP}>Register</a></div>*/}
    {/*</div>*/}


    <div className="user-box" id="user-container">
      <div className="user-box user-title" id="user-portal">User Login</div>
      <div className="user-section">
        <SignInForm />
      </div>
    </div>
    <div className="decoration">
      {"<?"}
    </div>

    <div id="account-slogan">
      <p>Cambridge Course Review Platform</p>
    </div>

  </div>

  // {/*// <div>*/}
  // {/*//   <div id="title">*/}
  // {/*//     <h1># Camment _</h1>*/}
  // {/*//   </div>*/}
  // {/*//*/}
  // {/*//   <h1>Sign In</h1>*/}
  // {/*//   <SignInForm />*/}
  // {/*//   <PasswordForgetLink />*/}
  // {/*//   <SignUpLink />*/}
  // {/*// </div>*/}
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};


class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <br/>
        <div>Email</div>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <br/>
        <br/>
        <div>Password</div>
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <br/>

        <button disabled={isInvalid} type="submit" id="login-button">
          Login
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);


export default SignInPage;

export { SignInForm};
