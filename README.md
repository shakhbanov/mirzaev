# doctor-mirzaev.ru

Статический сайт врача-уролога Мирзаева Заура Айдиновича.
Очный приём в Ростове-на-Дону и онлайн-консультации.

## Стек

- Чистый HTML / CSS / Vanilla JS — без бандлеров.
- Общий header/footer/floater монтируется через `assets/js/shared.js` (функция `DM.mount(<key>)`).
- Дизайн-токены в `assets/css/styles.css` (CSS-переменные).
- Шрифты — Google Fonts (Manrope, Instrument Serif, JetBrains Mono).

## Структура

```
.
├── index.html              главная
├── about.html              о враче
├── services.html           услуги
├── online.html             онлайн-консультация
├── reviews.html            отзывы
├── faq.html                FAQ + IPSS-опросник
├── contacts.html           контакты
├── 404.html                страница 404
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── CNAME                   кастомный домен GitHub Pages
├── .nojekyll               отключает Jekyll-сборку на Pages
├── .github/workflows/
│   └── pages.yml           деплой на GitHub Pages
└── assets/
    ├── css/styles.css
    ├── js/shared.js
    └── img/
        └── doctor.jpg
```

## Локальный просмотр

```bash
python3 -m http.server 8080
# открыть http://localhost:8080
```

## Деплой на GitHub Pages

1. Запушить в репозиторий на GitHub.
2. Settings → Pages → Source: **GitHub Actions**.
3. Workflow `.github/workflows/pages.yml` соберёт и задеплоит.
4. Кастомный домен указан в `CNAME` (`doctor-mirzaev.ru`). DNS:
   - `A @` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - `CNAME www` → `<username>.github.io`

## Что осталось сделать вручную

- Положить картинки в `assets/img/`:
  - `favicon.ico`
  - `apple-touch-icon.png` (180×180)
  - `icon-192.png`, `icon-512.png` (для PWA-манифеста)
  - `og.jpg` (1200×630, для Open Graph / Twitter Card)
- Перепроверить телефон, e-mail и адрес в `index.html` (JSON-LD `Physician`).
- Заменить `<username>` на реальный логин GitHub в DNS.

## Контент

- Шапка/подвал/плавающая WhatsApp-кнопка генерируются JS-ом — менять их в [`assets/js/shared.js`](assets/js/shared.js).
- Page-local CSS лежит в `<style>`-блоке внутри каждой HTML — это сознательно, чтобы каждая страница была самодостаточной.
