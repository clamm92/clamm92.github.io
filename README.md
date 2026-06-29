# Portfolio

Personal portfolio site for [connorlam.tech](https://connorlam.tech/).

## Tech stack

- **Frontend:** React, React Router, Vite
- **Styling:** Custom CSS (Sora + Fira Mono)
- **Deployment:** GitHub Pages (`gh-pages`)

## Local development

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build
npm run deploy
```

`deploy` runs the production build and publishes the `dist` folder to the `gh-pages` branch.

## Project structure

```
src/
  pages/          Route-level views (Home, Experience, Projects, Hobbies)
  components/     UI components
  data/           Content for projects, experience, and hobbies
  styles/         Page and component styles
public/           Static assets (images, favicon)
```
