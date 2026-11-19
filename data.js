/* ============================================================
   EDIT THIS FILE — it's the only file you need to change.
   Everything on the site is generated from this data.
   ============================================================ */
window.PORTFOLIO = {
  name: "Akshar Aeinampudi",
  shortName: "Akshar",
  role: "Electrical & Computer Engineering @ Rutgers",
  tagline:
    "I build full-stack apps, data pipelines and games, and I ship them live. Click any project to try a quick demo.",
  location: "New Brunswick, NJ",
  seeking: "Open to software & ECE internships",

  githubUsername: "AksharAeinampudi",

  // Empty values hide that button. Add them when you're ready.
  links: {
    email: "aeinampudiakshar@gmail.com",
    linkedin: "https://www.linkedin.com/in/akshar-aeinampudi-0824b6269/",
    resume: "assets/Akshar_Aeinampudi_Resume.pdf",
  },

  skills: [
    "Python", "C/C++", "Java", "JavaScript", "TypeScript", "SQL", "MATLAB", "Verilog",
    "React", "Flask", "FastAPI", "PostgreSQL", "BigQuery", "Docker", "GitHub Actions", "pytest",
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
      stats: ["1,300+ prompts", "Daily puzzle", "No sign-up"],
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
      tags: ["Python", "FastAPI", "PostgreSQL", "React", "BigQuery", "Data"],
      repo: "https://github.com/AksharAeinampudi/gh-ecosystem-analyzer",
      live: "https://gh-ecosystem-analyzer.onrender.com",
      demo: { type: "image", src: "assets/demos/gh-ecosystem-analyzer.png" },
      note: "Screenshot of the live dashboard. The live site runs on a free plan, so the first load can take up to a minute.",
      stats: ["~96 GB analyzed", "4.86M rows", "Rollups 78 s → 8 s"],
      highlights: [
        "Queried ~96 GB of GH Archive data in BigQuery: 9 months of public GitHub activity turned into 4.86M daily rows for 25,000 repos, enriched via GraphQL",
        "Share-based momentum score ranking 199 languages and 994 topics, with a push cap correcting for a 38% data-collection drop and one bot repo (11% of all tracked pushes)",
        "FastAPI REST API and React + Recharts dashboard on Render with Neon Postgres; cut topic rollup time from 78 s to 8 s",
        "110 tests (pytest, Vitest) running in GitHub Actions CI",
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
      stats: ["1,100+ postings / run", "48 tests", "Auto-scrapes every 6 h"],
      highlights: [
        "Scrapes 1,100+ postings per run from 4 companies' Greenhouse and Lever APIs, normalized into one schema with regex word-boundary title filtering",
        "PostgreSQL schema (SQLAlchemy) deduplicates postings by URL with a unique constraint and tracks application status, so each match is emailed only once over SMTP",
        "6-hour scheduled scrape via GitHub Actions into Neon Postgres; the first run emailed 20 new postings",
        "48 offline pytest tests (saved API responses, fake mail server, no network) in GitHub Actions CI",
      ],
    },
  ],

  /* ---------- Experience & education ---------- */
  experience: [
    {
      org: "Future Finance Inc.",
      role: "Head of App Development",
      dates: "Jan 2023 – Jun 2025",
      points: [
        "Built a Swift budgeting app used by 100+ students, with category tracking, customizable budget limits, user authentication and Google login",
        "Added debt tracking and a page showing real-time stock prices through APIs",
      ],
    },
    {
      org: "Wastewater Treatment Plant Model Synthesis",
      role: "Project · Rutgers",
      dates: "Jan 2026 – May 2026",
      points: [
        "Wrote MATLAB algorithms to preprocess and statistically filter plant chemical data, building linear regression models with 93% predictive accuracy",
        "Validated the models on an 80/20 train/test split",
      ],
    },
  ],
  education: [
    {
      org: "Rutgers University–New Brunswick",
      role: "B.S., Electrical & Computer Engineering",
      dates: "Sep 2025 – Dec 2028",
      points: [
        "GPA 3.7/4.0 · Dean's List",
        "Coursework: Digital Logic Design, Principles of Electrical Engineering, Calculus I–III, Physics I–II",
      ],
    },
  ],
};
