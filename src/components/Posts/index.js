import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar as faStarS} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarR} from "@fortawesome/free-regular-svg-icons";
import React from "react";
import {withFirebase} from "../Firebase";
import StyledRating from "../Score";

class PostsBase extends React.Component {

  constructor(props) {
    super(props);
    this.state = {dispSwitch: {}, division: [], coursesList: {}, isFetching: false};
    this.openModule = this.openModule.bind(this);
    this.readModule = this.readModule.bind(this);
    this.fetchPostsAsync = this.fetchPostsAsync.bind(this);
  }

  async fetchPostsAsync() {
    try {
      this.setState({...this.state, isFetching: true});
      const querySnapshot = await this.readModule();

      let division = [];
      let coursesList = {};
      let dispSwitch = {};

      querySnapshot.forEach((doc) => {
        const id = doc.get("course_id");
        const new_division = id.slice(0, 2);
        if (!(new_division in this.state.coursesList)) {
          coursesList[new_division] = [];
          dispSwitch[new_division] = "none";
          division.push(new_division);
        }
        // coursesRef.doc(id).set({
        //   posts: []
        // }, {merge: true})
        coursesList[new_division].push(doc.data());
        this.setState({dispSwitch: dispSwitch, division: division, coursesList: coursesList, isFetching: false});
      });

    } catch (e) {
      console.log(e);
      this.setState({...this.state, isFetching: false});
    }
  };

  async readModule() {
    const coursesRef = this.props.firebase.fs.collection("courses");
    return coursesRef.where("course_id", ">=", "3A").get()
  }

  openModule(event) {
    // Declare all variables

    let courseName = event.target.id;
    for (const [key, value] of Object.entries(this.state.dispSwitch)) {
      this.state.dispSwitch[key] = "none";
    }
    this.state.dispSwitch[courseName] = "block";

    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    event.currentTarget.className += " active";
    this.forceUpdate();
  }

  componentDidMount() {
    const fetchPosts = this.fetchPostsAsync;
    fetchPosts();

  }

  render() {
    return (
      <div className="posts">
        <div id="main">
          <div id="review">
            <div className="tab">
              <h3 id="tab-title">Part IIA</h3>
              <div className="load">{this.state.isFetching ? 'Loading...' : ''}</div>
              {this.state.division.map((value, index) => {
                return (
                  <button className="tablinks" key={index} id={value} onMouseOver={this.openModule}
                          onClick={this.openModule}>{value}
                  </button>
                )
              })}
            </div>
            {this.state.division.map((value, index) => {
              return (
                <div id={value} key={index} className="tabcontent" style={{display: this.state.dispSwitch[value]}}>
                  <div id="post-lists">
                    {this.state.coursesList[value].map((course, index) => {
                      return (
                        <div className="post-record" key={index}>
                          <p className="course-id">{course.course_id}</p>
                          <p className="review-counts">{course.num_posts} Reviews</p>
                          <div className="score_wrapper">
                            <StyledRating
                              name="score"
                              value={course.score}
                              icon={<FontAwesomeIcon icon={faStarS}/>}
                              precision={0.5}
                              size="small"
                              readOnly
                            />
                          </div>
                          <a href={"/Post/" + course.course_id}
                             className="course-title">{course.name}</a>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

const Posts = withFirebase(PostsBase);

export {Posts};