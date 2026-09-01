# Jeffrey Navin — Portfolio

A single-page portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. No CMS, no database — all copy lives in [`src/content.ts`](src/content.ts).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

Everything you'd want to change day-to-day — the hero copy, project descriptions, experience, skills, and links — is in [`src/content.ts`](src/content.ts). It's fully typed, so editing it will surface a type error if a required field goes missing. You shouldn't need to touch any component to update text.

To add a real repo link for a project that currently shows "Repo link coming soon," set its `repoUrl` in `content.ts`.

## Resume

The hero's "Resume" link points to `/resume.pdf`. Add your resume PDF at `public/resume.pdf` — it isn't included in this repo.

## Theme

Dark mode is the default. The toggle in the header flips a `dark` class on `<html>` and remembers the choice in `localStorage`. Color tokens live in [`src/app/globals.css`](src/app/globals.css).

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. No configuration needed — Vercel detects Next.js automatically. Click Deploy.

Or from the CLI:

```bash
npx vercel
```

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Geist Sans / Geist Mono (`next/font`)
- No external UI or animation libraries
# portfolio
