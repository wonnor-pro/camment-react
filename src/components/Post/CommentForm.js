import React from "react";
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
    alert('A comment was submitted: ' + this.state.comment + '\nCourse Taken in ' + this.state.year);
    event.preventDefault();
  }

  render() {
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

export default CommentForm;