import Navigation from "../Navigation";
import React, {Component} from "react";
import {withFirebase} from "../Firebase";

const empty = require('is-empty');

class MyPost extends Component {
  constructor(props) {
    super(props);
    this.state = {ravenData: {}};
    this.myPosts = [];
  }

  componentDidMount() {
    fetch("/raven/user")
      .then(res => res.json())
      .then(result => {
        this.setState = ({ravenData: result});
        console.log(result.crsid);
        console.log(result.sig);
        const postRef = this.props.firebase.fs.collection("posts")

      })
      .catch(err => {
        console.log(err);
      });

  }

  handleDelete(event) {
    console.log(event);
  }

  render() {
    const ravenData = this.setState.ravenData;
    // console.log(Object.keys(ravenData));
    return (
      <div id='main'>
        <div className="Post">
          <Navigation/>
          <div className="post">
            {
              !empty(ravenData) &&
              <div className="course-info">
                {/* TODO: update this */}
                <p className="my-id">{ravenData.crsid}</p>
                <p className="post-counts">145 posts</p>
                <p className="mypost-title">My Posts</p>
              </div>
            }
            {/*<div className="comments-box">*/}
            <div className="comment-post">
              <div className="comment">
                Really useful module that’s generally quite interesting I think. Lays the foundation for
                so
                much other
                information engineering so if you want to go down that route, this is almost essential.
                The
                concepts
                generally aren’t too complicated and the exam is pretty doable. I’d recommend it.
              </div>
              <div className="comment-info">
                <div className="comment-date">07-08-2020</div>
                <a className="post-delete" onClick={this.handleDelete}>Delete</a>
              </div>
            </div>
            <div className="comment-post">
              <div className="comment">
                Really useful module that’s generally quite interesting I think. Lays the foundation for
                so
                much other
                information engineering so if you want to go down that route, this is almost essential.
                The
                concepts
                generally aren’t too complicated and the exam is pretty doable. I’d recommend it.
              </div>
              <div className="comment-info">
                <div className="comment-date">07-08-2020</div>
                <a className="post-delete" onClick={this.handleDelete}>Delete</a>
              </div>
            </div>
            <div className="comment-post">
              <div className="comment">
                Really useful module that’s generally quite interesting I think. Lays the foundation for
                so
                much other
                information engineering so if you want to go down that route, this is almost essential.
                The
                concepts
                generally aren’t too complicated and the exam is pretty doable. I’d recommend it.
              </div>
              <div className="comment-info">
                <div className="comment-date">07-08-2020</div>
                <a className="post-delete" onClick={this.handleDelete}>Delete</a>
              </div>
            </div>
            <div className="comment-post">
              <div className="comment">
                Really useful module that’s generally quite interesting I think. Lays the foundation for
                so
                much other
                information engineering so if you want to go down that route, this is almost essential.
                The
                concepts
                generally aren’t too complicated and the exam is pretty doable. I’d recommend it.
              </div>
              <div className="comment-info">
                <div className="comment-date">07-08-2020</div>
                <a className="post-delete" onClick={this.handleDelete}>Delete</a>
              </div>
            </div>
            <div className="comment-post">
              <div className="comment">
                Really useful module that’s generally quite interesting I think. Lays the foundation for
                so
                much other
                information engineering so if you want to go down that route, this is almost essential.
                The
                concepts
                generally aren’t too complicated and the exam is pretty doable. I’d recommend it.
              </div>
              <div className="comment-info">
                <div className="comment-date">07-08-2020</div>
                <a className="post-delete" onClick={this.handleDelete}>Delete</a>
              </div>
            </div>
            {/*</div>*/}
          </div>
        </div>
      </div>
    )
  };
}


export default withFirebase(MyPost);
