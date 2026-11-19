/* ============================================================
   EDIT THIS FILE — it's the only file you need to change.
   Everything on the site is generated from this data.
   ============================================================ */
window.PORTFOLIO = {
  name: "Akshar Aeinampudi",
  shortName: "Akshar",
  role: "Software Developer",
  tagline:
    "I build full-stack apps, data pipelines and games, and I ship them live. Click any project to try a quick demo.",
  location: "", // e.g. "Dallas, TX"

  githubUsername: "AksharAeinampudi",

  // Empty values hide that button. Add them when you're ready.
  links: {
    email: "", // e.g. "you@example.com"
    linkedin: "", // e.g. "https://www.linkedin.com/in/your-profile"
    resume: "", // e.g. "assets/resume.pdf" (put the PDF in /assets)
  },

  skills: [
    "Python", "JavaScript", "TypeScript", "React", "Flask", "FastAPI",
    "PostgreSQL", "SQLAlchemy", "Docker", "pytest", "GitHub Actions", "Web scraping",
  ],

  showAllRepos: true,
  hideRepos: ["AksharAeinampudi.github.io"],

  /* demo.type: "video" | "gif" | "image" | "youtube" | "iframe"
     demo.poster: thumbnail shown on the card.
     note: small line shown under the demo in the popup. */
  projects: [
    {
      title: "Outlier",
      summary:
        "A free daily word game: name a correct answer few people would think of. Rare answers launch your rocket to the Moon.",
      tags: ["JavaScript", "Game", "Wikidata"],
      repo: "https://github.com/AksharAeinampudi/outlier",
      live: "https://aksharaeinampudi.github.io/outlier/",
      demo: { type: "iframe", src: "https://aksharaeinampudi.github.io/outlier/", poster: "assets/demos/outlier.png" },
      note: "This is the real game. Go ahead and play a round right here.",
      highlights: [
        "1,300+ prompts, with extra answers and rarity estimates generated from Wikidata",
        "Forgiving answer matching: typos, plurals, short and alternate names all count",
        "Same seven prompts for everyone each day, plus free play, nine themed packs and spoiler-free score sharing",
        "Test script checks the prompt bank, matching and a full year of daily picks",
      ],
    },
    {
      title: "GitHub Ecosystem Analyzer",
      summary:
        "Which languages and topics on GitHub are gaining or losing momentum? A data pipeline over GH Archive feeding a ranked dashboard.",
      tags: ["Python", "FastAPI", "PostgreSQL", "React", "Data"],
      repo: "https://github.com/AksharAeinampudi/gh-ecosystem-analyzer",
      live: "https://gh-ecosystem-analyzer.onrender.com",
      demo: { type: "image", src: "assets/demos/gh-ecosystem-analyzer.png" },
      note: "Screenshot of the live dashboard. The live site runs on a free plan, so the first load can take up to a minute.",
      highlights: [
        "Streaming, resumable ingestion of all public GitHub events (Jan–Sep 2025) from GH Archive",
        "Momentum = change in a technology's share of activity over 30/60/90-day windows, robust to data-collection swings",
        "PostgreSQL rollups, FastAPI REST API with docs, React + Recharts dashboard",
        "Dockerized, tested with pytest and CI, deployed to Render",
      ],
    },
    {
      title: "Internship Tracker",
      summary:
        "A Flask app that scrapes internship postings from Greenhouse and Lever job boards, tracks application status, and emails alerts for new matches.",
      tags: ["Python", "Flask", "PostgreSQL", "Web scraping"],
      repo: "https://github.com/AksharAeinampudi/internship-tracker",
      live: "https://internship-tracker-g9ua.onrender.com",
      demo: { type: "iframe", src: "https://internship-tracker-g9ua.onrender.com" },
      note: "Live app. It runs on a free plan, so the first load can take up to a minute.",
      highlights: [
        "Normalizes two different job-board APIs into one format, with word-boundary keyword filtering",
        "Deduplicates by URL in the app and with a database constraint; email digests never repeat a posting",
        "Scheduled scraping via GitHub Actions against Neon Postgres; Render serves the UI",
        "48 offline pytest tests using saved API responses, run in CI on every push",
      ],
    },
  ],
};
