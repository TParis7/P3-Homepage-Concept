(function() {
  // ========== FONTS ==========
  var fonts = document.createElement('link');
  fonts.rel = 'stylesheet';
  fonts.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Satoshi:wght@400;500;600;700&display=swap';
  document.head.appendChild(fonts);

  // ========== CSS ==========
  var css = document.createElement('style');
  css.textContent = [
    ':root{--roi-c:#D93A3A;--roi-ch:#c43232;--roi-m:#4a1020;--roi-md:#3a0c18;--roi-dk:#1a1a1a;--roi-wh:#fff;--roi-cream:#FAF6F1;--roi-lt:#6E6A66;--roi-mute:#999;--roi-hairline:#E6DED4;--roi-r:14px;--roi-tr:.3s cubic-bezier(.25,.46,.45,.94);--roi-fh:"Space Grotesk",sans-serif;--roi-fb:"Satoshi",sans-serif;--roi-fi:"Inter",sans-serif;}',

    // Reset Webflow body inflation (18px/30px line-height → 16px/1.5)
    '.roi-redesign-wrapper,.roi-redesign-wrapper *{box-sizing:border-box;}',
    '.roi-redesign-wrapper{font-size:16px!important;line-height:1.5!important;font-family:var(--roi-fb)!important;}',

    // Nav
    '.p3-nav{position:fixed;top:0;left:0;right:0;z-index:9999;display:flex;align-items:center;justify-content:space-between;padding:16px 40px;background:rgba(58,12,24,0.85);backdrop-filter:blur(12px);transition:background .3s,box-shadow .3s;}',
    '.p3-nav .p3-nav-logo{display:flex;align-items:center;text-decoration:none;}',
    '.p3-nav .p3-nav-logo img{max-height:36px;width:auto;object-fit:contain;}',
    '.p3-nav .p3-nav-links{display:flex;align-items:center;gap:28px;}',
    '.p3-nav .p3-nav-link{font-family:var(--roi-fi);font-size:.85rem;font-weight:500;color:rgba(255,255,255,0.85);text-decoration:none;transition:color var(--roi-tr);}',
    '.p3-nav .p3-nav-link:hover{color:var(--roi-wh);}',
    '.p3-nav .p3-nav-cta{font-family:var(--roi-fb);font-size:.82rem;font-weight:600;color:var(--roi-wh);background:var(--roi-c);padding:9px 20px;border-radius:100px;text-decoration:none;transition:all var(--roi-tr);}',
    '.p3-nav .p3-nav-cta:hover{background:var(--roi-ch);}',
    '.p3-nav.scrolled{background:rgba(26,26,26,0.95)!important;backdrop-filter:blur(20px)!important;box-shadow:0 2px 20px rgba(0,0,0,0.15);}',
    '@media(max-width:991px){.p3-nav{padding:16px;height:64px;}.p3-nav .p3-nav-links{display:none;}.p3-nav .p3-nav-cta{display:none;}.p3-nav .p3-nav-logo img{max-height:36px;height:36px;}}',

    // Hamburger + mobile overlay
    '.roi-hamburger{display:none;width:28px;height:28px;cursor:pointer;flex-direction:column;justify-content:center;align-items:center;gap:5px;z-index:10001;position:relative;}',
    '.roi-hamburger span{display:block;width:22px;height:2px;background:var(--roi-wh);border-radius:2px;transition:all .3s ease;}',
    '@media(max-width:991px){.roi-hamburger{display:flex;}}',
    '.roi-mobile-overlay{display:none;position:fixed;inset:0;background:rgba(26,26,26,.98);z-index:10000;flex-direction:column;align-items:center;justify-content:center;gap:24px;}',
    '.roi-mobile-overlay.open{display:flex;}',
    '.roi-mobile-overlay a{font-family:var(--roi-fb);font-size:1.2rem;color:var(--roi-wh);text-decoration:none;padding:8px 24px;transition:color .3s;}',
    '.roi-mobile-overlay a:hover{color:var(--roi-c);}',
    '.roi-mobile-close{position:absolute;top:20px;right:20px;width:32px;height:32px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1.5rem;color:var(--roi-wh);background:none;border:none;}',

    // Hero header (burgundy)
    '.roi-hero{padding:130px 28px 40px!important;background:linear-gradient(180deg,var(--roi-md) 0%,var(--roi-m) 100%)!important;text-align:center!important;color:var(--roi-wh)!important;}',
    '.roi-tag{display:inline-block!important;padding:5px 14px;border-radius:100px;font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;background:rgba(255,255,255,.1)!important;color:rgba(255,255,255,.65)!important;margin-bottom:14px;}',
    '.roi-hero h1{font-family:var(--roi-fh)!important;font-weight:700!important;font-size:clamp(1.8rem,3.5vw,2.5rem)!important;line-height:1.15;letter-spacing:-.02em;margin-bottom:10px;color:var(--roi-wh)!important;}',
    '.roi-hero h1 .accent{color:var(--roi-c)!important;}',
    '.roi-hero p{font-size:clamp(.88rem,1.3vw,1rem)!important;color:rgba(255,255,255,.55)!important;max-width:520px;margin:0 auto;line-height:1.6;}',

    // Calculator section (white bg)
    '.roi-calc-section{padding:40px 28px 48px!important;background:var(--roi-wh)!important;}',
    '.roi-calc-inner{max-width:1060px;margin:0 auto;}',

    // Two-column grid
    '.roi-grid{display:grid;grid-template-columns:1fr 1fr;gap:0;border:1px solid var(--roi-hairline);border-radius:20px;overflow:hidden;background:var(--roi-wh)!important;box-shadow:0 8px 40px -12px rgba(74,16,32,0.1);}',
    '@media(max-width:768px){.roi-grid{grid-template-columns:1fr;}}',

    // Left: Inputs
    '.roi-inputs{padding:32px;background:var(--roi-wh)!important;border-right:1px solid var(--roi-hairline);}',
    '@media(max-width:768px){.roi-inputs{border-right:none;border-bottom:1px solid var(--roi-hairline);}}',
    '.roi-inputs h3{font-family:var(--roi-fh);font-size:1rem;font-weight:700;color:var(--roi-dk)!important;margin-bottom:16px;display:flex;align-items:center;gap:8px;line-height:1.3!important;}',
    '.roi-inputs h3::before{content:"";width:4px;height:18px;background:var(--roi-c);border-radius:2px;}',
    '.roi-group{margin-bottom:16px;}',
    '.roi-label{font-size:.78rem;font-weight:600;color:var(--roi-lt);margin-bottom:6px;line-height:1.3!important;}',
    '.roi-sel{width:100%;padding:10px 12px;border:1px solid var(--roi-hairline);border-radius:10px;font-family:var(--roi-fb);font-size:.85rem;line-height:1.4!important;color:var(--roi-dk);background:var(--roi-wh);-webkit-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23999\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;padding-right:32px;cursor:pointer;transition:border-color var(--roi-tr);}',
    '.roi-sel:focus{outline:none;border-color:var(--roi-c);}',

    // Slider
    '.roi-slider{width:100%;-webkit-appearance:none;appearance:none;height:6px;border-radius:3px;background:var(--roi-hairline);outline:none;cursor:pointer;}',
    '.roi-slider::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:50%;background:var(--roi-c);cursor:pointer;box-shadow:0 2px 8px rgba(217,58,58,.3);}',
    '.roi-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:var(--roi-c);cursor:pointer;border:none;}',
    '.roi-slider-val{text-align:center;font-family:var(--roi-fh);font-size:.92rem;font-weight:700;color:var(--roi-dk);margin-top:8px;line-height:1.3!important;}',

    // Plan toggle
    '.roi-plans{display:grid;grid-template-columns:1fr 1fr;gap:10px;}',
    '.roi-plan{padding:18px 14px;border-radius:var(--roi-r);border:2px solid var(--roi-hairline);background:var(--roi-wh);cursor:pointer;text-align:center;transition:all var(--roi-tr);position:relative;}',
    '.roi-plan:hover{border-color:var(--roi-mute);}',
    '.roi-plan.active{border-color:var(--roi-c);background:#FFF5F5;box-shadow:0 4px 16px -4px rgba(217,58,58,.15);}',
    '.roi-plan-badge{display:none;position:absolute;top:-9px;left:50%;transform:translateX(-50%);font-family:var(--roi-fh);font-size:.58rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;background:var(--roi-c);color:var(--roi-wh);padding:2px 10px;border-radius:100px;white-space:nowrap;}',
    '.roi-plan.active .roi-plan-badge{display:block;}',
    '.roi-plan-name{font-family:var(--roi-fh);font-size:.95rem;font-weight:700;color:var(--roi-dk);line-height:1.2!important;}',
    '.roi-plan-price{font-size:.88rem;color:var(--roi-c);font-weight:700;margin:4px 0 2px;line-height:1.2!important;}',
    '.roi-plan-desc{font-size:.72rem;color:var(--roi-lt);line-height:1.4!important;}',

    // Right: Results
    '.roi-results{padding:32px;background:#FAFAF8!important;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;}',
    '.roi-results h3{font-family:var(--roi-fh);font-size:1rem;font-weight:700;color:var(--roi-dk)!important;margin-bottom:20px;line-height:1.3!important;}',
    '.roi-highlight{margin-bottom:24px;}',
    '.roi-big-num{font-family:var(--roi-fh);font-size:clamp(3rem,6vw,4.5rem);font-weight:700;color:var(--roi-c);line-height:1;}',
    '.roi-big-label{font-size:.82rem;color:var(--roi-mute);margin-top:4px;font-weight:500;line-height:1.3!important;}',
    '.roi-metrics{display:grid;grid-template-columns:1fr 1fr;gap:16px;width:100%;max-width:380px;margin-bottom:24px;}',
    '.roi-metric{text-align:center;padding:14px 8px;background:var(--roi-wh);border:1px solid var(--roi-hairline);border-radius:12px;}',
    '.roi-metric-value{font-family:var(--roi-fh);font-size:1.4rem;font-weight:700;color:var(--roi-dk);line-height:1.1;}',
    '.roi-metric-label{font-size:.7rem;color:var(--roi-mute);font-weight:500;margin-top:4px;line-height:1.3!important;}',
    '.roi-cta{display:inline-block;padding:13px 32px;border-radius:100px;font-family:var(--roi-fb);font-size:.88rem;font-weight:600;color:var(--roi-wh)!important;background:var(--roi-c);text-decoration:none;transition:all var(--roi-tr);box-shadow:0 4px 14px rgba(217,58,58,.25);}',
    '.roi-cta:hover{background:var(--roi-ch);transform:translateY(-1px);}',

    // Assumptions disclaimer
    '.roi-assumptions{max-width:1060px;margin:28px auto 0;padding:20px 24px;background:#F9F7F4;border:1px solid var(--roi-hairline);border-radius:12px;font-size:.75rem;line-height:1.6;color:var(--roi-lt);}',
    '.roi-assumptions strong{display:block;font-size:.72rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--roi-mute);margin-bottom:6px;}',

    // Back link
    '.roi-back{display:block;text-align:center;margin-top:20px;font-size:.82rem;color:var(--roi-mute);text-decoration:none;font-family:var(--roi-fb);}',
    '.roi-back:hover{color:var(--roi-c);}',

    // Community gallery
    '.gl{padding:40px 0;background:var(--roi-dk)!important;overflow:hidden;}',
    '.gl .ctn{max-width:1200px;margin:0 auto;padding:0 28px;}',
    '.gl-hd{text-align:center;margin-bottom:24px;}',
    '.gl-hd h2{color:var(--roi-wh)!important;margin-bottom:6px;font-size:clamp(1.3rem,2.5vw,1.8rem);font-family:var(--roi-fh);font-weight:700;line-height:1.15;letter-spacing:-.02em;}',
    '.gl-hd p{color:rgba(255,255,255,.45);font-size:.85rem;}',
    '.gl-wrap{position:relative;overflow:hidden;}',
    '.gl-track{display:flex;gap:12px;animation:gl-s 40s linear infinite;width:max-content;}',
    '.gl-track:hover{animation-play-state:paused;}',
    '.gl-item{width:280px;height:185px;border-radius:var(--roi-r);overflow:hidden;flex-shrink:0;background:rgba(255,255,255,.05);}',
    '.gl-item img{width:100%;height:100%;object-fit:cover;}',
    '.gl-fl,.gl-fr{position:absolute;top:0;bottom:0;width:50px;z-index:2;pointer-events:none;}',
    '.gl-fl{left:0;background:linear-gradient(90deg,var(--roi-dk),transparent);}',
    '.gl-fr{right:0;background:linear-gradient(-90deg,var(--roi-dk),transparent);}',
    '@keyframes gl-s{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}',

    // Footer
    '.roi-footer{background:var(--roi-dk)!important;color:var(--roi-wh);padding:40px 0 20px;font-family:var(--roi-fb);font-size:16px!important;line-height:1.5!important;}',
    '.roi-ft-inner{max-width:1100px;margin:0 auto;padding:0 28px;}',
    '.roi-ft-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:36px;margin-bottom:28px;}',
    '.roi-ft-brand img{height:28px;margin-bottom:12px;}',
    '.roi-ft-tagline{font-size:.82rem;color:rgba(255,255,255,.5);line-height:1.55;margin-bottom:12px;}',
    '.roi-ft-col h4{font-family:var(--roi-fh);font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.35);margin-bottom:14px;}',
    '.roi-ft-col a{display:block;font-size:.82rem;color:rgba(255,255,255,.6);text-decoration:none;padding:3px 0;transition:color var(--roi-tr);}',
    '.roi-ft-col a:hover{color:var(--roi-wh);}',
    '.roi-ft-bottom{border-top:1px solid rgba(255,255,255,.08);padding-top:16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;}',
    '.roi-ft-copy{font-size:.72rem;color:rgba(255,255,255,.3);}',
    '.roi-ft-links{display:flex;gap:16px;}',
    '.roi-ft-links a{font-size:.72rem;color:rgba(255,255,255,.3);text-decoration:none;}',
    '.roi-ft-links a:hover{color:rgba(255,255,255,.6);}',
    '@media(max-width:768px){.roi-ft-grid{grid-template-columns:1fr 1fr;}}',
    '@media(max-width:480px){.roi-ft-grid{grid-template-columns:1fr;}}'
  ].join('\n');
  document.head.appendChild(css);

  // ========== RENDER NAVBAR ==========
  var nav = document.createElement('nav');
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

  // Scroll darken effect
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
    '<a href="/download" style="background:var(--roi-c);border-radius:100px;padding:12px 28px;font-weight:600;">Get the App</a>';
  document.body.appendChild(overlay);

  var hamburger = nav.querySelector('.roi-hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function() { overlay.classList.add('open'); });
  }
  overlay.querySelector('.roi-mobile-close').addEventListener('click', function() { overlay.classList.remove('open'); });

  // ========== GALLERY IMAGE IDs ==========
  var galleryIds = [
    '1VEBoKGQSCuMfu3xja6eqq--nNyesAtbH','1xLZvOI4DTmehebDOoxhg6go144DQRAq6',
    '1-PfGnpKw5O4oP7R82z0LZeIwqPEN5RVS','1GjI1ezcUWIvsArSwuKiAQJKhKnJezqlb',
    '1qlunFiyvQZ0Bm9W7cf72HobYxvcdn2Iv','1NwPpiTolw-yWfSlpJSgF27vjCF38zFqJ',
    '1fvZGnClfRDra7-e_OE8ZL3RH6vn8m-NY','1KTyzk9hqvayhhbgAHISIB5UrxySmNQ3W',
    '1p_JXeXs3FgEp7EtBK39gDu95R8IlQY_q','1JQpeZKiRHm8YOVS5BBOx2cvX0eK_6IcG',
    '1pzIHKXrF4QsXxuwaml4WIbopI0LHCOLF','1_bkjZcAAEmeQ36acIE7ZR4rhYyGgHK8u',
    '1X8mHOZGo5yeZlh0RSiim_sOITnbGDyrO','10RpJT0-T1eSPTar7HODCk2wAPSOf_rKf',
    '1UDWRuNdQsynpqRV7YE-0RLIZ28V9pA7A'
  ];
  var galleryItems = galleryIds.map(function(id) {
    return '<div class="gl-item"><img src="https://drive.google.com/thumbnail?id=' + id + '&sz=w640" alt="P3 Community" loading="lazy" onerror="this.parentElement.style.display=\'none\'"></div>';
  });
  var galleryTrack = galleryItems.concat(galleryItems).join('');

  // ========== BUILD PAGE CONTENT ==========
  var container = document.createElement('div');
  container.className = 'roi-redesign-wrapper';
  container.innerHTML =
    // HERO
    '<section class="roi-hero">' +
      '<div class="roi-tag">ROI Calculator</div>' +
      '<h1>Impact You Can <span class="accent">Measure</span></h1>' +
      '<p>Estimate the impact of pairing your students with mentors through the P3 platform.</p>' +
    '</section>' +

    // CALCULATOR
    '<section class="roi-calc-section"><div class="roi-calc-inner"><div class="roi-grid">' +

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
            '<div class="roi-plan active" data-plan="essential"><span class="roi-plan-badge">Selected</span><div class="roi-plan-name">Essential</div><div class="roi-plan-price">$10,000/yr</div><div class="roi-plan-desc">Core matching + analytics</div></div>' +
            '<div class="roi-plan" data-plan="premium"><span class="roi-plan-badge">Selected</span><div class="roi-plan-name">Premium</div><div class="roi-plan-price">$25,000/yr</div><div class="roi-plan-desc">Dashboard + longitudinal data</div></div>' +
          '</div></div>' +
      '</div>' +

      // Right: Results
      '<div class="roi-results">' +
        '<h3>Your Projected Impact</h3>' +
        '<div class="roi-highlight"><div class="roi-big-num" id="roi-roi">75x</div><div class="roi-big-label">estimated return on investment</div></div>' +
        '<div class="roi-metrics">' +
          '<div class="roi-metric"><div class="roi-metric-value" id="roi-savings">$240K</div><div class="roi-metric-label">Savings vs. Traditional</div></div>' +
          '<div class="roi-metric"><div class="roi-metric-value" id="roi-retention">+6%</div><div class="roi-metric-label">Retention Lift</div></div>' +
          '<div class="roi-metric"><div class="roi-metric-value" id="roi-revenue">$750K</div><div class="roi-metric-label">Tuition Saved</div></div>' +
          '<div class="roi-metric"><div class="roi-metric-value" id="roi-cost">$20</div><div class="roi-metric-label">Cost Per Student</div></div>' +
        '</div>' +
        '<a href="mailto:team@pulseofp3.org?subject=ROI%20Analysis%20Request" class="roi-cta">Request a Custom Analysis &rarr;</a>' +
      '</div>' +

    '</div>' +

    // Assumptions disclaimer
    '<div class="roi-assumptions"><strong>Assumptions &amp; Methodology</strong>' +
      'Projections are estimates based on published research and P3 internal benchmarks. Retention lift is based on studies showing mentored students persist at 8\u201314% higher rates than unmentored peers (source: MENTOR National). A 50% attribution factor is applied to account for other institutional supports. \u201CTuition Saved\u201D reflects retained students who would otherwise have left, multiplied by the selected annual tuition. \u201CSavings vs. Traditional\u201D compares P3 per-student cost against the ~$500/student benchmark for traditional 1-on-1 mentorship programs (source: MENTOR Cost-Benefit Analysis). Actual results will vary based on implementation, student population, and institutional context. P3 recommends a pilot cohort to validate projected outcomes.</div>' +

    '<a href="/" class="roi-back">&larr; Back to Home</a>' +
    '</div></section>' +

    // COMMUNITY GALLERY
    '<section class="gl"><div class="ctn"><div class="gl-hd"><h2>The P3 community in action</h2><p>Mentorship moments, campus events, and career breakthroughs</p></div></div>' +
    '<div class="gl-wrap"><div class="gl-fl"></div><div class="gl-fr"></div><div class="gl-track">' + galleryTrack + '</div></div></section>';

  // ========== INSERT INTO PAGE ==========
  document.body.appendChild(container);

  // ========== RENDER FOOTER ==========
  var footerEl = document.createElement('footer');
  footerEl.className = 'roi-footer';
  footerEl.innerHTML = '<div class="roi-ft-inner">' +
    '<div class="roi-ft-grid">' +
      '<div>' +
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
  document.body.appendChild(footerEl);

  // ========== CALCULATION ENGINE (v2 — attribution-adjusted) ==========
  var slider = document.getElementById('roi-sc');
  var sliderDisplay = document.getElementById('roi-sd');
  var plans = document.querySelectorAll('.roi-plan');
  var currentPlan = 'essential';
  var itSelect = document.getElementById('roi-it');
  var tuSelect = document.getElementById('roi-tu');

  // Auto-link institution type to default tuition
  var tuitionDefaults = {
    '4-Year University': '25000',
    'Community College': '5000',
    'HBCU': '12000',
    'K-12 District': '5000',
    'Nonprofit / CBO': '5000'
  };
  if (itSelect) {
    itSelect.addEventListener('change', function() {
      var def = tuitionDefaults[itSelect.value];
      if (def && tuSelect) {
        tuSelect.value = def;
      }
      recalc();
    });
  }

  // Plan toggle
  plans.forEach(function(p) {
    p.addEventListener('click', function() {
      plans.forEach(function(pp) { pp.classList.remove('active'); });
      p.classList.add('active');
      currentPlan = p.getAttribute('data-plan');
      recalc();
    });
  });

  // Slider
  if (slider && sliderDisplay) {
    slider.addEventListener('input', function() {
      sliderDisplay.textContent = Number(slider.value).toLocaleString() + ' students';
      recalc();
    });
  }

  // Other inputs
  ['roi-tu', 'roi-mp'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('change', recalc);
  });

  function recalc() {
    var students = Number(slider.value);
    var tuition = Number(tuSelect.value);
    var program = document.getElementById('roi-mp').value;
    var planCost = currentPlan === 'premium' ? 25000 : 10000;

    // Retention lift (research-based: mentored students persist 8-14% higher)
    var baseRetention = currentPlan === 'premium' ? 0.12 : 0.10;
    if (program === 'none') baseRetention += 0.02;
    else if (program === 'informal') baseRetention += 0.01;
    else if (program === 'formal') baseRetention -= 0.01;
    else if (program === 'digital') baseRetention -= 0.03;

    // Attribution factor: 50% discount for defensibility
    var attribution = 0.50;
    var adjustedRetention = baseRetention * attribution;

    // Calculate outputs
    var retained = Math.round(students * adjustedRetention);
    var tuitionSaved = retained * tuition;
    var costPerStudent = Math.round(planCost / students);
    var roiRaw = tuitionSaved > 0 ? tuitionSaved / planCost : 0;
    var roi = roiRaw < 10 ? (Math.round(roiRaw * 10) / 10) : Math.round(roiRaw);

    // Program savings: P3 cost vs. traditional mentorship (~$500/student)
    var traditionalCost = students * 500;
    var programSavings = traditionalCost - planCost;
    if (programSavings < 0) programSavings = 0;

    function fmtMoney(n) {
      if (n >= 1000000) return '$' + (n / 1000000).toFixed(1) + 'M';
      if (n >= 1000) return '$' + Math.round(n / 1000) + 'K';
      return '$' + n;
    }

    document.getElementById('roi-savings').textContent = fmtMoney(programSavings);
    document.getElementById('roi-retention').textContent = '+' + Math.round(adjustedRetention * 100) + '%';
    document.getElementById('roi-revenue').textContent = fmtMoney(tuitionSaved);
    document.getElementById('roi-cost').textContent = '$' + costPerStudent;
    document.getElementById('roi-roi').textContent = (roi % 1 === 0 ? roi : roi.toFixed(1)) + 'x';
  }

  // Initial calculation
  recalc();

})();
