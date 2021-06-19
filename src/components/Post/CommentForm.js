import React from 'react';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import fb from "firebase/app";
import Firebase from "../Firebase/firebase"

class CommentForm extends React.Component {
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
  }

  handleSubmit(event) {
    const {currentUser} = fb.auth();
    const crsid = currentUser.email.slice(0,currentUser.email.indexOf('@'));
    console.log(crsid);

    // const userRef = this.props.firebase.getFs.collection("users").doc('yy452');
    // userRef.get().then((doc) => {
    //   if (doc.exists) {
    //     console.log("Document data:", doc.data());
    //   } else {
    //     // doc.data() will be undefined in this case
    //     console.log("No such document!");
    //   }
    // }).catch((error) => {
    //   console.log("Error getting document:", error);
    // });
    // userRef.get().then((doc) => {
    //   if (doc.exists) {
    //     console.log("Document data:", doc.data());
    //   } else {
    //     // doc.data() will be undefined in this case
    //     console.log("No such document!");
    //   }
    // }).catch((error) => {
    //   console.log("Error getting document:", error);
    // });

    alert('A comment was submitted: ' + this.state.comment + '\nCourse Taken in ' + this.state.year);
    event.preventDefault();

  }

  render() {
    alert(this.props.firebase.openFsUser);
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <label>
          <textarea name="comment" id="user-review" placeholder="Type in your review here." onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Course taken in the&nbsp;
          <input
            name="year"
            type="number"
            value={this.state.year}
            onChange={this.handleChange} />
          -{this.state.year + 1} academic year.
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const commentManager = withFirebase(CommentForm);

export default {commentManager};