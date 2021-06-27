import '../mobile.css';
import React from 'react';
import {Button} from "@material-ui/core";

const MobileHomePage = () => (
  <div className='Home'>
    <div className='mobile-home-main'>
      <div className='mobile-home-title'>
        # Camments _
      </div>
      <div className='mobile-home-slogan'>
        <p>Cambridge Engineering Course </p>
        <p>Review Platform</p>
      </div>
    </div>
    <Button variant="contained" color="primary">
      Start to review!
    </Button>
  </div>
);


export default MobileHomePage