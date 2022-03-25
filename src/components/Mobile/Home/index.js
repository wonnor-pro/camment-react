import '../mobile.css';
import React from 'react';
import {Button} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import * as ROUTES from '../../../constants/routes';

class MobileHomePage extends React.Component{
  constructor(props) {
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect(event){
    this.props.history.push(ROUTES.REVIEWS);
  }
  render(){
    return (
      <div className='Home'>
        <div className='mobile-home-main'>
          <div className='mobile-home-title'>
            # Camments _
          </div>
          <div className='mobile-home-slogan'>
            <p>Student-Run Course</p>
            <p>Review Platform</p>
          </div>
        </div>
        <Button variant="contained" color="primary" onClick={this.handleRedirect}>
          Start to review!
        </Button>
      </div>
    )
  }

}

export default withRouter(MobileHomePage)