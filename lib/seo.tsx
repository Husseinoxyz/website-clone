import type { Metadata } from "next";
import { cookies, headers } from "next/headers";

import { LANG_COOKIE, LANG_HEADER, localizedHref, type Lang } from "@/lib/i18n-config";

export const SITE_URL = "https://international.oxyzhealth.com";

const SITE_NAME = { en: "OXYZ International", ar: "OXYZ للصحة الدولية" };
const OG_IMAGE = { en: "/og-image.png", ar: "/og-image-ar.png" };

type PageText = { name: string; title: string; description: string };

// Every page that should appear in search results. Pages left out here are not
// in the sitemap (see app/sitemap.ts) and have no Arabic URL (see AR_ROUTED_PAGES).
export const SEO_PAGES: Record<string, { en: PageText; ar: PageText }> = {
  "/": {
    en: {
      name: "Home",
      title: "Global Regenerative Medicine Summit 2026 | OXYZ International",
      description:
        "OXYZ Global Regenerative Medicine Summit, Kuala Lumpur, 20-24 November 2026. Hands-on stem cell, biological medicine and peptide training with certification.",
    },
    ar: {
      name: "الرئيسية",
      title: "القمة العالمية للطب التجديدي 2026 | OXYZ للصحة الدولية",
      description:
        "قمة OXYZ العالمية للطب التجديدي في كوالالمبور، 20-24 نوفمبر 2026. تدريب عملي على الخلايا الجذعية والطب البيولوجي والببتيدات مع شهادة معتمدة دولياً.",
    },
  },
  "/about": {
    en: {
      name: "About OXYZ",
      title: "About Us: Building Global Medical Ecosystems",
      description:
        "OXYZ Health International is a global regenerative medical ecosystem integrating medical science, structured clinical systems and scalable business models.",
    },
    ar: {
      name: "عن OXYZ",
      title: "من نحن: نبني منظومات طبية عالمية",
      description:
        "OXYZ للصحة الدولية منظومة طبية تجديدية ذات حضور عالمي، تجمع بين العلوم الطبية والأنظمة السريرية المنظّمة ونماذج الأعمال القابلة للتوسّع.",
    },
  },
  "/training": {
    en: {
      name: "2026 Summit",
      title: "Regenerative Medicine Summit 2026, Kuala Lumpur",
      description:
        "Certification summit for healthcare professionals in Kuala Lumpur, 20-24 November 2026. Hands-on training in stem cell, biological medicine and peptide therapy.",
    },
    ar: {
      name: "قمة 2026",
      title: "قمة الطب التجديدي 2026 في كوالالمبور",
      description:
        "قمة تدريبية معتمدة للمهنيين الصحيين في كوالالمبور، 20-24 نوفمبر 2026. تدريب عملي مكثّف على الخلايا الجذعية والطب البيولوجي والعلاج بالببتيدات.",
    },
  },
  "/program": {
    en: {
      name: "Program",
      title: "Summit Program & Executive Delegate Package",
      description:
        "The Executive Delegate Package: 3-day training, 4 nights hotel stay, accredited certification, gala dinner and 6 months of clinical mentoring and growth support.",
    },
    ar: {
      name: "البرنامج",
      title: "برنامج القمة وباقة المندوب التنفيذي",
      description:
        "ما تتضمنه باقة المندوب التنفيذي: تدريب لمدة 3 أيام، إقامة 4 ليالٍ، شهادة معتمدة دولياً، حفل عشاء، و6 أشهر من الإرشاد السريري ودعم نمو العيادة.",
    },
  },
  "/5d-model": {
    en: {
      name: "The 5D Model",
      title: "The 5D Regenerative Medical Model",
      description:
        "The OXYZ 5D Regenerative Medical Model is a structured framework guiding patient care, clinical decisions and operational consistency in regenerative medicine.",
    },
    ar: {
      name: "نموذج 5D",
      title: "نموذج 5D الطبي التجديدي",
      description:
        "نموذج OXYZ الطبي التجديدي 5D إطار منظّم يوجّه رعاية المرضى والقرارات السريرية واتساق العمليات في ممارسة الطب التجديدي.",
    },
  },
  "/past-trainings": {
    en: {
      name: "Past Trainings",
      title: "Past Regenerative Medicine Summits",
      description:
        "Highlights, videos and photos from past OXYZ International regenerative medicine summits, bringing together healthcare professionals from around the world.",
    },
    ar: {
      name: "الدورات السابقة",
      title: "قمم الطب التجديدي السابقة",
      description:
        "أبرز اللحظات والفيديوهات والصور من قمم OXYZ الدولية السابقة للطب التجديدي، التي جمعت مهنيين صحيين من مختلف أنحاء العالم.",
    },
  },
  "/business-enquiries": {
    en: {
      name: "Business Enquiries",
      title: "Business Enquiries & Partnerships",
      description:
        "Explore partnership opportunities with OXYZ Health International, an international ecosystem where healthcare professionals learn, collaborate and grow.",
    },
    ar: {
      name: "الشراكات والأعمال",
      title: "الشراكات والاستفسارات التجارية",
      description:
        "اكتشف فرص الشراكة مع OXYZ للصحة الدولية، المنظومة الدولية التي يتعلّم فيها المهنيون الصحيون ويتعاونون وينمون.",
    },
  },
  "/gallery": {
    en: {
      name: "Gallery",
      title: "Summit & Training Gallery",
      description:
        "A visual archive of OXYZ international trainings: clinical exchange, medical workshops and the global community shaping regenerative medicine.",
    },
    ar: {
      name: "معرض الصور",
      title: "معرض صور القمم والتدريبات",
      description:
        "أرشيف مصوّر لتدريبات OXYZ الدولية: تبادل سريري وورش عمل طبية ومجتمع عالمي يرسم ملامح الطب التجديدي.",
    },
  },
  "/contact": {
    en: {
      name: "Contact",
      title: "Contact Us",
      description:
        "Contact OXYZ Health International about the 2026 summit, training or partnership opportunities by email, WhatsApp or our enquiry form.",
    },
    ar: {
      name: "تواصل معنا",
      title: "تواصل معنا",
      description:
        "تواصل مع OXYZ للصحة الدولية بخصوص قمة 2026 أو التدريب أو فرص الشراكة عبر البريد الإلكتروني أو واتساب أو نموذج الاستفسار.",
    },
  },
  "/register": {
    en: {
      name: "Registration",
      title: "Register for Summit 2026",
      description:
        "Register for the OXYZ Global Regenerative Medicine Summit, Kuala Lumpur, 20-24 November 2026. Executive Delegate Package with training, hotel and certification.",
    },
    ar: {
      name: "التسجيل",
      title: "سجّل في قمة 2026",
      description:
        "سجّل في قمة OXYZ العالمية للطب التجديدي في كوالالمبور، 20-24 نوفمبر 2026. باقة المندوب التنفيذي تشمل التدريب والإقامة الفندقية والشهادة المعتمدة.",
    },
  },
};

/** The /ar URLs decide the language for search engines; otherwise the visitor's saved choice does. */
export async function getRequestLang(): Promise<Lang> {
  if ((await headers()).get(LANG_HEADER) === "ar") return "ar";
  return (await cookies()).get(LANG_COOKIE)?.value === "ar" ? "ar" : "en";
}

/** Absolute English and Arabic URLs of a page. */
export function pageUrls(path: string) {
  return {
    en: `${SITE_URL}${path === "/" ? "" : path}`,
    ar: `${SITE_URL}${path === "/" ? "/ar" : localizedHref(path, "ar")}`,
  };
}

export function siteMetadata(lang: Lang): Metadata {
  const isAr = lang === "ar";
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME[lang],
    title: { default: SEO_PAGES["/"][lang].title, template: `%s | ${SITE_NAME[lang]}` },
    description: SEO_PAGES["/"][lang].description,
    keywords: isAr
      ? ["الطب التجديدي", "الخلايا الجذعية", "الطب البيولوجي", "العلاج بالببتيدات", "مؤتمر طبي", "OXYZ"]
      : ["regenerative medicine", "stem cell training", "biological medicine", "peptide therapy", "medical conference", "OXYZ Health"],
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    icons: { icon: "/Logo1.png", apple: "/Logo1.png" },
    // The site has its own English/Arabic switch, so stop the browser offering Google Translate.
    other: { google: "notranslate" },
  };
}

