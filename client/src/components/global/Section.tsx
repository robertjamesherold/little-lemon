type SectionProps = {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function Section({ children, className, ariaLabel }: SectionProps) {
  return (
    <section className={className} aria-label={ariaLabel}>
      {children}
    </section>
  );
}
