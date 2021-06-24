import Navigation from "../Navigation";
import React, {Component} from "react";
import {withFirebase} from "../Firebase";
import axios from "axios";
import * as ROUTES from "../../constants/routes";
import {withAuthorization} from "../Session";
import {compose} from "recompose";

class MyPost extends Component {
  constructor(props) {
    super(props);
    // TODO: update the post information required
    this.state = {ravenData: {}, myPosts: [], isFetching: false};

    this.fetchUsersAsync = this.fetchUsersAsync.bind(this);
  }

  async fetchUsersAsync() {
    try {
      this.setState({...this.state, isFetching: true});
      const response = await axios.get(ROUTES.USER_SERVICE_URL);
      console.log(response);
      this.setState({...this.state, ravenData: response.data, isFetching: false});
    } catch (e) {
      console.log(e);
      this.setState({...this.state, isFetching: false});
    }
  };

  componentDidMount() {
    const fetchUser = this.fetchUsersAsync;
    fetchUser();
  }

  handleDelete(event) {
    console.log(event);
  }

  render() {
    console.log(this.state.ravenData.crsid);
    return (
      <div className="Post">
        <Navigation/>
        <div className="post">
          <div className="course-info">
            {/* TODO: update this */}
            <p className="my-id">{this.state.ravenData.crsid}</p>
            <p className="post-counts">145 posts</p>
            <p className="mypost-title">My Posts</p>
          </div>
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
        </div>
      </div>
    )
  };
}

const condition = authUser => !!authUser;

export default compose(
    withFirebase,
    withAuthorization(condition)
)(MyPost);
