import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar as faStarS, faStar, faStarHalf} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarR} from "@fortawesome/free-regular-svg-icons";
import React from "react";
import {withFirebase} from "../Firebase";

class PostsBase extends React.Component {

  constructor(props) {
    super(props);
    this.dispSwitch = {};
    this.division = [];
    this.coursesList = {};
    this.openModule = this.openModule.bind(this);
    this.readModule = this.readModule.bind(this);
    console.log(this.props);
  }

  readModule = () => {
    const coursesRef = this.props.firebase.fs.collection("courses");
    coursesRef.where("course_id", ">=", "3A")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const id = doc.get("course_id");
          const division = id.slice(0, 2);
          if (!(division in this.coursesList)) {
            this.coursesList[division] = [];
            this.dispSwitch[division] = "none";
            this.division.push(division);
          }
          // coursesRef.doc(id).set({
          //   posts: []
          // }, {merge: true})
          this.coursesList[division].push(doc.data());
        });
        console.log(this.dispSwitch);
        console.log(this.division);
      })

    // reset database
    // coursesRef.forEach(function (obj) {
    //   coursesRef.doc(obj.course_id).set({}, {merge: true}).then(function (docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    //   })
    //     .catch(function (error) {
    //       console.error("Error adding document: ", error);
    //     });
    // });
  }

  openModule(event) {
    // Declare all variables

    let courseName = event.target.id;
    for (const [key, value] of Object.entries(this.dispSwitch)) {
      this.dispSwitch[key] = "none";
    }
    this.dispSwitch[courseName] = "block";

    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    event.currentTarget.className += " active";
    this.forceUpdate();
  }

  componentDidMount() {
    this.readModule();
  }

  render() {
    return (
      <div className="posts">
        <div id="main">
          <div id="review">
            <div className="tab">
              <h3 id="tab-title">Part IIA</h3>
              {this.division.map((value, index) => {
                return (
                  <button className="tablinks" key={index} id={value} onMouseOver={this.openModule}
                          onClick={this.openModule}>{value}
                  </button>
                )
              })}
            </div>
            {this.division.map((value, index) => {
              return (
                <div id={value} key={index} className="tabcontent" style={{display: this.dispSwitch[value]}}>
                  <div id="post-lists">
                    {this.coursesList[value].map((value, index) => {
                      return (
                        <div className="post-record" key={index}>
                          <p className="course-id">{value.course_id}</p>
                          <p className="review-counts">{value.num_posts} Reviews</p>
                          <div className="score_wrapper">
                            <FontAwesomeIcon className="yellow"
                                             icon={faStarS}/><FontAwesomeIcon
                            className="yellow"
                            icon={faStarS}/><FontAwesomeIcon
                            icon={faStarR}/><FontAwesomeIcon
                            icon={faStarR}/><FontAwesomeIcon
                            icon={faStarR}/>
                          </div>
                          <a href={"/Post/" + value.course_id}
                             className="course-title">{value.name}</a>
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