/* Kiosk: map + search + filters + live results list + university popup. Data comes from _data/ via acc.md. */
(() => {
const U = window.UNIVERSITIES || {};
const C = Object.fromEntries(Object.entries(window.COURSES || {}).map(([k, v]) => [k, Array.isArray(v) ? v : []]));
const $ = id => document.getElementById(id);
const h = (t, c, x) => { const e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; };
const arr = v => Array.isArray(v) ? v : v ? [v] : [];
const plural = (k, w) => `${k} ${w}${k === 1 ? "" : "s"}`;
const ids = Object.keys(U), list = id => C[id] || [];
const all = ids.flatMap(list);
const meta = c => [c.qualification, arr(c.study_mode).join(" / ")].filter(Boolean).join(", ");
const btn = (cls, txt, fn) => { const b = h("button", cls, txt); b.type = "button"; b.onclick = fn; return b; };

/* searchable text per programme */
const hay = new WeakMap();
ids.forEach(id => list(id).forEach(c => hay.set(c,
  [c.name, c.summary, U[id].name, U[id].short, ...arr(c.subjects), ...arr(c.careers)].join(" ").toLowerCase())));

/* ?kiosk on the iPad URL turns on auto-reset and touch lock; visitors opening the QR link get a normal page */
const KIOSK = new URLSearchParams(location.search).has("kiosk");
if (KIOSK) document.documentElement.classList.add("lock");
const st = { topic: "", qual: "", q: "" };
let cur = null, sel = null, showAll = false;
const match = c => (!st.topic || arr(c.subjects).includes(st.topic))
  && (!st.qual || c.qualification === st.qual)
  && st.q.split(/\s+/).filter(Boolean).every(w => hay.get(c).includes(w));
const count = id => list(id).filter(match).length;
const dirty = () => st.topic || st.qual || st.q;

/* ---------- filter chips ---------- */
const top = (f, n) => {
  const m = {}; all.forEach(c => f(c).forEach(v => m[v] = (m[v] || 0) + 1));
  return Object.keys(m).sort((a, b) => m[b] - m[a]).slice(0, n);
};
const chipRow = (el, key, vals, allLabel) => [["", allLabel], ...vals.map(v => [v, v])].forEach(([v, l]) => {
  const b = btn("", l, () => { st[key] = v; paint(); });
  b.dataset.k = key; b.dataset.v = v; $(el).append(b);
});
chipRow("quals", "qual", top(c => arr(c.qualification), 4), "All levels");
chipRow("topics", "topic", top(c => arr(c.subjects), 8), "All subjects");

const q = $("q");
q.oninput = () => { st.q = q.value.trim().toLowerCase(); paint(); };
q.onkeydown = e => { if (e.key === "Enter") q.blur(); };   /* hides the iPad keyboard */
const reset = () => { Object.assign(st, { topic: "", qual: "", q: "" }); q.value = ""; paint(); };
$("reset").onclick = reset;
const stage = document.querySelector(".stage");
document.querySelectorAll("#views button").forEach(b => b.onclick = () => {
  stage.dataset.view = b.dataset.view;
  document.querySelectorAll("#views button").forEach(x => x.setAttribute("aria-pressed", x === b));
});

/* ---------- map ---------- */
const map = $("map"), dots = {};
/* keep the map image's own proportions, whatever image is used */
const mapImg = map.querySelector("img");
const fitMap = () => mapImg.naturalWidth && map.style.setProperty("--r", mapImg.naturalWidth / mapImg.naturalHeight);
mapImg.complete ? fitMap() : mapImg.addEventListener("load", fitMap);
ids.forEach(id => {
  const u = U[id], d = h("button", "dot"); d.type = "button";
  d.style.cssText = `top:${u.map.top}%;left:${u.map.left}%;--c:${u.brand_color}`;
  d.append(h("span", "num"), h("span", "lb " + (u.label || "right"), u.short || u.name));
  d.onclick = () => openUni(id);
  dots[id] = d; map.append(d);
});

function paint() {
  document.querySelectorAll(".chips button").forEach(b => b.setAttribute("aria-pressed", st[b.dataset.k] === b.dataset.v));
  const res = $("results"); res.replaceChildren();
  let total = 0, unis = 0;
  ids.forEach(id => {
    const items = list(id).filter(match), n = items.length, d = dots[id];
    d.classList.toggle("empty", !n);
    d.querySelector(".num").textContent = n || "";
    d.setAttribute("aria-label", `${U[id].name}: ${n ? plural(n, "programme") : "no matching programmes"}`);
    total += n; unis += n > 0;
    if (!n) return;
    const g = h("section", "grp"); g.style.setProperty("--c", U[id].brand_color);
    g.append(h("h3", "", U[id].name));
    items.forEach(c => {
      const b = btn("row", c.name, () => openUni(id, c));
      b.append(h("small", "", meta(c)));
      b.onpointerenter = b.onfocus = () => dots[id].classList.add("hi");
      b.onpointerleave = b.onblur = () => dots[id].classList.remove("hi");
      g.append(b);
    });
    res.append(g);
  });
  if (!total) {
    const e = h("div", "none");
    e.append(h("p", "", "No programmes match. Try fewer words or clear the filters."), btn("bt", "Clear filters", reset));
    res.append(e);
  }
  res.scrollTop = 0;
  $("tally").textContent = `${plural(total, "programme")} at ${unis === 1 ? "1 university" : unis + " universities"}`;
  $("reset").hidden = !dirty();
}

/* ---------- popup ---------- */
const mdl = $("mdl");
const link = (cls, text, href) => { const a = h("a", cls, text); a.href = href; a.target = "_blank"; a.rel = "noopener"; return a; };
const sec = (title, node) => { const s = h("section"); s.append(h("h4", "", title), node); return s; };
const chips = items => { const d = h("div", "tags"); items.forEach(i => d.append(h("span", "", i))); return d; };

function openUni(id, course) {
  const u = U[id]; cur = id; showAll = false; sel = course || null;
  $("sheet").style.setProperty("--c", u.brand_color);
  $("m-head").style.backgroundImage = u.city_image ? `url("${u.city_image}")` : "";
  $("m-logo").hidden = !u.logo; if (u.logo) $("m-logo").src = u.logo;
  $("m-logo").alt = u.name + " logo";
  $("m-name").textContent = u.name;
  $("m-loc").textContent = u.location + (u.russell ? ", Russell Group" : "");
  renderList(); mdl.hidden = false; $("m-close").focus({ preventScroll: true });
}
function renderList() {
  const nav = $("m-list"), u = U[cur], full = list(cur), d = $("m-detail");
  let items = showAll || !dirty() ? full : full.filter(match);
  if (!items.length) items = full;
  nav.replaceChildren();
  nav.parentElement.classList.toggle("solo", full.length === 1);
  if (!full.length) {
    d.replaceChildren(h("h3", "", "Programmes coming soon"), h("p", "sum", `Programme details for ${u.name} will be added soon.`), link("bt", "Visit university website", u.website));
    return;
  }
  if (!items.includes(sel)) sel = items[0];
  items.forEach(c => {
    const b = btn("", c.name, () => { sel = c; renderList(); });
    b.append(h("small", "", meta(c)));
    b.setAttribute("aria-current", c === sel);
    nav.append(b);
  });
  if (items.length < full.length) nav.append(btn("all", `Show all ${full.length} programmes`, () => { showAll = true; renderList(); }));
  renderDetail(sel);
  nav.querySelector("[aria-current=true]")?.scrollIntoView({ block: "nearest", inline: "nearest" });
}
function deepLink(id, c) {
  const u = new URL(location.href); u.search = ""; u.hash = "";
  u.searchParams.set("u", id); if (c.id) u.searchParams.set("p", c.id);
  return u.toString();
}
function qrSvg(text) {
  const qr = qrcode(0, "M"); qr.addData(text); qr.make();
  const n = qr.getModuleCount(), NS = "http://www.w3.org/2000/svg"; let p = "";
  for (let r = 0; r < n; r++) for (let k = 0; k < n; k++) if (qr.isDark(r, k)) p += `M${k} ${r}h1v1h-1z`;
  const s = document.createElementNS(NS, "svg"), path = document.createElementNS(NS, "path");
  s.setAttribute("viewBox", `0 0 ${n} ${n}`); s.setAttribute("role", "img"); s.setAttribute("aria-label", "QR code for this programme");
  s.setAttribute("shape-rendering", "crispEdges"); path.setAttribute("d", p); path.setAttribute("fill", "#16213a");
  s.append(path); return s;
}
function renderDetail(c) {
  const d = $("m-detail"); d.replaceChildren(); d.scrollTop = 0;
  const tbc = v => !v || /^tbc$/i.test(String(v).trim());
  const tg = h("div", "tags");
  [c.qualification, ...arr(c.study_mode), c.delivery !== "Other" ? c.delivery : ""].filter(Boolean).forEach((t, i) => tg.append(h("span", i ? "" : "q", t)));
  d.append(tg, h("h3", "", c.name));
  (c.summary || "").split(/\n+/).filter(Boolean).forEach((p, i) => d.append(h("p", i ? "sum" : "sum lead", p)));
  const f = h("dl", "facts");
  [["Duration", c.duration], ["Starts", c.dates], ["Apply by", c.deadline]].forEach(([k, v]) => {
    const x = h("div", tbc(v) ? "tbc" : ""); x.append(h("dt", "", k), h("dd", "", tbc(v) ? "To be confirmed" : v)); f.append(x);
  });
  d.append(f);
  const main = h("div", "main"), aux = h("aside", "aux");
  if (arr(c.highlights).length) { const ul = h("ul", "hl"); c.highlights.forEach(i => ul.append(h("li", "", i))); main.append(sec("Highlights", ul)); }
  [["How it is taught", c.delivery_note], ["Entry requirements", c.entry_requirements]].forEach(([k, v]) => {
    if (!v) return; const t = h("div", "txt"); v.split(/\n+/).filter(Boolean).forEach(p => t.append(h("p", "", p))); main.append(sec(k, t));
  });
  [c.notes, c.programme_note].forEach(n => n && main.append(h("p", "note", n)));
  const btns = h("div", "btns");
  [[c.programme_url, "View programme page", "bt"], [c.department_url, "Department", "bt o"], [c.promo_url, "More information", "bt o"], [c.video_url, "Watch video", "bt o"]]
    .forEach(([u, t, k]) => /^https?:/.test(u || "") && btns.append(link(k, t, u)));
  const url = deepLink(cur, c), narrow = matchMedia("(max-width:820px)").matches;
  if (navigator.share && narrow) btns.append(btn("bt o", "Share this programme", () => navigator.share({ title: c.name, url }).catch(() => {})));
  if (btns.children.length) aux.append(btns);
  if (arr(c.subjects).length) aux.append(sec("Subject areas", chips(c.subjects)));
  if (arr(c.careers).length) aux.append(sec("Career pathways", chips(c.careers)));
  if (window.qrcode && !narrow) try {
    const w = h("div", "qr"); w.append(qrSvg(url), h("p", "", "Scan with your phone camera to open this programme."));
    aux.append(sec("Take it with you", w));
  } catch (e) {}
  const cols = h("div", "cols"); cols.append(main, aux); d.append(cols);
}
const close = () => { mdl.hidden = true; };
$("m-close").onclick = close;
mdl.addEventListener("click", e => { if (e.target === mdl) close(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });

/* ---------- kiosk: reset after 90 s without a touch ---------- */
let idle;
const bump = () => { clearTimeout(idle); idle = setTimeout(() => { close(); q.blur(); reset(); }, 90000); };
if (KIOSK) { ["pointerdown", "keydown", "scroll"].forEach(e => document.addEventListener(e, bump, true)); bump(); }
paint();
/* QR / shared link: ?u=<university>&p=<programme> opens that programme directly */
const qs = new URLSearchParams(location.search), du = qs.get("u");
if (du && U[du]) openUni(du, list(du).find(c => c.id === qs.get("p")));
})();