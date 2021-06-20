var express = require('express');
var morgan = require('morgan');
var cors = require('cors');
var app = express();
var passport = require('passport');
var Raven = require('passport-raven');

let user = {};

passport.use(new Raven({
  audience: process.argv[2] || 'http://localhost:3000',
  desc: 'Passport Raven Demo',
  msg: 'Login to demonstrate logging in to a node.js app using passport-raven',
  debug: false
}, function (crsid, response, cb) {
  console.dir(response);
  console.log('Login with crsid: ' + crsid);
  cb(null, {crsid: crsid, isCurrent: response.isCurrent});
}));

passport.serializeUser((user, cb) => {
  cb(null, user);
});

app.use(passport.initialize());
app.use(morgan('dev'));
var corsOptions = {
  origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

app.get('/raven/login', passport.authenticate('raven'), function (req, res) {
  user = req.user;
  console.log("User info");
  console.log(user);
  res.redirect('/landing-raven');
});

app.get("/raven/user", (req, res) => {
  console.log("getting user data!");
  res.send(user);
});

app.get("/raven/logout", (req, res) => {
  console.log("logging out!");
  user = {};
  res.redirect("/");
});



passport.deserializeUser((user, cb) => {
  cb(null, user);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {

  console.log(`server listening in port ${PORT}`);

})