export async function pageMetadata(path: string): Promise<Metadata> {
  const lang = await getRequestLang();
  const page = SEO_PAGES[path][lang];
  const urls = pageUrls(path);
  const title = path === "/" ? { absolute: page.title } : page.title;
  const socialTitle = path === "/" ? page.title : `${page.title} | ${SITE_NAME[lang]}`;
  return {
    title,
    description: page.description,
    alternates: {
      canonical: urls[lang],
      languages: { en: urls.en, ar: urls.ar, "x-default": urls.en },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME[lang],
      url: urls[lang],
      title: socialTitle,
      description: page.description,
      locale: lang === "ar" ? "ar_AR" : "en_US",
      alternateLocale: lang === "ar" ? "en_US" : "ar_AR",
      images: [{ url: OG_IMAGE[lang], width: 1200, height: 630, alt: SEO_PAGES["/"][lang].title }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: page.description,
      images: [OG_IMAGE[lang]],
    },
  };
}

/** For pages kept out of search results. Clears the canonical a parent page would otherwise pass down. */
export function noIndex(title: string): Metadata {
  return { title, robots: { index: false, follow: true }, alternates: null };
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** Who runs the site; rendered on every page from the root layout. */
export function SiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: "OXYZ Health International",
            url: SITE_URL,
            logo: `${SITE_URL}/logo.png`,
            email: "global@oxyzhealth.com",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              telephone: "+65-8616-3762",
              email: "global@oxyzhealth.com",
              availableLanguage: ["English", "Arabic"],
            },
          },
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            name: SITE_NAME.en,
            alternateName: SITE_NAME.ar,
            url: SITE_URL,
            inLanguage: ["en", "ar"],
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
        ],
      }}
    />
  );
}

// Pages about the summit itself get the Event rich result.
const EVENT_PAGES = ["/", "/training", "/register"];

/** Breadcrumb trail for a page, plus the summit Event where it applies. */
export async function PageJsonLd({ path }: { path: string }) {
  const lang = await getRequestLang();
  const home = SEO_PAGES["/"][lang];
  const page = SEO_PAGES[path][lang];
  const urls = pageUrls(path);

  return (
    <>
      {path !== "/" && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: home.name, item: pageUrls("/")[lang] },
              { "@type": "ListItem", position: 2, name: page.name, item: urls[lang] },
            ],
          }}
        />
      )}
      {EVENT_PAGES.includes(path) && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Event",
            name: lang === "ar" ? "القمة العالمية للطب التجديدي 2026" : "Global Regenerative Medicine Summit 2026",
            description: home.description,
            startDate: "2026-11-20",
            endDate: "2026-11-24",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            inLanguage: lang,
            image: [`${SITE_URL}${OG_IMAGE[lang]}`],
            url: pageUrls("/training")[lang],
            location: {
              "@type": "Place",
              name: lang === "ar" ? "كوالالمبور، ماليزيا" : "Kuala Lumpur, Malaysia",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kuala Lumpur",
                addressCountry: "MY",
              },
            },
            organizer: { "@type": "Organization", name: "OXYZ Health International", url: SITE_URL },
            offers: {
              "@type": "Offer",
              name: lang === "ar" ? "باقة المندوب التنفيذي" : "Executive Delegate Package",
              price: "3000",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: pageUrls("/register")[lang],
            },
          }}
        />
      )}
    </>
  );
}
