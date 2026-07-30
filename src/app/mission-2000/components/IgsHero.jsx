export default function IgsHero() {
  return (
    <>
      <div className="long-video-container">
        <div className="long-video-wrapper">
          <button id="close_long_video_btn" className="button small yellow">Close</button>
          <video controls></video>
          <iframe src="/mission2000/assets/saved_resource.html" frameBorder="0" allow="autoplay" allowFullScreen allowtransparency="true"></iframe>
        </div>
      </div>
      <div className="section home-banner fade-in">
        <div className="slick-wrapper">
          <div className="slide">
            <iframe
              src="/mission2000/assets/907291439.html"
              className="bg animated center"
              frameBorder="0"
              allow="autoplay"
              allowFullScreen
              allowtransparency="true"
            ></iframe>
            <div className="container content-wrapper">
              <div className="content">
                <div className="video_button_wrapper">
                  <button
                    className="button purple open-long-video-btn"
                    data-long-video-src="https://igssyd-wp-01.s3.ap-southeast-2.amazonaws.com/production/2022/06/16224742/Find-yourself-at-IGS_with-logo-1.mp4"
                    data-long-video-type="video/mp4"
                    data-video-url="907291439"
                    data-video-src="vimeo"
                  >
                    Watch the Film
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
