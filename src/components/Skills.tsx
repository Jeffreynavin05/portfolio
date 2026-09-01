import { education, skills } from "@/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-16">
      <Reveal>
        <SectionHeading eyebrow="03" title="Skills" />
      </Reveal>
      <Reveal delay={80}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="text-xs font-medium uppercase tracking-wide text-foreground-faint">
                {group.category}
              </p>
              <p className="mt-2 font-mono text-sm leading-relaxed text-foreground-muted">
                {group.items.join(", ")}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 border-t border-border pt-6 text-sm text-foreground-muted">
          {education.degree} · {education.school} · {education.dates}
        </p>
      </Reveal>
    </section>
  );
}
