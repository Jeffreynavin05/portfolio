import { ThemeToggle } from "./ThemeToggle";
import { hero } from "@/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
        <a
          href="#top"
          className="font-mono text-sm text-foreground-muted transition-colors hover:text-foreground"
        >
          {hero.name}
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
