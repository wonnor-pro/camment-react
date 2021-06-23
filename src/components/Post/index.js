import Navigation from "../Navigation";
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar as faStarS, faStarHalf} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarR} from '@fortawesome/free-regular-svg-icons';
import {withFirebase} from "../Firebase";
import {REVIEWS} from "../../constants/routes";
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import StyledRating from "../Score";
import UserStyledRating from "../Score/user";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ID: this.props.match.params.ID, postsMap: {}, postsId: [], course:"", isFetching: false}
    this.fetchPostAsync = this.fetchPostAsync.bind(this);
    this.fetchCourseAsync = this.fetchCourseAsync.bind(this);
    this.fetchSinglePostAsync = this.fetchSinglePostAsync.bind(this);
  }

  async fetchCourseAsync(courseRef) {
    return courseRef.get(courseRef);
  }

  async fetchSinglePostAsync(postRef, value){
    return postRef.doc(value).get();
  }

  async fetchPostAsync() {
    try {
      this.setState({...this.state, isFetching: true});
      const course_id = this.state.ID;
      const courseRef = this.props.firebase.fs.collection("courses").doc(course_id);
      const postRef = this.props.firebase.fs.collection("posts");

      const doc = await this.fetchCourseAsync(courseRef);
      const course = doc.data();
      const postsId = doc.get("posts");
      const postMap = {};
      for (const value of postsId) {
        const doc_post = await this.fetchSinglePostAsync(postRef, value);
        postMap[value] = doc_post.data();
        }
      console.log(this.state.postsMap);
      console.log(this.state.course);
      this.setState({...this.state, postsMap:postMap, postsId: postsId, course:course, isFetching: false});
    } catch (e) {
      console.log(e);
      this.setState({...this.state, isFetching: false});
    }
  };

  componentDidMount() {
    const fetchPost = this.fetchPostAsync;
    fetchPost();
  }

  render() {
    console.log(this.state.course);
    return (
      <div className="Post">
        <Navigation/>
        { this.state.isFetching &&
        <div className="post">
          <div className="load">{'Loading...'}</div>
        </div>
        }
        { !this.state.isFetching &&
        <div className="post">
          <div className="course-info">
            <p className="course-id">{this.state.ID}</p>
            <p className="review-counts">{this.state.course.num_posts} reviews</p>
            <p className="course-title">{this.state.course.name}</p>
            {/*<p className="course-title">3A1</p>*/}
            <a className="course-desc"
               href={this.state.course.link}>
              Course Syllabus
            </a>
            <StyledRating
              name="score"
              value={this.state.course.score}
              icon={<FontAwesomeIcon icon={faStarS}/>}
              precision={0.5}
              size="small"
              readOnly
            />
          </div>
          <div className="post-entry">
            <h3>Course Review</h3>
          </div>
          <div className="comments-box">
            {this.state.postsId.map((postId, index) => {
              return (
                <div className="comment-post" key = {index}>
                  <div className="comment"> {this.state.postsMap[postId].content}</div>
                  <div className="comment-info">
                    <div className="comment-date">{this.state.postsMap[postId].timestamp}</div>
                    <div className="user-name">{this.state.postsMap[postId].author}</div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="post-entry">
            <h3>Post your review</h3>
          </div>
          <div className="comment-input-group">
            <CommentForm/>
            {/*<form className="comment-form">*/}
            {/*  form here*/}
            {/*</form>*/}
          </div>
        </div>
        }
      </div>
    )
  };
}


class CommentFormBase extends React.Component {
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
    console.log(this.props);
  }

  handleSubmit(event) {
    const currentUser = this.props.firebase.auth.currentUser.email;

    const crsId = currentUser.slice(0, currentUser.indexOf('@'));
    console.log(crsId);
    const course_id = document.getElementsByClassName("course-id")[0].innerText;
    // console.log("submitted");
    console.log(course_id);

    const fake_score = 3;  // to be set
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
          score: fake_score,
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

          const avg_score = (course_score * course_num_post + fake_score) / new_course_num_post;

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
    alert('A comment was submitted: ' + this.state.comment + '\nCourse Taken in ' + this.state.year + '\n Rating is' + this.state.rating);
    event.preventDefault();

    // to be decided, just for testing
    this.props.history.push("/reviews");
  }

  render() {
    // console.log(this.props);
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <label>
          <textarea name="comment" id="user-review" placeholder="Type in your review here."
                    onChange={this.handleChange}/>
        </label>
        <br/>
        <label>
          Rate&nbsp;
          <UserStyledRating
            className="rating"
            name="score"
            // defaultValue={this.state.rating}
            value={this.state.rating}
            icon={<FontAwesomeIcon icon={faStarS}/>}
            onChange={(event, newValue) => {
              this.setState({... this.state, rating: newValue});
            }}
            precision={0.5}
            size="small"
          />
          &nbsp;for the course taken in the&nbsp;
          <input
            name="year"
            type="number"
            value={this.state.year}
            onChange={this.handleChange}/>
          -{this.state.year + 1} academic year.
        </label>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

const CommentForm = compose(
  withRouter,
  withFirebase,
)(CommentFormBase);
const Post = withFirebase(PostForm);

export {Post};

export {CommentForm};