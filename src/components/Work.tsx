import { projects } from "@/content";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-3xl px-6 py-16">
      <Reveal>
        <SectionHeading eyebrow="01" title="Selected work" />
      </Reveal>
      <Reveal delay={80}>
        <div>
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
