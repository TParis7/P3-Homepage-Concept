(function() {
  'use strict';

  // ========== CSS ==========
  var css = document.createElement('style');
  css.textContent = [
    // CSS variables for shared sections
    ':root{--pp-c:#D93A3A;--pp-wh:#fff;--pp-dk:#1a1a1a;--pp-lt:#999;--pp-n3:#eee;--pp-r:14px;--pp-tr:.3s cubic-bezier(.25,.46,.45,.94);}',

    // Nav style normalization (match partner page exactly)
    '.p3-nav { padding: 16px 40px !important; height: auto !important; }',
    '.p3-nav .p3-nav-logo img { max-height: 36px !important; width: auto !important; object-fit: contain; }',
    '.p3-nav .p3-nav-link { color: rgba(255,255,255,0.85) !important; }',

    // Nav mobile responsive overrides (counteract homepage page scripts that force wrong sizes)
    '@media(max-width: 991px) { .p3-nav { padding: 16px !important; height: 64px !important; } }',
    '@media(max-width: 991px) { .p3-nav .p3-nav-logo img { max-height: 36px !important; height: 36px !important; } }',

    // Nav scroll effect
    '.p3-nav.scrolled { background: rgba(26, 26, 26, 0.95) !important; backdrop-filter: blur(20px) !important; box-shadow: 0 2px 20px rgba(0,0,0,0.15); }',

    // Hero buttons mobile — match FM/PP exactly (14px 32px, 14px font)
    '@media(max-width: 768px) { .p3-btn-primary, .p3-btn-ghost { padding: 14px 32px !important; font-size: 14px !important; } }',

    // Dashboard heading size — match .p3-h2 exactly (42px desktop, 26px mobile)
    '.p3-dash-h2 { font-size: 42px !important; line-height: 1.15 !important; }',
    '@media(max-width: 600px) { .p3-dash-h2 { font-size: 26px !important; } }',

    // Emoji icon centering in Why Now gap cards (flex already, but needs center alignment)
    '.p3-gap-icon { align-items: center !important; justify-content: center !important; text-align: center !important; line-height: 1 !important; }',

    // Mobile padding reductions
    '@media(max-width: 768px) {',
    '  .p3-dash-preview { padding-top: 32px !important; padding-bottom: 32px !important; }',
    '  .p3-platform-section { padding-top: 24px !important; }',
    '}',

    // Footer compact layout on mobile — 2-column grid instead of single-column scroll
    '@media(max-width: 768px) { .p3-footer-grid { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 24px 16px !important; } .p3-footer-brand { grid-column: 1 / -1; } .p3-footer-bottom { flex-wrap: wrap; justify-content: center; text-align: center; } }',

    // Home link hidden on desktop
    '.pp-home-desktop-hide { display: none; }',
    '@media(max-width: 991px) { .pp-home-desktop-hide { display: block; } }',

    // Hamburger menu
    '.pp-mob-menu { display: none; cursor: pointer; padding: 8px; z-index: 100; flex-direction: column; gap: 5px; }',
    '@media(max-width: 991px) { .pp-mob-menu { display: flex; } .p3-nav-links { display: none !important; } .p3-nav-cta { display: none !important; } }',
    '.pp-mob-menu span { display: block; width: 22px; height: 2px; background-color: #fff; border-radius: 2px; transition: all .3s ease; }',
    '.pp-mob-menu.open span:nth-child(1) { transform: rotate(45deg) translate(4px, 6px); }',
    '.pp-mob-menu.open span:nth-child(2) { opacity: 0; }',
    '.pp-mob-menu.open span:nth-child(3) { transform: rotate(-45deg) translate(4px, -6px); }',

    // Mobile overlay
    '.pp-mob-overlay { display: none; position: fixed; inset: 0; z-index: 99; background: rgba(26,26,26,0.98); flex-direction: column; align-items: center; justify-content: center; gap: 24px; }',
    '.pp-mob-overlay.open { display: flex !important; }',
    '.pp-mob-overlay-link { color: #fff; font-size: 1.4rem; font-weight: 600; text-decoration: none; opacity: 0.8; transition: opacity .3s; font-family: "Space Grotesk", sans-serif; }',
    '.pp-mob-overlay-link:hover { opacity: 1; }',
    '.pp-mob-overlay-cta { display: inline-flex; padding: 12px 28px; border-radius: 100px; background: #D93A3A; color: #fff; font-weight: 600; font-size: 1rem; text-decoration: none; margin-top: 12px; transition: opacity .3s; }',
    '.pp-mob-overlay-cta:hover { opacity: 0.9; }',

    // Logo carousel
    '.lc-section{padding:28px 0;background:var(--pp-wh);border-bottom:1px solid var(--pp-n3);overflow:hidden;}',
    '.lc-label{text-align:center;font-size:.7rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--pp-lt);margin-bottom:18px;}',
    '.lc-wrap{position:relative;overflow:hidden;}',
    '.lc-track{display:flex;gap:48px;animation:lc-s 30s linear infinite;width:max-content;align-items:center;}.lc-track:hover{animation-play-state:paused;}',
    '.lc-track img{flex-shrink:0;opacity:.7;filter:grayscale(100%);transition:all var(--pp-tr);}.lc-track img:hover{opacity:1;filter:grayscale(0);}',
    '.lc-fl,.lc-fr{position:absolute;top:0;bottom:0;width:60px;z-index:2;pointer-events:none;}',
    '.lc-fl{left:0;background:linear-gradient(90deg,var(--pp-wh),transparent);}.lc-fr{right:0;background:linear-gradient(-90deg,var(--pp-wh),transparent);}',
    '@keyframes lc-s{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}',

    // Workforce Outcome OS section
    '.os-section{position:relative;padding:64px 40px;background:#fff;overflow:hidden;}',
    '.os-inner{max-width:1100px;margin:0 auto;position:relative;z-index:1;}',
    '.os-header{text-align:center;margin-bottom:32px;}',
    '.os-eyebrow{display:inline-block;font-family:"Space Grotesk",sans-serif;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--pp-c);background:#FCEEEE;padding:7px 16px;border-radius:100px;margin-bottom:14px;}',
    '.os-h2{font-family:"Space Grotesk",sans-serif;font-size:42px;font-weight:700;line-height:1.15;color:#1a1a1a;letter-spacing:-.02em;margin-bottom:10px;}',
    '.os-h2 .accent{color:var(--pp-c);}',
    '.os-sub{font-size:15px;line-height:1.55;color:#6E6A66;max-width:560px;margin:0 auto;}',
    '.os-tabs{display:flex;justify-content:center;gap:8px;margin-bottom:20px;flex-wrap:wrap;}',
    '.os-tab{display:inline-flex;align-items:center;gap:8px;padding:10px 20px;background:#fff;border:1px solid #E6DED4;border-radius:100px;font-family:"Space Grotesk",sans-serif;font-size:14px;font-weight:600;color:#1a1a1a;cursor:pointer;transition:all .3s ease;position:relative;user-select:none;}',
    '.os-tab:hover{border-color:#A8A19A;}',
    '.os-tab .os-tab-dot{display:none;width:8px;height:8px;border-radius:50%;background:var(--os-tab-color);}',
    '.os-tab.active{background:#1a1a1a;border-color:#1a1a1a;color:#fff;box-shadow:0 10px 24px -10px rgba(26,26,26,.5);}',
    '.os-tab[data-layer="students"]{--os-tab-color:#D93A3A;}.os-tab[data-layer="mentors"]{--os-tab-color:#A02030;}.os-tab[data-layer="institutions"]{--os-tab-color:#6B1624;}.os-tab[data-layer="intelligence"]{--os-tab-color:#4A1020;}',
    '.os-panel-wrap{position:relative;border-radius:22px;overflow:hidden;border:1px solid #E6DED4;background:#FAF6F1;}',
    '.os-panel{display:none;position:relative;padding:50px 62px;min-height:0;}',
    '.os-panel.active{display:block;}',
    '.os-panel::before{content:"";position:absolute;inset:0;background-image:var(--os-panel-image);background-size:cover;background-position:center 25%;filter:grayscale(.4) contrast(1.05);}',
    '.os-panel::after{content:"";position:absolute;inset:0;background:radial-gradient(ellipse 70% 80% at 50% 50%,var(--os-panel-opaque) 0%,var(--os-panel-opaque) 28%,var(--os-panel-mid) 60%,var(--os-panel-edge) 100%);pointer-events:none;}',
    '.os-panel[data-layer="students"]{--os-panel-image:url("https://tparis7.github.io/P3-Homepage-Concept/students-bg.jpg");--os-panel-opaque:rgba(252,238,238,.97);--os-panel-mid:rgba(252,238,238,.75);--os-panel-edge:rgba(252,238,238,.45);--os-panel-accent:#D93A3A;--os-panel-accent-tint:#FCEEEE;}',
    '.os-panel[data-layer="mentors"]{--os-panel-image:url("https://tparis7.github.io/P3-Homepage-Concept/mentors-bg.jpg");--os-panel-opaque:rgba(248,235,237,.97);--os-panel-mid:rgba(248,235,237,.75);--os-panel-edge:rgba(248,235,237,.45);--os-panel-accent:#A02030;--os-panel-accent-tint:#F8EBED;}',
    '.os-panel[data-layer="institutions"]{--os-panel-image:url("https://tparis7.github.io/P3-Homepage-Concept/institutions-bg.jpg");--os-panel-opaque:rgba(243,229,232,.97);--os-panel-mid:rgba(243,229,232,.75);--os-panel-edge:rgba(243,229,232,.45);--os-panel-accent:#6B1624;--os-panel-accent-tint:#F3E5E8;}',
    '.os-panel[data-layer="intelligence"]{--os-panel-image:url("https://tparis7.github.io/P3-Homepage-Concept/intelligence-bg.png");--os-panel-opaque:rgba(238,223,226,.97);--os-panel-mid:rgba(238,223,226,.75);--os-panel-edge:rgba(238,223,226,.45);--os-panel-accent:#4A1020;--os-panel-accent-tint:#EEDFE2;}',
    '.os-panel-inner{position:relative;z-index:2;display:grid;grid-template-columns:auto 1fr auto;gap:32px;align-items:start;max-width:880px;margin:0 auto;}',
    '.os-panel-icon{width:76px;height:76px;border-radius:20px;background:#fff;border:1px solid #E6DED4;display:flex;align-items:center;justify-content:center;color:var(--os-panel-accent);box-shadow:0 10px 28px -10px rgba(26,26,26,.15);flex-shrink:0;}',
    '.os-panel-icon svg{width:34px;height:34px;stroke-width:1.8;}',
    '.os-panel-copy{text-align:left;}',
    '.os-panel h3{font-family:"Space Grotesk",sans-serif;font-size:26px;font-weight:700;color:#1a1a1a;letter-spacing:-.02em;line-height:1.1;margin-bottom:6px;}',
    '.os-panel p{font-size:14px;line-height:1.55;color:#6E6A66;max-width:440px;}',
    '.os-panel-features{display:grid;grid-template-columns:1fr 1fr;gap:6px;min-width:260px;}',
    '.os-feature{display:flex;align-items:center;gap:10px;padding:11px 14px;background:rgba(255,255,255,.8);backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,.9);border-radius:10px;font-family:"Space Grotesk",sans-serif;font-size:13.5px;font-weight:600;color:#1a1a1a;white-space:nowrap;}',
    '.os-feature-dot{width:7px;height:7px;border-radius:50%;background:var(--os-panel-accent);flex-shrink:0;}',
    '@media(max-width:768px){.os-section{padding:36px 20px 48px;}.os-header{margin-bottom:20px;}.os-eyebrow{font-size:9px;margin-bottom:8px;}.os-h2{font-size:26px;line-height:1.15;margin-bottom:8px;}.os-sub{font-size:13px;line-height:1.5;}}',
    '@media(max-width:768px){.os-tabs{flex-direction:column;gap:10px;margin-bottom:0;}.os-tab{width:100%;justify-content:flex-start;padding:14px 16px;border-radius:14px;font-size:14.5px;position:relative;background:#fff;border:1px solid #E6DED4;color:#1a1a1a;box-shadow:none;}.os-tab .os-tab-dot{display:block;margin-left:auto;}.os-tab.active{background:#fff;border-color:var(--os-tab-color);color:#1a1a1a;box-shadow:0 8px 20px -10px rgba(74,16,32,.2);}.os-tab.active::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--os-tab-color);border-radius:14px 0 0 14px;}}',
    '@media(max-width:768px){.os-panel-wrap{margin-top:10px;border-radius:16px;}.os-panel{padding:31px 25px;min-height:0;}.os-panel-inner{grid-template-columns:1fr;gap:14px;text-align:center;}.os-panel-icon{width:56px;height:56px;border-radius:16px;margin:0 auto;}.os-panel-icon svg{width:26px;height:26px;}.os-panel-copy{text-align:center;}.os-panel h3{font-size:20px;}.os-panel p{font-size:13px;max-width:360px;margin:0 auto;}.os-panel-features{grid-template-columns:1fr 1fr;min-width:0;gap:6px;max-width:320px;margin:4px auto 0;}.os-feature{padding:9px 12px;font-size:12.5px;}}',
    '@media(max-width:380px){.os-h2{font-size:22px;}.os-panel h3{font-size:18px;}}',

    // Community gallery
    '.gl{padding:40px 0;background:var(--pp-dk);overflow:hidden;}',
    '.gl .ctn{max-width:1200px;margin:0 auto;padding:0 28px;}',
    '.gl-hd{text-align:center;margin-bottom:24px;}.gl-hd h2{color:var(--pp-wh);margin-bottom:6px;font-size:clamp(1.3rem,2.5vw,1.8rem);font-family:"Space Grotesk",sans-serif;font-weight:700;line-height:1.15;letter-spacing:-.02em;}.gl-hd p{color:rgba(255,255,255,.45);font-size:.85rem;}',
    '.gl-wrap{position:relative;overflow:hidden;}.gl-track{display:flex;gap:12px;animation:gl-s 40s linear infinite;width:max-content;}.gl-track:hover{animation-play-state:paused;}',
    '.gl-item{width:280px;height:185px;border-radius:var(--pp-r);overflow:hidden;flex-shrink:0;background:rgba(255,255,255,.05);}.gl-item img{width:100%;height:100%;object-fit:cover;}',
    '.gl-fl,.gl-fr{position:absolute;top:0;bottom:0;width:50px;z-index:2;pointer-events:none;}',
    '.gl-fl{left:0;background:linear-gradient(90deg,var(--pp-dk),transparent);}.gl-fr{right:0;background:linear-gradient(-90deg,var(--pp-dk),transparent);}',
    '@keyframes gl-s{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}'
  ].join('\n');
  document.head.appendChild(css);

  // Load Space Grotesk for headings
  if (!document.querySelector('link[href*="Space+Grotesk"]')) {
    var font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap';
    document.head.appendChild(font);
  }

  // Load Inter for nav links (matches partner page font loading)
  if (!document.querySelector('link[href*="family=Inter"]')) {
    var interFont = document.createElement('link');
    interFont.rel = 'stylesheet';
    interFont.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap';
    document.head.appendChild(interFont);
  }

  // ========== NAV UPDATES ==========

  // 1. Remove duplicate nav (keep first)
  var navs = document.querySelectorAll('.p3-nav');
  if (navs.length > 1) {
    for (var i = 1; i < navs.length; i++) {
      navs[i].parentNode.removeChild(navs[i]);
    }
  }

  var nav = document.querySelector('.p3-nav');
  if (nav) {
    // Give nav the id for scroll effect
    if (!nav.id) nav.id = 'p3nav';

    // 2. Add "Home" link (hidden on desktop) as first item in .p3-nav-links
    var linksDiv = nav.querySelector('.p3-nav-links');
    if (linksDiv && !linksDiv.querySelector('.pp-home-desktop-hide')) {
      var homeLink = document.createElement('a');
      homeLink.className = 'pp-home-desktop-hide';
      homeLink.href = '/';
      homeLink.textContent = 'Home';
      linksDiv.insertBefore(homeLink, linksDiv.firstChild);
    }

    // 2b. Fix "For Institutions" link to point to new partner page
    // Must run after Webflow JS initializes navbar (which resets hrefs),
    // so we use both window.load and a fallback setTimeout
    function fixInstitutionsLink() {
      var allNavLinks = document.querySelectorAll('.p3-nav .p3-nav-link');
      allNavLinks.forEach(function(link) {
        if (link.textContent.trim() === 'For Institutions' && link.getAttribute('href') !== '/partner') {
          link.href = '/partner';
        }
      });
    }
    window.addEventListener('load', fixInstitutionsLink);
    setTimeout(fixInstitutionsLink, 2000);
    setTimeout(fixInstitutionsLink, 5000);

    // 2c. Move CTA out of .p3-nav-links so it's a sibling (matches partner page structure)
    var ctaInLinks = linksDiv ? linksDiv.querySelector('.p3-nav-cta') : null;
    if (ctaInLinks) {
      nav.insertBefore(ctaInLinks, linksDiv.nextSibling);
    }

    // 3. Add hamburger menu (if not already present)
    if (!nav.querySelector('.pp-mob-menu')) {
      var hamb = document.createElement('div');
      hamb.className = 'pp-mob-menu';
      hamb.innerHTML = '<span></span><span></span><span></span>';
      nav.appendChild(hamb);
    }

    // 4. Nav scroll effect
    window.addEventListener('scroll', function() {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // 5. Add mobile overlay (if not already present)
  if (!document.getElementById('pp-mob-overlay')) {
    var overlay = document.createElement('div');
    overlay.id = 'pp-mob-overlay';
    overlay.className = 'pp-mob-overlay';
    overlay.innerHTML = '<a class="pp-mob-overlay-link" href="/">Home</a>' +
      '<a class="pp-mob-overlay-link" href="/for-students">For Students</a>' +
      '<a class="pp-mob-overlay-link" href="/partner">For Institutions</a>' +
      '<a class="pp-mob-overlay-link" href="/for-mentors">For Mentors</a>' +
      '<a class="pp-mob-overlay-link" href="/about/about">About</a>' +
      '<a class="pp-mob-overlay-cta" href="/download">Get the App</a>';
    document.body.appendChild(overlay);
  }

  // 6. Wire hamburger toggle
  function wireHamburger() {
    var mob = document.querySelector('.pp-mob-menu');
    var ov = document.getElementById('pp-mob-overlay');
    if (!mob || !ov || mob.dataset.wired) return;
    mob.dataset.wired = '1';
    mob.addEventListener('click', function() {
      mob.classList.toggle('open');
      ov.classList.toggle('open');
      document.body.style.overflow = ov.classList.contains('open') ? 'hidden' : '';
    });
    ov.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        mob.classList.remove('open');
        ov.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
  wireHamburger();

  // ========== LOGO CAROUSEL ==========
  var partnerSection = document.querySelector('.p3-partner-logos');
  if (partnerSection) {
    var logoDiv = document.createElement('div');
    logoDiv.innerHTML = `
<!-- LOGO CAROUSEL -->
<section class="lc-section">
<div class="lc-label">Trusted by leading institutions</div>
<div class="lc-wrap"><div class="lc-fl"></div><div class="lc-fr"></div><div class="lc-track"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/csu.png" alt="Chicago State University" style="height:32px;width:auto;" loading="lazy" class="ls-sm"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/xavier.png" alt="Xavier University" style="height:32px;width:auto;" loading="lazy" class="ls-sm"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/langston.png" alt="Langston University" style="height:36px;width:auto;" loading="lazy"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/nyu.png" alt="New York University" style="height:32px;width:auto;" loading="lazy" class="ls-sm"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/google.png" alt="Google" style="height:32px;width:auto;" loading="lazy" class="ls-sm"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/lsu.png" alt="Louisiana State University" style="height:32px;width:auto;" loading="lazy" class="ls-sm"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/mbk.png" alt="My Brother's Keeper" style="height:36px;width:auto;" loading="lazy"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/project-hood.png" alt="Project H.O.O.D." style="height:36px;width:auto;" loading="lazy"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/cps.png" alt="Chicago Public Schools" style="height:36px;width:auto;" loading="lazy"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/100bm.png" alt="100 Black Men" style="height:36px;width:auto;" loading="lazy"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/gilead.png" alt="Gilead Sciences" style="height:36px;width:auto;" loading="lazy"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/lurie.png" alt="Lurie Children's Hospital" style="height:36px;width:auto;" loading="lazy"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/csu.png" alt="Chicago State University" style="height:32px;width:auto;" loading="lazy" class="ls-sm"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/xavier.png" alt="Xavier University" style="height:32px;width:auto;" loading="lazy" class="ls-sm"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/langston.png" alt="Langston University" style="height:36px;width:auto;" loading="lazy"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/nyu.png" alt="New York University" style="height:32px;width:auto;" loading="lazy" class="ls-sm"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/google.png" alt="Google" style="height:32px;width:auto;" loading="lazy" class="ls-sm"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/lsu.png" alt="Louisiana State University" style="height:32px;width:auto;" loading="lazy" class="ls-sm"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/mbk.png" alt="My Brother's Keeper" style="height:36px;width:auto;" loading="lazy"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/project-hood.png" alt="Project H.O.O.D." style="height:36px;width:auto;" loading="lazy"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/cps.png" alt="Chicago Public Schools" style="height:36px;width:auto;" loading="lazy"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/100bm.png" alt="100 Black Men" style="height:36px;width:auto;" loading="lazy"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/gilead.png" alt="Gilead Sciences" style="height:36px;width:auto;" loading="lazy"><img src="https://tparis7.github.io/Mentor-Page-Redesign/logos/lurie.png" alt="Lurie Children's Hospital" style="height:36px;width:auto;" loading="lazy"></div></div>
</section>
`;
    var logoSection = logoDiv.querySelector('.lc-section');
    if (logoSection) {
      partnerSection.parentNode.replaceChild(logoSection, partnerSection);
    }
  }

  // ========== WORKFORCE OUTCOME OS REPLACEMENT ==========
  var sections = document.querySelectorAll('section');
  var osSection = null;
  for (var i = 0; i < sections.length; i++) {
    var h = sections[i].querySelector('h2');
    if (h && h.textContent.indexOf('Workforce Outcome OS') !== -1) {
      osSection = sections[i];
      break;
    }
  }
  if (osSection) {
    // Build the new section
    var newOS = document.createElement('section');
    newOS.className = 'os-section';
    newOS.innerHTML = '<div class="os-inner">' +
      '<div class="os-header">' +
        '<div class="os-eyebrow">The Platform</div>' +
        '<h2 class="os-h2">A Workforce Outcome <span class="accent">OS</span></h2>' +
        '<p class="os-sub">P3 is more than a mentorship app — it\'s an operating system that transforms student journeys into measurable workforce outcomes.</p>' +
      '</div>' +
      '<div class="os-tabs" role="tablist">' +
        '<button class="os-tab active" data-layer="students"><span>Students</span><span class="os-tab-dot"></span></button>' +
        '<button class="os-tab" data-layer="mentors"><span>Mentors</span><span class="os-tab-dot"></span></button>' +
        '<button class="os-tab" data-layer="institutions"><span>Institutions</span><span class="os-tab-dot"></span></button>' +
        '<button class="os-tab" data-layer="intelligence"><span>Intelligence</span><span class="os-tab-dot"></span></button>' +
      '</div>' +
      '<div class="os-panel-wrap">' +
        // Students
        '<div class="os-panel active" data-layer="students"><div class="os-panel-inner">' +
          '<div class="os-panel-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></div>' +
          '<div class="os-panel-copy"><h3>Students</h3><p>Free mobile app connecting students to mentors, scholarships, and career guidance.</p></div>' +
          '<div class="os-panel-features"><div class="os-feature"><span class="os-feature-dot"></span>AI Smart Match</div><div class="os-feature"><span class="os-feature-dot"></span>Monthly Scholarships</div><div class="os-feature"><span class="os-feature-dot"></span>Milestones</div><div class="os-feature"><span class="os-feature-dot"></span>Career Opps</div></div>' +
        '</div></div>' +
        // Mentors
        '<div class="os-panel" data-layer="mentors"><div class="os-panel-inner">' +
          '<div class="os-panel-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>' +
          '<div class="os-panel-copy"><h3>Mentors</h3><p>A portal for professionals to share knowledge and guide the next generation — on your own time.</p></div>' +
          '<div class="os-panel-features"><div class="os-feature"><span class="os-feature-dot"></span>Mentor Portal</div><div class="os-feature"><span class="os-feature-dot"></span>Flexible Mentorship</div><div class="os-feature"><span class="os-feature-dot"></span>Q&amp;A Guidance</div><div class="os-feature"><span class="os-feature-dot"></span>Milestone Tracking</div></div>' +
        '</div></div>' +
        // Institutions
        '<div class="os-panel" data-layer="institutions"><div class="os-panel-inner">' +
          '<div class="os-panel-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9h.01M9 12h.01M9 15h.01M9 18h.01"/></svg></div>' +
          '<div class="os-panel-copy"><h3>Institutions</h3><p>Analytics dashboard turning engagement data into actionable insights.</p></div>' +
          '<div class="os-panel-features"><div class="os-feature"><span class="os-feature-dot"></span>Impact Reports</div><div class="os-feature"><span class="os-feature-dot"></span>Outcome Tracking</div><div class="os-feature"><span class="os-feature-dot"></span>Equity Benchmarks</div><div class="os-feature"><span class="os-feature-dot"></span>Custom Dashboards</div></div>' +
        '</div></div>' +
        // Intelligence
        '<div class="os-panel" data-layer="intelligence"><div class="os-panel-inner">' +
          '<div class="os-panel-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/></svg></div>' +
          '<div class="os-panel-copy"><h3>Intelligence</h3><p>Data layer that ties everything together for workforce-ready outcomes.</p></div>' +
          '<div class="os-panel-features"><div class="os-feature"><span class="os-feature-dot"></span>AI Matching</div><div class="os-feature"><span class="os-feature-dot"></span>Longitudinal Data</div><div class="os-feature"><span class="os-feature-dot"></span>Industry Benchmarks</div><div class="os-feature"><span class="os-feature-dot"></span>Predictive Analytics</div></div>' +
        '</div></div>' +
      '</div>' +
    '</div>';

    // Replace old section with new one
    osSection.parentNode.replaceChild(newOS, osSection);

    // Wire tab switching
    var osTabs = newOS.querySelectorAll('.os-tab');
    var osPanels = newOS.querySelectorAll('.os-panel');
    osTabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        var layer = tab.dataset.layer;
        osTabs.forEach(function(t) { t.classList.toggle('active', t.dataset.layer === layer); });
        osPanels.forEach(function(p) { p.classList.toggle('active', p.dataset.layer === layer); });
      });
    });

    // Update osSection reference for gallery insertion below
    osSection = newOS;
  }

  // ========== COMMUNITY GALLERY ==========
  if (osSection) {
    var galDiv = document.createElement('div');
    galDiv.innerHTML = `
<!-- GALLERY -->
<section class="gl">
<div class="ctn"><div class="gl-hd fade-in"><h2>The P3 community in action</h2><p>Mentorship moments, campus events, and career breakthroughs</p></div></div>
<div class="gl-wrap"><div class="gl-fl"></div><div class="gl-fr"></div><div class="gl-track"><div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1VEBoKGQSCuMfu3xja6eqq--nNyesAtbH&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1xLZvOI4DTmehebDOoxhg6go144DQRAq6&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1-PfGnpKw5O4oP7R82z0LZeIwqPEN5RVS&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1GjI1ezcUWIvsArSwuKiAQJKhKnJezqlb&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1qlunFiyvQZ0Bm9W7cf72HobYxvcdn2Iv&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1NwPpiTolw-yWfSlpJSgF27vjCF38zFqJ&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1fvZGnClfRDra7-e_OE8ZL3RH6vn8m-NY&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1KTyzk9hqvayhhbgAHISIB5UrxySmNQ3W&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1p_JXeXs3FgEp7EtBK39gDu95R8IlQY_q&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1JQpeZKiRHm8YOVS5BBOx2cvX0eK_6IcG&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1pzIHKXrF4QsXxuwaml4WIbopI0LHCOLF&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1_bkjZcAAEmeQ36acIE7ZR4rhYyGgHK8u&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1X8mHOZGo5yeZlh0RSiim_sOITnbGDyrO&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=10RpJT0-T1eSPTar7HODCk2wAPSOf_rKf&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1UDWRuNdQsynpqRV7YE-0RLIZ28V9pA7A&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1VEBoKGQSCuMfu3xja6eqq--nNyesAtbH&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1xLZvOI4DTmehebDOoxhg6go144DQRAq6&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1-PfGnpKw5O4oP7R82z0LZeIwqPEN5RVS&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1GjI1ezcUWIvsArSwuKiAQJKhKnJezqlb&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1qlunFiyvQZ0Bm9W7cf72HobYxvcdn2Iv&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1NwPpiTolw-yWfSlpJSgF27vjCF38zFqJ&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1fvZGnClfRDra7-e_OE8ZL3RH6vn8m-NY&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1KTyzk9hqvayhhbgAHISIB5UrxySmNQ3W&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1p_JXeXs3FgEp7EtBK39gDu95R8IlQY_q&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1JQpeZKiRHm8YOVS5BBOx2cvX0eK_6IcG&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1pzIHKXrF4QsXxuwaml4WIbopI0LHCOLF&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1_bkjZcAAEmeQ36acIE7ZR4rhYyGgHK8u&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1X8mHOZGo5yeZlh0RSiim_sOITnbGDyrO&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=10RpJT0-T1eSPTar7HODCk2wAPSOf_rKf&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1UDWRuNdQsynpqRV7YE-0RLIZ28V9pA7A&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
</div></div>
</section>
`;
    var galSection = galDiv.querySelector('.gl');
    if (galSection) {
      osSection.parentNode.insertBefore(galSection, osSection.nextSibling);
    }
  }

  // ========== BUTTON FIXES ==========
  // Dashboard Preview: "Request a Demo →" → "Learn More" linking to /partner
  var dashPreview = document.querySelector('.p3-dash-preview');
  if (dashPreview) {
    var dashBtn = dashPreview.querySelector('a.p3-btn-light');
    if (dashBtn && dashBtn.textContent.trim().includes('Request a Demo')) {
      dashBtn.textContent = 'Learn More →';
      dashBtn.href = '/partner';
    }
  }

  // Dual CTA: "Request a Demo →" → "Contact Us" linking to partner page contact section
  var dualCta = document.querySelector('.p3-dual-cta');
  if (dualCta) {
    var ctaBtns = dualCta.querySelectorAll('a');
    ctaBtns.forEach(function(btn) {
      if (btn.textContent.trim().includes('Request a Demo')) {
        btn.textContent = 'Contact Us →';
        btn.href = '/partner#contact';
      }
    });
  }

  // ========== REMOVE ROI CALCULATOR FROM HOMEPAGE ==========
  var roiCalc = document.querySelector('.p3-roi-calc');
  if (roiCalc) {
    roiCalc.parentNode.removeChild(roiCalc);
  }

  // ========== CLEANUP ==========
  // Remove empty section at body level (index ~10, no class)
  var bodySections = document.body.querySelectorAll(':scope > section');
  bodySections.forEach(function(s) {
    if (!s.className && !s.id && s.textContent.trim() === '') {
      s.parentNode.removeChild(s);
    }
  });

  // ========== MOBILE CENTERING (≤768px) ==========
  // Tag the key sections with marker classes so CSS can center them on mobile only.

  // Tag "The Platform" section so mobile padding CSS can target it
  var platformTags = document.querySelectorAll('.p3-section-tag');
  platformTags.forEach(function(t) {
    if ((t.textContent || '').trim() === 'The Platform') {
      var sec = t.closest('section');
      if (sec) sec.classList.add('p3-platform-section');
    }
  });

  // Dashboard Preview section — center the header text + Learn More button on mobile
  var dp = document.querySelector('.p3-dash-preview');
  if (dp) dp.classList.add('pp-mobile-center');

  // Dual CTA (Ready to transform... Get Started) — center header, sub, button on mobile
  var dc = document.querySelector('.p3-dual-cta');
  if (dc) dc.classList.add('pp-mobile-center');

  // Inject mobile centering CSS (target real Webflow class names)
  var centerCss = document.createElement('style');
  centerCss.textContent =
    '@media(max-width:768px){' +
      // Dashboard Preview + Dual CTA (Ready to transform...) — center everything
      '.pp-mobile-center, .pp-mobile-center *{text-align:center!important;}' +
      '.pp-mobile-center a, .pp-mobile-center .p3-btn-primary, .pp-mobile-center .p3-btn-light, .pp-mobile-center .p3-btn-ghost{margin-left:auto!important;margin-right:auto!important;}' +
      // Why Now cards — center content; icon + H3 on same row via inline-flex
      '.p3-gap-card{text-align:center!important;}' +
      '.p3-gap-card .p3-gap-icon{display:inline-flex!important;align-items:center!important;justify-content:center!important;vertical-align:middle!important;margin:0 8px 0 0!important;line-height:1!important;text-align:center!important;}' +
      '.p3-gap-card .p3-h3{display:inline-block!important;vertical-align:middle!important;margin:0!important;}' +
      '.p3-gap-card .p3-body-text{display:block!important;margin-top:12px!important;text-align:center!important;}' +
    '}';
  document.head.appendChild(centerCss);

})();
