# Portfolio site

A fast, dependency-free portfolio. No build step: plain HTML, CSS and JS.

## Edit your content
Everything lives in **`data.js`**: name, links, skills and projects.
Your public GitHub repos are listed automatically from `githubUsername`.

## Adding quick demos (what recruiters will actually watch)
1. Record 10–30 seconds of the project working, with no audio.
   Windows: **ScreenToGif** (free) or **OBS Studio**. Built-in: `Win + Alt + R` (Xbox Game Bar).
2. Keep each file under about 5 MB. Export as `.mp4` (best) or `.gif`.
3. Put it in `assets/demos/` and set it on the project, for example:
   ```js
   demo: { type: "video", src: "assets/demos/analyzer.mp4" }
   ```
   Other options: `{ type: "youtube", src: "VIDEO_ID" }` or `{ type: "iframe", src: "https://your-live-app.com" }`.
4. Add your résumé as `assets/resume.pdf`.

## Preview locally
```bash
python -m http.server 5500
```
Then open http://localhost:5500

## Publish free on GitHub Pages (gives you `https://AksharAeinampudi.github.io`)
1. Create a repo on GitHub named exactly **`AksharAeinampudi.github.io`**.
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/AksharAeinampudi/AksharAeinampudi.github.io.git
   git push -u origin main
   ```
3. On GitHub, go to repo **Settings → Pages → Source: Deploy from branch → main / root**.
4. The site goes live at `https://AksharAeinampudi.github.io` within about a minute. Put that URL on your résumé.

Optional: buy a custom domain (about $12/yr, e.g. `yourname.dev`) and add it under Settings → Pages.
