/* ==========================================================================
   Nexa Digital — Main Script
   Modular vanilla JS: theme, language/RTL, navbar & menu, active link,
   counters, contact form, back-to-top, year.
   ========================================================================== */
"use strict";

/* ----------------------------- Translations ----------------------------- */
const translations = {
  en: {
    meta_title: "Nexa Digital — Software & Digital Solutions",
    meta_description: "Nexa Digital — Innovative software and digital solutions for modern businesses.",

    skip_link: "Skip to content",
    logo_label: "Nexa Digital — Home",
    nav_label: "Main navigation",
    lang_toggle: "Switch to Arabic",
    theme_toggle: "Toggle dark mode",
    menu_open: "Open menu",
    menu_close: "Close menu",
    back_to_top: "Back to top",

    nav_home: "Home", nav_services: "Services", nav_about: "About",
    nav_projects: "Projects", nav_testimonials: "Testimonials", nav_contact: "Contact",

    hero_badge: "✦ Innovative Digital Agency",
    hero_title: 'We Build <span class="gradient-text">Digital Products</span> That Move Business Forward',
    hero_sub: "From concept to launch, Nexa Digital delivers scalable software, modern web experiences, and design systems that help ambitious teams ship faster and grow smarter.",
    hero_cta1: "Start a Project", hero_cta2: "View Our Work",
    hero_stat1: "Projects Delivered", hero_stat2: "Client Retention", hero_stat3: "Countries Served",

    services_eyebrow: "What We Do",
    services_title: "Services Built for Modern Teams",
    services_sub: "End-to-end capabilities that take your product from idea to impact.",
    srv1_title: "Web Development", srv1_desc: "Fast, accessible, and SEO-friendly web apps built with modern standards.",
    srv2_title: "Mobile Apps", srv2_desc: "Cross-platform iOS and Android apps with native-grade performance.",
    srv3_title: "UI / UX Design", srv3_desc: "Human-centered interfaces that turn visitors into loyal customers.",
    srv4_title: "Cloud & DevOps", srv4_desc: "Scalable infrastructure, CI/CD pipelines, and 24/7 monitoring.",
    srv5_title: "Digital Marketing", srv5_desc: "Data-driven campaigns that grow reach and revenue.",
    srv6_title: "Cybersecurity", srv6_desc: "Audit, harden, and protect your digital assets from day one.",

    about_eyebrow: "Why Choose Us",
    about_title: "A Partner, Not Just a Vendor",
    about_desc: "We combine strategy, design, and engineering under one roof. That means fewer hand-offs, faster feedback loops, and a product that feels whole — not stitched together.",
    about_f1: "Senior team on every project",
    about_f2: "Transparent weekly reporting",
    about_f3: "Post-launch support included",
    about_f4: "Fixed scope. No surprises.",
    about_cta: "Talk to Us",
    about_card_title: "Launch in Weeks",
    about_card_desc: "Our battle-tested process gets MVPs into users' hands faster.",

    stats_heading: "Nexa Digital in numbers",
    stats1: "Projects Completed", stats2: "Happy Clients",
    stats3: "Years Experience", stats4: "Team Members",

    proj_eyebrow: "Portfolio", proj_title: "Selected Projects",
    proj_sub: "A glimpse of what we've shipped for clients worldwide.",
    proj1_tag: "E-commerce", proj1_title: "Orbit Store", proj1_desc: "Headless commerce platform serving 40k+ monthly users.",
    proj2_tag: "HealthTech", proj2_title: "VitaCare App", proj2_desc: "Patient management system used in 30+ clinics.",
    proj3_tag: "FinTech", proj3_title: "PayFlow Dashboard", proj3_desc: "Real-time analytics for a global payments provider.",

    test_eyebrow: "Testimonials", test_title: "Loved by Founders & Teams",
    test1_text: '"Nexa Digital shipped our MVP in 6 weeks. Their process was clear, and the result exceeded expectations."',
    test1_name: "Sarah Mitchell", test1_role: "CEO, Orbit Store",
    test2_text: '"The most organized agency we\'ve worked with. Weekly demos kept everything on track."',
    test2_name: "Ahmed Khalid", test2_role: "CTO, VitaCare",
    test3_text: '"Their design system saved us months of work. Everything is consistent and scalable."',
    test3_name: "Layla Hassan", test3_role: "Head of Product, PayFlow",

    cta_title: "Ready to Build Something Great?",
    cta_desc: "Let's talk about your idea. Free 30-minute consultation, no strings attached.",
    cta_btn: "Book a Free Call",

    contact_eyebrow: "Contact", contact_title: "Let's Work Together",
    contact_sub: "Tell us a little about your project and we'll reply within one business day.",
    form_name: "Full Name", form_name_ph: "John Doe",
    form_email: "Email", form_email_ph: "john@example.com",
    form_subject: "Subject", form_subject_ph: "Project inquiry",
    form_message: "Message", form_message_ph: "Tell us about your project...",
    form_send: "Send Message",
    form_sending: "Sending...",
    form_success: "✓ Thanks! We'll get back to you within 24 hours.",
    form_fail: "Something went wrong. Please try again in a moment.",
    form_invalid: "Please fix the highlighted fields.",
    err_required: "This field is required.",
    err_email: "Please enter a valid email address.",
    err_min: "Please enter at least {n} characters.",

    footer_desc: "Software & digital solutions for modern businesses.",
    footer_company: "Company", footer_contact: "Get in Touch",
    footer_available: "Available for freelance projects",
    footer_contact_via: "Contact me through the platform",
    footer_rights_short: "Nexa Digital. All rights reserved."
  },

  ar: {
    meta_title: "Nexa Digital — حلول برمجية ورقمية",
    meta_description: "Nexa Digital — حلول برمجية ورقمية مبتكرة للشركات الحديثة.",

    skip_link: "انتقل إلى المحتوى",
    logo_label: "Nexa Digital — الرئيسية",
    nav_label: "القائمة الرئيسية",
    lang_toggle: "التبديل إلى الإنجليزية",
    theme_toggle: "تبديل الوضع الليلي",
    menu_open: "فتح القائمة",
    menu_close: "إغلاق القائمة",
    back_to_top: "العودة للأعلى",

    nav_home: "الرئيسية", nav_services: "خدماتنا", nav_about: "من نحن",
    nav_projects: "أعمالنا", nav_testimonials: "آراء العملاء", nav_contact: "تواصل معنا",

    hero_badge: "✦ وكالة رقمية مبتكرة",
    hero_title: 'نبني <span class="gradient-text">منتجات رقمية</span> تدفع أعمالك للأمام',
    hero_sub: "من الفكرة إلى الإطلاق، تقدّم Nexa Digital برمجيات قابلة للتوسع وتجارب ويب حديثة وأنظمة تصميم تساعد الفرق الطموحة على الإطلاق والنمو بذكاء.",
    hero_cta1: "ابدأ مشروعك", hero_cta2: "شاهد أعمالنا",
    hero_stat1: "مشروع منجز", hero_stat2: "نسبة ولاء العملاء", hero_stat3: "دولة نخدمها",

    services_eyebrow: "ما نقدمه",
    services_title: "خدمات مصممة للفرق الحديثة",
    services_sub: "قدرات متكاملة تنقل منتجك من الفكرة إلى التأثير.",
    srv1_title: "تطوير الويب", srv1_desc: "تطبيقات ويب سريعة وسهلة الوصول ومتوافقة مع SEO.",
    srv2_title: "تطبيقات الجوال", srv2_desc: "تطبيقات iOS و Android بأداء أصلي متعدد المنصات.",
    srv3_title: "تصميم UI / UX", srv3_desc: "واجهات تركز على الإنسان وتحوّل الزوار إلى عملاء أوفياء.",
    srv4_title: "السحابة و DevOps", srv4_desc: "بنية تحتية قابلة للتوسع وخطوط CI/CD ومراقبة على مدار الساعة.",
    srv5_title: "التسويق الرقمي", srv5_desc: "حملات مبنية على البيانات تنمّي الوصول والإيرادات.",
    srv6_title: "الأمن السيبراني", srv6_desc: "تدقيق وتحصين وحماية أصولك الرقمية من اليوم الأول.",

    about_eyebrow: "لماذا تختارنا",
    about_title: "شريك وليس مجرد مزوّد خدمة",
    about_desc: "نجمع الاستراتيجية والتصميم والهندسة تحت سقف واحد، ما يعني تسليمات أقل ونتائج أسرع ومنتجًا متكاملًا لا مُجمَّعًا.",
    about_f1: "فريق خبير في كل مشروع",
    about_f2: "تقارير أسبوعية شفافة",
    about_f3: "دعم ما بعد الإطلاق مشمول",
    about_f4: "نطاق ثابت. بلا مفاجآت.",
    about_cta: "تحدث معنا",
    about_card_title: "أطلق في أسابيع",
    about_card_desc: "عمليتنا المجرَّبة تُوصل الـ MVP للمستخدمين بشكل أسرع.",

    stats_heading: "Nexa Digital بالأرقام",
    stats1: "مشروع مكتمل", stats2: "عميل سعيد",
    stats3: "سنوات خبرة", stats4: "عضو في الفريق",

    proj_eyebrow: "أعمالنا", proj_title: "مشاريع مختارة",
    proj_sub: "لمحة عن أعمالنا لعملاء حول العالم.",
    proj1_tag: "تجارة إلكترونية", proj1_title: "متجر Orbit", proj1_desc: "منصة تجارة إلكترونية تخدم أكثر من 40 ألف مستخدم شهريًا.",
    proj2_tag: "تقنية صحية", proj2_title: "تطبيق VitaCare", proj2_desc: "نظام إدارة مرضى مستخدم في أكثر من 30 عيادة.",
    proj3_tag: "تقنية مالية", proj3_title: "لوحة PayFlow", proj3_desc: "تحليلات فورية لمزوّد مدفوعات عالمي.",

    test_eyebrow: "آراء العملاء", test_title: "يحبنا المؤسسون والفرق",
    test1_text: '"أطلقت Nexa Digital الـ MVP في 6 أسابيع. كانت عمليتهم واضحة، والنتيجة تجاوزت التوقعات."',
    test1_name: "سارة ميتشل", test1_role: "الرئيس التنفيذي، Orbit Store",
    test2_text: '"أكثر وكالة منظمة تعاملنا معها. العروض الأسبوعية أبقت كل شيء على المسار."',
    test2_name: "أحمد خالد", test2_role: "المدير التقني، VitaCare",
    test3_text: '"نظام التصميم وفّر علينا شهورًا من العمل. كل شيء متسق وقابل للتوسع."',
    test3_name: "ليلى حسن", test3_role: "رئيسة المنتج، PayFlow",

    cta_title: "جاهز لبناء شيء عظيم؟",
    cta_desc: "لنتحدث عن فكرتك. استشارة مجانية 30 دقيقة، بدون التزام.",
    cta_btn: "احجز مكالمة مجانية",

    contact_eyebrow: "تواصل", contact_title: "لنعمل معًا",
    contact_sub: "أخبرنا قليلًا عن مشروعك وسنرد عليك خلال يوم عمل واحد.",
    form_name: "الاسم الكامل", form_name_ph: "محمد أحمد",
    form_email: "البريد الإلكتروني", form_email_ph: "mohamed@example.com",
    form_subject: "الموضوع", form_subject_ph: "استفسار عن مشروع",
    form_message: "الرسالة", form_message_ph: "أخبرنا عن مشروعك...",
    form_send: "إرسال الرسالة",
    form_sending: "جارٍ الإرسال...",
    form_success: "✓ شكرًا! سنرد عليك خلال 24 ساعة.",
    form_fail: "حدث خطأ ما. يرجى المحاولة مرة أخرى بعد قليل.",
    form_invalid: "يرجى تصحيح الحقول المحددة.",
    err_required: "هذا الحقل مطلوب.",
    err_email: "يرجى إدخال بريد إلكتروني صحيح.",
    err_min: "يرجى إدخال {n} أحرف على الأقل.",

    footer_desc: "حلول برمجية ورقمية للشركات الحديثة.",
    footer_company: "الشركة", footer_contact: "تواصل معنا",
    footer_available: "متاح لمشاريع العمل الحر",
    footer_contact_via: "تواصل معي عبر المنصة",
    footer_rights_short: "Nexa Digital. جميع الحقوق محفوظة."
  }
};

