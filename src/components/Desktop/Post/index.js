import Navigation from "../Navigation";
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar as faStarS} from '@fortawesome/free-solid-svg-icons';
import {withFirebase} from "../../Firebase";
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import StyledRating from "../Score";
import UserStyledRating from "../Score/user";
import * as ROUTES from "../../../constants/routes";
import {Button} from "@material-ui/core";

class PostForm extends React.Component {
  // at post page for each course, get all the existing posts and render
  constructor(props) {
    super(props);
    this.state = {
      ID: this.props.match.params.ID,  // the course Id
      postsMap: {},  // {key: postId, value post object}
      postsId: [],  // the posts under this course
      course: "",  // course name
      isFetching: false
    };
    this.fetchPostAsync = this.fetchPostAsync.bind(this);
    this.fetchCourseAsync = this.fetchCourseAsync.bind(this);
    this.fetchSinglePostAsync = this.fetchSinglePostAsync.bind(this);
  }

  async fetchCourseAsync(courseRef) {
    // get the content of document
    return courseRef.get(courseRef);
  }

  async fetchSinglePostAsync(postsRef, value) {
    // get the document from post collection
    return postsRef.doc(value).get();
  }

  async fetchPostAsync() {
    try {
      this.setState({...this.state, isFetching: true});
      const course_id = this.state.ID;
      const courseRef = this.props.firebase.fs.collection("courses").doc(course_id);
      const postsRef = this.props.firebase.fs.collection("posts");

      const doc = await this.fetchCourseAsync(courseRef);
      const course = doc.data();
      const postsId = doc.get("posts");

      const postMap = {};  // {key: postId, value post object}
      for (const value of postsId) {
        const doc_post = await this.fetchSinglePostAsync(postsRef, value);
        postMap[value] = doc_post.data();
      }

      this.setState({
        ...this.state,
        postsMap: postMap,
        postsId: postsId,
        course: course,
        isFetching: false
      });
    } catch (e) {
      console.log(e);
      this.setState({...this.state, isFetching: false});
    }
  }

  componentDidMount() {
    const fetchPost = this.fetchPostAsync;
    fetchPost();
  }

