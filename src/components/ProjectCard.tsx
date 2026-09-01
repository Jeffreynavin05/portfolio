import type { Project } from "@/content";
import { ArrowUpRightIcon } from "./icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group border-t border-border py-8 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-medium text-foreground">{project.name}</h3>
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-foreground-muted transition-colors hover:text-accent"
          >
            View repo
            <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ) : (
          <span className="text-sm text-foreground-faint">Repo link coming soon</span>
        )}
      </div>

      <p className="mt-2 max-w-2xl text-base leading-relaxed text-foreground-muted">
        {project.description}
      </p>

      <div className="mt-4 max-w-2xl border-l-2 border-accent/40 pl-4">
        <p className="text-xs font-medium uppercase tracking-wide text-accent">
          Why it&apos;s interesting
        </p>
        <p className="mt-1.5 text-[15px] leading-relaxed text-foreground-muted">
          {project.why}
        </p>
      </div>

      <p className="mt-4 font-mono text-xs text-foreground-faint">
        {project.stack.join(" · ")}
      </p>
    </article>
  );
}
