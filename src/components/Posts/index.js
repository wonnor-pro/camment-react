

const Index = () => {
  return (
    <div className="posts">
      <div id="main">
        <div id="review">
          <div className="tab">
            <h3 id="tab-title">Part IIA</h3>
            <button className="tablinks" onMouseOver="openModule(event, '3A')">3A</button>
            <button className="tablinks" onMouseOver="openModule(event, '3F')">3F</button>
          </div>

          <div id="3F" className="tabcontent">
            <div id="post-lists">
              <div className="post-record">
                <p className="course-id">3F1</p>
                <p className="review-counts">145 reviews</p>
                <div className="score_wrapper">★★★☆☆</div>
                <a href="/Post" className="course-title">Signals and Systems</a>
              </div>
              <div className="post-record">
                <p className="course-id">3F2</p>
                <p className="review-counts">98 reviews</p>
                <div className="score_wrapper">★★☆☆☆</div>
                <a href="/Post" className="course-title">Systems and Control</a>
              </div>
              <div className="post-record">
                <p className="course-id">3F1</p>
                <p className="review-counts">145 reviews</p>
                <div className="score_wrapper">★★★☆☆</div>
                <a href="/Post" className="course-title">Signals and Systems</a>
              </div>
              <div className="post-record">
                <p className="course-id">3F2</p>
                <p className="review-counts">98 reviews</p>
                <div className="score_wrapper">★★☆☆☆</div>
                <a href="/Post" className="course-title">Systems and Control</a>
              </div>
              <div className="post-record">
                <p className="course-id">3F1</p>
                <p className="review-counts">145 reviews</p>
                <div className="score_wrapper">★★★☆☆</div>
                <a href="/Post" className="course-title">Signals and Systems</a>
              </div>
              <div className="post-record">
                <p className="course-id">3F2</p>
                <p className="review-counts">98 reviews</p>
                <div className="score_wrapper">★★☆☆☆</div>
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