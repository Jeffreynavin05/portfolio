import { experience } from "@/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-16">
      <Reveal>
        <SectionHeading eyebrow="02" title="Experience" />
      </Reveal>
      <Reveal delay={80}>
        <div className="space-y-6">
          {experience.map((item) => (
            <div
              key={item.company}
              className="flex flex-col gap-1 sm:flex-row sm:gap-6"
            >
              <p className="w-40 shrink-0 font-mono text-xs text-foreground-faint">
                {item.dates}
              </p>
              <div>
                <p className="text-[15px] text-foreground">
                  <span className="font-medium">{item.role}</span>
                  <span className="text-foreground-muted"> · {item.company}</span>
                </p>
                <ul className="mt-1.5 space-y-1">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm leading-relaxed text-foreground-muted"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
