# Portfolio Guide

This guide explains where to update content in this portfolio project.

## Main Content Files

- `src/data/resume.tsx` - Personal info, social links, skills, work, education, projects, and hackathons.
- `src/app/page.tsx` - Homepage section headings and static copy.
- `src/app/layout.tsx` - Global metadata (title, description, icons, OpenGraph, Twitter).
- `content/*.mdx` - Blog posts.

## Assets

- `public/me.png.jpeg` - Profile photo.
- `public/ghrce-logo.png` - Education logo.
- `public/mettarev-logo.svg` - Work logo.
- `public/favicon.png` - Browser tab icon.

## How To Update

1. Edit `src/data/resume.tsx` for portfolio content.
2. Add/update image files in `public/`.
3. Restart dev server if images do not refresh.

## Run Locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.