  render() {
    return (
      <div className="Post">
        <Navigation/>
        {this.state.isFetching &&
        <div className="post">
          <div className="load">{'Loading...'}</div>
        </div>
        }
        {!this.state.isFetching && this.state.course.name == null &&
        <div className="post">
          <p> There is no such module! </p>
        </div>
        }
        {!this.state.isFetching && this.state.course.name != null &&
        <div className="post">
          <div className="course-info">
            <p className="course-id">{this.state.ID}</p>
            <p className="review-counts">{this.state.course.num_posts} reviews</p>
            <p className="course-title">{this.state.course.name}</p>
            <a className="course-desc" href={this.state.course.link}>Course Syllabus</a>
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
          <div className="disclaimer"> Please be kindly noted that the course syllabus and lecturers may vary from year
            to year.
            Legacy posts are collected from online resources.
          </div>
          <div className="comments-box">
            {this.state.postsId.map((postId, index) => {
              return (
                <div className="comment-post" key={index}>
                  <div className="my-subpost-title">
                    <Button
                      className="mobile-post-delete"
                      href={"/report/" + postId}
                      size="small"
                    >
                      Report
                    </Button>
                  </div>
                  <div className="comment"> {this.state.postsMap[postId].content}</div>
                  <div className="comment-info">
                    <div>
                      <div className="comment-date">{this.state.postsMap[postId].timestamp}</div>
                      <div className="user-name">{this.state.postsMap[postId].author.replace(/[0-9]/g, '')}</div>
                    </div>
                    <div>
                      <div
                        className="comment-year">{this.state.postsMap[postId].begin_year}-{this.state.postsMap[postId].begin_year + 1}</div>
                      <UserStyledRating
                        name="score"
                        value={this.state.postsMap[postId].score}
                        icon={<FontAwesomeIcon icon={faStarS}/>}
                        precision={0.5}
                        size="small"
                        readOnly
                      />
                    </div>
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
          </div>
          <div className="report-issues">
            <p>Copyright &copy; 2021 ｜ <a href={ROUTES.REPORT}> Report an issue here</a> or contact us at <a
              href={"mailto:admin@camments.com"}>admin@camments.com</a></p>
          </div>
        </div>
        }
      </div>
    )
  }
}


class CommentFormBase extends React.Component {
  // submit new post and store into firestore
  constructor(props) {
    super(props);
    this.state = {
      comment: '',  // content of new post
      year: 2021,  // default begin_year
      rating: 2.5,  // default score
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
    console.log(this.state.rating);
    const currentUser = this.props.firebase.auth.currentUser.email;

    const crsId = currentUser.slice(0, currentUser.indexOf('@'));
    const course_id = document.getElementsByClassName("course-id")[0].innerText;

    const userRef = this.props.firebase.fs.collection("users").doc(crsId);
    const courseRef = this.props.firebase.fs.collection("courses").doc(course_id);

    // get user data from firestore
    userRef.get().then((doc) => {
      if (doc.exists) {
        const new_num_post = doc.get("num_posts") + 1;  // one post added to user posts
        const postId = crsId + '_' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 6);  // assign post id
        const new_posts = doc.get("posts");
        new_posts.push(postId);

        //  update user doc in users collection
        userRef.set({
          num_posts: new_num_post,
          posts: new_posts
        }, {merge: true});

        //  set timestamp as date of posting
        const today = new Date();
        //  DD/MM/YYYY
        const date = Intl.DateTimeFormat('en-GB').format(today);

        // fetch user rated score
        let score = this.state.rating;
        if (score === null) {
          score = 0;
        }

        // write a new post document with key as postId to posts collection
        this.props.firebase.fs.collection("posts").doc(postId).set({
          author: crsId,
          content: this.state.comment,
          begin_year: this.state.year,
          course_id: course_id,
          score: score,
          timestamp: date
        });

        // update course doc in courses collection
        courseRef.get().then((doc_course) => {
          const course_num_post = doc_course.get("num_posts");
          const legacy_num = doc_course.get("legacy_num");

          const new_course_num_post = course_num_post + 1;  // one post added to num_posts
          const course_posts = doc_course.get("posts");
          const course_score = doc_course.get("score");
          course_posts.push(postId);  // add to posts list

          // calculate new average course score
          const avg_score = (course_score * (course_num_post - legacy_num) + this.state.rating) / (new_course_num_post - legacy_num);

          this.props.firebase.fs.collection("courses").doc(course_id).set({
            num_posts: course_num_post + 1,
            posts: course_posts,
            score: avg_score
          }, {merge: true});
        });
      } else {
        console.log("No such document!");
      }
    });
    event.preventDefault();
    this.props.history.push("/successful-submission/" + course_id);
  }

  render() {
    return (
      <div>
        {this.props.firebase.auth.currentUser &&
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <label>
          <textarea name="comment" id="user-review" placeholder="Type in your review here -> Please avoid rude or abusive comments towards colleagues or lecturers."
                    onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            Rate&nbsp;
            <UserStyledRating
              className="rating"
              name="score"
              value={this.state.rating}
              icon={<FontAwesomeIcon icon={faStarS}/>}
              onChange={(event, newValue) => {
                this.setState({...this.state, rating: newValue});
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
        </form>}
        {!this.props.firebase.auth.currentUser &&
        <p>You have to <a href={ROUTES.LOG_IN}>[Login]</a> first to post a review.</p>}
      </div>
    );
  }

}

const CommentForm = compose(
  withRouter,
  withFirebase
)(CommentFormBase);

const Post = withFirebase(PostForm);

export {Post};

export {CommentForm};