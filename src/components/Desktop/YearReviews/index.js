import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar as faStarS} from '@fortawesome/free-solid-svg-icons';
import React from "react";
import {withFirebase} from "../../Firebase";
import StyledRating from "../Score";
import {Link} from "react-router-dom";
import Navigation from "../Navigation";
import * as ROUTES from "../../../constants/routes";

class PostsBase extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      year: this.props.match.params.YEAR,
      dispSwitch: {},  // for the OnMouse switch func
      division: [],   // list of divisions
      coursesList: {},   // {key: division, value: [courseIds]}
      isFetching: false
    };

    this.openModule = this.openModule.bind(this);

    this.readIIaModule = this.readIIaModule.bind(this);
    this.readIIbModule = this.readIIbModule.bind(this);
    this.readListModule = this.readListModule.bind(this);

    this.fetchPostsAsync = this.fetchPostsAsync.bind(this);
    this.fetchYearCourse = this.fetchYearCourse.bind(this);
  }

  async fetchPostsAsync() {
    try {
      this.setState({...this.state, isFetching: true});
      let division = [];
      let coursesList = {};
      let dispSwitch = {};

      if (this.state.year === "iib") {
        const querySnapshot = await this.readIIbModule();

        querySnapshot.forEach((doc) => {
          const id = doc.get("course_id");
          const new_division = id.slice(0, 2);

          // add new pair to courses list if not yet
          if (!(new_division in coursesList)) {
            coursesList[new_division] = [];
            dispSwitch[new_division] = "none";
            division.push(new_division);
          }
          coursesList[new_division].push(doc.data());
        });
      } else {
        const querySnapshot = await this.readIIaModule();
        querySnapshot.forEach((doc) => {
          const id = doc.get("course_id");
          const new_division = id.slice(0, 2);

          // add new pair to courses list if not yet
          if (!(new_division in coursesList)) {
            coursesList[new_division] = [];
            dispSwitch[new_division] = "none";
            division.push(new_division);
          }
          coursesList[new_division].push(doc.data());
        });

        const addModule = await this.readListModule();
        addModule.forEach((doc) => {
          const id = doc.get("course_id");
          const new_division = id.slice(0, 2);

          // add new pair to courses list if not yet
          if (!(new_division in coursesList)) {
            coursesList[new_division] = [];
            dispSwitch[new_division] = "none";
            division.push(new_division);
          }
          coursesList[new_division].push(doc.data());
        });
      };

      this.setState({
        dispSwitch: dispSwitch,
        division: division,
        coursesList: coursesList,
        isFetching: false
      });
    } catch (e) {
      console.log(e);
      this.setState({...this.state, isFetching: false});
    }
  };

  async fetchYearCourse(allCourseRef, year) {
    return allCourseRef.doc(year).get();
  }

  async readListModule() {
    const coursesRef = this.props.firebase.fs.collection("courses");
    const allCourseRef = this.props.firebase.fs.collection("year");

    const doc = await this.fetchYearCourse(allCourseRef, this.state.year);
    const allCourse = doc.get("courses");
    const iibCourse = allCourse.filter(function(item) {
      return item > "4A";
    })

    return coursesRef.where("course_id", "in", iibCourse).get();
  }

  async readIIbModule() {
    // read through all the documents in courses collection
    const coursesRef = this.props.firebase.fs.collection("courses");
    return coursesRef.where("course_id", ">=", "4A").get();
  }

  async readIIaModule() {
    const coursesRef = this.props.firebase.fs.collection("courses");
    return coursesRef.where("course_id", "<=", "4A").get();
  }

  openModule(event) {
    // Declare all variables
    let courseName = event.target.id;
    for (const [key,] of Object.entries(this.state.dispSwitch)) {
      let newSwitch = this.state.dispSwitch;
      newSwitch[key] = "none";
      this.setState({...this.state, dispSwitch: newSwitch});
    }
    let newSwitch = this.state.dispSwitch;
    newSwitch[courseName] = "block";
    this.setState({...this.state, dispSwitch: newSwitch});

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
      <div className="Reviews">
        <Navigation />
        <div className="posts">
          <div id="main">
            <div id="review">
              <div className="tab">
                <h3 id="tab-title">Part {this.state.year.toUpperCase()}</h3>

                {this.state.year === 'ib' && <p> IB 2P8 pages will be up soon! </p>}

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
                            <Link to={"/Post/" + course.course_id}
                                  className="course-title">{course.name}</Link>
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
        <div className="report-issues">
          <p>Copyright &copy; 2021 ｜ <a href={ROUTES.REPORT}> Report an issue here</a> or contact us at <a
            href={"mailto:admin@camments.com"}>admin@camments.com</a></p>
        </div>
      </div>
    );
  }
}

const YearReviews = withFirebase(PostsBase);

export {YearReviews};