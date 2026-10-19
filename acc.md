---
layout: splash
permalink: /
title: ""
search: false
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="{{ '/assets/css/booth.css' | relative_url }}">
<script>document.documentElement.classList.add("kiosk");</script>

<main class="stage" data-sheet="peek">
  <aside class="side">
    <header class="brand">
      <h1>Study HPC, AI and data in the UK</h1>
      <p class="lead">Tap a university on the map, or search below.</p>
    </header>
    <div class="search">
      <input id="q" type="search" placeholder="Search programmes, topics or careers" aria-label="Search programmes" enterkeyhint="search" autocomplete="off" autocapitalize="off" spellcheck="false">
    </div>
    <!-- Desktop: a normal sidebar. Phone and iPad portrait: a bottom drawer you can drag. -->
    <section class="drawer" id="drawer" data-state="peek" aria-label="Results">
      <div class="grab" id="grab">
        <span class="pill" aria-hidden="true"></span>
        <div class="bar">
          <div class="status">
            <p id="tally" aria-live="polite"></p>
            <button id="reset" type="button" hidden>Clear</button>
          </div>
          <button class="fbtn" id="fbtn" type="button" aria-expanded="false" aria-controls="filters">Filters<span class="badge" id="fcount" hidden></span></button>
          <button class="lbtn" id="lbtn" type="button" aria-expanded="false" aria-controls="dbody">Show list</button>
        </div>
      </div>
      <div class="dbody" id="dbody">
        <div class="filters" id="filters">
          <p class="flabel">Level</p>
          <div class="chips" id="quals" role="group" aria-label="Qualification"></div>
          <p class="flabel">Subject</p>
          <div class="chips" id="topics" role="group" aria-label="Subject area"></div>
        </div>
        <div class="results" id="results"></div>
      </div>
    </section>
  </aside>

  <section class="mapwrap">
    <div class="map" id="map">
      <img src="https://github.com/mzhc13/uk-universities-map/blob/main/assets/images/map-ucl.png?raw=true" alt="Map of UK universities">
    </div>
  </section>
</main>

<div class="mdl" id="mdl" role="dialog" aria-modal="true" aria-labelledby="m-name" hidden>
  <div class="sheet" id="sheet">
    <header class="m-head" id="m-head">
      <img class="m-logo" id="m-logo" src="" alt="">
      <div class="m-title"><h2 id="m-name"></h2><p id="m-loc"></p></div>
      <button class="m-close" id="m-close" type="button">Close</button>
    </header>
    <div class="m-body">
      <nav class="m-list" id="m-list" aria-label="Programmes"></nav>
      <article class="m-detail" id="m-detail"></article>
    </div>
  </div>
</div>

<script>
window.UNIVERSITIES = {{ site.data.universities | jsonify }};
window.COURSES = {
{% for item in site.data.universities %}{% assign cid = item[0] %}{% assign clist = site.data.courses[cid] | default: site.data[cid] %}"{{ cid }}": {{ clist | jsonify }}{% unless forloop.last %},{% endunless %}
{% endfor %}};
</script>
<script src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js"></script>
<script src="{{ '/assets/js/booth.js' | relative_url }}"></script>