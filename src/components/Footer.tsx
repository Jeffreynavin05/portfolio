import { links } from "@/content";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
        <p className="text-sm text-foreground-faint">
          &copy; {new Date().getFullYear()} Jeffrey Navin
        </p>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${links.email}`}
            aria-label="Email"
            className="text-foreground-muted transition-colors hover:text-foreground"
          >
            <MailIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-foreground-muted transition-colors hover:text-foreground"
          >
            <GitHubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-foreground-muted transition-colors hover:text-foreground"
          >
            <LinkedInIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
