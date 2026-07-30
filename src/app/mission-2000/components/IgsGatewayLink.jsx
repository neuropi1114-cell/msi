export default function IgsGatewayLink({
  variant,
  theme,
  imagePosition,
  imageSrc,
  imageAlt,
  imageCrop,
  heading,
  titleHtml,
  content,
  linkHref,
  linkText,
  hasBindingFabric,
  linkTarget,
  bgImage,
}) {
  const imageLeft = imagePosition === 'left';
  return (
    <div className={`section gateway-link theme-${theme} image-${imagePosition} fade-in`} style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' } : {}}>
      {bgImage && <div style={{ position: 'absolute', inset: 0, background: theme === 'orange' ? 'rgba(255, 105, 0, 0.7)' : theme === 'orange_pastel' ? 'rgba(255, 200, 140, 0.7)' : 'rgba(0,0,0,0.5)', zIndex: 1 }}></div>}
      <div className="section-wrapper wrapper container" style={bgImage ? { position: 'relative', zIndex: 2 } : {}}>
        {hasBindingFabric && <span className="binding-fabric" aria-hidden></span>}
        <div className="row gateway-link__row">
          <div className={`col-12 col-md-6 gateway-link__image-wrap${imageLeft ? '' : ' push-md-6'} link-images`}>
            <div className="images slick-wrapper slick-initialized slick-slider">
              <div className="slick-list draggable">
                <div className="slick-track" style={{ opacity: 1, width: '100%' }}>
                  <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{ width: '100%', position: 'relative', left: 0, top: 0, zIndex: 999, opacity: 1 }}>
                    <div>
                      <div className="slide" style={{ width: '100%', display: 'inline-block' }}>
                        <div className={`image-inner image-crop-${imageCrop}`}>
                          <img src={imageSrc} alt={imageAlt} loading="lazy" className="fill" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-12 col-md-6${imageLeft ? '' : ' pull-md-6'} link-content`}>
            <div className="content container">
              <h3 className="heading">{heading}</h3>
              <h2 className="title" dangerouslySetInnerHTML={{ __html: titleHtml }} />
              <div className="inner-content">
                <div dangerouslySetInnerHTML={{ __html: content }} />
                <a href={linkHref} target={linkTarget || undefined} className="link-more">
                  {linkText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
