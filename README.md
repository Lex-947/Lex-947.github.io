# Lex | Software Developer Portfolio

A responsive single-page portfolio built with React, TypeScript, Vite and custom CSS. It is configured for the GitHub Pages **user site** at https://lex-947.github.io/.

## Run locally

```bash
npm install
npm run dev
```

## Check the production build

```bash
npm run build
npm run preview
```

## Publishing

Changes on `main` trigger the GitHub Actions Pages deployment workflow. Development happens on `portfolio-dev`, which does **not** trigger deployment. When the site is ready, open a pull request from `portfolio-dev` into `main`, review it, and merge it to publish.

If GitHub Pages has not been configured yet, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.

## Personalise before sharing

- Replace `YOUR_EMAIL@example.com` in `src/App.tsx` with the email address you want recruiters to use.
- Verify all project descriptions and technology lists reflect your actual contributions.
- Add approved links to live apps/store pages or relevant repositories if you want to feature them.
- Consider adding a CV PDF under `public/` and a link to it in the hero or contact section.
- Replace the illustrative CSS artwork with screenshots of the actual apps if you have permission to share them.

## Notes

- No secrets, API keys, or backend endpoints are included.
- Project artwork is made with CSS, so the site works without external image assets.
- Google Fonts are loaded from Google Fonts; system fallbacks remain available if the font service is unavailable.
