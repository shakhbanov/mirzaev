// Shared header/footer/floater + small helpers.
// Keeps every page consistent.

(function () {
  const NAV = [
    { href: 'index.html', label: 'Главная', key: 'home' },
    { href: 'about.html', label: 'О враче', key: 'about' },
    { href: 'services.html', label: 'Услуги', key: 'services' },
    { href: 'reviews.html', label: 'Отзывы', key: 'reviews' },
    { href: 'faq.html', label: 'FAQ', key: 'faq' },
    { href: 'contacts.html', label: 'Контакты', key: 'contacts' },
  ];

  function header(activeKey) {
    const links = NAV.map(n => `<a href="${n.href}" ${n.key === activeKey ? 'class="is-active"' : ''}>${n.label}</a>`).join('');
    const mobileLinks = NAV.map(n => `<a href="${n.href}" ${n.key === activeKey ? 'class="is-active"' : ''}>${n.label}</a>`).join('');
    return `
    <header class="site-header">
      <div class="container site-header__inner">
        <a href="index.html" class="brand">
          <span class="brand__mark">М</span>
          <span class="brand__name">
            <span>Доктор Мирзаев</span>
            <small>УРОЛОГ</small>
          </span>
        </a>
        <nav class="nav">${links}</nav>
        <a href="online.html" class="btn header-cta">Онлайн-консультация <span class="arr">→</span></a>
        <button class="burger" aria-label="Меню" id="burgerBtn"><span></span><span></span><span></span></button>
      </div>
    </header>
    <div class="mobile-nav" id="mobileNav" aria-hidden="true">
      <div class="mobile-nav__head">
        <a href="index.html" class="brand">
          <span class="brand__mark">М</span>
          <span class="brand__name"><span>Доктор Мирзаев</span><small>УРОЛОГ</small></span>
        </a>
        <button class="mobile-nav__close" id="mobileNavClose" aria-label="Закрыть">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>
      <div class="mobile-nav__list">${mobileLinks}</div>
      <div class="mobile-nav__cta">
        <a href="online.html" class="btn btn--lg btn--block">Записаться на онлайн-консультацию <span class="arr">→</span></a>
      </div>
    </div>`;
  }

  function footer() {
    return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <a href="index.html" class="brand">
              <span class="brand__mark">М</span>
              <span class="brand__name">
                <span>Мирзаев Заур Айдинович</span>
                <small>УРОЛОГ</small>
              </span>
            </a>
            <p style="margin-top:18px; font-size:14px; max-width:340px; line-height:1.6;">
              Очный приём и онлайн-консультации.<br>
              Внимательный подход и доказательная медицина.
            </p>
          </div>
          <div class="footer-col">
            <h5>Разделы</h5>
            <ul>
              <li><a href="about.html">О враче</a></li>
              <li><a href="services.html">Услуги</a></li>
              <li><a href="online.html">Онлайн-консультация</a></li>
              <li><a href="reviews.html">Отзывы</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Полезное</h5>
            <ul>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="faq.html#prep">Подготовка к приёму</a></li>
              <li><a href="faq.html#ipss">Самоопросник IPSS</a></li>
              <li><a href="faq.html#privacy">Конфиденциальность приёма</a></li>
              <li><a href="privacy.html">Обработка персональных данных</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Связаться</h5>
            <ul>
              <li><a href="tel:+79289666610">+7 928 966-66-10</a></li>
              <li><a href="https://wa.me/79289666610" target="_blank" rel="noopener">WhatsApp</a></li>
              <li><a href="https://instagram.com/uromirzaev" target="_blank" rel="noopener">Instagram*</a></li>
              <li><a href="contacts.html">Все контакты</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 doctor-mirzaev.ru · Все права защищены</span>
          <span>18+</span>
        </div>
        <p class="footer-disclaimer">
          * Meta Platforms Inc. (владелец Facebook и&nbsp;Instagram) признана экстремистской организацией; её деятельность запрещена на&nbsp;территории Российской Федерации. WhatsApp принадлежит Meta, но&nbsp;под судебное решение не&nbsp;подпадает и&nbsp;доступен в&nbsp;РФ.
        </p>
      </div>
    </footer>`;
  }

  function cookieBanner() {
    return `
    <div class="cookie-banner" id="cookieBanner" role="dialog" aria-label="Уведомление о cookie">
      <div class="cookie-banner__inner">
        <p class="cookie-banner__text">Мы используем на сайте <a href="cookies.html" class="cookie-banner__link">куки</a>. В интернете без них никак.</p>
        <button class="btn cookie-banner__btn" id="cookieAccept">Согласен</button>
      </div>
    </div>`;
  }

  function floater() {
    return `
    <div class="floater">
      <a class="floater__btn wa" href="https://wa.me/79289666610" target="_blank" rel="noopener" aria-label="WhatsApp">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.82 9.82 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.86 9.86 0 004.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01zM12.04 20.15h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 012.41 5.82c-.01 4.54-3.7 8.23-8.25 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.74 2.66 4.21 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.18-.48-.3z"/></svg>
      </a>
    </div>`;
  }

  function injectFontsAndCSS() {
    const head = document.head;
    if (!document.getElementById('__df_fonts')) {
      const pre1 = document.createElement('link');
      pre1.rel = 'preconnect'; pre1.href = 'https://fonts.googleapis.com';
      const pre2 = document.createElement('link');
      pre2.rel = 'preconnect'; pre2.href = 'https://fonts.gstatic.com'; pre2.crossOrigin = 'anonymous';
      const link = document.createElement('link');
      link.id = '__df_fonts';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap';
      head.appendChild(pre1); head.appendChild(pre2); head.appendChild(link);
    }
    if (!document.getElementById('__df_css')) {
      const css = document.createElement('link');
      css.id = '__df_css';
      css.rel = 'stylesheet';
      css.href = 'assets/css/styles.css';
      head.appendChild(css);
    }
  }

  function reveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('is-in')); return; }
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

  window.DM = {
    mount(activeKey) {
      injectFontsAndCSS();
      const h = document.getElementById('site-header');
      const f = document.getElementById('site-footer');
      const fl = document.getElementById('site-floater');
      if (h) h.outerHTML = header(activeKey);
      if (f) f.outerHTML = footer();
      if (fl) fl.outerHTML = floater();
      // cookie banner
      try {
        if (!localStorage.getItem('dm_cookie_ok')) {
          document.body.insertAdjacentHTML('beforeend', cookieBanner());
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
      } catch (e) {}
      // bind mobile menu
      const burger = document.getElementById('burgerBtn');
      const drawer = document.getElementById('mobileNav');
      const closeBtn = document.getElementById('mobileNavClose');
      function close() { drawer && drawer.classList.remove('is-open'); burger && burger.classList.remove('is-open'); document.body.style.overflow = ''; }
      function open() { drawer && drawer.classList.add('is-open'); burger && burger.classList.add('is-open'); document.body.style.overflow = 'hidden'; }
      if (burger) burger.addEventListener('click', () => drawer.classList.contains('is-open') ? close() : open());
      if (closeBtn) closeBtn.addEventListener('click', close);
      if (drawer) drawer.querySelectorAll('.mobile-nav__list a').forEach(a => a.addEventListener('click', close));
      mobileCTA(activeKey);
      reveal();
    },
  };

  // ---- Sticky bottom CTA on mobile ---------------------------------
  // Appears after the user scrolls past 60% of the viewport height,
  // hides while the mobile drawer is open or while the user is on the
  // booking page itself (where the form is the primary action).
  function mobileCTA(activeKey) {
    if (window.matchMedia('(min-width: 721px)').matches) return;
    if (activeKey === 'online' || activeKey === 'contacts') return;

    const html =
      '<div class="mobile-cta" id="mobileCta" role="region" aria-label="Запись на приём">' +
        '<div class="mobile-cta__inner">' +
          '<div class="mobile-cta__txt"><strong>Онлайн-консультация</strong>Видео 30–45 мин · заключение · 14 дней связи</div>' +
          '<a href="online.html" class="btn">Записаться <span class="arr" aria-hidden="true">→</span></a>' +
        '</div>' +
      '</div>';
    document.body.insertAdjacentHTML('beforeend', html);
    document.body.classList.add('has-mobile-cta');
    const bar = document.getElementById('mobileCta');
    const drawer = document.getElementById('mobileNav');

    const trigger = () => Math.max(window.innerHeight * 0.6, 320);
    function update() {
      if (!bar) return;
      // hide while the mobile drawer is open
      if (drawer && drawer.classList.contains('is-open')) {
        bar.classList.remove('is-shown');
        return;
      }
      if (window.scrollY > trigger()) bar.classList.add('is-shown');
      else bar.classList.remove('is-shown');
    }
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  }
})();
