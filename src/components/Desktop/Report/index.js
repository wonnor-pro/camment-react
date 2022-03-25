import * as ROUTES from "../../../constants/routes";
import React, {Component} from 'react';
import {withFirebase} from "../../Firebase";
import { makeStyles } from '@material-ui/core/styles';
import UserStyledRating from "../Score/user";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as faStarS} from "@fortawesome/free-solid-svg-icons";
import {compose} from "recompose";
import {withRouter} from "react-router-dom";

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {ravenData: {}, post_ID: this.props.match.params.ID, isFetching: false};
  }


  componentDidMount() {
  }

  render() {
    return (
      <div id="main">

        <div id="title">
          <h1># Camments _</h1>
        </div>
        <div id="nav">
          <div className="nav-button" id="home-button"><a href={ROUTES.HOME}>Home</a></div>
          <div className="nav-button" id="review-button"><a href={ROUTES.REVIEWS}>Reviews</a></div>
        </div>


        <div className="user-box" id="user-container">
          <div className="user-box user-title" id="user-portal">Report an Issue</div>
          <div className="content-section">
            <div className="media">
              <div className="report-intro">
                <p>Hi there, if you find any issues on the webpage,</p>
                <p>please kindly let us know via the form below.</p>
              </div>
              <iframe
                src={"https://docs.google.com/forms/d/e/1FAIpQLSd2fl7SaZBkVhUgcw4e35_UvJBS12xZgtrRFPuzCAwVQVQzwA/viewform?usp=pp_url&entry.371232267=" + this.state.post_ID}
                width="500" height="673" frameBorder="1" marginHeight="0" marginWidth="0">Loading…
              </iframe>
            </div>
          </div>
        </div>

        <div className="decoration">
          {"<?"}
        </div>
        <div id="account-slogan">
          <p>Cambridge Course Review Platform</p>
        </div>

      </div>
    )
  };
}

class ReportFormBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      year: 2020,
      rating: 2.5,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'number' ? parseInt(target.value) : target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const currentUser = this.props.firebase.auth.currentUser.email;

    const crsId = currentUser.slice(0, currentUser.indexOf('@'));
    console.log(crsId);
    const course_id = document.getElementsByClassName("course-id")[0].innerText;
    // console.log("submitted");
    console.log(course_id);

    const userRef = this.props.firebase.fs.collection("users").doc(crsId);
    const courseRef = this.props.firebase.fs.collection("courses").doc(course_id);

    // get user data from firestore
    userRef.get().then((doc) => {
      if (doc.exists) {
        const num_post = doc.get("num_posts") + 1;
        const postId = crsId + '_' + num_post.toString();
        const new_posts = doc.get("posts");
        new_posts.push(postId);

        //  write to user data
        userRef.set({
          num_posts: num_post,
          posts: new_posts
        }, {merge: true});

        //  write to posts data
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        console.log(date);
        this.props.firebase.fs.collection("posts").doc(postId).set({
          author: crsId,
          content: this.state.comment,
          begin_year: this.state.year,
          course_id: course_id,
          score: this.state.rating,
          timestamp: date
        });

        // write to course data
        courseRef.get().then((doc_course) => {
          const course_num_post = doc_course.get("num_posts");
          const new_course_num_post = course_num_post + 1;
          const course_posts = doc_course.get("posts");
          const course_score = doc_course.get("score");
          // console.log(course_posts);
          course_posts.push(postId);

          const avg_score = (course_score * course_num_post + this.state.rating) / new_course_num_post;

          this.props.firebase.fs.collection("courses").doc(course_id).set({
            num_posts: course_num_post + 1,
            posts: course_posts,
            score: avg_score

          }, {merge: true});
        });

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    });
    // alert('A comment was submitted: ' + this.state.comment + '\nCourse Taken in ' + this.state.year + '\n Rating is' + this.state.rating);
    event.preventDefault();

    // to be decided, just for testing
    this.props.history.push("/successful-submission/" + course_id);
  }

  render() {
    // console.log(this.props);
    return (
      <form className="report-form" onSubmit={this.handleSubmit}>
        <label>Your Name</label>
        <br/>
        <input name="name" type="text" placeholder="Your Name" />
        <br/>
        <label>Your Email</label>
        <br/>
        <input name="email" type="email" placeholder="Your Email" />
        <br/>
        <label>Confirm your Email</label>
        <br/>
        <input name="confirm_email" type="email" placeholder="Confirm Email" />
        <br/>
        <label>Describe in detail the issue that you found</label>
        <br/>
        <textarea name="report" id="user-review" placeholder="Type in your review here."
                  onChange={this.handleChange}/>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

const ReportForm = compose(
  withRouter,
  withFirebase,
)(ReportFormBase);

export default Report;