/* ------------------------------ Helpers --------------------------------- */
const STORAGE = { theme: "nexa-theme", lang: "nexa-lang" };

/* localStorage can throw (private mode, blocked cookies) — never let it break the page */
const store = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* ignore */ } }
};

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const currentLang = () => (document.documentElement.getAttribute("lang") === "ar" ? "ar" : "en");
const t = (key) => translations[currentLang()][key] ?? translations.en[key] ?? key;

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ----------------------------- Theme Module ----------------------------- */
const Theme = (() => {
  const root = document.documentElement;
  const btn = $("#themeToggle");
  const icon = btn?.querySelector("i");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  const apply = (theme, persist = false) => {
    root.setAttribute("data-theme", theme);
    if (icon) icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    btn?.setAttribute("aria-pressed", String(theme === "dark"));
    // Keep the browser UI (mobile address bar) in sync with the chosen theme
    $$('meta[name="theme-color"]').forEach((m) => {
      m.setAttribute("content", theme === "dark" ? "#131a12" : "#fdfaf3");
      m.removeAttribute("media");
    });
    if (persist) store.set(STORAGE.theme, theme);
  };

  const init = () => {
    const saved = store.get(STORAGE.theme);
    const hasSaved = saved === "dark" || saved === "light";
    apply(hasSaved ? saved : (systemDark.matches ? "dark" : "light"));

    // Follow OS changes until the user picks a theme themselves
    systemDark.addEventListener?.("change", (e) => {
      const s = store.get(STORAGE.theme);
      if (s !== "dark" && s !== "light") apply(e.matches ? "dark" : "light");
    });

    btn?.addEventListener("click", () => {
      apply(root.getAttribute("data-theme") === "dark" ? "light" : "dark", true);
    });
  };

  return { init };
})();

