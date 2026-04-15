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
    // v1.2.2 — restyled to match FS "Join +800 Students Nationwide" section exactly (white bg, FS images, section label, +800 accent)
    galDiv.innerHTML = `
<!-- GALLERY -->
<section class="gl">
<div class="ctn"><div class="gl-hd fade-in"><h2>Talent is universal. <em>Our data proves it.</em></h2><p>Hundreds of students&hellip; millions to go.</p></div></div>
<div class="gl-wrap"><div class="gl-fl"></div><div class="gl-fr"></div><div class="gl-track">
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/224A1273_Original.jpg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/Copy%20of%20Copy%20of%20P3_Gala2025_0193.jpg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/_P3_4718.jpg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/P3_Gala2025_0425.jpg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/IMG_7919.jpg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/Copy%20of%20Versus_P3_20260910-IMG9096_MollJeanNye.jpg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/IMG_6982.jpg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/Copy%20of%20P3_Gala2025_0065.jpg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/Doctors%20Park.jpg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/group.jpeg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/Copy%20of%20_P3_4641.jpg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/Copy%20of%20Versus_P3_20260910-IMG9479_MollJeanNye.jpg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/224A1273_Original.jpg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/Copy%20of%20Copy%20of%20P3_Gala2025_0193.jpg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/_P3_4718.jpg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/P3_Gala2025_0425.jpg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/IMG_7919.jpg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/Copy%20of%20Versus_P3_20260910-IMG9096_MollJeanNye.jpg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/IMG_6982.jpg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/Copy%20of%20P3_Gala2025_0065.jpg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/Doctors%20Park.jpg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/group.jpeg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/Copy%20of%20_P3_4641.jpg" alt="P3 Community" loading="lazy"></div>
<div class="gl-item"><img src="https://tparis7.github.io/Mentor-Page-Redesign/Copy%20of%20Versus_P3_20260910-IMG9479_MollJeanNye.jpg" alt="P3 Community" loading="lazy"></div>
</div></div>
</section>
`;
    // OLD DRIVE-BASED GALLERY (pre-v1.2.2) — kept inert below for rollback reference
    var _legacyGallery = `<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=1VEBoKGQSCuMfu3xja6eqq--nNyesAtbH&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
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

  // Dashboard Preview section — skip mobile centering (rebuilt section below handles its own layout)
  // (removed .pp-mobile-center; new p3dp section is responsive-aware)

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

  // ═══════════════════════════════════════════════════════════════════════
  // v1.2.0 ADDITIONS (Apr 15, 2026)
  //   A) Eyebrow harmonization — every .p3-section-tag → pill style
  //   B) The Platform desktop padding reduction
  //   C) Font harmonization — lede paragraphs + card body copy
  //   D) Dashboard Preview section — full rebuild from mockup
  // ═══════════════════════════════════════════════════════════════════════

  var v12css = document.createElement('style');
  v12css.textContent = [

    // ── A) UNIVERSAL EYEBROW PILL ──
    // Base pill: applies to every .p3-section-tag on the page
    // Uses inline-flex + max-content to prevent Webflow's block-level stretch on desktop
    '.p3-section-tag, .p3-section-tag *{',
    '  font-family:"Inter",system-ui,sans-serif !important;',
    '  font-size:12px !important;',
    '  font-weight:500 !important;',
    '  letter-spacing:1px !important;',
    '  text-transform:uppercase !important;',
    '  line-height:1.4 !important;',
    '}',
    '.p3-section-tag{',
    '  display:inline-flex !important;',
    '  align-items:center !important;',
    '  padding:6px 16px !important;',
    '  border-radius:50px !important;',
    '  margin-bottom:16px !important;',
    '  width:max-content !important;',
    '  max-width:max-content !important;',
    '  min-width:0 !important;',
    '  border:none !important;',
    '  box-sizing:border-box !important;',
    '  height:auto !important;',
    '}',
    // If parent container is text-align:center, keep pill centered instead of flush left
    '.p3-section-tag{margin-left:0 !important;margin-right:0 !important;}',
    // Light variant — for sections with light backgrounds (Why Now, Platform rebuilt, Outcomes, Pipeline, ROI, Press, For Students CTA)
    '.p3-section-tag.p3tag-light{',
    '  background:rgba(217,58,58,0.10) !important;',
    '  color:#B52F2F !important;',
    '}',
    // Maroon variant — for sections with dark/maroon backgrounds (Dashboard Preview, Dual CTA, Gallery)
    '.p3-section-tag.p3tag-maroon{',
    '  background:rgba(255,255,255,0.10) !important;',
    '  color:#ffffff !important;',
    '}',
    // Also harmonize the Workforce OS eyebrow we inject (.os-eyebrow) to match light variant look
    '.os-eyebrow{',
    '  font-family:"Inter",system-ui,sans-serif !important;',
    '  font-size:12px !important;',
    '  letter-spacing:1px !important;',
    '  background:rgba(217,58,58,0.10) !important;',
    '  color:#B52F2F !important;',
    '  padding:6px 16px !important;',
    '  border-radius:50px !important;',
    '  font-weight:600 !important;',
    '  margin-bottom:16px !important;',
    '}',

    // ── B) PLATFORM SECTION — desktop padding reduction ──
    '@media(min-width:769px){',
    '  .os-section{padding-top:36px !important;padding-bottom:36px !important;}',
    '  .p3-platform-section{padding-top:36px !important;padding-bottom:36px !important;}',
    '}',

    // ── C) FONT HARMONIZATION ──
    // Normalize lede/subhead paragraphs under H2s site-wide on homepage
    '.p3-dash-preview .p3-lede, .p3-dash-preview .p3-sub, .p3-dash-preview p.p3-body-text:first-of-type,',
    '.p3-why-now .p3-sub, .p3-why-now p.p3-body-text:first-of-type,',
    '.p3-press .p3-sub, .p3-press p.p3-body-text:first-of-type,',
    '.p3-dual-cta .p3-sub, .p3-dual-cta p.p3-body-text:first-of-type,',
    '.os-sub{',
    '  font-size:15px !important;',
    '  line-height:1.65 !important;',
    '  font-family:"Inter",system-ui,sans-serif !important;',
    '}',
    // Normalize body copy inside feature/gap/outcome cards
    '.p3-gap-card .p3-body-text, .p3-gap-card p,',
    '.p3-outcome-card .p3-body-text, .p3-outcome-card p,',
    '.p3-cta-card .p3-body-text, .p3-cta-card p{',
    '  font-size:14px !important;',
    '  line-height:1.55 !important;',
    '  font-family:"Inter",system-ui,sans-serif !important;',
    '}',
    // Card titles — subtle harmonization (don\'t break existing scale)
    '.p3-gap-card .p3-h3, .p3-outcome-card .p3-h3, .p3-cta-card .p3-h3{',
    '  font-size:18px !important;',
    '  line-height:1.25 !important;',
    '  font-weight:700 !important;',
    '}',
    '@media(max-width:600px){',
    '  .p3-gap-card .p3-body-text, .p3-outcome-card .p3-body-text, .p3-cta-card .p3-body-text{font-size:13.5px !important;}',
    '}',

    // ── D) DASHBOARD PREVIEW (rebuilt) ──
    '.p3-dash-preview.p3dp-rebuilt{padding:0 !important;}',
    '.p3dp{padding:56px 48px 52px;background:#4A1020;color:#fff;font-family:"Inter",system-ui,sans-serif;}',
    '.p3dp-inner{display:grid;grid-template-columns:1fr 1.25fr;gap:44px;align-items:stretch;max-width:1160px;margin:0 auto;}',
    '.p3dp h2{font-family:"Space Grotesk",sans-serif;font-size:clamp(26px,3.3vw,38px);font-weight:700;line-height:1.15;letter-spacing:-0.02em;margin-bottom:12px;color:#fff;}',
    '.p3dp h2 .accent{color:#D93A3A;}',
    '.p3dp .p3dp-lede{font-size:15px;color:rgba(255,255,255,0.7);line-height:1.65;margin-bottom:22px;max-width:520px;}',
    '.p3dp-left{display:flex;flex-direction:column;}',
    '.p3dp-cards{display:flex;flex-direction:column;gap:12px;margin-bottom:22px;}',
    '.p3dp-card{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:14px 18px;display:flex;gap:14px;align-items:flex-start;transition:background .3s,border-color .3s;}',
    '.p3dp-card:hover{background:rgba(255,255,255,0.08);border-color:rgba(255,138,138,0.35);}',
    '.p3dp-icon{width:36px;height:36px;border-radius:9px;flex-shrink:0;display:flex;align-items:center;justify-content:center;}',
    '.p3dp-icon.red{background:rgba(217,58,58,0.2);} .p3dp-icon.blue{background:rgba(59,130,246,0.2);} .p3dp-icon.green{background:rgba(34,197,94,0.2);}',
    '.p3dp-icon svg{width:18px;height:18px;}',
    '.p3dp-card h4{font-family:"Inter",sans-serif;font-size:14.5px;font-weight:700;color:#fff;margin-bottom:3px;}',
    '.p3dp-card p{font-size:12.5px;color:rgba(255,255,255,0.65);line-height:1.5;}',
    '.p3dp-btn{background:#fff;color:#4A1020;padding:12px 26px;border-radius:50px;font-weight:600;font-size:14px;text-decoration:none;display:inline-flex;align-items:center;gap:8px;transition:all .3s;align-self:flex-start;}',
    '.p3dp-btn:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,0,0,0.25);}',

    // Right — app-style dashboard mock
    '.p3dp-visual{background:rgba(10,11,16,0.55);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,0.1);border-radius:20px;overflow:hidden;position:relative;display:grid;grid-template-columns:52px 1fr;box-shadow:0 30px 70px -20px rgba(0,0,0,0.5),0 0 0 1px rgba(217,58,58,0.1);}',
    '.p3dp-visual::after{content:"";position:absolute;top:-25%;right:-10%;width:360px;height:360px;background:radial-gradient(circle,rgba(217,58,58,0.14),transparent 65%);pointer-events:none;}',
    '.p3dpv-rail{background:#0A0B10;border-right:1px solid rgba(255,255,255,0.06);padding:14px 0;display:flex;flex-direction:column;align-items:center;gap:8px;}',
    '.p3dpv-rail-logo{width:30px;height:30px;border-radius:8px;background:linear-gradient(135deg,#D93A3A,#6B1D1D);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:11px;font-family:"Space Grotesk";margin-bottom:4px;box-shadow:0 4px 10px -2px rgba(217,58,58,0.5);}',
    '.p3dpv-rail-div{width:22px;height:1px;background:rgba(255,255,255,0.08);margin:2px 0;}',
    '.p3dpv-rail-item{width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.38);font-size:13px;}',
    '.p3dpv-rail-item.active{color:#fff;background:rgba(217,58,58,0.22);box-shadow:inset 0 0 0 1px rgba(217,58,58,0.4);}',
    '.p3dpv-body{padding:14px 16px 16px;display:flex;flex-direction:column;gap:12px;min-width:0;position:relative;z-index:1;}',
    '.p3dpv-topbar{display:flex;justify-content:space-between;align-items:center;}',
    '.p3dpv-title{font-family:"Space Grotesk";font-size:13.5px;font-weight:600;color:#fff;}',
    '.p3dpv-title .muted{color:rgba(255,255,255,0.45);font-weight:500;margin-left:4px;font-size:12px;}',
    '.p3dpv-export{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.16);color:#fff;font-size:10.5px;font-weight:600;letter-spacing:0.02em;padding:5px 10px;border-radius:7px;}',
    '.p3dpv-export svg{width:12px;height:12px;}',
    '.p3dpv-hero{background:linear-gradient(135deg,#4A0F0F 0%,#8B1F1F 38%,#D93A3A 78%,#F26B5E 100%);border-radius:11px;padding:14px 16px;position:relative;overflow:hidden;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.1),0 8px 24px -8px rgba(217,58,58,0.4);}',
    '.p3dpv-hero::before{content:"";position:absolute;top:-60%;right:-15%;width:300px;height:300px;background:radial-gradient(circle,rgba(255,255,255,0.18),transparent 65%);pointer-events:none;}',
    '.p3dpv-hero-tag{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.28);padding:3px 9px;border-radius:12px;font-size:9px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#fff;margin-bottom:10px;}',
    '.p3dpv-hero-tag .dot{width:5px;height:5px;border-radius:50%;background:#6AFAA0;box-shadow:0 0 0 2px rgba(106,250,160,0.3);}',
    '.p3dpv-kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;position:relative;z-index:1;}',
    '.p3dpv-kpi .k-label{font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.82);margin-bottom:4px;font-weight:600;}',
    '.p3dpv-kpi .k-val{font-family:"Space Grotesk";font-size:28px;font-weight:700;color:#fff;line-height:1;letter-spacing:-0.02em;}',
    '.p3dpv-kpi .k-val .u{font-size:16px;margin-left:1px;opacity:0.85;}',
    '.p3dpv-kpi .k-delta{font-size:10px;color:#6AFAA0;margin-top:4px;font-weight:600;}',
    '.p3dpv-row{display:grid;grid-template-columns:1.35fr 1fr;gap:10px;}',
    '.p3dpv-panel{background:rgba(255,255,255,0.035);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:12px 14px;}',
    '.p3dpv-panel-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;}',
    '.p3dpv-panel-title{font-family:"Space Grotesk";font-size:11.5px;font-weight:600;color:#fff;}',
    '.p3dpv-panel-sub{font-size:9.5px;color:rgba(255,255,255,0.45);}',
    '.p3dpv-bars{display:flex;flex-direction:column;gap:9px;}',
    '.p3dpv-bar-row{display:grid;grid-template-columns:1fr 32px;gap:10px;align-items:center;}',
    '.p3dpv-bar-track{height:20px;border-radius:5px;background:rgba(255,255,255,0.06);position:relative;overflow:hidden;}',
    '.p3dpv-bar-fill{height:100%;border-radius:5px;display:flex;align-items:center;padding-left:10px;font-size:10px;font-weight:600;color:#fff;white-space:nowrap;}',
    '.p3dpv-bar-fill.b1{background:linear-gradient(90deg,#D93A3A,#ff8a8a);width:100%;}',
    '.p3dpv-bar-fill.b2{background:linear-gradient(90deg,#B52F2F,#E85F4E);width:82%;}',
    '.p3dpv-bar-fill.b3{background:linear-gradient(90deg,#8B1F1F,#D93A3A);width:68%;}',
    '.p3dpv-bar-fill.b4{background:linear-gradient(90deg,#6B1D1D,#B52F2F);width:46%;}',
    '.p3dpv-bar-val{font-family:"Space Grotesk";font-size:11px;font-weight:700;color:#fff;text-align:right;font-variant-numeric:tabular-nums;}',
    '.p3dpv-donut-big{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;height:100%;padding:6px 0 14px;}',
    '.p3dpv-donut-svg-big{width:116px;height:116px;display:block;filter:drop-shadow(0 4px 14px rgba(217,58,58,0.35));}',
    '.p3dpv-donut-stack{position:relative;display:flex;align-items:center;justify-content:center;}',
    '.p3dpv-donut-center{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;}',
    '.p3dpv-donut-center .dv{font-family:"Space Grotesk";font-size:24px;font-weight:700;color:#fff;line-height:1;letter-spacing:-0.02em;}',
    '.p3dpv-donut-center .dl{font-size:8.5px;color:rgba(255,255,255,0.55);margin-top:3px;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;}',
    '.p3dpv-donut-big-bench{font-size:10px;color:#6AFAA0;font-weight:600;margin-top:4px;}',
    '.p3dpv-trend{background:rgba(255,255,255,0.035);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:12px 14px 10px;flex:1;min-height:0;display:flex;flex-direction:column;}',
    '.p3dpv-trend-head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px;}',
    '.p3dpv-trend-title{font-family:"Space Grotesk";font-size:11.5px;font-weight:600;color:#fff;}',
    '.p3dpv-trend-meta{display:flex;gap:14px;align-items:baseline;}',
    '.p3dpv-trend-meta .total{font-family:"Space Grotesk";font-size:16px;font-weight:700;color:#fff;}',
    '.p3dpv-trend-meta .delta{font-size:10px;color:#6AFAA0;font-weight:600;}',
    '.p3dpv-trend-svg{width:100%;height:78px;display:block;flex:1;}',
    '.p3dpv-trend-labels{display:flex;justify-content:space-between;font-size:8.5px;color:rgba(255,255,255,0.38);padding:4px 2px 0;letter-spacing:0.04em;}',
    '@media(max-width:1024px){.p3dp-inner{grid-template-columns:1fr;gap:28px;}.p3dp{padding:48px 32px;}}',
    '@media(max-width:640px){',
    '  .p3dp{padding:40px 20px;}',
    '  .p3dp-left{align-items:center;text-align:center;}',
    '  .p3dp h2{text-align:center;}',
    '  .p3dp .p3dp-lede{text-align:center;margin-left:auto;margin-right:auto;}',
    '  .p3dp-btn{align-self:center;}',
    '  .p3dp-card{text-align:left;padding:12px 14px;}',
    '  .p3dp-card h4{font-size:14px;} .p3dp-card p{font-size:12px;}',
    '  .p3dpv-kpis{grid-template-columns:repeat(3,1fr);gap:8px;}',
    '  .p3dpv-kpi .k-val{font-size:20px;} .p3dpv-kpi .k-val .u{font-size:12px;}',
    '  .p3dpv-kpi .k-label{font-size:8px;} .p3dpv-kpi .k-delta{font-size:8.5px;}',
    '  .p3dpv-row{grid-template-columns:1fr;}',
    '  .p3dpv-row > .p3dpv-panel:nth-child(2){display:none;}',
    '}'
  ].join('\n');
  document.head.appendChild(v12css);

  // ── v1.2.1 PATCHES (Apr 15, 2026) — selectors updated to match real Webflow classes ──
  var v121css = document.createElement('style');
  v121css.textContent = [
    // Why Now card padding — MAX specificity (html body + stacked classes) to beat Webflow + other P3 scripts
    'html body .p3-gap-card, html body div.p3-gap-card, html body section .p3-gap-card{padding:20px 22px !important;}',
    '@media(max-width:768px){html body .p3-gap-card, html body div.p3-gap-card, html body section .p3-gap-card{padding:16px 18px !important;}}',

    // Export PDF — force single line on mobile
    '.p3dpv-export{white-space:nowrap !important;flex-shrink:0 !important;}',
    '@media(max-width:640px){.p3dpv-export{font-size:9.5px !important;padding:4px 8px !important;}}',

    // Dashboard Preview card body copy — harmonize with other page cards
    '.p3dp-card p{font-size:13px !important;line-height:1.55 !important;}',
    '.p3dp-card h4{font-size:15px !important;}',
    '@media(max-width:640px){.p3dp-card p{font-size:12.5px !important;} .p3dp-card h4{font-size:14px !important;}}',

    // Gallery subheader
    '.gl-hd p{font-size:15px !important;line-height:1.55 !important;color:rgba(255,255,255,0.55) !important;}',
    '@media(max-width:640px){.gl-hd p{font-size:13.5px !important;}}',

    // Hide feature-bullet pills in the two bottom Dual CTA cards
    // Real Webflow classes: .p3-dual-features wrapper > .p3-dual-feat-tag pills
    '.p3-dual-card-students .p3-dual-features, .p3-dual-card-partners .p3-dual-features, .p3-dual-features{display:none !important;}',
    '.p3-dual-feat-tag{display:none !important;}',

    // "In The Press" eyebrow — match "The Platform" (.os-eyebrow) exactly: soft crimson pill + dark crimson text
    'html body .p3-section-tag.p3-tag-crimson, html body .p3-social-proof .p3-section-tag{',
    '  background:rgba(217,58,58,0.10) !important;',
    '  background-color:rgba(217,58,58,0.10) !important;',
    '  color:#B52F2F !important;',
    '  border:none !important;',
    '  font-family:"Inter",system-ui,sans-serif !important;',
    '  font-size:12px !important;',
    '  font-weight:600 !important;',
    '  letter-spacing:1px !important;',
    '  padding:6px 16px !important;',
    '  border-radius:50px !important;',
    '}',
    'html body .p3-section-tag.p3-tag-crimson *, html body .p3-social-proof .p3-section-tag *{color:#B52F2F !important;background:transparent !important;}',

    // Dashboard Preview card headings — MAX specificity so h4 is clearly bigger/bolder than paragraph
    'html body .p3dp-card h4{font-size:17px !important;font-weight:700 !important;margin-bottom:6px !important;line-height:1.25 !important;}',
    'html body .p3dp-card p{font-size:13px !important;line-height:1.55 !important;}',
    '@media(max-width:640px){html body .p3dp-card h4{font-size:16px !important;} html body .p3dp-card p{font-size:12.5px !important;}}'
  ].join('\n');
  document.head.appendChild(v121css);

  // ══════════════════════════════════════════════════════════════
  // v1.2.2 PATCHES (Apr 15, 2026)
  //  - Dashboard Preview cards → match FS page Pathway Milestone detail cards exactly
  //  - Dual CTA cards → reduce desktop height
  //  - Donut "94%" → tighter spacing above "Retained" label
  //  - Community gallery restyle handled in gallery HTML rewrite below
  // ══════════════════════════════════════════════════════════════
  var v122css = document.createElement('style');
  v122css.textContent = [
    // ── Dashboard Preview cards: replicate .fm-ms-detail-card (FS page) exactly ──
    'html body .p3dp-card{padding:18px 22px 12px !important;gap:16px !important;border-radius:14px !important;background:rgba(255,255,255,0.05) !important;border:1px solid rgba(255,255,255,0.1) !important;align-items:flex-start !important;}',
    'html body .p3dp-icon{width:40px !important;height:40px !important;border-radius:10px !important;}',
    'html body .p3dp-icon svg{width:20px !important;height:20px !important;}',
    'html body .p3dp-card h4{font-size:1rem !important;font-weight:700 !important;color:#fff !important;margin-bottom:4px !important;line-height:1.3 !important;}',
    'html body .p3dp-card p{font-size:0.85rem !important;color:rgba(255,255,255,0.6) !important;line-height:1.55 !important;}',
    '@media(max-width:640px){',
    '  html body .p3dp-card{padding:16px 18px 10px !important;gap:14px !important;}',
    '  html body .p3dp-icon{width:36px !important;height:36px !important;}',
    '  html body .p3dp-icon svg{width:18px !important;height:18px !important;}',
    '  html body .p3dp-card h4{font-size:0.95rem !important;}',
    '  html body .p3dp-card p{font-size:0.82rem !important;}',
    '}',

    // ── Dual CTA cards: reduce height on desktop only (mobile untouched) ──
    '@media(min-width:769px){',
    '  html body .p3-dual-cta .p3-cta-card, html body .p3-dual-cta .p3-dual-card-students, html body .p3-dual-cta .p3-dual-card-partners{',
    '    padding-top:28px !important;padding-bottom:28px !important;min-height:0 !important;',
    '  }',
    '  html body .p3-dual-cta .p3-cta-card .p3-body-text, html body .p3-dual-cta .p3-cta-card p{margin-bottom:14px !important;}',
    '}',

    // ── Donut: tighten spacing between 94% value and "Retained" label ──
    '.p3dpv-donut-center .dv{line-height:0.82 !important;margin-bottom:-2px !important;}',
    '.p3dpv-donut-center .dl{margin-top:-4px !important;}',
    '.p3dpv-donut-big{padding:2px 0 8px !important;gap:2px !important;}',

    // ── Dual CTA buttons: pill-shaped like Learn More, centered ──
    'html body .p3-dual-cta .p3-cta-card{align-items:center !important;text-align:center !important;}',
    'html body .p3-dual-cta .p3-cta-card a.p3-btn-primary, html body .p3-dual-cta .p3-cta-card a.p3-btn-light, html body .p3-dual-cta .p3-cta-card a.p3-btn-ghost, html body .p3-dual-cta .p3-cta-card a.w-button, html body .p3-dual-cta .p3-cta-card a.btn, html body .p3-dual-cta .p3-cta-card a[class*="btn"]{',
    '  padding:12px 26px !important;border-radius:50px !important;font-size:14px !important;font-weight:600 !important;',
    '  display:inline-flex !important;align-items:center !important;justify-content:center !important;gap:8px !important;',
    '  width:auto !important;max-width:max-content !important;min-width:0 !important;align-self:center !important;',
    '  margin-left:auto !important;margin-right:auto !important;',
    '}',

    // ── Community gallery restyle → match FS "Join +800 Students Nationwide" exactly ──
    '.gl{background:#fff !important;padding:8px 0 48px !important;}',
    '.gl .ctn{text-align:center;margin-bottom:28px;}',
    '.gl-hd{text-align:center !important;margin-bottom:20px !important;}',
    '.gl-hd .fs-gl-label{display:inline-flex;align-items:center;padding:4px 12px;border-radius:100px;background:rgba(217,58,58,0.08);color:#D93A3A;font-family:"Satoshi","Inter",sans-serif;font-size:0.65rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:12px;}',
    '.gl-hd h2{color:#1a1a1a !important;font-family:"Space Grotesk",sans-serif !important;font-size:2.4rem !important;font-weight:700 !important;margin-bottom:16px !important;line-height:1.2 !important;}',
    '.gl-hd h2 em{font-style:normal !important;color:#D93A3A !important;}',
    '.gl-hd p{color:#555 !important;font-family:"Inter",sans-serif !important;font-size:1.05rem !important;line-height:1.7 !important;max-width:640px !important;margin:0 auto !important;}',
    '.gl-track{gap:12px !important;}',
    '.gl-item{width:240px !important;height:180px !important;border-radius:12px !important;background:#f5f5f5 !important;}',
    '.gl-fl,.gl-fr{display:none !important;}',
    '@media(max-width:768px){',
    '  .gl-hd h2{font-size:1.6rem !important;}',
    '  .gl-hd p{font-size:0.92rem !important;}',
    '  .gl-item{width:200px !important;height:150px !important;}',
    '}'
  ].join('\n');
  document.head.appendChild(v122css);

  // JS: Force "In The Press" eyebrow to maroon variant (low-contrast otherwise)
  // Also hide feature-bullet rows in bottom CTA cards by text match (defensive if no list class)
  (function v121Patches() {
    // Force press eyebrow colors after A) runs below — we'll run again post-harmonize
    setTimeout(function() {
      var tags = document.querySelectorAll('.p3-section-tag');
      tags.forEach(function(t) {
        var txt = (t.textContent || '').trim().toLowerCase();
        if (txt === 'in the press' || txt === 'in press') {
          // Match "The Platform" (os-eyebrow) light pill look — Press bg is light peach
          t.classList.remove('p3tag-maroon');
          t.classList.add('p3tag-light');
        }
      });
    }, 0);

    // Remove bullet strings from the bottom CTA cards
    var bulletStrings = [
      'AI Matching','Career Pathways','100% Free',
      'Outcome Tracking','Cohort Analytics','ROI Reports'
    ];
    var ctaCards = document.querySelectorAll('.p3-cta-card');
    ctaCards.forEach(function(card) {
      // Find any descendant whose trimmed textContent is one of the bullet strings — walk up to row container and hide
      var all = card.querySelectorAll('*');
      all.forEach(function(el) {
        var t = (el.textContent || '').trim();
        if (bulletStrings.indexOf(t) !== -1 && el.children.length === 0) {
          // hide the immediate wrapper (likely a flex row with icon + label)
          var row = el.closest('li, .p3-feature-row, .p3-cta-feature, [class*="feature"]') || el.parentElement;
          if (row) row.classList.add('p3-cta-card-bullets-hide');
        }
      });
    });
  })();

  // ── A) Eyebrow harmonization (JS: tag maroon vs light) ──
  (function harmonizeEyebrows() {
    var tags = document.querySelectorAll('.p3-section-tag');
    tags.forEach(function(t) {
      // Find the closest section (or parent) and inspect its bg color
      var sec = t.closest('section') || t.parentElement;
      if (!sec) return;
      var bg = window.getComputedStyle(sec).backgroundColor;
      var isDark = false;
      // parse rgb
      var m = bg.match(/rgba?\(([^)]+)\)/);
      if (m) {
        var parts = m[1].split(',').map(function(x){return parseFloat(x);});
        var r = parts[0], g = parts[1], b = parts[2];
        // relative luminance
        var lum = (0.299*r + 0.587*g + 0.114*b) / 255;
        isDark = lum < 0.5;
      }
      // Walk up to find dark ancestor if the immediate bg is transparent
      if (!isDark) {
        var p = sec.parentElement;
        while (p && p !== document.body) {
          var pbg = window.getComputedStyle(p).backgroundColor;
          var pm = pbg.match(/rgba?\(([^)]+)\)/);
          if (pm) {
            var pp = pm[1].split(',').map(function(x){return parseFloat(x);});
            if (pp[3] === undefined || pp[3] > 0.1) {
              var plum = (0.299*pp[0] + 0.587*pp[1] + 0.114*pp[2]) / 255;
              if (plum < 0.5) { isDark = true; break; }
              if (plum >= 0.5) break;
            }
          }
          p = p.parentElement;
        }
      }
      t.classList.add(isDark ? 'p3tag-maroon' : 'p3tag-light');
    });
  })();

  // ── D) Dashboard Preview — full rebuild ──
  (function rebuildDashboardPreview() {
    var dash = document.querySelector('.p3-dash-preview');
    if (!dash) return;
    // Clear existing content, add marker class, inject new structure
    dash.classList.add('p3dp-rebuilt');
    dash.innerHTML =
      '<div class="p3dp"><div class="p3dp-inner">' +
        '<div class="p3dp-left">' +
          '<div class="p3-section-tag p3tag-maroon">Dashboard Preview</div>' +
          '<h2>Student journeys become <span class="accent">institutional intelligence</span></h2>' +
          '<p class="p3dp-lede">A dashboard built for partner institutions. See how mentorship drives engagement, retention, and real outcomes across every cohort.</p>' +
          '<div class="p3dp-cards">' +
            '<div class="p3dp-card"><div class="p3dp-icon red">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="#D93A3A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>' +
              '</div><div><h4>Engagement and Retention</h4><p>See how students are engaging with their mentors. Track active users, session frequency, and retention across every cohort.</p></div></div>' +
            '<div class="p3dp-card"><div class="p3dp-icon blue">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>' +
              '</div><div><h4>Longitudinal Outcomes</h4><p>Follow students from their first milestone to their first job. See how mentorship translates into enrollment, internships, and placement.</p></div></div>' +
            '<div class="p3dp-card"><div class="p3dp-icon green">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="14" y2="13"/><line x1="8" y1="17" x2="14" y2="17"/></svg>' +
              '</div><div><h4>Custom Impact Reports</h4><p>Board ready dashboards tailored to your institution. Benchmark cohorts against national peers and share results with stakeholders.</p></div></div>' +
          '</div>' +
          '<a href="/partner" class="p3dp-btn">Learn More &rarr;</a>' +
        '</div>' +
        '<div class="p3dp-visual">' +
          '<div class="p3dpv-rail">' +
            '<div class="p3dpv-rail-logo">P3</div>' +
            '<div class="p3dpv-rail-item active">&#9636;</div>' +
            '<div class="p3dpv-rail-item">&#9096;</div>' +
            '<div class="p3dpv-rail-item">&#9678;</div>' +
            '<div class="p3dpv-rail-item">&#9651;</div>' +
            '<div class="p3dpv-rail-div"></div>' +
            '<div class="p3dpv-rail-item">&rarr;</div>' +
            '<div class="p3dpv-rail-item">&#9737;</div>' +
            '<div class="p3dpv-rail-item">&#9204;</div>' +
          '</div>' +
          '<div class="p3dpv-body">' +
            '<div class="p3dpv-topbar">' +
              '<div class="p3dpv-title">Executive Dashboard<span class="muted">&middot; Cohort Performance</span></div>' +
              '<button class="p3dpv-export" type="button">' +
                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>' +
                'Export PDF' +
              '</button>' +
            '</div>' +
            '<div class="p3dpv-hero">' +
              '<div class="p3dpv-hero-tag"><span class="dot"></span> Institutional Intelligence &middot; Last 12 Months</div>' +
              '<div class="p3dpv-kpis">' +
                '<div class="p3dpv-kpi"><div class="k-label">Active Mentees</div><div class="k-val">312</div><div class="k-delta">&#9650; 18% YoY</div></div>' +
                '<div class="p3dpv-kpi"><div class="k-label">Retention</div><div class="k-val">94<span class="u">%</span></div><div class="k-delta">&#9650; 29 pts</div></div>' +
                '<div class="p3dpv-kpi"><div class="k-label">Cost Savings</div><div class="k-val">$2.1<span class="u">M</span></div><div class="k-delta">&#9650; 12%</div></div>' +
              '</div>' +
            '</div>' +
            '<div class="p3dpv-row">' +
              '<div class="p3dpv-panel">' +
                '<div class="p3dpv-panel-head"><div class="p3dpv-panel-title">Top Milestones</div><div class="p3dpv-panel-sub">This year</div></div>' +
                '<div class="p3dpv-bars">' +
                  '<div class="p3dpv-bar-row"><div class="p3dpv-bar-track"><div class="p3dpv-bar-fill b1">Matched with mentor</div></div><div class="p3dpv-bar-val">534</div></div>' +
                  '<div class="p3dpv-bar-row"><div class="p3dpv-bar-track"><div class="p3dpv-bar-fill b2">Selected Major</div></div><div class="p3dpv-bar-val">438</div></div>' +
                  '<div class="p3dpv-bar-row"><div class="p3dpv-bar-track"><div class="p3dpv-bar-fill b3">College enrollment</div></div><div class="p3dpv-bar-val">364</div></div>' +
                  '<div class="p3dpv-bar-row"><div class="p3dpv-bar-track"><div class="p3dpv-bar-fill b4">Internship secured</div></div><div class="p3dpv-bar-val">246</div></div>' +
                '</div>' +
              '</div>' +
              '<div class="p3dpv-panel">' +
                '<div class="p3dpv-panel-head"><div class="p3dpv-panel-title">Program Retention</div><div class="p3dpv-panel-sub">12-mo</div></div>' +
                '<div class="p3dpv-donut-big">' +
                  '<div class="p3dpv-donut-stack">' +
                    '<svg class="p3dpv-donut-svg-big" viewBox="0 0 40 40">' +
                      '<defs>' +
                        '<linearGradient id="p3dpgrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FFB099"/><stop offset="45%" stop-color="#F26B5E"/><stop offset="100%" stop-color="#D93A3A"/></linearGradient>' +
                        '<radialGradient id="p3dpglow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(217,58,58,0.22)"/><stop offset="70%" stop-color="rgba(217,58,58,0)"/></radialGradient>' +
                      '</defs>' +
                      '<circle cx="20" cy="20" r="13" fill="url(#p3dpglow)"/>' +
                      '<circle cx="20" cy="20" r="18.5" fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="0.5" stroke-dasharray="0.4 1.6"/>' +
                      '<circle cx="20" cy="20" r="15" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="3.2"/>' +
                      '<circle cx="20" cy="20" r="15" fill="none" stroke="url(#p3dpgrad)" stroke-width="3.2" stroke-dasharray="88.6,94.2" stroke-linecap="round" transform="rotate(-90 20 20)"/>' +
                      '<circle cx="20" cy="20" r="11.3" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="0.35"/>' +
                    '</svg>' +
                    '<div class="p3dpv-donut-center"><div class="dv">94<span style="font-size:14px">%</span></div><div class="dl">Retained</div></div>' +
                  '</div>' +
                  '<div class="p3dpv-donut-big-bench">&#9650; 29 pts vs baseline</div>' +
                '</div>' +
              '</div>' +
            '</div>' +
            '<div class="p3dpv-trend">' +
              '<div class="p3dpv-trend-head">' +
                '<div class="p3dpv-trend-title">Cumulative Milestones</div>' +
                '<div class="p3dpv-trend-meta"><span class="total">2,395</span><span class="delta">&#9650; 32% YoY</span></div>' +
              '</div>' +
              '<svg class="p3dpv-trend-svg" viewBox="0 0 400 80" preserveAspectRatio="none">' +
                '<defs><linearGradient id="p3dptgrad" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#D93A3A" stop-opacity="0.55"/><stop offset="100%" stop-color="#D93A3A" stop-opacity="0"/></linearGradient></defs>' +
                '<line x1="0" y1="20" x2="400" y2="20" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>' +
                '<line x1="0" y1="45" x2="400" y2="45" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>' +
                '<line x1="0" y1="70" x2="400" y2="70" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>' +
                '<path d="M0,72 L33,68 L66,62 L100,58 L133,50 L166,40 L200,36 L233,28 L266,22 L300,16 L333,12 L400,8 L400,80 L0,80 Z" fill="url(#p3dptgrad)"/>' +
                '<path d="M0,72 L33,68 L66,62 L100,58 L133,50 L166,40 L200,36 L233,28 L266,22 L300,16 L333,12 L400,8" fill="none" stroke="#ff8a8a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
                '<circle cx="400" cy="8" r="3.5" fill="#ff8a8a"/>' +
                '<circle cx="400" cy="8" r="6" fill="#ff8a8a" opacity="0.25"/>' +
              '</svg>' +
              '<div class="p3dpv-trend-labels"><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span><span>Jan</span><span>Mar</span></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div></div>';
  })();

})();
