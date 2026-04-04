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

  // ========== COMMUNITY GALLERY ==========
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

})();