/* --------------------------- Language Module ---------------------------- */
const Language = (() => {
  const root = document.documentElement;
  const btn = $("#langToggle");
  const label = $("#langLabel");
  const listeners = [];

  const applyText = (lang) => {
    const dict = translations[lang];

    $$("[data-i18n]").forEach((el) => {
      const value = dict[el.dataset.i18n];
      if (value !== undefined) el.innerHTML = value; // dictionary is trusted, static content
    });
    $$("[data-i18n-placeholder]").forEach((el) => {
      const value = dict[el.dataset.i18nPlaceholder];
      if (value !== undefined) el.setAttribute("placeholder", value);
    });
    $$("[data-i18n-aria]").forEach((el) => {
      const value = dict[el.dataset.i18nAria];
      if (value !== undefined) el.setAttribute("aria-label", value);
    });
    $$("[data-i18n-title]").forEach((el) => {
      const value = dict[el.dataset.i18nTitle];
      if (value !== undefined) el.setAttribute("title", value);
    });

    document.title = dict.meta_title;
    $('meta[name="description"]')?.setAttribute("content", dict.meta_description);
  };

  const apply = (lang) => {
    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    if (label) {
      // The button shows the language you will switch TO
      label.textContent = lang === "ar" ? "EN" : "ع";
      label.setAttribute("lang", lang === "ar" ? "en" : "ar");
    }
    applyText(lang);
    store.set(STORAGE.lang, lang);
    listeners.forEach((fn) => fn(lang));
  };

  const onChange = (fn) => listeners.push(fn);

  const init = () => {
    apply(store.get(STORAGE.lang) === "ar" ? "ar" : "en");
    btn?.addEventListener("click", () => apply(currentLang() === "ar" ? "en" : "ar"));
  };

  return { init, onChange };
})();

