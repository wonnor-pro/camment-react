import Navigation from "../Navigation";
import React, {Component} from "react";
import {withFirebase} from "../../Firebase";
import * as ROUTES from "../../../constants/routes";
import {AuthUserContext, withAuthorization} from "../../Session";
import {compose} from "recompose";
import UserStyledRating from "../Score/user";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as faStarS} from "@fortawesome/free-solid-svg-icons";

class MyPost extends Component {

  static contextType = AuthUserContext;

  constructor(props) {
    super(props);
    this.state = {
      crsid: "unknown",
      postsMap: {},
      user: "",
      postsId: [],
      isFetching: false
    };
    this.fetchUsersAsync = this.fetchUsersAsync.bind(this);
    this.fetchPostAsync = this.fetchPostAsync.bind(this);
    this.fetchSinglePostAsync = this.fetchSinglePostAsync.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  async fetchPostAsync(userRef) {
    return userRef.get(userRef);
  }

  async fetchSinglePostAsync(postRef, value) {
    return postRef.doc(value).get();
  }

  async fetchUsersAsync() {
    try {
      this.setState({...this.state, isFetching: true});
      const userId = this.context.email.slice(0, this.context.email.indexOf('@'));
      this.setState({...this.state, crsid: userId});
      const userRef = this.props.firebase.fs.collection("users").doc(userId);
      const postRef = this.props.firebase.fs.collection("posts");

      const user_doc = await this.fetchPostAsync(userRef);
      const user_info = user_doc.data();
      const postsId = user_doc.get("posts");

      const postMap = {};  // {key: postId, value: post object}
      for (const value of postsId) {
        const doc_post = await this.fetchSinglePostAsync(postRef, value);
        postMap[value] = doc_post.data();
      }

      this.setState({
        ...this.state,
        postsMap: postMap,
        postsId: postsId,
        user: user_info,
        ravenData: {},
        isFetching: false
      });
    } catch (e) {
      console.log(e);
      this.setState({...this.state, isFetching: false});
    }
  };

  componentDidMount() {
    const fetchUser = this.fetchUsersAsync;
    fetchUser();
  }

  handleDelete(post_Id) {
    // to delete a post
    const userId = this.state.crsid;

    const userRef = this.props.firebase.fs.collection("users").doc(userId);
    const postRef = this.props.firebase.fs.collection("posts");
    const courseRef = this.props.firebase.fs.collection("courses").doc(this.state.postsMap[post_Id].course_id);

    const post_info = this.state.postsMap[post_Id];

    // updated course doc
    courseRef.get().then((doc_course) => {
      const course_num_post = doc_course.get("num_posts");
      const legacy_num = doc_course.get("legacy_num");

      const new_course_num_post = course_num_post - 1;

      const course_posts = doc_course.get("posts");
      const course_score = doc_course.get("score");
      const index = course_posts.indexOf(post_Id);
      course_posts.splice(index, 1);

      const no_legacy_num = new_course_num_post - legacy_num;
      let avg_score = 0;
      if (!no_legacy_num === 0) {
        avg_score = (course_score * (course_num_post - legacy_num) - post_info.score) / (new_course_num_post - legacy_num);
      }

      courseRef.set({
        num_posts: new_course_num_post,
        posts: course_posts,
        score: avg_score
      }, {merge: true});
    });

    //  update posts collection by deleting the doc with postId as key
    postRef.doc(post_Id).delete();

    //  update user doc in users collection
    userRef.get().then((doc) => {
      const num_post = doc.get("num_posts") - 1;
      const new_posts = doc.get("posts");
      const index = new_posts.indexOf(post_Id);
      new_posts.splice(index, 1);
      userRef.set({
        num_posts: num_post,
        posts: new_posts
      }, {merge: true});
    });

    this.props.history.push("/successful-deletion");
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
        {!this.state.isFetching &&
        <div className="post">
          <div className="course-info">
            <p className="my-id">{this.state.crsid}</p>
            <p
              className="post-counts">{this.state.user.num_posts === undefined ? 0 : this.state.user.num_posts} posts</p>
            <p className="mypost-title">My Posts</p>
          </div>

          <div className="comments-box">
            {this.state.postsId.map((postId, index) => {
              return (
                <div className="comment-post" key={index}>
                  <div className="my-subpost-title">
                    <div className="my-comment-course">{this.state.postsMap[postId].course_id}</div>
                    <a className="post-delete" onClick={() => this.handleDelete(postId)}>Delete</a>
                  </div>
                  <div className="comment"> {this.state.postsMap[postId].content}</div>
                  <div className="comment-info">
                    <div>
                      <div className="comment-date">{this.state.postsMap[postId].timestamp}</div>
                      <div className="user-name">{this.state.postsMap[postId].author}</div>
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

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition)
)(MyPost);
