'use client';

const GrowingInConfidence = ({ growing }) => {
  return (
    <div className="mt-24">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <span className="font-schoolbell text-[22px] font-normal text-msi-blue">
          {growing.span}
        </span>
        <h2>{growing.title}</h2>
        <p className="text-[#0A1539] mb-8 leading-relaxed text-justify" style={{ color: '#0A1539' }}>
          {growing.description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {growing.features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mb-3 flex items-center justify-center">
                <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" loading="lazy" />
              </div>
              <h3>{feature.title}</h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={growing.link}
            className="inline-block px-6 py-3 text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: '#e4984d' }}
          >
            Read More
          </a>
        </div>
      </div>

      <div className="w-full h-[400px]">
        <div className="flex gap-2 h-full">
          <div className="flex-1 flex flex-col gap-2 pt-8">
            <img src={growing.images[0].src} alt={growing.images[0].alt} className="w-full flex-[1] rounded-lg object-cover min-h-0" loading="lazy" />
            <img src={growing.images[1].src} alt={growing.images[1].alt} className="w-full flex-[2] rounded-lg object-cover min-h-0" loading="lazy" />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <img src={growing.images[2].src} alt={growing.images[2].alt} className="w-full flex-[1] rounded-lg object-cover min-h-0" loading="lazy" />
            <img src={growing.images[3].src} alt={growing.images[3].alt} className="w-full flex-[1] rounded-lg object-cover min-h-0" loading="lazy" />
          </div>
          <div className="flex-1 flex flex-col gap-2 pt-12">
            <img src={growing.images[4].src} alt={growing.images[4].alt} className="w-full flex-[1] rounded-lg object-cover min-h-0" loading="lazy" />
            <img src={growing.images[5].src} alt={growing.images[5].alt} className="w-full flex-[1.2] rounded-lg object-cover min-h-0" loading="lazy" />
            <img src={growing.images[6].src} alt={growing.images[6].alt} className="w-full flex-[1] rounded-lg object-cover min-h-0" loading="lazy" />
          </div>
          <div className="flex-1 flex flex-col gap-2 pt-4">
            <img src={growing.images[7].src} alt={growing.images[7].alt} className="w-full flex-[1] rounded-lg object-cover min-h-0" loading="lazy" />
            <img src={growing.images[8].src} alt={growing.images[8].alt} className="w-full flex-[1.3] rounded-lg object-cover min-h-0" loading="lazy" />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <img src={growing.images[9].src} alt={growing.images[9].alt} className="w-full flex-[1] rounded-lg object-cover min-h-0" loading="lazy" />
            <img src={growing.images[10].src} alt={growing.images[10].alt} className="w-full flex-[1.2] rounded-lg object-cover min-h-0" loading="lazy" />
            <img src={growing.images[11].src} alt={growing.images[11].alt} className="w-full flex-[1.5] rounded-lg object-cover min-h-0" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowingInConfidence;