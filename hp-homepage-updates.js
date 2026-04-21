/* ===========================================================================
 * hp-homepage-updates.js        v1.2.0
 * ---------------------------------------------------------------------------
 * Additive patch layered on top of hp-shared-sections.js for the P3 homepage.
 *
 *   1. "In The Press" section — swaps the six text-based logos for real image
 *      logos (abc-news, new-york-times, today-show, adweek-nyc, versus,
 *      webby-awards), overrides the "type" text under specific cards (Ad Week
 *      → "Conference", Webby → "Awards"), gives cards a white background with
 *      tighter padding, enlarges ABC/NYT logos, and lays out the grid 2-wide
 *      on mobile.
 *   2. Section headline swap — replaces "The world is taking notice" with
 *      "Making <span class='accent'>Headlines</span>" so it matches the About
 *      page pattern (Space Grotesk 700, crimson accent on the key word).
 *   3. Quote block — significantly reduces padding on desktop; hidden entirely
 *      on mobile (≤768px).
 *   4. Dashboard Preview visual — hides "· Cohort Performance" in the title
 *      on mobile. In the hero tag, splits "Institutional Intelligence · Last
 *      12 Months" into three pieces so both "Institutional Intelligence" AND
 *      its trailing "·" drop on mobile while "Last 12 Months" stays visible.
 *   5. Hides the gallery headline ".gl-hd" ("Talent is universal. / Our data
 *      proves it. Hundreds of students… millions to go.") on desktop only;
 *      leaves it untouched on mobile.
 *
 * Repo:   tparis7/P3-Homepage-Concept
 * CDN:    https://tparis7.github.io/P3-Homepage-Concept/hp-homepage-updates.js
 * Logos:  https://tparis7.github.io/P3-Homepage-Concept/press-logos/<file>
 * ------------------------------------------------------------------------- */

