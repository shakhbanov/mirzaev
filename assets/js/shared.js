// Interactivity only: mobile menu, cookie banner, reveal animation.
// Header/footer/floater are now hardcoded into each HTML page for SEO.

(function () {
  function initMobileMenu() {
    const burger = document.getElementById('burgerBtn');
    const drawer = document.getElementById('mobileNav');
    const closeBtn = document.getElementById('mobileNavClose');
    if (!burger || !drawer) return;
    function close() {
      drawer.classList.remove('is-open');
      burger.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    function open() {
      drawer.classList.add('is-open');
      burger.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    burger.addEventListener('click', () => drawer.classList.contains('is-open') ? close() : open());
    if (closeBtn) closeBtn.addEventListener('click', close);
    drawer.querySelectorAll('.mobile-nav__list a').forEach(a => a.addEventListener('click', close));
  }

  function initCookieBanner() {
    try {
      if (localStorage.getItem('dm_cookie_ok')) return;
    } catch (e) { return; }
    const html = `
      <div class="cookie-banner" id="cookieBanner" role="dialog" aria-label="Уведомление о cookie">
        <div class="cookie-banner__inner">
          <p class="cookie-banner__text">Мы используем на сайте куки. В интернете без них никак.</p>
          <button class="btn cookie-banner__btn" id="cookieAccept">Согласен</button>
        </div>
      </div>`;
    document.body.insertAdjacentHTML('beforeend', html);
    requestAnimationFrame(() => {
      const cb = document.getElementById('cookieBanner');
      if (cb) cb.classList.add('is-shown');
    });
    const accept = document.getElementById('cookieAccept');
    if (accept) accept.addEventListener('click', () => {
      try { localStorage.setItem('dm_cookie_ok', '1'); } catch (e) {}
      const cb = document.getElementById('cookieBanner');
      if (cb) { cb.classList.remove('is-shown'); setTimeout(() => cb.remove(), 300); }
    });
  }

  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach(e => e.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    els.forEach(e => io.observe(e));
  }

  function init() {
    initMobileMenu();
    initCookieBanner();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Backwards compat: legacy DM.mount(key) calls become no-ops.
  window.DM = { mount() {} };
})();
