export default function SectionHeader({
  title = "What will my experience as an MSI parent be?",
  subtitle = "You Are Not Dropping Your Child at School. You Are Joining Their Journey.",
  description = "Choosing your child's first school or childcare environment is a deeply important decision.",
  className = "py-20 bg-white"
}) {
  return (
    <section className={className}>
      <div className="container mx-auto px-4 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl text-msi-purple font-bold mb-6">
          {title}
        </h2>
        <div className="w-24 h-1 bg-msi-orange mx-auto mb-8" />
        {subtitle && (
          <h3>
            {subtitle}
          </h3>
        )}
        {description && (
          <p className="text-2xl  max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
