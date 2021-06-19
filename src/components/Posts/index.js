import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar as faStarS, faStar, faStarHalf} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarR} from "@fortawesome/free-regular-svg-icons";
import React from "react";

const Index = () => {
  return (
    <div className="posts">
      <div id="main">
        <div id="review">
          <div className="tab">
            <h3 id="tab-title">Part IIA</h3>
            <button className="tablinks">3A</button>
            <button className="tablinks">3F</button>
          </div>

          <div id="3F" className="tabcontent">
            <div id="post-lists">
              <div className="post-record">
                <p className="course-id">3F1</p>
                <p className="review-counts">145 reviews</p>
                <div className="score_wrapper">
                  <FontAwesomeIcon className="yellow" icon={faStarS} /><FontAwesomeIcon className="yellow" icon={faStarS} /><FontAwesomeIcon icon={faStarR} /><FontAwesomeIcon icon={faStarR} /><FontAwesomeIcon icon={faStarR} />
                </div>
                <a href="/Post" className="course-title">Signals and Systems</a>
              </div>
              <div className="post-record">
                <p className="course-id">3F2</p>
                <p className="review-counts">98 reviews</p>
                <div className="score_wrapper">
                  <FontAwesomeIcon className="yellow" icon={faStarS} /><FontAwesomeIcon className="yellow" icon={faStarS} /><FontAwesomeIcon icon={faStarR} /><FontAwesomeIcon icon={faStarR} /><FontAwesomeIcon icon={faStarR} />
                </div>
                <a href="/Post" className="course-title">Systems and Control</a>
              </div>
              <div className="post-record">
                <p className="course-id">3F1</p>
                <p className="review-counts">145 reviews</p>
                <div className="score_wrapper">
                  <FontAwesomeIcon className="yellow" icon={faStarS} /><FontAwesomeIcon className="yellow" icon={faStarS} /><FontAwesomeIcon icon={faStarR} /><FontAwesomeIcon icon={faStarR} /><FontAwesomeIcon icon={faStarR} />
                </div>
                <a href="/Post" className="course-title">Signals and Systems</a>
              </div>
              <div className="post-record">
                <p className="course-id">3F2</p>
                <p className="review-counts">98 reviews</p>
                <div className="score_wrapper">
                  <FontAwesomeIcon className="yellow" icon={faStarS} /><FontAwesomeIcon className="yellow" icon={faStarS} /><FontAwesomeIcon icon={faStarR} /><FontAwesomeIcon icon={faStarR} /><FontAwesomeIcon icon={faStarR} />
                </div>
                <a href="/Post" className="course-title">Systems and Control</a>
              </div>
              <div className="post-record">
                <p className="course-id">3F1</p>
                <p className="review-counts">145 reviews</p>
                <div className="score_wrapper">
                  <FontAwesomeIcon className="yellow" icon={faStarS} /><FontAwesomeIcon className="yellow" icon={faStarS} /><FontAwesomeIcon icon={faStarR} /><FontAwesomeIcon icon={faStarR} /><FontAwesomeIcon icon={faStarR} />
                </div>
                <a href="/Post" className="course-title">Signals and Systems</a>
              </div>
              <div className="post-record">
                <p className="course-id">3F2</p>
                <p className="review-counts">98 reviews</p>
                <div className="score_wrapper">
                  <FontAwesomeIcon className="yellow" icon={faStarS} /><FontAwesomeIcon className="yellow" icon={faStarS} /><FontAwesomeIcon icon={faStarR} /><FontAwesomeIcon icon={faStarR} /><FontAwesomeIcon icon={faStarR} />
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

export default Index;