/* --------------------------- Navbar / Menu ------------------------------ */
const Navbar = (() => {
  const navbar   = $("#navbar");
  const menuBtn  = $("#menuBtn");
  const navLinks = $("#navLinks");
  const mobileQuery = window.matchMedia("(max-width: 768px)");

  const isOpen = () => navLinks.classList.contains("open");

  const updateMenuLabel = () => {
    menuBtn.setAttribute("aria-label", t(isOpen() ? "menu_close" : "menu_open"));
  };

  /* Open or close the mobile menu (drawer + body scroll lock + ARIA). */
  const setMenuState = (open) => {
    navLinks.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.querySelector("i").className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    updateMenuLabel();
  };

  const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 10);

  const init = () => {
    if (!navbar || !menuBtn || !navLinks) return;

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    menuBtn.addEventListener("click", () => setMenuState(!isOpen()));

    // Close when a link is chosen
    $$("a", navLinks).forEach((link) => link.addEventListener("click", () => setMenuState(false)));

    // Close when tapping the dimmed backdrop (anywhere outside the navbar)
    document.addEventListener("click", (e) => {
      if (isOpen() && !navbar.contains(e.target)) setMenuState(false);
    });

    // Close on Escape and return focus to the toggle
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isOpen()) {
        setMenuState(false);
        menuBtn.focus();
      }
    });

    // If the screen grows past the mobile breakpoint, reset the menu
    // (otherwise the body scroll-lock would stay on at desktop sizes)
    mobileQuery.addEventListener?.("change", (e) => { if (!e.matches) setMenuState(false); });

    Language.onChange(updateMenuLabel);
    updateMenuLabel();
  };

  return { init };
})();

