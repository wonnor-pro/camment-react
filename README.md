# Camments project with React

This repo is the React.js version of the camments project.  The primary aim for the camment project is to provide a platform to share engineering course reviews for the University of Cambridge.

### Basic structure
We use `react.js` to control the routing, rendering and page logics. 
Firebase is used to host the user data. Authentication is done by `firebase`.

### Test and run
To test the repo, just download the node.js source code and run `npm install` to install the node modules. And run `npm start` to initiate the web app.



### Deploy
When the project is finished, the web app will be hosted by firebase and accessible on [https://camments.com](https://camments.com).

![img](/img/homepage.png)
![img](/img/review_page.png)
![img](/img/mypost.png)
<p float="left">
  <img src="/img/mobile_home.PNG" width="100" />
  <img src="/img/mobile_post.jpeg" width="100" /> 
  <img src="/img/mobile_raven.PNG" width="100" />
</p>

### Acknowledgement

This project is developed by [Connor Wang](https://github.com/wonnor-pro) and [Helana Yang](https://github.com/helenayyan), sponsored by [Cambridge University Engineering Society](https://cues.org.uk) through the grant scheme.

Primary work from [Robin Wieruch](https://github.com/rwieruch) in his course for integrating firebase with react has been particularly helpful in our development.

---

Legacy Readme

[comment]: <> (# Getting Started with Create React App)

[comment]: <> (This project was bootstrapped with [Create React App]&#40;https://github.com/facebook/create-react-app&#41;.)

[comment]: <> (## Available Scripts)

[comment]: <> (In the project directory, you can run:)

[comment]: <> (### `yarn start`)

[comment]: <> (Runs the app in the development mode.\)

[comment]: <> (Open [http://localhost:3000]&#40;http://localhost:3000&#41; to view it in the browser.)

[comment]: <> (The page will reload if you make edits.\)

[comment]: <> (You will also see any lint errors in the console.)

[comment]: <> (### `yarn test`)

[comment]: <> (Launches the test runner in the interactive watch mode.\)

[comment]: <> (See the section about [running tests]&#40;https://facebook.github.io/create-react-app/docs/running-tests&#41; for more information.)

[comment]: <> (### `yarn build`)

[comment]: <> (Builds the app for production to the `build` folder.\)

[comment]: <> (It correctly bundles React in production mode and optimizes the build for the best performance.)

[comment]: <> (The build is minified and the filenames include the hashes.\)

[comment]: <> (Your app is ready to be deployed!)

[comment]: <> (See the section about [deployment]&#40;https://facebook.github.io/create-react-app/docs/deployment&#41; for more information.)

[comment]: <> (### `yarn eject`)

[comment]: <> (**Note: this is a one-way operation. Once you `eject`, you can’t go back!**)

[comment]: <> (If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.)

[comment]: <> (Instead, it will copy all the configuration files and the transitive dependencies &#40;webpack, Babel, ESLint, etc&#41; right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.)

[comment]: <> (You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.)

[comment]: <> (## Learn More)

[comment]: <> (You can learn more in the [Create React App documentation]&#40;https://facebook.github.io/create-react-app/docs/getting-started&#41;.)

[comment]: <> (To learn React, check out the [React documentation]&#40;https://reactjs.org/&#41;.)

[comment]: <> (### Code Splitting)

[comment]: <> (This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting]&#40;https://facebook.github.io/create-react-app/docs/code-splitting&#41;)

[comment]: <> (### Analyzing the Bundle Size)

[comment]: <> (This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size]&#40;https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size&#41;)

[comment]: <> (### Making a Progressive Web App)

[comment]: <> (This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app]&#40;https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app&#41;)

[comment]: <> (### Advanced Configuration)

[comment]: <> (This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration]&#40;https://facebook.github.io/create-react-app/docs/advanced-configuration&#41;)

[comment]: <> (### Deployment)

[comment]: <> (This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment]&#40;https://facebook.github.io/create-react-app/docs/deployment&#41;)

[comment]: <> (### `yarn build` fails to minify)

[comment]: <> (This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify]&#40;https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify&#41;)

[comment]: <> (# react-firebase-authentication)

[comment]: <> ([![Build Status]&#40;https://travis-ci.org/the-road-to-react-with-firebase/react-firebase-authentication.svg?branch=master&#41;]&#40;https://travis-ci.org/the-road-to-react-with-firebase/react-firebase-authentication&#41; [![Slack]&#40;https://slack-the-road-to-learn-react.wieruch.com/badge.svg&#41;]&#40;https://slack-the-road-to-learn-react.wieruch.com/&#41; [![Greenkeeper badge]&#40;https://badges.greenkeeper.io/the-road-to-react-with-firebase/react-firebase-authentication.svg&#41;]&#40;https://greenkeeper.io/&#41;)

[comment]: <> (* [Tutorial]&#40;https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/&#41;)

[comment]: <> (## Variations)

[comment]: <> (* [Redux Version]&#40;https://github.com/the-road-to-react-with-firebase/react-redux-firebase-authentication&#41;)

[comment]: <> (* [MobX Version]&#40;https://github.com/the-road-to-react-with-firebase/react-mobx-firebase-authentication&#41;)

[comment]: <> (* [Gatsby Version]&#40;https://github.com/the-road-to-react-with-firebase/react-gatsby-firebase-authentication&#41;)

[comment]: <> (* [Firestore Version]&#40;https://github.com/the-road-to-react-with-firebase/react-firestore-authentication&#41;)

[comment]: <> (* [Semantic UI Version]&#40;https://github.com/the-road-to-react-with-firebase/react-semantic-ui-firebase-authentication&#41;)

[comment]: <> (## Features)

[comment]: <> (* uses:)

[comment]: <> (  * only React &#40;create-react-app&#41;)

[comment]: <> (  * firebase)

[comment]: <> (  * react-router)

[comment]: <> (* features:)

[comment]: <> (  * Sign In)

[comment]: <> (  * Sign Up)

[comment]: <> (  * Sign Out)

[comment]: <> (  * Password Forget)

[comment]: <> (  * Password Change)

[comment]: <> (  * Verification Email)

[comment]: <> (  * Protected Routes with Authorization)

[comment]: <> (  * Roles-based Authorization)

[comment]: <> (  * Social Logins with Google, Facebook and Twitter)

[comment]: <> (  * Linking of Social Logins on Account dashboard)

[comment]: <> (  * Auth Persistence with Local Storage)

[comment]: <> (  * Database with Users and Messages)

[comment]: <> (## License)

[comment]: <> (### Commercial license)

[comment]: <> (If you want to use this starter project to develop commercial sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. Purchase an commercial license for different team sizes:)

[comment]: <> (* [1 Developer]&#40;https://gum.co/react-with-firebase-starter-pack-developer&#41;)

[comment]: <> (* [Team of up to 8 Developers]&#40;https://gum.co/react-with-firebase-starter-pack-team&#41;)

[comment]: <> (* [Unlimited Developers of an Organization]&#40;https://gum.co/react-with-firebase-starter-pack-organization&#41;)

[comment]: <> (It grants you also access to the other starter projects in this GitHub organization.)

[comment]: <> (### Open source license)

[comment]: <> (If you are creating an open source application under a license compatible with the [GNU GPL license v3]&#40;https://www.gnu.org/licenses/gpl-3.0.html&#41;, you may use this starter project under the terms of the GPLv3.)

[comment]: <> (## Installation)

[comment]: <> (* `git clone git@github.com:the-road-to-react-with-firebase/react-firebase-authentication.git`)

[comment]: <> (* `cd react-firebase-authentication`)

[comment]: <> (* `npm install`)

[comment]: <> (* `npm start`)

[comment]: <> (* visit http://localhost:3000)

[comment]: <> (Get an overview of Firebase, how to create a project, what kind of features Firebase offers, and how to navigate through the Firebase project dashboard in this [visual tutorial for Firebase]&#40;https://www.robinwieruch.de/firebase-tutorial/&#41;.)

[comment]: <> (### Firebase Configuration)

[comment]: <> (* copy/paste your configuration from your Firebase project's dashboard into one of these files)

[comment]: <> (  * *src/components/Firebase/firebase.js* file)

[comment]: <> (  * *.env* file)

[comment]: <> (  * *.env.development* and *.env.production* files)

[comment]: <> (The *.env* or *.env.development* and *.env.production* files could look like the following then:)

[comment]: <> (```)

[comment]: <> (REACT_APP_API_KEY=AIzaSyBtxZ3phPeXcsZsRTySIXa7n33NtQ)

[comment]: <> (REACT_APP_AUTH_DOMAIN=react-firebase-s2233d64f8.firebaseapp.com)

[comment]: <> (REACT_APP_DATABASE_URL=https://react-firebase-s2233d64f8.firebaseio.com)

[comment]: <> (REACT_APP_PROJECT_ID=react-firebase-s2233d64f8)

[comment]: <> (REACT_APP_STORAGE_BUCKET=react-firebase-s2233d64f8.appspot.com)

[comment]: <> (REACT_APP_MESSAGING_SENDER_ID=701928454501)

[comment]: <> (```)

[comment]: <> (### Activate Sign-In Methods)

[comment]: <> (![firebase-enable-google-social-login_640]&#40;https://user-images.githubusercontent.com/2479967/49687774-e0a31e80-fb42-11e8-9d8a-4b4c794134e6.jpg&#41;)

[comment]: <> (* Email/Password)

[comment]: <> (* [Google]&#40;https://www.robinwieruch.de/react-firebase-social-login/&#41;)

[comment]: <> (* [Facebook]&#40;https://www.robinwieruch.de/firebase-facebook-login/&#41;)

[comment]: <> (* [Twitter]&#40;https://www.robinwieruch.de/firebase-twitter-login/&#41;)

[comment]: <> (* [Troubleshoot]&#40;https://www.robinwieruch.de/react-firebase-social-login/&#41;)

[comment]: <> (### Activate Verification E-Mail)

[comment]: <> (* add a redirect URL for redirecting a user after an email verification into one of these files)

[comment]: <> (  * *src/components/Firebase/firebase.js* file)

[comment]: <> (  * *.env* file)

[comment]: <> (  * *.env.development* and *.env.production* files)

[comment]: <> (The *.env* or *.env.development* and *.env.production* files could look like the following then &#40;excl. the Firebase configuration&#41;.)

[comment]: <> (**Development:**)

[comment]: <> (```)

[comment]: <> (REACT_APP_CONFIRMATION_EMAIL_REDIRECT=http://localhost:3000)

[comment]: <> (```)

[comment]: <> (**Production:**)

[comment]: <> (```)

[comment]: <> (REACT_APP_CONFIRMATION_EMAIL_REDIRECT=https://mydomain.com)

[comment]: <> (```)

[comment]: <> (### Security Rules)

[comment]: <> (```)

[comment]: <> ({)

[comment]: <> (  "rules": {)

[comment]: <> (    ".read": false,)

[comment]: <> (    ".write": false,)

[comment]: <> (    "users": {)

[comment]: <> (      "$uid": {)

[comment]: <> (        ".read": "$uid === auth.uid || root.child&#40;'users/'+auth.uid&#41;.child&#40;'roles'&#41;.hasChildren&#40;['ADMIN']&#41;",)

[comment]: <> (        ".write": "$uid === auth.uid || root.child&#40;'users/'+auth.uid&#41;.child&#40;'roles'&#41;.hasChildren&#40;['ADMIN']&#41;")

[comment]: <> (      },)

[comment]: <> (      ".read": "root.child&#40;'users/'+auth.uid&#41;.child&#40;'roles'&#41;.hasChildren&#40;['ADMIN']&#41;",)

[comment]: <> (      ".write": "root.child&#40;'users/'+auth.uid&#41;.child&#40;'roles'&#41;.hasChildren&#40;['ADMIN']&#41;")

[comment]: <> (    },)

[comment]: <> (    "messages": {)

[comment]: <> (      ".indexOn": ["createdAt"],)

[comment]: <> (      "$uid": {)

[comment]: <> (        ".write": "data.exists&#40;&#41; ? data.child&#40;'userId'&#41;.val&#40;&#41; === auth.uid : newData.child&#40;'userId'&#41;.val&#40;&#41; === auth.uid")

[comment]: <> (      },)

[comment]: <> (      ".read": "auth != null",)

[comment]: <> (      ".write": "auth != null",)

[comment]: <> (    },)

[comment]: <> (  })

[comment]: <> (})

[comment]: <> (```)

