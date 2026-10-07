/* Lapis Performance — mobile menu (all pages). Builds a burger + sheet from the header's own links. */
(function(){
  var d = document, root = d.documentElement;
  var header = d.querySelector('header'); if (!header) return;
  var nav = header.querySelector('nav[aria-label="Principale"]'); if (!nav) return;
  var right = header.querySelector('.nav_right, .o-nav_right, .c-nav_right') || nav.parentNode;
  var cta = right.querySelector('a.button, a.o-button, a.c-button');
  var login = right.querySelector('.o-nav_login');
  var mq = window.matchMedia('(max-width: 991px)');

  var btn = d.createElement('button');
  btn.type = 'button'; btn.className = 'lp-burger';
  btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-controls', 'lp-mnav'); btn.setAttribute('aria-label', 'Apri il menu');
  btn.innerHTML = '<span class="lp-burger_box" aria-hidden="true"><i></i><i></i><i></i></span>';
  right.appendChild(btn);

  var panel = d.createElement('div');
  panel.id = 'lp-mnav'; panel.className = 'lp-mnav';
  var sheet = d.createElement('nav'); sheet.className = 'lp-mnav_sheet'; sheet.setAttribute('aria-label', 'Menu');
  var list = d.createElement('div'); list.className = 'lp-mnav_list';
  var here = location.pathname.replace(/\/$/, '') || '/';
  [].forEach.call(nav.querySelectorAll('a'), function(a){
    if (a.classList.contains('nav_dd_t')) return; /* dropdown trigger: its 3 items become plain rows */
    var l = d.createElement('a'); l.className = 'lp-mnav_link'; l.href = a.getAttribute('href');
    l.textContent = (a.querySelector('b') || a).textContent.trim();
    var p = (l.pathname.replace(/\/$/, '') || '/');
    if (!l.hash && p === here) l.setAttribute('aria-current', 'page');
    list.appendChild(l);
  });
  sheet.appendChild(list);
  var foot = d.createElement('div'); foot.className = 'lp-mnav_foot';
  if (cta) {
    var c = d.createElement('a'); c.className = 'lp-mnav_cta'; c.href = cta.getAttribute('href');
    c.innerHTML = 'Richiedi l\u2019audit gratuito <span aria-hidden="true">\u2192</span>';
    foot.appendChild(c);
  }
  if (login) { var s = d.createElement('a'); s.className = 'lp-mnav_sub'; s.href = login.getAttribute('href'); s.textContent = login.textContent.trim(); foot.appendChild(s); }
  if (cta) { var n = d.createElement('p'); n.className = 'lp-mnav_note'; n.textContent = 'Gratuito, in 48 ore, senza impegno.'; foot.appendChild(n); }
  sheet.appendChild(foot); panel.appendChild(sheet); d.body.appendChild(panel);

  var open = false, lastFocus = null;
  function setTop(){ var r = header.getBoundingClientRect(); root.style.setProperty('--lp-hh', Math.max(0, Math.round(r.bottom)) + 'px'); }
  function set(v, focusBack){
    if (v === open) return; open = v;
    if (v) { lastFocus = d.activeElement; setTop(); }
    panel.classList.toggle('is-open', v); root.classList.toggle('lp-lock', v);
    btn.setAttribute('aria-expanded', v ? 'true' : 'false'); btn.setAttribute('aria-label', v ? 'Chiudi il menu' : 'Apri il menu');
    if (v) { var f = list.querySelector('a'); if (f) setTimeout(function(){ try { f.focus({preventScroll:true}); } catch(e){ f.focus(); } }, 60); }
    else if (focusBack && lastFocus && lastFocus.focus) lastFocus.focus();
  }
  btn.addEventListener('click', function(){ set(!open, true); });
  panel.addEventListener('click', function(e){
    if (e.target === panel) { set(false, true); return; }
    var a = e.target.closest && e.target.closest('a'); if (a) set(false, false);
  });
  d.addEventListener('keydown', function(e){
    if (!open) return;
    if (e.key === 'Escape') { set(false, true); return; }
    if (e.key === 'Tab') {
      var f = [btn].concat([].slice.call(panel.querySelectorAll('a')));
      var i = f.indexOf(d.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
    }
  });
  var onMq = function(){ if (!mq.matches) set(false, false); };
  if (mq.addEventListener) mq.addEventListener('change', onMq); else if (mq.addListener) mq.addListener(onMq);
  window.addEventListener('resize', function(){ if (open) setTop(); });

  /* Home: the floating CTA steps aside as soon as the audit form starts entering the screen */
  var sticky = d.getElementById('sticky-cta'), audit = d.getElementById('audit');
  if (sticky && audit && 'IntersectionObserver' in window) {
    new IntersectionObserver(function(es){ sticky.classList.toggle('lp-hide', es[0].isIntersecting); }, {rootMargin: '0px 0px -12% 0px'}).observe(audit);
  }
})();
