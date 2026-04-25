/**
 * Site-wide constants used by SEO components, JSON-LD, header/footer, etc.
 * Single source of truth for contact info, geo, social profiles.
 */

export const SITE = {
  url: 'https://doctor-mirzaev.ru',
  name: 'Доктор Мирзаев',
  shortName: 'Др. Мирзаев',
  doctor: {
    fullName: 'Мирзаев Заур Айдинович',
    initials: 'З.А.',
    titleSuffix: 'к.м.н.',
    jobTitle: 'Врач-уролог, оперирующий хирург, кандидат медицинских наук',
    specialty: 'Urology',
    alumniOf: 'Ростовский государственный медицинский университет',
    operationsCount: '100+',
    rating: 4.9,
    ratingCount: 59,
  },
  contacts: {
    phone: '+7 928 966-66-10',
    phoneE164: '+79289666610',
    whatsapp: 'https://wa.me/79289666610',
    instagram: 'https://instagram.com/uromirzaev',
    prodoctorov: 'https://prodoctorov.ru/rostov-na-donu/vrach/751335-mirzaev/',
    email: 'hello@doctor-mirzaev.ru',
  },
  clinic: {
    name: 'ГКБ № 20 · Поликлиника',
    streetAddress: 'Коммунистический проспект, 39а',
    locality: 'Ростов-на-Дону',
    region: 'Ростовская область',
    postalCode: '344091',
    country: 'RU',
    geo: { lat: 47.206696, lng: 39.622235 },
    hoursHuman: 'Пятница, 14:00 — 20:00',
  },
  metrika: {
    id: 108756990,
  },
  pricing: {
    onlineConsult: 3500,
  },
} as const;

/**
 * Primary navigation. Used by Header and MobileNav.
 * `key` matches the page slug for active-link detection.
 */
export const NAV: ReadonlyArray<{ href: string; label: string; key: string }> = [
  { href: '/',          label: 'Главная',  key: 'home' },
  { href: '/about',     label: 'О враче',  key: 'about' },
  { href: '/services',  label: 'Услуги',   key: 'services' },
  { href: '/reviews',   label: 'Отзывы',   key: 'reviews' },
  { href: '/faq',       label: 'FAQ',      key: 'faq' },
  { href: '/contacts',  label: 'Контакты', key: 'contacts' },
];

/**
 * Disease landing pages — surfaced in footer and 404 secondary nav.
 */
export const DISEASES: ReadonlyArray<{ href: string; label: string; short: string }> = [
  { href: '/prostatitis',           label: 'Лечение простатита',         short: 'Простатит' },
  { href: '/prostate-adenoma',      label: 'Аденома простаты (ДГПЖ)',   short: 'Аденома простаты' },
  { href: '/kidney-stones',         label: 'Удаление камней в почках',  short: 'Камни в почках' },
  { href: '/erectile-dysfunction',  label: 'Эректильная дисфункция',     short: 'Эректильная дисфункция' },
  { href: '/cystitis',              label: 'Лечение цистита',            short: 'Цистит' },
];
