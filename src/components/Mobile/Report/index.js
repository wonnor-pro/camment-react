import React, {Component} from 'react';
import * as ROUTES from "../../../constants/routes";

class MobileReport extends Component {
  constructor(props) {
    super(props);
    this.state = {post_ID: this.props.match.params.ID};
  }


  componentDidMount() {
  }

  render() {
    return (
      <div className='Report'>
        <div className="mobile-account-main">
          <div className="mobile-user-box" id="mobile-user-container">
            <div className="mobile-user-title">Report an Issue</div>
          </div>
          <iframe
            src={"https://docs.google.com/forms/d/e/1FAIpQLSd2fl7SaZBkVhUgcw4e35_UvJBS12xZgtrRFPuzCAwVQVQzwA/viewform?usp=pp_url&entry.371232267=" + this.state.post_ID}
            width="350" height="673" frameBorder="1" marginHeight="0" marginWidth="0">Loading…
          </iframe>
        </div>

      </div>
    )
  };
}

export default MobileReport;