import React from 'react';

export default function PresentationSection({
  id = "presentation",
  title = "PARENT PRESENTATION",
  subtitle = "Explore our interactive presentation and handbook.",
  embedUrl = "https://online.fliphtml5.com/uawhd/jegl/",
  iframeTitle = "Interactive Presentation",
  bgClass = "bg-gray-50",
  aspectRatio = "aspect-[16/10]",
  maxWidth = "max-w-4xl",
  children,
}) {
  return (
    <section id={id} className={`py-12 ${bgClass} scroll-mt-24`}>
      <div className={`container mx-auto px-4 md:px-12 ${maxWidth}`}>
        {(title || subtitle) && (
          <div className="text-center mb-8">
            {title && (
              <h2 className="text-2xl md:text-4xl font-bold  tracking-tight mb-2">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-600 font-lato text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Interactive Flipbook Embed Container fitted to book aspect ratio */}
        <div className={`w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white relative ${aspectRatio} min-h-[300px]`}>
          <iframe
            className="absolute inset-0 w-full h-full border-0"
            src={embedUrl}
            title={iframeTitle}
            scrolling="no"
            allowFullScreen
          />
        </div>

        {/* Dynamic slot for additional content or sub-components */}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
