export default function IgsFeaturedNews() {
  return (
    <div className="section featured-news theme-white fade-in">
      <div className="container">
        <div className="row">
          <div className="col-12 featured-news-heading">
            <h3 className="heading">News</h3>
            <a href="https://www.igssyd.nsw.edu.au/news" className="button purple small">View all</a>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="article-item col-12 col-md-4">
                <a href="https://www.igssyd.nsw.edu.au/blog/100-days-of-growth/">
                  <div className="bg-wrapper">
                    <img src="/mission2000/assets/100-DAYS-OF-KINDY-2-560x373.jpg" alt="A smiling person holds large silver balloons forming 100 in front of a pink wall." loading="lazy" />
                  </div>
                  <div className="inner-content">
                    <h4 className="title">100 Days of Growth</h4>
                    <p className="date">29.07.26</p>
                  </div>
                </a>
              </div>
              <div className="article-item col-12 col-md-4">
                <a href="https://www.igssyd.nsw.edu.au/blog/year-3-in-their-element/">
                  <div className="bg-wrapper">
                    <img src="/mission2000/assets/Y3-FIRST-NATIONS-DAY-INCURSION-34-560x373.jpg" alt="A group of children and an adult instructor raise their arms together in a gymnasium." loading="lazy" />
                  </div>
                  <div className="inner-content">
                    <h4 className="title">Year 3 in Their Element</h4>
                    <p className="date">29.07.26</p>
                  </div>
                </a>
              </div>
              <div className="article-item col-12 col-md-4">
                <a href="https://www.igssyd.nsw.edu.au/blog/tomorrows-entrepreneurs/">
                  <div className="bg-wrapper">
                    <img src="/mission2000/assets/Y11-MARKET-DAY-8-560x373.jpg" alt="Four smiling teenagers in white shirts kneel indoors, each holding a paper aeroplane." loading="lazy" />
                  </div>
                  <div className="inner-content">
                    <h4 className="title">Tomorrow&rsquo;s Entrepreneurs</h4>
                    <p className="date">29.07.26</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
