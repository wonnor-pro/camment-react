import Navigation from "../Navigation";
import React from "react";
import CommentForm from "./CommentForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarS, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarR } from '@fortawesome/free-regular-svg-icons';
import {withFirebase} from "../Firebase";

class Post extends React.Component {

  constructor(props) {
    super(props);
    // alert(this.props.match.params.ID);
  }

  render (){
    return (
    <div className="Post">
      <Navigation />
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
            <FontAwesomeIcon className="yellow" icon={faStarS} /><FontAwesomeIcon className="yellow" icon={faStarS} /><FontAwesomeIcon icon={faStarR} /><FontAwesomeIcon icon={faStarR} /><FontAwesomeIcon icon={faStarR} />
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
          <CommentForm />
          {/*<form className="comment-form">*/}
          {/*  form here*/}
          {/*</form>*/}
        </div>
      </div>
    </div>
    )
  }
}

export default Post;