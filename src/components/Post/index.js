import Navigation from "../Navigation";
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar as faStarS, faStarHalf} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarR} from '@fortawesome/free-regular-svg-icons';
import {withFirebase} from "../Firebase";


class Post extends React.Component {
  constructor(props) {
    super(props);
    // alert(this.props.match.params.ID);
  }

  render (){
    return (
        <div className="Post">
          <Navigation/>
          <div className="post">
            <div className="course-info">
              <p className="course-id">3F1</p>
              <p className="review-counts">145 reviews</p>
              <p className="course-title">Signals and Systems</p>
              <a className="course-desc"
                 href="http://teaching.eng.cam.ac.uk/content/engineering-tripos-part-iia-3f1-signals-systems-2018-19">
                Course Syllabus
              </a>
              <div className="score">
                <FontAwesomeIcon className="yellow" icon={faStarS}/><FontAwesomeIcon className="yellow"
                                                                                     icon={faStarS}/><FontAwesomeIcon
                  icon={faStarR}/><FontAwesomeIcon icon={faStarR}/><FontAwesomeIcon icon={faStarR}/>
              </div>
            </div>
            <div className="post-entry">
              <h3>Course Review</h3>
            </div>
            <div className="comments-box">
              <div className="comment-post">
                <div className="comment">
                  Really useful module that’s generally quite interesting I think. Lays the foundation for so much other
                  information engineering so if you want to go down that route, this is almost essential. The concepts
                  generally aren’t too complicated and the exam is pretty doable. I’d recommend it.
                </div>
                <div className="comment-info">
                  <div className="comment-date">07-08-2020</div>
                  <div className="user-name">CW</div>
                </div>
              </div>
              <div className="comment-post">
                <div className="comment">
                  Really useful module that’s generally quite interesting I think. Lays the foundation for so much other
                  information engineering so if you want to go down that route, this is almost essential. The concepts
                  generally aren’t too complicated and the exam is pretty doable. I’d recommend it.
                </div>
                <div className="comment-info">
                  <div className="comment-date">07-08-2020</div>
                  <div className="user-name">CW</div>
                </div>
              </div>
              <div className="comment-post">
                <div className="comment">
                  Really useful module that’s generally quite interesting I think. Lays the foundation for so much other
                  information engineering so if you want to go down that route, this is almost essential. The concepts
                  generally aren’t too complicated and the exam is pretty doable. I’d recommend it.
                </div>
                <div className="comment-info">
                  <div className="comment-date">07-08-2020</div>
                  <div className="user-name">CW</div>
                </div>
              </div>
              <div className="comment-post">
                <div className="comment">
                  Really useful module that’s generally quite interesting I think. Lays the foundation for so much other
                  information engineering so if you want to go down that route, this is almost essential. The concepts
                  generally aren’t too complicated and the exam is pretty doable. I’d recommend it.
                </div>
                <div className="comment-info">
                  <div className="comment-date">07-08-2020</div>
                  <div className="user-name">CW</div>
                </div>
              </div>
              <div className="comment-post">
                <div className="comment">
                  Really useful module that’s generally quite interesting I think. Lays the foundation for so much other
                  information engineering so if you want to go down that route, this is almost essential. The concepts
                  generally aren’t too complicated and the exam is pretty doable. I’d recommend it.
                </div>
                <div className="comment-info">
                  <div className="comment-date">07-08-2020</div>
                  <div className="user-name">CW</div>
                </div>
              </div>
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
        </div>
    )};
}


class CommentFormBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      year: 2020
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
    // console.log(this.props.firebase.auth.currentUser.email);
    // const crsId = "yy452";
    const currentUser = this.props.firebase.auth.currentUser.email;

    const crsId = currentUser.slice(0, currentUser.indexOf('@'));
    console.log(crsId);

    // get user data from firestore
    const userRef = this.props.firebase.fs.collection("users").doc(crsId);
    userRef.get().then((doc) => {
      if (doc.exists) {

        // set new postId
        const num_post = doc.get("num_posts") + 1;
        const postId = crsId + '_' + num_post.toString();
        const new_posts = doc.get("posts")
        new_posts.push(postId);

        // //  write to user data
        userRef.set({
          num_posts: num_post,
          posts: new_posts
        },{merge: true})
        //
        // //  wite to posts data
        // this.props.firebase.fs.collection("posts").doc(postId).set({
        //   arthor: crsId,
        //   content: this.state.comment,
        //   year: this.state.year
        // },{merge: true})

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });


    alert('A comment was submitted: ' + this.state.comment + '\nCourse Taken in ' + this.state.year);
    event.preventDefault();
  }

  render() {

    console.log(this.props);
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <label>
          <textarea name="comment" id="user-review" placeholder="Type in your review here."
                    onChange={this.handleChange}/>
        </label>
        <br/>
        <label>
          Course taken in the&nbsp;
          <input
            name="year"
            type="number"
            value={this.state.year}
            onChange={this.handleChange}/>
          -{this.state.year + 1} academic year.
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

const CommentForm = withFirebase(CommentFormBase, Post);

export {Post};

export {CommentForm};