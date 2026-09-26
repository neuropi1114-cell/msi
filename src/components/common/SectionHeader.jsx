import ScrollReveal from './ScrollReveal';

export default function SectionHeader({
  title = "What will my experience as an MSI parent be?",
  subtitle = "You Are Not Dropping Your Child at School. You Are Joining Their Journey.",
  description = "Choosing your child's first school or childcare environment is a deeply important decision.",
  className = "py-20 bg-white",
  descriptionClassName = ""
}) {
  return (
    <section className={className}>
      <div className="container mx-auto px-4 md:px-12 text-center">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="text-msi-purple mb-2">
            {title}
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="zoom" delay={0.25}>
          <div className="w-24 h-1 bg-msi-orange mx-auto mt-2 mb-3" />
        </ScrollReveal>
        {subtitle && (
          <ScrollReveal direction="up" delay={0.35}>
            <h3>
              {subtitle}
            </h3>
          </ScrollReveal>
        )}
        {description && (
          <ScrollReveal direction="up" delay={0.45}>
            <p className={`max-w-3xl mx-auto ${descriptionClassName}`}>
              {description}
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}

