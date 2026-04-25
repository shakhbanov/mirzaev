# doctor-mirzaev.ru

Сайт врача-уролога Мирзаева Заура Айдиновича. Очный приём в Ростове-на-Дону (ГКБ № 20) и онлайн-консультации.

## Стек

- **[Astro 5](https://astro.build)** — статический генератор. Один HTML-файл на страницу, no JS by default.
- **[Tailwind 4](https://tailwindcss.com)** + дизайн-токены (см. `src/styles/global.css`).
- **TypeScript** во фронтматтере и `lib/`.
- Деплой — статический билд на ветку `gh-pages` (GitHub Pages в legacy-режиме, без Actions).

## Структура

```
.
├── astro.config.mjs            конфиг билдера
├── package.json
├── tsconfig.json
├── public/                     файлы as-is в корень сайта
│   ├── CNAME
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── llms.txt
│   ├── site.webmanifest
│   └── assets/img/{doctor.jpg,favicon.svg,og.svg}
├── src/
│   ├── layouts/
│   │   └── Base.astro          общий <head>, header/footer/floater/cookie/Метрика
│   ├── components/
│   │   ├── Header.astro        + бургер + мобильное меню
│   │   ├── Footer.astro
│   │   ├── Floater.astro       плавающая WhatsApp
│   │   ├── CookieBanner.astro
│   │   ├── MetrikaScript.astro Yandex.Metrika (id из lib/site)
│   │   ├── JsonLd.astro        helper для inline JSON-LD
│   │   └── RevealOnScroll.astro IntersectionObserver-анимации
│   ├── pages/                  по файлу на маршрут
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── online.astro
│   │   ├── reviews.astro
│   │   ├── faq.astro
│   │   ├── contacts.astro
│   │   ├── 404.astro
│   │   ├── prostatitis.astro
│   │   ├── prostate-adenoma.astro
│   │   ├── kidney-stones.astro
│   │   ├── erectile-dysfunction.astro
│   │   └── cystitis.astro
│   ├── lib/site.ts             контакты, NAV, цены, гео — single source of truth
│   └── styles/
│       ├── global.css          Tailwind theme + mobile/tablet polish
│       └── legacy.css          существующая дизайн-система (cls + tokens)
└── scripts/
    └── deploy.sh               билд → orphan-коммит → push в gh-pages
```

## Команды

```bash
npm install              # один раз
npm run dev              # dev-сервер на http://localhost:4321
npm run build            # → dist/
npm run preview          # served preview билда
npm run deploy           # build + push в gh-pages
npm run check            # TypeScript / Astro типы
```

## Деплой

GitHub Pages настроен в **legacy-режиме**, source = ветка `gh-pages`, root `/`. Не использует GitHub Actions — деплой пушится напрямую с локальной машины через `scripts/deploy.sh`. Сертификат Let's Encrypt выпускается автоматически.

```bash
npm run deploy
# 1. astro build → dist/
# 2. orphan-worktree на gh-pages
# 3. wipe + копировать dist/ + commit + push
```

Через ~30 секунд после push GitHub пересоберёт сайт. Проверка: https://doctor-mirzaev.ru/.

## Что осталось

- [ ] PNG-иконки для PWA (`assets/img/icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `favicon.ico`)
- [ ] Реальная OG-картинка `assets/img/og.jpg` (1200×630, JPEG/WebP)
- [ ] PWA: service worker через `@vite-pwa/astro`
- [ ] Извлечь повторяющиеся блоки в `<ServiceCard>`, `<PriceCard>`, `<Review>` (сейчас они инлайны в страницах — мигрировано 1:1)
- [ ] Перепроверить мобильные брейкпоинты на iPhone/iPad/Android
- [ ] Лиц. № в подвале (placeholder `<!-- TODO -->` в Footer.astro)

## Контактные данные

Все контакты, гео-координаты, цены, ID Яндекс.Метрики, ссылки на соцсети — в `src/lib/site.ts`. Меняйте только там.
