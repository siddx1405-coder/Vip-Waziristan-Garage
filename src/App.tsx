import { useEffect, useState, type ReactNode } from "react";

type Language = "en" | "ar";

const copy = {
  en: {
    cr: "Commercial Registration",
    nav: ["Services", "Our work", "Location"],
    language: "العربية",
    eyebrow: "Complete automotive care in Doha",
    titleA: "Your car.",
    titleB: "Our craft.",
    intro:
      "From precision bodywork and paint to dependable engine repairs, we bring every vehicle back at its best.",
    book: "Book on WhatsApp",
    call: "Call the garage",
    status: "Now accepting service bookings",
    servicesKicker: "WHAT WE DO",
    servicesTitle: "All car services, under one roof.",
    servicesIntro:
      "Skilled workmanship, careful diagnostics and a finish we are proud to stand behind.",
    services: [
      ["Denting", "Panel correction and body repair with close attention to every line."],
      ["Painting", "Professional colour matching and controlled paint-booth finishing."],
      ["Polishing", "Paint correction and polishing for a deep, clean shine."],
      ["Engine work", "Diagnosis, mechanical repair and dependable engine servicing."],
      ["Regular service", "Routine maintenance that keeps your vehicle running smoothly."],
      ["Rim painting", "Detailed preparation and refinishing for a sharp new look."],
    ],
    workKicker: "INSIDE THE WORKSHOP",
    workTitle: "Real work. Real results.",
    workIntro: "A closer look at our body, paint, mechanical and refinishing work in Sanayya.",
    view: "View photo",
    trustTitle: "Care in every detail.",
    trustBody:
      "Every vehicle is treated with respect—from the first inspection to the final finish.",
    visitKicker: "VISIT THE GARAGE",
    visitTitle: "Easy to find. Ready to help.",
    address: "Street 14, Gate 247, Sanayya, Qatar",
    directions: "Get directions",
    contact: "Contact",
    email: "Email",
    footerLine: "Complete automotive care in Sanayya, Qatar.",
    rights: "All rights reserved.",
    built: "Made by",
    close: "Close photo",
  },
  ar: {
    cr: "السجل التجاري",
    nav: ["الخدمات", "أعمالنا", "الموقع"],
    language: "English",
    eyebrow: "عناية متكاملة بالسيارات في الدوحة",
    titleA: "سيارتك.",
    titleB: "خبرتنا.",
    intro: "من إصلاح الهيكل والطلاء الدقيق إلى صيانة المحركات الموثوقة، نعيد سيارتك إلى أفضل حالاتها.",
    book: "احجز عبر واتساب",
    call: "اتصل بالكراج",
    status: "نستقبل حجوزات الصيانة الآن",
    servicesKicker: "خدماتنا",
    servicesTitle: "جميع خدمات السيارات في مكان واحد.",
    servicesIntro: "مهارة في التنفيذ، تشخيص دقيق، ونتيجة نفخر بها.",
    services: [
      ["إصلاح الصدمات", "إصلاح الهيكل وتصحيح الألواح مع الاهتمام بأدق التفاصيل."],
      ["الصبغ", "مطابقة احترافية للألوان وطلاء عالي الجودة داخل غرفة مخصصة."],
      ["التلميع", "تصحيح الطلاء وتلميعه للحصول على لمعان عميق ونظيف."],
      ["أعمال المحرك", "تشخيص وإصلاح ميكانيكي وصيانة موثوقة للمحرك."],
      ["الصيانة الدورية", "صيانة منتظمة تحافظ على أداء سيارتك بسلاسة."],
      ["صبغ الرنجات", "تجهيز وإعادة طلاء دقيقة لمظهر جديد وأنيق."],
    ],
    workKicker: "داخل الورشة",
    workTitle: "عمل حقيقي. نتائج حقيقية.",
    workIntro: "نظرة عن قرب على أعمال الهيكل والصبغ والميكانيك في الصناعية.",
    view: "عرض الصورة",
    trustTitle: "عناية في كل تفصيل.",
    trustBody: "نتعامل مع كل سيارة باهتمام، من الفحص الأول وحتى اللمسة الأخيرة.",
    visitKicker: "زوروا الكراج",
    visitTitle: "موقع سهل وخدمة جاهزة.",
    address: "شارع 14، بوابة 247، الصناعية، قطر",
    directions: "الاتجاهات",
    contact: "تواصل معنا",
    email: "البريد الإلكتروني",
    footerLine: "عناية متكاملة بالسيارات في الصناعية، قطر.",
    rights: "جميع الحقوق محفوظة.",
    built: "تم إنشاء الموقع بواسطة",
    close: "إغلاق الصورة",
  },
};

