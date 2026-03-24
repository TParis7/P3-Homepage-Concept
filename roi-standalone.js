(function() {
  // Load Google Fonts
  var fonts = document.createElement('link');
  fonts.rel = 'stylesheet';
  fonts.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&family=Inter:wght@400;500;600&family=Satoshi:wght@400;600;700&display=swap';
  document.head.appendChild(fonts);

  // ========== CSS ==========
  var css = document.createElement('style');
  css.textContent = [
    ':root{--pp-c:#D93A3A;--pp-ch:#c43232;--pp-wh:#fff;--pp-dk:#1a1a1a;--pp-m:#4a1020;--pp-md:#3a0c18;--pp-lt:#999;--pp-bt:#555;--pp-n3:#eee;--pp-n4:#c7c7c7;--pp-r:14px;--pp-tr:.3s cubic-bezier(.25,.46,.45,.94);--pp-fh:"Space Grotesk",sans-serif;--pp-fb:"Satoshi",sans-serif;--pp-fi:"Inter",sans-serif;}',

    // Nav layout + styling (full render — no native Webflow nav on this page)
    '.p3-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 9999; display: flex; align-items: center; justify-content: space-between; padding: 16px 40px; background: rgba(58,12,24,0.85); backdrop-filter: blur(12px); transition: background .3s, box-shadow .3s; }',
    '.p3-nav .p3-nav-logo { display: flex; align-items: center; text-decoration: none; }',
    '.p3-nav .p3-nav-logo img { max-height: 36px; width: auto; object-fit: contain; }',
    '.p3-nav .p3-nav-links { display: flex; align-items: center; gap: 28px; }',
    '.p3-nav .p3-nav-link { font-family: var(--pp-fi); font-size: .85rem; font-weight: 500; color: rgba(255,255,255,0.85); text-decoration: none; transition: color var(--pp-tr); }',
    '.p3-nav .p3-nav-link:hover { color: var(--pp-wh); }',
    '.p3-nav .p3-nav-cta { font-family: var(--pp-fb); font-size: .82rem; font-weight: 600; color: var(--pp-wh); background: var(--pp-c); padding: 9px 20px; border-radius: 100px; text-decoration: none; transition: all var(--pp-tr); }',
    '.p3-nav .p3-nav-cta:hover { background: var(--pp-ch); }',
    '.p3-nav.scrolled { background: rgba(26, 26, 26, 0.95) !important; backdrop-filter: blur(20px) !important; box-shadow: 0 2px 20px rgba(0,0,0,0.15); }',
    '@media(max-width:991px){ .p3-nav { padding: 16px; height: 64px; } .p3-nav .p3-nav-links { display: none; } .p3-nav .p3-nav-cta { display: none; } .p3-nav .p3-nav-logo img { max-height: 36px; height: 36px; } }',

    // Footer
    '.roi-footer { background: var(--pp-dk); color: var(--pp-wh); padding: 40px 0 20px; font-family: var(--pp-fb); }',
    '.roi-ft-inner { max-width: 1100px; margin: 0 auto; padding: 0 28px; }',
    '.roi-ft-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 36px; margin-bottom: 28px; }',
    '.roi-ft-brand img { height: 28px; margin-bottom: 12px; }',
    '.roi-ft-tagline { font-size: .82rem; color: rgba(255,255,255,.5); line-height: 1.55; margin-bottom: 12px; }',
    '.roi-ft-social { display: flex; gap: 10px; }',
    '.roi-ft-social a { width: 32px; height: 32px; border-radius: 50%; background: rgba(255,255,255,.08); display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,.5); text-decoration: none; font-size: .75rem; transition: all var(--pp-tr); }',
    '.roi-ft-social a:hover { background: var(--pp-c); color: var(--pp-wh); }',
    '.roi-ft-col h4 { font-family: var(--pp-fh); font-size: .72rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(255,255,255,.35); margin-bottom: 14px; }',
    '.roi-ft-col a { display: block; font-size: .82rem; color: rgba(255,255,255,.6); text-decoration: none; padding: 3px 0; transition: color var(--pp-tr); }',
    '.roi-ft-col a:hover { color: var(--pp-wh); }',
    '.roi-ft-bottom { border-top: 1px solid rgba(255,255,255,.08); padding-top: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; }',
    '.roi-ft-copy { font-size: .72rem; color: rgba(255,255,255,.3); }',
    '.roi-ft-links { display: flex; gap: 16px; }',
    '.roi-ft-links a { font-size: .72rem; color: rgba(255,255,255,.3); text-decoration: none; }',
    '.roi-ft-links a:hover { color: rgba(255,255,255,.6); }',
    '@media(max-width:768px){ .roi-ft-grid { grid-template-columns: 1fr 1fr; } }',
    '@media(max-width:480px){ .roi-ft-grid { grid-template-columns: 1fr; } }',

    // Page background
    '.roi-page { padding: 100px 0 0; min-height: 100vh; background: var(--pp-md); font-family: var(--pp-fb); }',

    // ROI Section
    '.roi-section { padding: 60px 0 80px; background: linear-gradient(180deg, var(--pp-md), var(--pp-m)); color: var(--pp-wh); }',
    '.roi-ctn { max-width: 1100px; margin: 0 auto; padding: 0 28px; }',
    '.roi-hd { text-align: center; margin-bottom: 40px; }',
    '.roi-tag { display: inline-flex; padding: 4px 12px; border-radius: 100px; font-size: .65rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 12px; background: rgba(255,255,255,.1); color: rgba(255,255,255,.65); }',
    '.roi-hd h1 { font-family: var(--pp-fh); font-weight: 700; font-size: clamp(1.8rem, 3.5vw, 2.5rem); line-height: 1.15; letter-spacing: -.02em; color: var(--pp-wh); margin: 0 0 12px; }',
    '.roi-hd p { font-size: clamp(.9rem, 1.4vw, 1.05rem); color: rgba(255,255,255,.6); max-width: 560px; margin: 0 auto; line-height: 1.65; }',

    // Grid layout
    '.roi-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 36px; align-items: start; }',
    '@media(max-width:768px){ .roi-grid { grid-template-columns: 1fr; } }',

    // Inputs panel
    '.roi-inputs { background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); border-radius: 20px; padding: 28px; }',
    '.roi-inputs h3 { font-family: var(--pp-fh); font-size: 1.1rem; font-weight: 700; color: var(--pp-wh); margin-bottom: 20px; }',
    '.roi-group { margin-bottom: 16px; }',
    '.roi-label { font-size: .78rem; font-weight: 600; color: rgba(255,255,255,.7); margin-bottom: 6px; }',
    '.roi-sel { width: 100%; padding: 10px 12px; border: 1px solid rgba(255,255,255,.15); border-radius: var(--pp-r); font-family: var(--pp-fb); font-size: .85rem; color: var(--pp-wh); background: rgba(255,255,255,.08); -webkit-appearance: none; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23999\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 10px center; padding-right: 32px; cursor: pointer; transition: border-color var(--pp-tr); }',
    '.roi-sel:focus { outline: none; border-color: var(--pp-c); }',
    '.roi-sel option { background: var(--pp-dk); color: var(--pp-wh); }',

    // Slider
    '.roi-slider { width: 100%; -webkit-appearance: none; appearance: none; height: 6px; border-radius: 3px; background: rgba(255,255,255,.15); outline: none; cursor: pointer; }',
    '.roi-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 50%; background: var(--pp-c); cursor: pointer; box-shadow: 0 2px 8px rgba(217,58,58,.4); }',
    '.roi-slider::-moz-range-thumb { width: 20px; height: 20px; border-radius: 50%; background: var(--pp-c); cursor: pointer; border: none; }',
    '.roi-slider-val { text-align: center; font-family: var(--pp-fh); font-size: .95rem; font-weight: 700; color: var(--pp-wh); margin-top: 8px; }',

    // Plan toggle
    '.roi-plans { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }',
    '.roi-plan { padding: 14px; border-radius: var(--pp-r); border: 1px solid rgba(255,255,255,.12); background: rgba(255,255,255,.04); cursor: pointer; text-align: center; transition: all var(--pp-tr); }',
    '.roi-plan:hover { border-color: rgba(255,255,255,.25); }',
    '.roi-plan.active { border-color: var(--pp-c); background: rgba(217,58,58,.12); }',
    '.roi-plan-name { font-family: var(--pp-fh); font-size: .9rem; font-weight: 700; color: var(--pp-wh); }',
    '.roi-plan-price { font-size: .82rem; color: var(--pp-c); font-weight: 600; margin: 2px 0; }',
    '.roi-plan-desc { font-size: .68rem; color: rgba(255,255,255,.5); }',

    // Results panel
    '.roi-results { background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); border-radius: 20px; padding: 28px; }',
    '.roi-results h3 { font-family: var(--pp-fh); font-size: 1.1rem; font-weight: 700; color: var(--pp-wh); margin-bottom: 20px; text-align: center; }',
    '.roi-metric { padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,.08); }',
    '.roi-metric:last-of-type { border-bottom: none; }',
    '.roi-metric-label { font-size: .75rem; color: rgba(255,255,255,.5); font-weight: 500; margin-bottom: 2px; }',
    '.roi-metric-value { font-family: var(--pp-fh); font-size: 1.6rem; font-weight: 700; color: var(--pp-wh); }',
    '.roi-metric-detail { font-size: .72rem; color: rgba(255,255,255,.4); margin-top: 2px; }',

    // Highlight
    '.roi-highlight { text-align: center; margin: 20px 0; padding: 24px; background: rgba(217,58,58,.12); border-radius: var(--pp-r); border: 1px solid rgba(217,58,58,.2); }',
    '.roi-big-num { font-family: var(--pp-fh); font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 700; color: var(--pp-c); line-height: 1; }',
    '.roi-big-label { font-size: .82rem; color: rgba(255,255,255,.6); margin-top: 4px; }',

    // CTA button
    '.roi-cta { display: block; width: 100%; padding: 14px 28px; border-radius: 100px; font-family: var(--pp-fb); font-size: .9rem; font-weight: 600; text-align: center; color: var(--pp-wh); background: var(--pp-c); border: none; cursor: pointer; transition: all var(--pp-tr); box-shadow: 0 4px 14px rgba(217,58,58,.3); text-decoration: none; margin-top: 16px; }',
    '.roi-cta:hover { background: var(--pp-ch); transform: translateY(-1px); }',
    '.roi-cta::after { content: " \\2192"; }',

    // Back link
    '.roi-back { display: inline-flex; align-items: center; gap: 6px; margin: 24px 0 0; padding: 0 28px; font-size: .85rem; color: var(--pp-bt); text-decoration: none; font-family: var(--pp-fb); }',
    '.roi-back:hover { color: var(--pp-c); }',
    '.roi-back::before { content: "\\2190"; }',

    // Hamburger menu (mobile)
    '.roi-hamburger { display: none; width: 28px; height: 28px; cursor: pointer; flex-direction: column; justify-content: center; align-items: center; gap: 5px; z-index: 10001; position: relative; }',
    '.roi-hamburger span { display: block; width: 22px; height: 2px; background: var(--pp-wh); border-radius: 2px; transition: all .3s ease; }',
    '@media(max-width:991px){ .roi-hamburger { display: flex; } }',

    // Mobile overlay
    '.roi-mobile-overlay { display: none; position: fixed; inset: 0; background: rgba(26,26,26,.98); z-index: 10000; flex-direction: column; align-items: center; justify-content: center; gap: 24px; }',
    '.roi-mobile-overlay.open { display: flex; }',
    '.roi-mobile-overlay a { font-family: var(--pp-fb); font-size: 1.2rem; color: var(--pp-wh); text-decoration: none; padding: 8px 24px; transition: color .3s; }',
    '.roi-mobile-overlay a:hover { color: var(--pp-c); }',
    '.roi-mobile-close { position: absolute; top: 20px; right: 20px; width: 32px; height: 32px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: var(--pp-wh); background: none; border: none; }',
  ].join('\n');
  document.head.appendChild(css);

  // ========== RENDER NAVBAR ==========
  // Create the same nav as partner page (since this page has no native Webflow navbar)
  var nav = document.querySelector('.p3-nav');
  if (!nav) {
    nav = document.createElement('nav');
    nav.className = 'p3-nav';
    nav.innerHTML =
      '<a href="/" class="p3-nav-logo"><img src="https://cdn.prod.website-files.com/69b02f65f0068e9fb16f09f7/69b02f65f0068e9fb16f0df1_P3%20Logo.svg" alt="Pulse of Perseverance" /></a>' +
      '<div class="p3-nav-links">' +
        '<a href="/for-students" class="p3-nav-link">For Students</a>' +
        '<a href="/partner" class="p3-nav-link">For Institutions</a>' +
        '<a href="/for-mentors" class="p3-nav-link">For Mentors</a>' +
        '<a href="/about/about" class="p3-nav-link">About</a>' +
      '</div>' +
      '<a href="/download" class="p3-nav-cta">Get the App</a>' +
      '<div class="roi-hamburger"><span></span><span></span><span></span></div>';
    document.body.insertBefore(nav, document.body.firstChild);
  }

  // Scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 40) { nav.classList.add('scrolled'); }
    else { nav.classList.remove('scrolled'); }
  });

  // Mobile overlay
  var overlay = document.createElement('div');
  overlay.className = 'roi-mobile-overlay';
  overlay.innerHTML = '<button class="roi-mobile-close">&times;</button>' +
    '<a href="/">Home</a>' +
    '<a href="/for-students">For Students</a>' +
    '<a href="/partner">For Institutions</a>' +
    '<a href="/for-mentors">For Mentors</a>' +
    '<a href="/about/about">About</a>' +
    '<a href="/download" style="background:var(--pp-c);border-radius:100px;padding:12px 28px;font-weight:600;">Get the App</a>';
  document.body.appendChild(overlay);

  var hamburger = nav.querySelector('.roi-hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function() { overlay.classList.add('open'); });
  }
  overlay.querySelector('.roi-mobile-close').addEventListener('click', function() { overlay.classList.remove('open'); });

  // ========== ROI CALCULATOR HTML ==========
  var wrapper = document.querySelector('.main-wrapper') || document.body;
  var roiPage = document.createElement('div');
  roiPage.className = 'roi-page';
  roiPage.innerHTML = '<section class="roi-section"><div class="roi-ctn">' +
    '<div class="roi-hd">' +
      '<div class="roi-tag">ROI Calculator</div>' +
      '<h1>Impact You Can Measure</h1>' +
      '<p>Estimate the impact of pairing your students with mentors through the P3 platform.</p>' +
    '</div>' +
    '<div class="roi-grid">' +
      // Left: Inputs
      '<div class="roi-inputs">' +
        '<h3>About Your Organization</h3>' +
        '<div class="roi-group"><div class="roi-label">Institution Type</div>' +
          '<select class="roi-sel" id="roi-it"><option value="4-Year University">4-Year University</option><option value="Community College">Community College</option><option value="HBCU">HBCU</option><option value="K-12 District">K-12 District</option><option value="Nonprofit / CBO">Nonprofit / CBO</option></select></div>' +
        '<div class="roi-group"><div class="roi-label">Annual Tuition Per Student</div>' +
          '<select class="roi-sel" id="roi-tu"><option value="5000">~$5,000</option><option value="12000">~$12,000</option><option value="25000" selected>~$25,000</option><option value="40000">~$40,000</option><option value="55000">~$55,000</option></select></div>' +
        '<div class="roi-group"><div class="roi-label">Current Mentorship Program</div>' +
          '<select class="roi-sel" id="roi-mp"><option value="none">No formal program</option><option value="informal">Informal / ad-hoc</option><option value="formal">Formal (manual matching)</option><option value="digital">Digital platform</option></select></div>' +
        '<div class="roi-group"><div class="roi-label">Students to Enroll</div>' +
          '<input type="range" class="roi-slider" id="roi-sc" min="50" max="2000" value="500" step="50">' +
          '<div class="roi-slider-val" id="roi-sd">500 students</div></div>' +
        '<div class="roi-group"><div class="roi-label">Select Your P3 Plan</div>' +
          '<div class="roi-plans">' +
            '<div class="roi-plan active" data-plan="essential"><div class="roi-plan-name">Essential</div><div class="roi-plan-price">$10,000/yr</div><div class="roi-plan-desc">Core matching + analytics</div></div>' +
            '<div class="roi-plan" data-plan="premium"><div class="roi-plan-name">Premium</div><div class="roi-plan-price">$25,000/yr</div><div class="roi-plan-desc">Full OS + longitudinal data</div></div>' +
          '</div></div>' +
      '</div>' +
      // Right: Results
      '<div class="roi-results">' +
        '<h3>Your Projected Impact</h3>' +
        '<div class="roi-metric"><div class="roi-metric-label">Mentor Matches Created</div><div class="roi-metric-value" id="roi-matches">360</div><div class="roi-metric-detail" id="roi-matches-d">at 72% match rate in 30 days</div></div>' +
        '<div class="roi-metric"><div class="roi-metric-label">Projected Retention Lift</div><div class="roi-metric-value" id="roi-retention">+12%</div><div class="roi-metric-detail" id="roi-retention-d">43 students retained YoY</div></div>' +
        '<div class="roi-metric"><div class="roi-metric-label">Tuition Revenue Saved</div><div class="roi-metric-value" id="roi-revenue">$1.1M</div><div class="roi-metric-detail" id="roi-revenue-d">retained students × annual tuition value</div></div>' +
        '<div class="roi-metric"><div class="roi-metric-label">Cost Per Student</div><div class="roi-metric-value" id="roi-cost">$20</div><div class="roi-metric-detail" id="roi-cost-d">vs. $500+ for traditional mentorship programs</div></div>' +
        '<div class="roi-highlight"><div class="roi-big-num" id="roi-roi">108x</div><div class="roi-big-label">estimated return on investment</div></div>' +
        '<a href="mailto:team@pulseofp3.org?subject=ROI%20Analysis%20Request" class="roi-cta">Request a Custom Analysis</a>' +
      '</div>' +
    '</div>' +
    '<a href="/" class="roi-back">Back to Home</a>' +
  '</div></section>';

  wrapper.appendChild(roiPage);

  // ========== RENDER FOOTER ==========
  var footerEl = document.createElement('footer');
  footerEl.className = 'roi-footer';
  footerEl.innerHTML = '<div class="roi-ft-inner">' +
    '<div class="roi-ft-grid">' +
      '<div class="roi-ft-brand-col">' +
        '<div class="roi-ft-brand"><img src="https://cdn.prod.website-files.com/69b02f65f0068e9fb16f09f7/69b02f65f0068e9fb16f0df1_P3%20Logo.svg" alt="P3"></div>' +
        '<p class="roi-ft-tagline">Unlocking life-changing opportunities for young visionaries.</p>' +
        '<p class="roi-ft-tagline" style="font-size:.72rem;">Chicago, IL</p>' +
      '</div>' +
      '<div class="roi-ft-col"><h4>Platform</h4>' +
        '<a href="/for-students">For Students</a>' +
        '<a href="/partner">For Institutions</a>' +
        '<a href="/for-mentors">For Mentors</a>' +
        '<a href="/download">Get the App</a>' +
      '</div>' +
      '<div class="roi-ft-col"><h4>About</h4>' +
        '<a href="/about/about">Our Story</a>' +
        '<a href="/about/in-the-press">In the Press</a>' +
        '<a href="/about/partners">Partners</a>' +
        '<a href="/scholarships">Scholarships</a>' +
      '</div>' +
      '<div class="roi-ft-col"><h4>Connect</h4>' +
        '<a href="/about/contact">Contact Us</a>' +
        '<a href="/donate">Donate</a>' +
        '<a href="mailto:team@pulseofp3.org">team@pulseofp3.org</a>' +
      '</div>' +
    '</div>' +
    '<div class="roi-ft-bottom">' +
      '<div class="roi-ft-copy">&copy; 2026 Pulse of Perseverance Project. All rights reserved.</div>' +
      '<div class="roi-ft-links">' +
        '<a href="/app-privacy-policy">Privacy Policy</a>' +
        '<a href="/app-terms-conditions">Terms &amp; Conditions</a>' +
      '</div>' +
    '</div>' +
  '</div>';
  wrapper.appendChild(footerEl);

  // ========== CALCULATION ENGINE ==========
  var slider = document.getElementById('roi-sc');
  var sliderDisplay = document.getElementById('roi-sd');
  var plans = document.querySelectorAll('.roi-plan');

  var currentPlan = 'essential';

  // Plan toggle
  plans.forEach(function(p) {
    p.addEventListener('click', function() {
      plans.forEach(function(pp) { pp.classList.remove('active'); });
      p.classList.add('active');
      currentPlan = p.getAttribute('data-plan');
      recalc();
    });
  });

  // Slider display
  if (slider && sliderDisplay) {
    slider.addEventListener('input', function() {
      sliderDisplay.textContent = Number(slider.value).toLocaleString() + ' students';
      recalc();
    });
  }

  // Recalculate on select change
  ['roi-it', 'roi-tu', 'roi-mp'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('change', recalc);
  });

  function recalc() {
    var students = Number(slider.value);
    var tuition = Number(document.getElementById('roi-tu').value);
    var program = document.getElementById('roi-mp').value;
    var planCost = currentPlan === 'premium' ? 25000 : 10000;

    // Match rate varies by existing program
    var matchRates = { none: 0.72, informal: 0.68, formal: 0.60, digital: 0.50 };
    var matchRate = matchRates[program] || 0.72;
    var matches = Math.round(students * matchRate);

    // Retention lift varies by plan and program
    var baseRetention = currentPlan === 'premium' ? 0.14 : 0.12;
    if (program === 'none') baseRetention += 0.02;
    else if (program === 'digital') baseRetention -= 0.04;
    var retained = Math.round(students * baseRetention);

    // Revenue saved
    var revenue = retained * tuition;

    // Cost per student
    var costPerStudent = Math.round(planCost / students);

    // ROI
    var roi = revenue > 0 ? Math.round(revenue / planCost) : 0;

    // Format
    function fmtMoney(n) {
      if (n >= 1000000) return '$' + (n / 1000000).toFixed(1) + 'M';
      if (n >= 1000) return '$' + Math.round(n / 1000) + 'K';
      return '$' + n;
    }

    document.getElementById('roi-matches').textContent = matches.toLocaleString();
    document.getElementById('roi-matches-d').textContent = 'at ' + Math.round(matchRate * 100) + '% match rate in 30 days';
    document.getElementById('roi-retention').textContent = '+' + Math.round(baseRetention * 100) + '%';
    document.getElementById('roi-retention-d').textContent = retained.toLocaleString() + ' students retained YoY';
    document.getElementById('roi-revenue').textContent = fmtMoney(revenue);
    document.getElementById('roi-revenue-d').textContent = 'retained students \u00d7 annual tuition value';
    document.getElementById('roi-cost').textContent = '$' + costPerStudent;
    document.getElementById('roi-cost-d').textContent = 'vs. $500+ for traditional mentorship programs';
    document.getElementById('roi-roi').textContent = roi + 'x';
  }

  // Initial calc
  recalc();

})();
