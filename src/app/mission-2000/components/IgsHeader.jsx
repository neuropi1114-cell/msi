const navItems = [
  {
    label: 'The Mission',
    theme: 'aqua',
    children: [
      { label: 'About the Mission', url: '#', items: [
        { label: 'Our Vision', url: '#' },
        { label: 'What We Do', url: '#' },
        { label: 'Impact & Goals', url: '#' },
      ]},
      { label: 'Get Involved', url: '#', items: [
        { label: 'Volunteer', url: '#' },
        { label: 'Donate', url: '#' },
        { label: 'Partner With Us', url: '#' },
      ]},
    ],
  },
  {
    label: 'National ECCE Day',
    theme: 'yellow',
    children: [
      { label: 'About ECCE Day', url: '#', items: [
        { label: 'What is ECCE', url: '#' },
        { label: 'Why It Matters', url: '#' },
        { label: 'Events Near You', url: '#' },
      ]},
      { label: 'Participate', url: '#', items: [
        { label: 'Register Your Event', url: '#' },
        { label: 'Resources', url: '#' },
        { label: 'Share Your Story', url: '#' },
      ]},
    ],
  },
  {
    label: 'Join the Movement',
    theme: 'pink',
    children: [
      { label: 'Ways to Join', url: '#', items: [
        { label: 'Sign Up', url: '#' },
        { label: 'Become an Advocate', url: '#' },
        { label: 'Volunteer', url: '#' },
      ]},
      { label: 'Resources', url: '#', items: [
        { label: 'Toolkits', url: '#' },
        { label: 'Campaign Materials', url: '#' },
        { label: 'Success Stories', url: '#' },
      ]},
    ],
  },
  {
    label: 'For Schools',
    theme: 'orange',
    children: [
      { label: 'School Programs', url: '#', items: [
        { label: 'Programs Overview', url: '#' },
        { label: 'Curriculum', url: '#' },
        { label: 'Partner With Us', url: '#' },
      ]},
      { label: 'Resources', url: '#', items: [
        { label: 'Teacher Guides', url: '#' },
        { label: 'Classroom Activities', url: '#' },
        { label: 'Case Studies', url: '#' },
      ]},
    ],
  },
  {
    label: 'For Teachers',
    theme: 'green',
    children: [
      { label: 'Professional Learning', url: '#', items: [
        { label: 'Professional Development', url: '#' },
        { label: 'Workshops', url: '#' },
        { label: 'Webinars', url: '#' },
      ]},
      { label: 'Teaching Resources', url: '#', items: [
        { label: 'Lesson Plans', url: '#' },
        { label: 'Activity Sheets', url: '#' },
        { label: 'Community Forum', url: '#' },
      ]},
    ],
  },
  {
    label: 'For Parents',
    theme: 'aqua',
    children: [
      { label: 'Parent Programs', url: '#', items: [
        { label: 'Information Sessions', url: '#' },
        { label: 'Workshops', url: '#' },
        { label: 'Parent Resources', url: '#' },
      ]},
      { label: 'Support', url: '#', items: [
        { label: 'FAQs', url: '#' },
        { label: 'Contact Us', url: '#' },
        { label: 'Community Group', url: '#' },
      ]},
    ],
  },
  {
    label: 'Partners',
    theme: 'yellow',
    children: [
      { label: 'Our Partners', url: '#', items: [
        { label: 'Current Partners', url: '#' },
        { label: 'Success Stories', url: '#' },
        { label: 'Impact Report', url: '#' },
      ]},
      { label: 'Partner With Us', url: '#', items: [
        { label: 'Become a Partner', url: '#' },
        { label: 'Sponsorship', url: '#' },
        { label: 'Collaborate', url: '#' },
      ]},
    ],
  },
  {
    label: 'Stories',
    theme: 'pink',
    children: [
      { label: 'Latest Stories', url: '#', items: [
        { label: 'Blog', url: '#' },
        { label: 'News', url: '#' },
        { label: 'Media Coverage', url: '#' },
      ]},
      { label: 'Testimonials', url: '#', items: [
        { label: 'Parent Stories', url: '#' },
        { label: 'Teacher Stories', url: '#' },
        { label: 'Student Stories', url: '#' },
      ]},
    ],
  },
  {
    label: 'Contact',
    theme: 'orange',
    children: [
      { label: 'Get in Touch', url: '#', items: [
        { label: 'Contact Us', url: '#' },
        { label: 'Locations', url: '#' },
        { label: 'Office Hours', url: '#' },
      ]},
      { label: 'Support', url: '#', items: [
        { label: 'Help Center', url: '#' },
        { label: 'Technical Support', url: '#' },
        { label: 'Feedback', url: '#' },
      ]},
    ],
  },
];

