import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar as faStarS, faStar, faStarHalf} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarR} from "@fortawesome/free-regular-svg-icons";
import React from "react";
import {withFirebase} from "../Firebase";

class PostsBase extends React.Component {

  constructor(props) {
    super(props);
    this.dispSwitch = {
      "3A": "none",
      "3F": "none"
    };

    this.coursesList = {
      "3A": [],
      "3B": [],
      "3C": [],
      "3D": [],
      "3E": [],
      "3F": [],
      "3G": [],
      "3M": []
    }
    this.openModule = this.openModule.bind(this);
    this.readModule = this.readModule.bind(this);
    console.log("this is posts");
    console.log(this.props);
  }

  readModule = () => {
    const coursesRef = this.props.firebase.fs.collection("courses");
    coursesRef.where("course_id", ">=", "3A")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          const id = doc.get("course_id");
          this.coursesList[id.slice(0,2)].push(doc.data());
          // coursesRef.doc(id).set({
          //   score: 3.5
          // },{merge: true});
        });
        console.log(this.coursesList);
      })
    // coursesRef.where("score", "==", 3.5)
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       // doc.data() is never undefined for query doc snapshots
    //       // // console.log(doc.id, " => ", doc.data());
    //       // const id = doc.get("course_id");
    //       // this.coursesList[id.slice(0,2)].push(doc.data());
    //       const id = doc.id;
    //       const link = "http://teaching.eng.cam.ac.uk/-2020-21";
    //       coursesRef.doc(id).set({
    //         course_id: id,
    //         link: link,
    //         posts: [],
    //         score: 3.5
    //       },{merge: true});
    //     });
    //     console.log(this.coursesList);
    //   })
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
              <button className="tablinks" id="3A" onMouseOver={this.openModule} onClick={this.openModule}>3A</button>
              <button className="tablinks" id="3F" onMouseOver={this.openModule} onClick={this.openModule}>3F</button>
            </div>
            <div id="3A" className="tabcontent" style={{display: this.dispSwitch["3A"]}}>
              <div id="post-lists">
                <div className="post-record">
                  <p className="course-id">3A1</p>
                  <p className="review-counts">145 reviews</p>
                  <div className="score_wrapper">
                    <FontAwesomeIcon className="yellow" icon={faStarS}/><FontAwesomeIcon className="yellow"
                                                                                         icon={faStarS}/><FontAwesomeIcon
                    icon={faStarR}/><FontAwesomeIcon icon={faStarR}/><FontAwesomeIcon icon={faStarR}/>
                  </div>
                  <a href="/Post" className="course-title">Signals and Systems</a>
                </div>
                <div className="post-record">
                  <p className="course-id">3A2</p>
                  <p className="review-counts">98 reviews</p>
                  <div className="score_wrapper">
                    <FontAwesomeIcon className="yellow" icon={faStarS}/><FontAwesomeIcon className="yellow"
                                                                                         icon={faStarS}/><FontAwesomeIcon
                    icon={faStarR}/><FontAwesomeIcon icon={faStarR}/><FontAwesomeIcon icon={faStarR}/>
                  </div>
                  <a href="/Post" className="course-title">Systems and Control</a>
                </div>
                <div className="post-record">
                  <p className="course-id">3A1</p>
                  <p className="review-counts">145 reviews</p>
                  <div className="score_wrapper">
                    <FontAwesomeIcon className="yellow" icon={faStarS}/><FontAwesomeIcon className="yellow"
                                                                                         icon={faStarS}/><FontAwesomeIcon
                    icon={faStarR}/><FontAwesomeIcon icon={faStarR}/><FontAwesomeIcon icon={faStarR}/>
                  </div>
                  <a href="/Post" className="course-title">Signals and Systems</a>
                </div>
              </div>
            </div>
            <div id="3F" className="tabcontent" style={{display: this.dispSwitch["3F"]}}>
              <div id="post-lists">
                <div className="post-record">
                  <p className="course-id">3F1</p>
                  <p className="review-counts">145 reviews</p>
                  <div className="score_wrapper">
                    <FontAwesomeIcon className="yellow" icon={faStarS}/><FontAwesomeIcon className="yellow"
                                                                                         icon={faStarS}/><FontAwesomeIcon
                    icon={faStarR}/><FontAwesomeIcon icon={faStarR}/><FontAwesomeIcon icon={faStarR}/>
                  </div>
                  <a href="/Post" className="course-title">Signals and Systems</a>
                </div>
                <div className="post-record">
                  <p className="course-id">3F2</p>
                  <p className="review-counts">98 reviews</p>
                  <div className="score_wrapper">
                    <FontAwesomeIcon className="yellow" icon={faStarS}/><FontAwesomeIcon className="yellow"
                                                                                         icon={faStarS}/><FontAwesomeIcon
                    icon={faStarR}/><FontAwesomeIcon icon={faStarR}/><FontAwesomeIcon icon={faStarR}/>
                  </div>
                  <a href="/Post" className="course-title">Systems and Control</a>
                </div>
                <div className="post-record">
                  <p className="course-id">3F1</p>
                  <p className="review-counts">145 reviews</p>
                  <div className="score_wrapper">
                    <FontAwesomeIcon className="yellow" icon={faStarS}/><FontAwesomeIcon className="yellow"
                                                                                         icon={faStarS}/><FontAwesomeIcon
                    icon={faStarR}/><FontAwesomeIcon icon={faStarR}/><FontAwesomeIcon icon={faStarR}/>
                  </div>
                  <a href="/Post" className="course-title">Signals and Systems</a>
                </div>
                <div className="post-record">
                  <p className="course-id">3F2</p>
                  <p className="review-counts">98 reviews</p>
                  <div className="score_wrapper">
                    <FontAwesomeIcon className="yellow" icon={faStarS}/><FontAwesomeIcon className="yellow"
                                                                                         icon={faStarS}/><FontAwesomeIcon
                    icon={faStarR}/><FontAwesomeIcon icon={faStarR}/><FontAwesomeIcon icon={faStarR}/>
                  </div>
                  <a href="/Post" className="course-title">Systems and Control</a>
                </div>
                <div className="post-record">
                  <p className="course-id">3F1</p>
                  <p className="review-counts">145 reviews</p>
                  <div className="score_wrapper">
                    <FontAwesomeIcon className="yellow" icon={faStarS}/><FontAwesomeIcon className="yellow"
                                                                                         icon={faStarS}/><FontAwesomeIcon
                    icon={faStarR}/><FontAwesomeIcon icon={faStarR}/><FontAwesomeIcon icon={faStarR}/>
                  </div>
                  <a href="/Post" className="course-title">Signals and Systems</a>
                </div>
                <div className="post-record">
                  <p className="course-id">3F2</p>
                  <p className="review-counts">98 reviews</p>
                  <div className="score_wrapper">
                    <FontAwesomeIcon className="yellow" icon={faStarS}/><FontAwesomeIcon className="yellow"
                                                                                         icon={faStarS}/><FontAwesomeIcon
                    icon={faStarR}/><FontAwesomeIcon icon={faStarR}/><FontAwesomeIcon icon={faStarR}/>
                  </div>
                  <a href="/Post" className="course-title">Systems and Control</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

const Posts = withFirebase(PostsBase);

export {Posts};