const gallery = [
  ["denting.webp", "Bodywork preparation"],
  ["paint-olive.webp", "Professional paint work"],
  ["paint-silver.webp", "Paint booth refinishing"],
  ["rim.webp", "Rim painting and detailing"],
  ["engine.webp", "Engine repair"],
  ["paint-matte.webp", "Panel painting"],
  ["underbody-after.webp", "Underbody service"],
  ["paint-black.webp", "Paint booth finish"],
  ["underbody-before.webp", "Mechanical inspection"],
];

function Icon({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const serviceIcons = [
  <Icon>
    <path d="M4 17.5 17.5 4l2.5 2.5L6.5 20H4v-2.5Z" />
    <path d="m14.5 7 2.5 2.5" />
  </Icon>,
  <Icon>
    <path d="m7 4 10 10" />
    <path d="m14 3 7 7-4 4-7-7 4-4Z" />
    <path d="M10 13 4 19v2h2l6-6" />
  </Icon>,
  <Icon>
    <path d="M12 3c1 3 3 5 3 8a3 3 0 0 1-6 0c0-3 2-5 3-8Z" />
    <path d="M5 16c2 1 3 3 3 5M19 16c-2 1-3 3-3 5" />
  </Icon>,
  <Icon>
    <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18v3h3l6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-3-3 2.4-2.4Z" />
  </Icon>,
  <Icon>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l3 2M12 2v2M12 20v2" />
  </Icon>,
  <Icon>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
    <path d="m12 4 1 5M20 12l-5 1M12 20l-1-5M4 12l5-1" />
  </Icon>,
];

const PhoneIcon = () => (
  <Icon>
    <path d="M7 3h3l1.5 4-2 1.5a14 14 0 0 0 6 6L17 12.5l4 1.5v3c0 2-1 4-4 4C9 20 4 15 3 7c0-3 2-4 4-4Z" />
  </Icon>
);
const WhatsAppIcon = () => (
  <Icon>
    <path d="M20 11.5a8 8 0 0 1-12 7L4 20l1.5-4a8 8 0 1 1 14.5-4.5Z" />
    <path d="M9 8.5c.5 2 2 3.5 4 4l1-1 2 1v2c-4 1-8-3-7-7h2l1 2-1 1" />
  </Icon>
);

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const t = copy[language];
  const isArabic = language === "ar";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.title = isArabic ? "كراج VIP وزيرستان" : "VIP Waziristan Garage";
  }, [language, isArabic]);

  useEffect(() => {
    if (activeImage === null) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setActiveImage(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeImage]);

  return (
    <main className={isArabic ? "font-arabic" : ""}>
      <div className="cr-bar">
        <div className="page-width flex items-center justify-between">
          <span>
            {t.cr}: <strong>CR 241348</strong>
          </span>
          <a className="phone-number" dir="ltr" href="tel:+97431299961">
            +974 3129 9961
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="page-width nav-wrap">
          <a href="#" className="brand" aria-label="VIP Waziristan Garage home">
            <img src="/logo.png" alt="VIP Waziristan Garage logo" className="brand-logo" />
          </a>
          <nav aria-label="Primary navigation">
            <a href="#services">{t.nav[0]}</a>
            <a href="#work">{t.nav[1]}</a>
            <a href="#location">{t.nav[2]}</a>
          </nav>
          <button className="language-button" onClick={() => setLanguage(isArabic ? "en" : "ar")}>
            <Icon className="globe">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
            </Icon>
            {t.language}
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-shade" />
        <div className="page-width hero-content">
          <div className="hero-copy">
            <p className="eyebrow">
              <span />
              {t.eyebrow}
            </p>
            <h1>
              {t.titleA}
              <br />
              <em>{t.titleB}</em>
            </h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://wa.me/97431299961"
                target="_blank"
                rel="noreferrer"
              >
                <span className="button-icon">
                  <WhatsAppIcon />
                </span>
                {t.book}
              </a>
              <a className="button button-ghost" href="tel:+97431299961">
                <span className="button-icon">
                  <PhoneIcon />
                </span>
                {t.call}
              </a>
            </div>
            <p className="availability">
              <i />
              {t.status}
            </p>
          </div>
          <div className="hero-badge">
            <span>VIP</span>
            <strong>{isArabic ? "جودة في كل خدمة" : "QUALITY IN EVERY SERVICE"}</strong>
          </div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <p className="kicker">{t.servicesKicker}</p>
              <h2>{t.servicesTitle}</h2>
            </div>
            <p>{t.servicesIntro}</p>
          </div>
          <div className="service-grid">
            {t.services.map(([title, body], index) => (
              <article className="service-card" key={title}>
                <span className="service-icon">{serviceIcons[index]}</span>
                <span className="service-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="page-width">
          <p className="kicker">{t.workKicker}</p>
          <div className="section-heading work-heading">
            <h2>{t.workTitle}</h2>
            <p>{t.workIntro}</p>
          </div>
          <div className="gallery">
            {gallery.map(([src, alt], index) => (
              <button
                className={`gallery-item gallery-item-${index + 1}`}
                key={src}
                onClick={() => setActiveImage(index)}
                aria-label={`${t.view}: ${alt}`}
              >
                <img src={`/images/${src}`} alt={alt} loading="lazy" />
                <span>
                  <Icon>
                    <path d="M4 12s3-5 8-5 8 5 8 5-3 5-8 5-8-5-8-5Z" />
                    <circle cx="12" cy="12" r="2" />
                  </Icon>
                  {t.view}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="promise">
        <div className="page-width promise-grid">
          <div className="promise-image">
            <img
              src="/images/garage-front.webp"
              alt="VIP Waziristan Garage entrance in Sanayya"
              loading="lazy"
            />
          </div>
          <div className="promise-copy">
            <span className="promise-v">V</span>
            <p className="kicker">{isArabic ? "VIP وزيرستان" : "VIP WAZIRISTAN"}</p>
            <h2>{t.trustTitle}</h2>
            <p>{t.trustBody}</p>
            <div className="promise-points">
              <span>
                <b>01</b>
                {isArabic ? "خدمة شاملة" : "Complete service"}
              </span>
              <span>
                <b>02</b>
                {isArabic ? "عمل احترافي" : "Professional work"}
              </span>
              <span>
                <b>03</b>
                {isArabic ? "نتائج موثوقة" : "Trusted results"}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="location section" id="location">
        <div className="page-width location-grid">
          <div>
            <p className="kicker">{t.visitKicker}</p>
            <h2>{t.visitTitle}</h2>
            <div className="address-row">
              <Icon>
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </Icon>
              <div>
                <small>{isArabic ? "العنوان" : "ADDRESS"}</small>
                <strong>{t.address}</strong>
              </div>
            </div>
            <a
              className="text-link"
              href="https://www.google.com/maps/search/?api=1&query=Street+14+Gate+247+Sanayya+Qatar"
              target="_blank"
              rel="noreferrer"
            >
              {t.directions}
              <span>↗</span>
            </a>
          </div>
          <div className="contact-panel">
            <p>{t.contact}</p>
            <a href="tel:+97431299961">
              <span>
                <PhoneIcon />
              </span>
              <div>
                <small>{isArabic ? "الهاتف وواتساب" : "MOBILE & WHATSAPP"}</small>
                <strong className="phone-number" dir="ltr">
                  +974 3129 9961
                </strong>
              </div>
            </a>
            <a href="mailto:rsnijam0@gmail.com">
              <span>
                <Icon>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </Icon>
              </span>
              <div>
                <small>{t.email}</small>
                <strong>rsnijam0@gmail.com</strong>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="page-width footer-main">
          <a href="#" className="brand brand-footer">
            <img src="/logo.png" alt="VIP Waziristan Garage logo" className="brand-logo brand-logo-footer" />
          </a>
          <p>{t.footerLine}</p>
          <a
            className="footer-whatsapp"
            href="https://wa.me/97431299961"
            target="_blank"
            rel="noreferrer"
          >
            {t.book} ↗
          </a>
        </div>
        <div className="page-width footer-bottom">
          <span>
            © {new Date().getFullYear()} VIP Waziristan Garage. {t.rights}
          </span>
          <span>{t.cr}: 241348</span>
          <span>
            {t.built}{" "}
            <a href="https://www.xenosysweb.com/" target="_blank" rel="noreferrer">
              @Xenosys Qatar
            </a>
            {" · "}
            <a className="phone-number" href="tel:+97470643918">
              +974 70643918
            </a>
          </span>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href="https://wa.me/97431299961"
        target="_blank"
        rel="noreferrer"
        aria-label={t.book}
      >
        <WhatsAppIcon />
      </a>
      {activeImage !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
        >
          <button onClick={() => setActiveImage(null)} aria-label={t.close}>
            ×
          </button>
          <img
            src={`/images/${gallery[activeImage][0]}`}
            alt={gallery[activeImage][1]}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
