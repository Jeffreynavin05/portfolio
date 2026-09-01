export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-8 flex items-baseline gap-3">
      <span className="font-mono text-xs text-accent">{eyebrow}</span>
      <h2 className="text-sm font-medium uppercase tracking-widest text-foreground-muted">
        {title}
      </h2>
    </div>
  );
}
