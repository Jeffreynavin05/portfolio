import { hero, links } from "@/content";
import { GitHubIcon, LinkedInIcon, MailIcon, FileIcon } from "./icons";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[calc(100svh-49px)] max-w-3xl flex-col justify-center px-6 py-16"
    >
      <p className="font-mono text-sm text-accent">{hero.name}</p>
      <h1 className="mt-4 max-w-2xl text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
        {hero.tagline}
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted">
        {hero.subtext}
      </p>

      <nav className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
        >
          <GitHubIcon className="h-4 w-4" />
          GitHub
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
        >
          <LinkedInIcon className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href={`mailto:${links.email}`}
          className="inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
        >
          <MailIcon className="h-4 w-4" />
          Email
        </a>
        <a
          href={links.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
        >
          <FileIcon className="h-4 w-4" />
          Resume
        </a>
      </nav>
    </section>
  );
}
