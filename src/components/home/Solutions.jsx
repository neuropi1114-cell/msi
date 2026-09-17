const Solutions = () => {
  return (
    <section className="py-24 bg-[#d16827] relative overflow-hidden">
      <div className="container mx-auto px-3 md:px-6 text-center mb-12">
        <h2 className="text-3xl md:text-5xl text-white font-bold mb-4">
          YOU GO TO WORK.
          <br />
          THEIR CHILDHOOD DOESN'T HAVE TO WAIT.
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto text-lg">
          We offer family solutions for the diverse and multi-cultural global community.
        </p>
      </div>

      <div className="container mx-auto px-3 md:px-6 max-w-7xl">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
          <img
            src="/images/solutions/you-go-to-work.jpeg"
            alt="Parents at work while MSI cares for their child"
            className="w-full object-cover"
            loading="lazy"
          />
          <div className="p-6 md:p-10">
            <h3 className="text-2xl text-[#2f9ed9] font-bold mb-3 text-center">
              You focus on your work
            </h3>
            <p className="mb-2 leading-relaxed text-center text-lg md:text-xl">
              We remain focused on your child.
            </p>
            <p className="mb-2 leading-relaxed text-center text-lg md:text-xl">
              For working parents, childcare needs to understand real life.
              An early meeting. A long commute. A late call.
              A school holiday when your office is open.
              A workday that doesn't end exactly when preschool does.
            </p>
            <p className="leading-relaxed text-center text-lg md:text-xl">
              That is why MSI brings together:
              Crèche + Preschool + Daycare + Extended Care + After-School + Enrichment
              with additional care options available at selected centres
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;