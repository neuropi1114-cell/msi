export default function EnrolCta() {
  return (
    <section className="py-16 bg-msi-purple text-white">
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center justify-between max-w-5xl">
        <div>
          <h2 className="text-3xl font-bold mb-2">ENROL YOUR CHILD</h2>
          <p className="text-white/80 max-w-xl">
            Interested in a community of global learners, child psychologists, paediatricians and
            educators, who, like yourself, believe in the power of a progressive, quality education
            to make the world a better place?
          </p>
        </div>
        <a
          href="/admissions"
          className="inline-block bg-msi-orange text-white font-bold py-3 px-10 rounded-full hover:bg-msi-orange/90 transition-colors text-lg mt-6 md:mt-0 flex-shrink-0"
        >
          Enrol Now
        </a>
      </div>
    </section>
  );
}
