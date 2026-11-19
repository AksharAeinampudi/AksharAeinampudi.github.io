(() => {
  const P = window.PORTFOLIO;
  const $ = (s) => document.querySelector(s);
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ghUrl = `https://github.com/${P.githubUsername}`;

  const icons = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.3 2.8.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg>',
    ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>',
  };
  const btn = (href, label, icon, primary) =>
    `<a class="btn${primary ? " primary" : ""}" href="${esc(href)}" ${href.startsWith("mailto:") ? "" : 'target="_blank" rel="noopener"'}>${icons[icon] || ""}${esc(label)}</a>`;

  // ---------- Analytics (GoatCounter: no cookies, no personal data) ----------
  const track = (name) => { try { window.goatcounter?.count({ path: name, title: name, event: true }); } catch (e) {} };
  if (P.goatcounter) {
    const gc = document.createElement("script");
    gc.async = true;
    gc.src = "https://gc.zgo.at/count.js";
    gc.dataset.goatcounter = `https://${P.goatcounter}.goatcounter.com/count`;
    document.head.appendChild(gc);
    // Count clicks on résumé, profile, live-site and code links as events.
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a[href]");
      if (!a) return;
      const href = a.getAttribute("href");
      if (href.startsWith("#")) return;
      const where = a.closest("#hero-cta") ? "hero" : a.closest("#contact-cta") ? "contact" : a.closest("#modal-cta") ? "popup" : a.closest(".card-links") ? "card" : a.closest(".repo") ? "repo-list" : "page";
      const project = a.closest(".card")?.querySelector("h3")?.textContent || (where === "popup" ? $("#modal-title").textContent : "");
      const label = a.textContent.replace(/[↗→]/g, "").trim();
      track(`click: ${label}${project ? " · " + project : ""} (${where})`);
    });
  }

  // ---------- Header / hero ----------
  document.title = `${P.name} · ${P.role}`;
  $("#logo").innerHTML = P.shortName && P.name.startsWith(P.shortName) ? `${esc(P.shortName)}<span class="logo-rest">${esc(P.name.slice(P.shortName.length))}</span>` : esc(P.name);
  $("#hero-role").textContent = `> ${P.role}${P.location ? " · " + P.location : ""}`;
  $("#hero-name").textContent = `Hi, I'm ${P.shortName || P.name}.`;
  $("#hero-tagline").textContent = P.tagline;
  if (P.seeking) { $("#hero-status").textContent = P.seeking; $("#hero-status").hidden = false; }

  // ---------- Experience & education ----------
  const entries = (list = []) => list.map((e) => `
    <article class="entry">
      <div class="entry-head"><strong>${esc(e.org)}</strong><span class="mono muted">${esc(e.dates)}</span></div>
      <div class="entry-role">${esc(e.role)}</div>
      <ul>${(e.points || []).map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    </article>`).join("");
  if (P.experience?.length || P.education?.length) {
    $("#experience-list").innerHTML = entries(P.experience);
    $("#education-list").innerHTML = entries(P.education);
  } else {
    $("#experience").remove();
    document.querySelector('.nav-links a[href="#experience"]')?.remove();
  }
  const ctas = [
    btn("#projects", "See projects", "", true).replace(/target="_blank" rel="noopener"/, ""),
    P.links.resume && btn(P.links.resume, "Résumé", "file"),
    btn(ghUrl, "GitHub", "github"),
    P.links.linkedin && btn(P.links.linkedin, "LinkedIn", "linkedin"),
    P.links.email && btn(`mailto:${P.links.email}`, "Email", "mail"),
  ].filter(Boolean).join("");
  $("#hero-cta").innerHTML = ctas;
  $("#contact-cta").innerHTML = ctas.replace(/<a class="btn primary"[^>]*>.*?<\/a>/, "");
  $("#skills").innerHTML = P.skills.map((s) => `<li>${esc(s)}</li>`).join("");
  $("#footer-text").textContent = `© ${new Date().getFullYear()} ${P.name}. Built from scratch, hosted on GitHub Pages.`;

  // ---------- Projects ----------
  const hue = (str) => [...str].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 360, 7);
  const cover = (p) => {
    const h = hue(p.title);
    return `<div class="cover" style="background:linear-gradient(135deg,hsl(${h} 70% 45%),hsl(${(h + 60) % 360} 70% 35%))">${esc(p.title)}</div>`;
  };
  const thumb = (p) => {
    const d = p.demo;
    if (!d) return cover(p);
    if (d.type === "video") return `<video src="${esc(d.src)}" muted loop playsinline preload="metadata"${d.poster ? ` poster="${esc(d.poster)}"` : ""}></video>`;
    if (d.type === "gif" || d.type === "image") return `<img src="${esc(d.poster || d.src)}" alt="${esc(p.title)} demo" loading="lazy">`;
    if (d.type === "youtube") return `<img src="https://i.ytimg.com/vi/${esc(d.src)}/hqdefault.jpg" alt="${esc(p.title)} demo" loading="lazy">`;
    return d.poster ? `<img src="${esc(d.poster)}" alt="${esc(p.title)}" loading="lazy">` : cover(p);
  };
  const hasDemo = (p) => p.demo || p.live;

  const allTags = ["All", ...new Set(P.projects.flatMap((p) => p.tags))];
  let active = "All";
  const renderFilters = () => {
    $("#filters").innerHTML = allTags
      .map((t) => `<button class="filter" role="tab" aria-selected="${t === active}" data-tag="${esc(t)}">${esc(t)}</button>`)
      .join("");
  };
  const renderProjects = () => {
    const list = P.projects.map((p, i) => [p, i]).filter(([p]) => active === "All" || p.tags.includes(active));
    $("#project-grid").innerHTML = list
      .map(([p, i]) => `
      <article class="card">
        <button class="card-media" data-i="${i}" aria-label="Open demo of ${esc(p.title)}">
          ${thumb(p)}
          <span class="play">${hasDemo(p) ? "▶ Quick demo" : "Details"}</span>
        </button>
        <div class="card-body">
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.summary)}</p>
          ${p.stats?.length ? `<ul class="stats">${p.stats.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
          <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
          <div class="card-links">
            ${p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener">Live site ↗</a>` : ""}
            ${p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener">Code ↗</a>` : ""}
          </div>
        </div>
      </article>`)
      .join("");
  };
  renderFilters();
  renderProjects();

  $("#filters").addEventListener("click", (e) => {
    const t = e.target.closest(".filter");
    if (!t) return;
    active = t.dataset.tag;
    renderFilters();
    renderProjects();
  });

  // Hover-to-play video previews
  $("#project-grid").addEventListener("mouseover", (e) => e.target.closest(".card-media")?.querySelector("video")?.play().catch(() => {}));
  $("#project-grid").addEventListener("mouseout", (e) => e.target.closest(".card-media")?.querySelector("video")?.pause());

  // ---------- Demo modal ----------
  const modal = $("#demo-modal");
  const media = (p) => {
    const d = p.demo;
    if (!d) return p.live ? `<iframe src="${esc(p.live)}" title="${esc(p.title)} live demo" loading="lazy"></iframe>` : cover(p);
    if (d.type === "video") return `<video src="${esc(d.src)}" controls autoplay muted loop playsinline></video>`;
    if (d.type === "gif" || d.type === "image") return `<img src="${esc(d.src)}" alt="${esc(p.title)} demo">`;
    if (d.type === "youtube") return `<iframe src="https://www.youtube-nocookie.com/embed/${esc(d.src)}?autoplay=1&mute=1" title="${esc(p.title)} demo" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    if (d.type === "iframe") return `<iframe src="${esc(d.src)}" title="${esc(p.title)} live demo" loading="lazy"></iframe>`;
    return cover(p);
  };
  $("#project-grid").addEventListener("click", (e) => {
    const m = e.target.closest(".card-media");
    if (!m) return;
    const p = P.projects[+m.dataset.i];
    track(`demo: ${p.title}`);
    $("#modal-media").innerHTML = media(p);
    $("#modal-media").classList.toggle("scroll", !!p.demo && ["image", "gif"].includes(p.demo.type));
    $("#modal-note").textContent = p.note || "";
    $("#modal-note").hidden = !p.note;
    $("#modal-title").textContent = p.title;
    $("#modal-summary").textContent = p.summary;
    $("#modal-highlights").innerHTML = (p.highlights || []).map((h) => `<li>${esc(h)}</li>`).join("");
    $("#modal-tags").innerHTML = p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("");
    $("#modal-cta").innerHTML = [p.live && btn(p.live, "Open live site", "ext", true), p.repo && btn(p.repo, "View code", "github")].filter(Boolean).join("");
    modal.showModal();
  });
  const close = () => { modal.close(); };
  $("#modal-close").addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  modal.addEventListener("close", () => { $("#modal-media").innerHTML = ""; });

  // ---------- Theme toggle ----------
  $("#theme-toggle").addEventListener("click", () => {
    const root = document.documentElement;
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });

  // ---------- All repos (GitHub public API, no auth needed) ----------
  const langColors = { Python: "#3572A5", JavaScript: "#f1e05a", TypeScript: "#3178c6", Java: "#b07219", "C++": "#f34b7d", C: "#555555", HTML: "#e34c26", CSS: "#663399", Go: "#00ADD8", Rust: "#dea584", "Jupyter Notebook": "#DA5B0B", Shell: "#89e051", "C#": "#178600", Swift: "#F05138", Kotlin: "#A97BFF" };
  if (!P.showAllRepos) {
    $("#repos").remove();
    $("#nav-repos").remove();
    return;
  }
  $("#all-repos-link").href = `${ghUrl}?tab=repositories`;
  const CACHE = `repos:${P.githubUsername}`;
  const render = (repos) => {
    const shown = repos.filter((r) => !r.fork && !P.hideRepos.includes(r.name)).sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at) - new Date(a.pushed_at));
    $("#repo-list").innerHTML = shown.length
      ? shown.map((r) => `
        <a class="repo" href="${esc(r.html_url)}" target="_blank" rel="noopener">
          <strong>${esc(r.name)}</strong>
          <p>${esc(r.description || "No description")}</p>
          <div class="repo-meta">
            ${r.language ? `<span><span class="dot" style="background:${langColors[r.language] || "var(--accent)"}"></span>${esc(r.language)}</span>` : ""}
            <span>★ ${r.stargazers_count}</span>
            <span>Updated ${new Date(r.pushed_at).toLocaleDateString(undefined, { month: "short", year: "numeric" })}</span>
          </div>
        </a>`).join("")
      : `<p class="muted">No public repositories yet.</p>`;
  };
  try {
    const c = JSON.parse(sessionStorage.getItem(CACHE) || "null");
    if (c) return render(c);
  } catch (e) {}
  fetch(`https://api.github.com/users/${encodeURIComponent(P.githubUsername)}/repos?per_page=100&sort=pushed`)
    .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
    .then((repos) => {
      try { sessionStorage.setItem(CACHE, JSON.stringify(repos)); } catch (e) {}
      render(repos);
    })
    .catch(() => {
      $("#repo-list").innerHTML = `<p class="muted">Couldn't load repositories right now. <a href="${ghUrl}?tab=repositories" target="_blank" rel="noopener">See them on GitHub →</a></p>`;
    });
})();
