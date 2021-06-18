import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <a id="sign-out" onClick={firebase.doSignOut}>Sign Out</a>
);

export default withFirebase(SignOutButton);
