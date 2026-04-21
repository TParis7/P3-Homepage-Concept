/* ===========================================================================
 * hp-homepage-updates.js
 * ---------------------------------------------------------------------------
 * Additive patch layered on top of hp-shared-sections.js for the P3 homepage.
 *
 *   1. Swaps the six text-based "In The Press" logos for real image logos
 *      (abc-news, new-york-times, today-show, adweek-nyc, versus, sixdegrees).
 *   2. Significantly reduces padding on the quote block, and hides the
 *      whole quote block on mobile (≤768px).
 *   3. Dashboard Preview visual: hides "· Cohort Performance" in the title
 *      on mobile. In the hero tag, splits "Institutional Intelligence · Last
 *      12 Months" into two spans so the "Institutional Intelligence" phrase
 *      drops on mobile while "· Last 12 Months" stays visible.
 *   4. Hides the gallery headline ".gl-hd" ("Talent is universal. / Our data
 *      proves it. Hundreds of students… millions to go.") on desktop only;
 *      leaves it untouched on mobile.
 *
 * Repo:   tparis7/P3-Homepage-Concept
 * CDN:    https://tparis7.github.io/P3-Homepage-Concept/hp-homepage-updates.js
 * Logos:  https://tparis7.github.io/P3-Homepage-Concept/press-logos/<file>.png
 * ------------------------------------------------------------------------- */

(function () {
  'use strict';

  var VERSION = '1.1.0';
  var LOGO_BASE = 'https://tparis7.github.io/P3-Homepage-Concept/press-logos/';

  /* Map the existing text-logo class (built by hp-shared-sections.js) → image file + alt text */
  var LOGOS = {
    'p3-pc-logo-abc':    { src: 'abc-news.png',       alt: 'ABC News' },
    'p3-pc-logo-nyt':    { src: 'new-york-times.png', alt: 'The New York Times' },
    'p3-pc-logo-today':  { src: 'today-show.png',     alt: 'TODAY Show' },
    'p3-pc-logo':        { src: 'adweek-nyc.png',     alt: 'Ad Week NYC' },
    'p3-pc-logo-versus': { src: 'versus.png',         alt: 'VERSUS' },
    'p3-pc-logo-sixdeg': { src: 'sixdegrees.png',     alt: '6Degrees.org' }
  };

  /* ─────────────────────────────────────────────────────────────────────── */
  /* 1 · Inject CSS                                                         */
  /* ─────────────────────────────────────────────────────────────────────── */
  var STYLE_ID = 'p3-hp-updates-style';
  if (!document.getElementById(STYLE_ID)) {
    var css =
      /* ── press logos: neutralise the old text-logo styling + frame images ── */
      '.p3-press-card .p3-pc-logo-img {' +
        'display:flex !important;' +
        'align-items:center !important;' +
        'justify-content:center !important;' +
        'background:transparent !important;' +
        'color:transparent !important;' +
        'font-size:0 !important;' +
        'letter-spacing:0 !important;' +
        'border:0 !important;' +
        'min-height:72px !important;' +
        'padding:8px 12px !important;' +
        'width:100% !important;' +
      '}' +
      '.p3-press-card .p3-pc-logo-img img {' +
        'display:block;' +
        'max-width:170px;' +
        'max-height:56px;' +
        'width:auto;' +
        'height:auto;' +
        'object-fit:contain;' +
        'filter:none;' +
      '}' +
      '@media (max-width:768px){' +
        '.p3-press-card .p3-pc-logo-img img {max-width:140px;max-height:48px;}' +
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
        /* Hide only the "Institutional Intelligence" phrase; keep "· Last 12 Months" */
        '.p3dpv-hero-tag-label {display:none !important;}' +
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
  /* 2 · Swap each press-card's text logo with an <img>                     */
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
      card.setAttribute('data-hp-logo', '1');
      didAny = true;
    }
    return didAny;
  }

  /* hp-shared-sections builds the press grid post-load, so poll until we
     either swap successfully or give up after ~6 s. */
  var tries = 0;
  var poll = setInterval(function () {
    var ok = swapLogos();
    if (ok || ++tries > 40) clearInterval(poll);
  }, 150);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', swapLogos);
  } else {
    swapLogos();
  }
  window.addEventListener('load', swapLogos);

  /* Keep our swap sticky if the press grid ever gets re-rendered by Webflow */
  try {
    var mo = new MutationObserver(function () { swapLogos(); });
    mo.observe(document.body, { childList: true, subtree: true });
    /* Stop observing after 15 s — everything we care about has settled */
    setTimeout(function () { try { mo.disconnect(); } catch (e) {} }, 15000);
  } catch (e) { /* ignore */ }

  try {
    console.log('[P3 HP Updates v' + VERSION + '] loaded');
  } catch (e) { /* ignore */ }
})();