(function () {
  'use strict';

  var VERSION = '1.2.0';
  var LOGO_BASE = 'https://tparis7.github.io/P3-Homepage-Concept/press-logos/';

  /* Map the existing text-logo class (built by hp-shared-sections.js) →
     image file + alt text + (optional) override of the "type" label shown
     below the logo in the press card. */
  var LOGOS = {
    'p3-pc-logo-abc':    { src: 'abc-news.png',              alt: 'ABC News' },
    'p3-pc-logo-nyt':    { src: 'new-york-times.png',        alt: 'The New York Times' },
    'p3-pc-logo-today':  { src: 'today-show.png',            alt: 'TODAY Show' },
    'p3-pc-logo':        { src: 'adweek-nyc.png',            alt: 'Ad Week NYC',   type: 'Conference' },
    'p3-pc-logo-versus': { src: 'versus.png',                alt: 'VERSUS' },
    /* The 6Degrees card is recycled into a Webby Awards card */
    'p3-pc-logo-sixdeg': { src: 'webby-awards.svg',          alt: 'The Webbys',    type: 'Awards' }
  };

  /* ─────────────────────────────────────────────────────────────────────── */
  /* 1 · Inject CSS                                                         */
  /* ─────────────────────────────────────────────────────────────────────── */
  var STYLE_ID = 'p3-hp-updates-style';
  if (!document.getElementById(STYLE_ID)) {
    var css =
      /* ── press CARD frame: white background, tighter padding ── */
      '.p3-social-proof .p3-press-card {' +
        'background:#ffffff !important;' +
        'padding:14px 12px !important;' +
      '}' +

      /* ── logo slot inside each card — neutralise old text styling, centre img ── */
      '.p3-press-card .p3-pc-logo-img {' +
        'display:flex !important;' +
        'align-items:center !important;' +
        'justify-content:center !important;' +
        'background:transparent !important;' +
        'color:transparent !important;' +
        'font-size:0 !important;' +
        'letter-spacing:0 !important;' +
        'border:0 !important;' +
        'min-height:64px !important;' +
        'padding:2px 6px !important;' +
        'width:100% !important;' +
      '}' +
      '.p3-press-card .p3-pc-logo-img img {' +
        'display:block;' +
        'max-width:170px;' +
        'max-height:58px;' +
        'width:auto;' +
        'height:auto;' +
        'object-fit:contain;' +
        'filter:none;' +
      '}' +
      /* Bigger logos for ABC News and NYT specifically */
      '.p3-press-card .p3-pc-logo-abc.p3-pc-logo-img img,' +
      '.p3-press-card .p3-pc-logo-nyt.p3-pc-logo-img img {' +
        'max-width:210px !important;' +
        'max-height:78px !important;' +
      '}' +

      /* ── 2-wide grid on mobile ── */
      '@media (max-width:768px){' +
        '.p3-press-grid {' +
          'grid-template-columns:1fr 1fr !important;' +
          'gap:12px !important;' +
        '}' +
        '.p3-press-card .p3-pc-logo-img img {max-width:140px;max-height:50px;}' +
        '.p3-press-card .p3-pc-logo-abc.p3-pc-logo-img img,' +
        '.p3-press-card .p3-pc-logo-nyt.p3-pc-logo-img img {' +
          'max-width:160px !important;max-height:62px !important;' +
        '}' +
      '}' +

      /* ── quote block: significantly reduce padding on desktop ── */
      '.p3-social-proof .p3-quote-block {' +
        'padding:14px 24px !important;' +
        'margin-top:12px !important;' +
      '}' +
      '.p3-social-proof .p3-quote-block blockquote,' +
      '.p3-social-proof .p3-quote-block p {' +
        'margin-top:0 !important;' +
        'margin-bottom:6px !important;' +
      '}' +
      '.p3-social-proof .p3-quote-block > :last-child {margin-bottom:0 !important;}' +

      /* ── mobile-only hides (≤768px) ── */
      '@media (max-width:768px){' +
        '.p3-social-proof .p3-quote-block {display:none !important;}' +
        '.p3dpv-title .muted {display:none !important;}' +
        /* Hide the "Institutional Intelligence" phrase AND the middle-dot
           that used to separate it from "Last 12 Months". */
        '.p3dpv-hero-tag-label,' +
        '.p3dpv-hero-tag-midot {display:none !important;}' +
      '}' +

      /* ── desktop-only hide for gallery "Talent is universal…" header ── */
      '@media (min-width:769px){' +
        '.gl-hd {display:none !important;}' +
      '}';

    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = css;
    document.head.appendChild(style);
  }

  /* ─────────────────────────────────────────────────────────────────────── */
  /* 2 · Swap each press-card's text logo with an <img> + override type     */
  /* ─────────────────────────────────────────────────────────────────────── */
  function swapLogos() {
    var cards = document.querySelectorAll('.p3-press-card');
    if (!cards.length) return false;

    var didAny = false;
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      if (card.getAttribute('data-hp-logo') === '1') continue;

      /* Find the inner logo div (classed p3-pc-logo-* or plain p3-pc-logo) */
      var inner = card.querySelector('[class*="p3-pc-logo"]');
      if (!inner) continue;
      var cls = (inner.className || '').trim();
      var entry = LOGOS[cls];
      if (!entry) continue;

      inner.textContent = '';
      inner.classList.add('p3-pc-logo-img');
      var img = document.createElement('img');
      img.src = LOGO_BASE + entry.src;
      img.alt = entry.alt;
      img.loading = 'lazy';
      img.decoding = 'async';
      inner.appendChild(img);

      /* Override the type label below the logo if requested */
      if (entry.type) {
        var typeEl = card.querySelector('.p3-pc-type');
        if (typeEl) typeEl.textContent = entry.type;
      }

      card.setAttribute('data-hp-logo', '1');
      didAny = true;
    }
    return didAny;
  }

  /* ─────────────────────────────────────────────────────────────────────── */
  /* 3 · Replace section headline "The world is taking notice" with         */
  /*      "Making Headlines" (crimson accent on "Headlines")                */
  /* ─────────────────────────────────────────────────────────────────────── */
  function swapHeadline() {
    var h2 = document.querySelector('.p3-social-proof .p3-section-header h2');
    if (!h2 || h2.getAttribute('data-hp-headline') === '1') return false;
    var existing = (h2.textContent || '').trim().toLowerCase();
    /* Only swap if we still see the original text — leave custom edits alone */
    if (existing !== 'the world is taking notice') {
      /* Already custom — mark done so we stop polling */
      h2.setAttribute('data-hp-headline', '1');
      return true;
    }
    h2.textContent = '';
    h2.appendChild(document.createTextNode('Making '));
    var accent = document.createElement('span');
    accent.className = 'accent';
    accent.textContent = 'Headlines';
    h2.appendChild(accent);
    h2.setAttribute('data-hp-headline', '1');
    return true;
  }

  /* ─────────────────────────────────────────────────────────────────────── */
  /* 4 · Split "Institutional Intelligence · Last 12 Months" hero tag       */
  /*      into three pieces so we can hide the label + middle-dot on mobile */
  /* ─────────────────────────────────────────────────────────────────────── */
  function splitHeroTag() {
    var tag = document.querySelector('.p3dpv-hero-tag');
    if (!tag || tag.getAttribute('data-hp-split') === '1') return false;

    /* Find the first meaningful text node inside the tag (skips the .dot span) */
    var textNode = null;
    for (var i = 0; i < tag.childNodes.length; i++) {
      var n = tag.childNodes[i];
      if (n.nodeType === 3 /* TEXT_NODE */ && n.textContent.replace(/\s+/g, ' ').trim().length) {
        textNode = n;
        break;
      }
    }
    if (!textNode) return false;

    var full = textNode.textContent;
    var dotIdx = full.indexOf('·');
    if (dotIdx === -1) return false;

    /* label = "Institutional Intelligence "  (pre-dot, trimmed + trailing space)
       midot = "· "                           (the separator, hidden on mobile)
       when  = "Last 12 Months"               (always visible) */
    var label = full.substring(0, dotIdx).trim();
    var when  = full.substring(dotIdx + 1).replace(/\s+/g, ' ').trim();
    if (!label || !when) return false;

    var labelSpan = document.createElement('span');
    labelSpan.className = 'p3dpv-hero-tag-label';
    labelSpan.textContent = label + ' ';

    var midotSpan = document.createElement('span');
    midotSpan.className = 'p3dpv-hero-tag-midot';
    midotSpan.textContent = '· ';

    var whenSpan = document.createElement('span');
    whenSpan.className = 'p3dpv-hero-tag-when';
    whenSpan.textContent = when;

    textNode.parentNode.insertBefore(document.createTextNode(' '), textNode);
    textNode.parentNode.insertBefore(labelSpan, textNode);
    textNode.parentNode.insertBefore(midotSpan, textNode);
    textNode.parentNode.insertBefore(whenSpan, textNode);
    textNode.parentNode.removeChild(textNode);

    tag.setAttribute('data-hp-split', '1');
    return true;
  }

  /* ─────────────────────────────────────────────────────────────────────── */
  /* Runner — apply all transforms on a poll+observer loop                   */
  /* ─────────────────────────────────────────────────────────────────────── */
  function applyAll() {
    var a = swapLogos();
    var b = swapHeadline();
    var c = splitHeroTag();
    return a || b || c;
  }
  function allDone() {
    var logosOK    = document.querySelectorAll('.p3-press-card[data-hp-logo="1"]').length >= 6;
    var headlineOK = !!document.querySelector('.p3-social-proof .p3-section-header h2[data-hp-headline="1"]');
    var tagOK      = !!document.querySelector('.p3dpv-hero-tag[data-hp-split="1"]');
    return logosOK && headlineOK && tagOK;
  }

  /* hp-shared-sections builds the press grid and dashboard preview post-load,
     so poll until every transform has settled or ~6 s have elapsed. */
  var tries = 0;
  var poll = setInterval(function () {
    applyAll();
    if (allDone() || ++tries > 40) clearInterval(poll);
  }, 150);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyAll);
  } else {
    applyAll();
  }
  window.addEventListener('load', applyAll);

  /* Keep transforms sticky if Webflow ever re-renders either section */
  try {
    var mo = new MutationObserver(function () { applyAll(); });
    mo.observe(document.body, { childList: true, subtree: true });
    /* Stop observing after 15 s — everything we care about has settled */
    setTimeout(function () { try { mo.disconnect(); } catch (e) {} }, 15000);
  } catch (e) { /* ignore */ }

  try {
    console.log('[P3 HP Updates v' + VERSION + '] loaded');
  } catch (e) { /* ignore */ }
})();
