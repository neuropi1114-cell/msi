export default function IgsFeatureCarousel() {
  return (
    <div className="section feature-carousel theme-lilac fade-in" style={{ backgroundImage: 'url(/mission2000/assets/bg_ts.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(227, 163, 255, 0.7)', zIndex: 1 }}></div>
      <div style={{ position: 'relative', zIndex: 2 }}>
      <span className="binding-fabric" aria-hidden></span>
      <div className="container">
        <h2 className="heading">
          <span
            className="multi-language-title"
            data-titles='[{"title":"In Other News"},{"title":" In altre notizie"},{"title":"其他新闻"}]'
          >In Other News</span>
        </h2>
        <div className="slick-wrapper slick-initialized slick-slider">
          <div className="slick-list draggable">
            <div className="slick-track" style={{ opacity: 1, width: 6310, transform: 'translate3d(0px, 0px, 0px)' }}>
              {[
                {
                  title: 'Giving Day',
                  text: 'Giving Day 2025 marked the launch of The IGS Foundation \u2013 our lasting commitment to advancing our School\u2019s vision of Unity Through Diversity and fulfilling our mission to equip every student to be world-ready.',
                  link: 'https://www.igssyd.nsw.edu.au/foundation/',
                  img: '/mission2000/assets/DSC02690-683x1024.jpg',
                  alt: 'Two people smile and pose outdoors, holding a colourful Shine the Light Forward photo frame.',
                  target: '_blank',
                },
                {
                  title: 'Open Mornings',
                  text: 'We invite you to explore our vibrant campus, meet our staff and discover what makes IGS a unique place to learn.',
                  link: 'https://www.igssyd.nsw.edu.au/open-mornings/',
                  img: '/mission2000/assets/IGS-KINDY-MARKETING-IMAGES-187-1024x683.jpg',
                  alt: 'Five young children in school uniforms sit on wooden steps, smiling and listening to an adult.',
                  target: '_blank',
                },
                {
                  title: 'The Emporium',
                  text: 'Explore Our Unique and Delightful Treasures. From whimsical notebooks to magical towels and more, our special Anniversary collection is designed for IGS students and the School community.',
                  link: 'https://emporium.igssyd.nsw.edu.au/',
                  img: '/mission2000/assets/Untitled-design-1024x683.png',
                  alt: 'Ten colourful product images on pastel backgrounds.',
                  target: '_blank',
                },
                {
                  title: '40 years young!',
                  text: 'Celebrating bilingual learning and unity through diversity since 1984! Upon one single dream, a thousand beautiful traditions have been built.',
                  link: 'https://vimeo.com/911364018',
                  img: '/mission2000/assets/Learning_Journeys_book-1-1024x732.jpg',
                  alt: 'Teacher addressing students',
                  target: '',
                },
                {
                  title: 'Strategic plan',
                  text: 'The School\u2019s Strategic Plan 2022\u20132026 Into the World outlines a vision for our School, a clear and compelling direction, and eight areas of action.',
                  link: 'https://igssyd.nsw.edu.au/about-us/strategic-plan/',
                  img: '/mission2000/assets/Page-9.2-1024x683.jpg',
                  alt: 'A group of students and adults sit around a table in a library, collaborating.',
                  target: '',
                },
              ].map((item, idx) => (
                <div key={idx} className="slick-slide slick-active" data-slick-index={idx} aria-hidden={false} style={{ width: 1262, position: 'relative', left: 0, top: 0, zIndex: 999, opacity: 1 }}>
                  <div>
                    <div className="slide" style={{ width: '100%', display: 'inline-block' }}>
                      <div className="feature">
                        <div className="inner-content">
                          <h3 className="title">{item.title}</h3>
                          <p>{item.text}</p>
                          <a href={item.link} target={item.target || undefined} className="link-more" tabIndex={0}>
                            Discover More
                          </a>
                        </div>
                        <div className="image-wrapper">
                          <div className="image-inner">
                            <img src={item.img} alt={item.alt} loading="lazy" className="fill" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="slick-nav">
          <button className="slick-arrow"><i className="material-icons">chevron_left</i></button>
          <button className="slick-arrow"><i className="material-icons">chevron_right</i></button>
        </div>
      </div>
      </div>
    </div>
  );
}