/* ------------------------ Active link on scroll ------------------------- */
const ScrollSpy = (() => {
  const init = () => {
    const links = $$('#navLinks a[href^="#"]');
    const sections = links.map((a) => $(a.getAttribute("href"))).filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const setActive = (id) => {
      links.forEach((a) => {
        if (a.getAttribute("href") === `#${id}`) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px" });

    sections.forEach((s) => observer.observe(s));
  };
  return { init };
})();

/* ----------------------------- Counters --------------------------------- */
const Counters = (() => {
  const animate = (el) => {
    const target = Number(el.dataset.counter) || 0;
    const duration = 1500;
    const start = performance.now();
    const easeOut = (p) => 1 - Math.pow(1 - p, 3);

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(easeOut(progress) * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    el.textContent = "0";
    requestAnimationFrame(step);
  };

  const init = () => {
    const counters = $$("[data-counter]");
    // The real numbers are already in the HTML; only animate when it's appropriate.
    if (!counters.length || prefersReducedMotion() || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach((el) => observer.observe(el));
  };

  return { init };
})();

/* ------------------------------ Contact --------------------------------- */
const Contact = (() => {
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  let statusTimer = null;

  const fieldError = (field) => {
    const value = field.value.trim();
    if (field.required && !value) return t("err_required");
    if (field.type === "email" && value && !EMAIL_RE.test(value)) return t("err_email");
    const min = Number(field.getAttribute("minlength")) || 0;
    if (min && value.length < min) return t("err_min").replace("{n}", min);
    return "";
  };

  const showFieldError = (field, message) => {
    const errEl = document.getElementById(`${field.id}-error`);
    if (errEl) errEl.textContent = message;
    if (message) field.setAttribute("aria-invalid", "true");
    else field.removeAttribute("aria-invalid");
  };

  const init = () => {
    const form = $("#contactForm");
    const status = $("#formStatus");
    const submitBtn = $("#submitBtn");
    if (!form || !status || !submitBtn) return;

    const fields = $$("input[required], textarea[required]", form);
    const btnLabel = submitBtn.querySelector("[data-i18n]");

    const setStatus = (key, isError = false) => {
      clearTimeout(statusTimer);
      status.dataset.key = key || "";
      status.textContent = key ? t(key) : "";
      status.classList.toggle("is-error", isError);
      if (key && !isError) statusTimer = setTimeout(() => setStatus(""), 6000);
    };

    const setBusy = (busy) => {
      submitBtn.disabled = busy;
      if (btnLabel) btnLabel.textContent = t(busy ? "form_sending" : "form_send");
    };

    // Re-validate a field as the user fixes it (only once it has been flagged)
    fields.forEach((field) => {
      field.addEventListener("input", () => {
        if (field.getAttribute("aria-invalid") === "true") showFieldError(field, fieldError(field));
      });
      field.addEventListener("blur", () => {
        if (field.value.trim()) showFieldError(field, fieldError(field));
      });
    });

    // Keep messages in the selected language
    Language.onChange(() => {
      fields.forEach((f) => { if (f.getAttribute("aria-invalid") === "true") showFieldError(f, fieldError(f)); });
      if (status.dataset.key) status.textContent = t(status.dataset.key);
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Honeypot filled → silently pretend success (bot)
      if (form.elements.website?.value) { form.reset(); setStatus("form_success"); return; }

      let firstInvalid = null;
      fields.forEach((field) => {
        const msg = fieldError(field);
        showFieldError(field, msg);
        if (msg && !firstInvalid) firstInvalid = field;
      });
      if (firstInvalid) {
        setStatus("form_invalid", true);
        firstInvalid.focus();
        return;
      }

      const endpoint = form.dataset.endpoint?.trim();
      setBusy(true);
      try {
        if (endpoint) {
          const res = await fetch(endpoint, {
            method: "POST",
            headers: { Accept: "application/json" },
            body: new FormData(form)
          });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
        } else {
          // Demo mode — no backend configured (see data-endpoint in index.html)
          await new Promise((r) => setTimeout(r, 700));
        }
        form.reset();
        fields.forEach((f) => showFieldError(f, ""));
        setStatus("form_success");
      } catch (err) {
        console.error("Contact form error:", err);
        setStatus("form_fail", true);
      } finally {
        setBusy(false);
      }
    });
  };

  return { init };
})();

/* ---------------------------- Back to top ------------------------------- */
const BackToTop = (() => {
  const init = () => {
    const btn = $("#backToTop");
    if (!btn) return;
    const toggle = () => { btn.hidden = window.scrollY < 600; };
    toggle();
    window.addEventListener("scroll", toggle, { passive: true });
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
      $(".logo")?.focus({ preventScroll: true });
    });
  };
  return { init };
})();

/* ------------------------------ Year ------------------------------------ */
const Year = (() => {
  const init = () => {
    const el = $("#currentYear");
    if (el) el.textContent = new Date().getFullYear();
  };
  return { init };
})();

/* ------------------------------- Boot ----------------------------------- */
const boot = () => {
  Theme.init();
  Language.init();
  Navbar.init();
  ScrollSpy.init();
  Counters.init();
  Contact.init();
  BackToTop.init();
  Year.init();
};

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