export default function IgsHeader() {
  return (
    <header className="main-header">
      <div className="main-header_wrapper">
        <div className="logo">
          <a href="https://www.igssyd.nsw.edu.au/" title="International Grammar School Sydney">
            <svg className="igs-logo" width="120" height="120" viewBox="0 0 600 602" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="mark" d="M165.16 406.06H208.45V190.27H165.16V406.06ZM335.08 292.03H284.04V325.95H295.67V336.61C295.67 359.55 292.12 370.21 282.75 370.21C271.12 370.21 267.24 346.63 267.24 301.08C267.24 252.62 271.12 226.13 282.42 226.13C293.72 226.13 293.73 245.19 293.4 264.25L333.78 257.47C333.78 217.09 318.92 188.34 283.39 188.34C243.98 188.34 222.66 227.43 222.66 301.08C222.66 366.98 239.46 408.01 273.05 408.01C288.23 408.01 297.6 398.64 302.12 385.07L306 406.07H335.07V292.04L335.08 292.03ZM388.38 240.02C388.38 229.68 392.9 222.58 401.3 222.58C412.61 222.58 415.51 238.09 414.54 257.15L450.72 250.04C452.01 212.24 434.57 188.34 400.97 188.34C367.37 188.34 347.02 212.57 347.02 244.55C347.02 298.17 410.34 320.14 410.34 355.35C410.34 366.01 406.46 373.12 397.1 373.12C385.47 373.12 379.98 357.61 382.24 333.71L345.41 341.14C342.5 383.14 364.79 408.01 398.07 408.01C431.35 408.01 452.02 384.43 452.02 351.15C452.02 295.59 388.38 270.71 388.38 240.02Z" fill="#360050"></path>
              <path className="text" d="M137.75 105.41L108.93 69.18L117.71 62.19L146.53 98.42L137.75 105.41ZM172.06 81.18L156.98 52.86L154.62 49.38L157.38 51.72L187.96 72.71L199.15 66.75L177.39 25.9L167.99 30.91L182.42 57.99L184.58 61.51L181.85 59.08L152.66 39.07L140.85 45.36L162.61 86.21L172.07 81.17L172.06 81.18ZM219.31 21.29L228.85 56.87L239.51 54.01L229.97 18.43L243.38 14.83L240.93 5.69999L203.39 15.77L205.84 24.9L219.31 21.29ZM305.9 46.2L305.44 36.83L280.62 38.05L280.13 28.17L298.93 27.24L298.53 19.2L279.72 20.13L279.25 10.57L303.75 9.35999L303.29 -0.0100098L268.03 1.72999L270.31 47.95L305.89 46.2H305.9ZM333.75 48.9L322.86 47.12L330.31 1.44999L352.4 5.04999C363.29 6.82999 368.18 13.02 366.88 21.03C365.86 27.29 360.86 31.54 352.66 31.81C354.75 32.41 356.35 33.18 357.52 34.27C359.94 36.4 360.88 39.64 361.59 45.15L362.65 53.61L350.83 51.68L349.94 43.38C349.24 36.26 348 34.78 341.25 33.68L336.37 32.88L333.76 48.9H333.75ZM337.58 25.44L345.65 26.76C351.53 27.72 355.02 25.59 355.7 21.46C356.36 17.39 354.05 14.64 347.92 13.64L339.72 12.3L337.58 25.44ZM399.44 32.26L400.62 28.22L400.57 31.83L403.9 68.78L415.63 73.6L433.23 30.78L423.38 26.73L411.71 55.12L410.38 59.03L410.51 55.38L407.31 20.12L394.93 15.03L377.33 57.85L387.24 61.92L399.44 32.24V32.26ZM429.38 80.87L470.55 53.52L480.57 60.76L467.67 108.52L458.42 101.84L460.88 93.45L445.77 82.54L438.63 87.55L429.38 80.87ZM452.45 77.83L463.19 85.59L467.95 69.25L469.29 65.76L466.35 68.1L452.44 77.84L452.45 77.83ZM490.31 132.45L517.36 107.44L526.79 117.64L533.73 111.23L507.34 82.69L500.4 89.1L509.87 99.34L482.82 124.35L490.31 132.45ZM516.04 167.03L554.83 141.78L548.71 132.38L509.92 157.63L516.04 167.03ZM547.45 173.74C559.4 168.8 572.64 172.46 578.23 186C584.13 200.3 577.19 211.4 565.06 216.4C552.93 221.41 540.06 218.15 534.21 203.97C528.28 189.61 535.26 178.77 547.45 173.74ZM551.83 184.35C543.92 187.62 540.11 193.17 543.11 200.44C546.09 207.65 552.63 209.2 560.71 205.86C568.86 202.5 572.37 196.72 569.44 189.63C566.63 182.83 559.8 181.06 551.83 184.35ZM587.92 229.97L594.3 257.47L582.05 259.92L575.67 232.42L587.92 229.97ZM448.85 260.23L447.52 296.09L435.19 295.78L436.52 259.92L448.85 260.23ZM443.7 361.02L433.69 394.63L421.85 390.57L431.86 356.96L443.7 361.02ZM504.12 390.58L508.18 420.3L496.35 422.12L492.29 392.41L504.12 390.58Z" fill="#360050"></path>
            </svg>
          </a>
        </div>
        <div className="header-menu">
          <script
            className="menu-data"
            type="application/json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                primary_nav: navItems.map((item) => ({
                  title: item.label,
                  url: '#',
                  menu_item_parent: '0',
                })),
                secondary_nav: [],
                background_images: [],
              }),
            }}
          />
          <div>
            <nav role="navigation" aria-label="primary">
              <ul>
                {navItems.map((item) => (
                  <li key={item.label} className={`first-level-item menu-theme-${item.theme} has-children`}>
                    <a tabIndex="0" href="#" className="">
                      <span className="icon"></span>
                      <span className="">{item.label}</span>
                      {/* */}
                    </a>
                    <ul className="child">
                      <li className="child-title"><span>{item.label}</span></li>
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a tabIndex="0" href={child.url}><span>{child.label}</span></a>
                          <ul className="grandchild">
                            {child.items.map((grandchild) => (
                              <li key={grandchild.label} className="third-level-item">
                                <a tabIndex="0" href={grandchild.url}>
                                  <span>{grandchild.label}</span>
                                  <i className="material-icons arrow">?</i>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="header-secondary">
          <a href="https://enrol.igssyd.nsw.edu.au/student/application" className="button small purple" target="_blank" rel="noopener">
            <span>Apply</span>
          </a>
          <div className="search-menu">
            <a href="https://www.igssyd.nsw.edu.au/#search" aria-label="Search - opens interface" className="search button small yellow">
              <i className="material-icons search">search</i>
            </a>
            <div className="search-menu-overlay">
              <div className="search-wrapper">
                <form method="get" action="https://www.igssyd.nsw.edu.au/" className="search-form">
                  <button type="submit" aria-label="Search"><i className="material-icons">search</i></button>
                  <label>
                    <span className="sr-only">Search</span>
                    <input type="search" placeholder="What are you looking for?" defaultValue="" name="s" title="Search" autoComplete="off" className="search-field" />
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
