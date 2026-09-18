import Image from 'next/image';

export default function CreativeLearning() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl text-msi-purple font-bold mb-6">
              We make learning magical through creativity
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              In order to respond more and more concretely to the need of the parents, we provide
              Live CCTV Feed, Biometric Security Systems, Learning and Management Systems, and
              Child safe, hygienic, and friendly Ambience.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our Nap Rooms and diaper Change Stations give extra mileage to our Daycare Facility.
            </p>
          </div>
          <div>
            <Image
              src="/images/hero/DSC00928-scaled-2-1024x684.jpg.bv.webp"
              alt="Children taking part in creative learning activities at My School ITALY daycare"
              width={800}
              height={534}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}