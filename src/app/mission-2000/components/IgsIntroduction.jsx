export default function IgsIntroduction() {
  return (
    <div className="section introduction theme-purple fade-in" style={{ backgroundImage: 'url(/mission2000/assets/bg_ts.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(54, 0, 80, 0.7)', zIndex: 1 }}></div>
      <div style={{ position: 'relative', zIndex: 2 }}>
      <span className="binding-fabric" aria-hidden></span>
      <div className="container">
        <div className="row">
          <div className="col-12 intro-content">
            <div className="row intro-title">
              <div className="col-12">
                <h2 className="title">
                  <span
                    className="multi-language-title"
                    data-titles='[{"title":"A warm welcome!"},{"title":" Un caldo benvenuto!"},{"title":"Herzlich wilkommen!"}]'
                  >A warm welcome!</span>
                </h2>
              </div>
              <div className="col-12">
                <p className="heading">
                  Situated within moments of Sydney&apos;s CBD, International Grammar School is a unique independent, coeducational, secular school offering quality teaching for early learning, primary and high school students through to Year 12.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
