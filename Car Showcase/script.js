const i18n = {
  en: {
    nav: { home: "Home", garage: "Garage", faq: "FAQ" },
    hero: {
      eyebrow: "Buy a Car",
      heading: "Customized and Special Edition Car Only for You",
      tagline: "Ready to Rev Up? Let's Hit the Road for a Test Drive!",
      cta: "Let's Drive It! &rarr;",
      pricePrefix: "From",
    },
    sections: {
      garageEyebrow: "Our garage",
      garageTitle: "Shop this season's hero cars.",
    },
    buttons: {
      viewCar: "View car &rarr;",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions collectors ask most.",
      q1: "How long does a bespoke order take?",
      a1: "Build slots average 6–8 weeks. We share a weekly build log, live paint updates, and final inspection footage before delivery.",
      q2: "Can you source rare trims or discontinued models?",
      a2: "Yes. Our network spans private collections, factory vaults, and global auctions. We handle provenance, servicing, and import paperwork end-to-end.",
      q3: "What does delivery look like?",
      a3: "Enclosed transport, on-site detailing, and a performance specialist who walks you through drive modes, telemetry, and maintenance rituals.",
      q4: "Do you help with resale or refreshing a collection?",
      a4: "Absolutely. We can consign, refresh specs, or trade keys into a new build. Our analysts prepare value reports and ideal timing for the market.",
    },
    footer: {
      tagline: "Performance atelier for modern collectors.",
      contact: "concierge@carprime.com · +1 (415) 555-0186",
      explore: "Explore",
      showcase: "Showcase",
      collections: "Collections",
      faq: "FAQ",
      services: "Services",
      custom: "Custom builds",
      concierge: "Concierge",
      logistics: "Logistics",
      follow: "Follow",
      rights: "&copy; 2025 CarPrime. All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
    },
    cta: { quote: "Get a Quote" },
  },
  ar: {
    nav: { home: "الرئيسية", garage: "المعرض", faq: "الأسئلة" },
    hero: {
      eyebrow: "اشترِ سيارة",
      heading: "تصاميم حصرية وخاصة لأجلك فقط",
      tagline: "جاهز للحماس؟ هيا ننطلق لتجربة قيادة!",
      cta: "لنقدها الآن! &larr;",
      pricePrefix: "ابتداءً من",
    },
    sections: {
      garageEyebrow: "معرضنا",
      garageTitle: "تسوّق سيارات الموسم الأيقونية.",
    },
    buttons: {
      viewCar: "عرض السيارة &larr;",
    },
    faq: {
      eyebrow: "أسئلة شائعة",
      title: "أهم الأسئلة التي يطرحها الجامعون.",
      q1: "كم يستغرق طلب مخصص؟",
      a1: "يستغرق بناء السيارة عادةً 6 إلى 8 أسابيع مع تحديثات أسبوعية وصور طلاء وتقارير فحص نهائي قبل التسليم.",
      q2: "هل يمكنكم توفير طرازات نادرة أو متوقفة؟",
      a2: "نعم، نغطي مجموعات خاصة ومخازن المصنع والمزادات العالمية، ونتكفّل بالمصدر والخدمة وأوراق الاستيراد.",
      q3: "كيف تبدو تجربة التسليم؟",
      a3: "نقدم نقلاً مغلقاً، وتفاصيل في الموقع، وخبير أداء يشرح أوضاع القيادة والقياسات والصيانة.",
      q4: "هل تساعدون في إعادة البيع أو تحديث المجموعة؟",
      a4: "بكل تأكيد. نعرض سيارتك، نحدّث المواصفات، أو نستبدلها ببناء جديد مع تقارير قيمة وتوقيت مثالي للسوق.",
    },
    footer: {
      tagline: "أستوديو أداء لهواة الاقتناء العصريين.",
      contact: "concierge@carprime.com · ‎+1 (415) 555-0186",
      explore: "استكشف",
      showcase: "العرض",
      collections: "المجموعات",
      faq: "الأسئلة",
      services: "الخدمات",
      custom: "بناء مخصص",
      concierge: "الكونسيرج",
      logistics: "الخدمات اللوجستية",
      follow: "تابعنا",
      rights: "© 2025 كار برايم. جميع الحقوق محفوظة.",
      privacy: "الخصوصية",
      terms: "الشروط",
    },
    cta: { quote: "اطلب عرض سعر" },
  },
};

const cars = [
  {
    id: "apex",
    name: { en: "Apex GT", ar: "أبيكس جي تي" },
    type: { en: "Coupe", ar: "كوبيه" },
    heroModel: {
      en: "2024 Apex GT Carbon Edition",
      ar: "أبيكس جي تي إصدار الكربون 2024",
    },
    image: "1.png",
    price: "$248,500",
    detailPage: "car-apex.html",
    description: {
      en: "Carbon edition tuned for ultimate response.",
      ar: "نسخة كربونية مضبوطة لاستجابة قصوى.",
    },
    specs: [
      { label: { en: "Max Power", ar: "أقصى قوة" }, value: "680 HP", icon: "&#9889;" },
      { label: { en: "0-60 mph", ar: "0-60 ميل" }, value: "3.1 s", icon: "&#9201;" },
      { label: { en: "Top Speed", ar: "السرعة القصوى" }, value: "206 mph", icon: "&#128640;" },
      { label: { en: "Seating", ar: "عدد المقاعد" }, value: "4 Seats", icon: "&#128186;" },
    ],
  },
  {
    id: "rs",
    name: { en: "RS Electric", ar: "آر إس إلكتريك" },
    type: { en: "Gran Turismo", ar: "جران توريزمو" },
    heroModel: {
      en: "2025 RS Electric Touring",
      ar: "آر إس إلكتريك تورينج 2025",
    },
    image: "2.png",
    price: "$212,000",
    detailPage: "car-rs.html",
    description: {
      en: "Grand touring EV with dual-motor confidence.",
      ar: "سيارة كهربائية للسفر الطويل بثبات محركين.",
    },
    specs: [
      { label: { en: "Max Power", ar: "أقصى قوة" }, value: "590 HP", icon: "&#9889;" },
      { label: { en: "0-60 mph", ar: "0-60 ميل" }, value: "3.6 s", icon: "&#9201;" },
      { label: { en: "Top Speed", ar: "السرعة القصوى" }, value: "190 mph", icon: "&#128640;" },
      { label: { en: "Range", ar: "المدى" }, value: "310 mi", icon: "&#9881;" },
    ],
  },
  {
    id: "trackline",
    name: { en: "Trackline S", ar: "تراكلاين إس" },
    type: { en: "Hyper Sedan", ar: "سيدان خارقة" },
    heroModel: {
      en: "2024 Trackline S Pro Series",
      ar: "تراكلاين إس برو سيريز 2024",
    },
    image: "3.png",
    price: "$308,000",
    detailPage: "car-trackline.html",
    description: {
      en: "Race-spec aero married to handcrafted luxury.",
      ar: "انسيابية سباقات مع فخامة مصنوعة يدوياً.",
    },
    specs: [
      { label: { en: "Max Power", ar: "أقصى قوة" }, value: "720 HP", icon: "&#9889;" },
      { label: { en: "0-60 mph", ar: "0-60 ميل" }, value: "2.8 s", icon: "&#9201;" },
      { label: { en: "Top Speed", ar: "السرعة القصوى" }, value: "216 mph", icon: "&#128640;" },
      { label: { en: "Seating", ar: "عدد المقاعد" }, value: "4 Seats", icon: "&#128186;" },
    ],
  },
  {
    id: "roadster",
    name: { en: "Roadster 01", ar: "رودستر 01" },
    type: { en: "Roadster", ar: "رودستر" },
    heroModel: {
      en: "2023 Roadster 01 Skyline",
      ar: "رودستر 01 سكاي لاين 2023",
    },
    image: "4.png",
    price: "$189,000",
    detailPage: "car-roadster.html",
    description: {
      en: "Open-air charisma tuned for coastal touring.",
      ar: "سحر مكشوف مناسب لرحلات الساحل.",
    },
    specs: [
      { label: { en: "Max Power", ar: "أقصى قوة" }, value: "560 HP", icon: "&#9889;" },
      { label: { en: "0-60 mph", ar: "0-60 ميل" }, value: "3.9 s", icon: "&#9201;" },
      { label: { en: "Top Speed", ar: "السرعة القصوى" }, value: "189 mph", icon: "&#128640;" },
      { label: { en: "Weight", ar: "الوزن" }, value: "3,120 lb", icon: "&#9878;" },
    ],
  },
];

const state = {
  lang: "en",
  carIndex: 0,
  direction: 1,
  optionButtons: [],
};

const heroSection = document.querySelector(".hero");
const heroImage = document.getElementById("heroCarImage");
const heroModel = document.getElementById("heroCarModel");
const heroPrice = document.getElementById("heroCarPrice");
const heroPrevImage = document.getElementById("heroCarPrev");
const heroNextImage = document.getElementById("heroCarNext");
const statCards = Array.from(document.querySelectorAll(".stat-card"));
const selector = document.getElementById("heroCarSelector");
const controls = document.querySelectorAll("[data-direction]");
const langToggle = document.getElementById("langToggle");
const carGrid = document.getElementById("carGrid");

const getText = (key) => key.split(".").reduce((acc, part) => acc?.[part], i18n[state.lang]);

const getCarName = (car) => car.name[state.lang] ?? car.name.en;
const getCarType = (car) => car.type[state.lang] ?? car.type.en;

const applyStaticStrings = () => {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getText(node.dataset.i18n);
    if (value) node.innerHTML = value;
  });
  const quoteBtn = document.querySelector(".header-cta");
  if (quoteBtn) quoteBtn.innerHTML = getText("cta.quote");
};

const updateLangState = () => {
  document.body.classList.toggle("rtl", state.lang === "ar");
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  if (langToggle) {
    langToggle.textContent = state.lang === "en" ? "AR" : "EN";
  }
};

const centerOptionInView = (button) => {
  if (!selector || !button) return;
  const containerWidth = selector.clientWidth;
  const maxScroll = Math.max(selector.scrollWidth - containerWidth, 0);
  const desired =
    button.offsetLeft - containerWidth / 2 + button.offsetWidth / 2;
  const target = Math.min(Math.max(desired, 0), maxScroll);
  selector.scrollTo({ left: target, behavior: "smooth" });
};

const heroImageAnimationCleanUp = () => {
  if (!heroImage) return;
  heroImage.classList.remove("slide-in-left", "slide-in-right");
};

if (heroImage) {
  heroImage.addEventListener("animationend", heroImageAnimationCleanUp);
}

const fadeInImage = (car, direction) => {
  if (!heroImage) return;
  heroImage.classList.add("is-changing");
  const newImage = new Image();
  newImage.onload = () => {
    heroImageAnimationCleanUp();
    heroImage.src = newImage.src;
    heroImage.alt = getCarName(car);
    requestAnimationFrame(() => {
      heroImage.classList.remove("is-changing");
      const directionClass = direction === -1 ? "slide-in-left" : "slide-in-right";
      heroImage.classList.add(directionClass);
    });
  };
  newImage.src = car.image;
};

const updateAdjacentImages = (index) => {
  if (!heroPrevImage || !heroNextImage) return;
  const prevCar = cars[(index - 1 + cars.length) % cars.length];
  const nextCar = cars[(index + 1) % cars.length];
  heroPrevImage.src = prevCar.image;
  heroPrevImage.alt = getCarName(prevCar);
  heroNextImage.src = nextCar.image;
  heroNextImage.alt = getCarName(nextCar);
};

let heroTransitionTimeout;

const triggerHeroTransition = () => {
  if (!heroSection) return;
  heroSection.classList.add("is-switching");
  clearTimeout(heroTransitionTimeout);
  heroTransitionTimeout = setTimeout(() => {
    heroSection.classList.remove("is-switching");
  }, 650);
};

const renderCar = (index, direction = 1) => {
  if (!heroImage || !heroModel) return;
  state.carIndex = index;
  state.direction = direction;
  triggerHeroTransition();
  const car = cars[index];
  heroModel.textContent = car.heroModel[state.lang] ?? car.heroModel.en;
  if (heroPrice) {
    heroPrice.textContent = `${getText("hero.pricePrefix")} ${car.price}`;
  }
  fadeInImage(car, direction);
  updateAdjacentImages(index);

  statCards.forEach((card, specIndex) => {
    const spec = car.specs[specIndex];
    if (!spec) return;
    card.querySelector(".stat-icon").innerHTML = spec.icon;
    card.querySelector(".stat-value").textContent = spec.value;
    card.querySelector(".stat-label").textContent =
      spec.label[state.lang] ?? spec.label.en;
  });

  state.optionButtons.forEach((btn, idx) => {
    const active = idx === index;
    btn.classList.toggle("active", active);
    if (active) {
      btn.setAttribute("aria-current", "true");
      centerOptionInView(btn);
    } else {
      btn.removeAttribute("aria-current");
    }
  });
};

const buildSelector = () => {
  if (!selector) return;
  selector.innerHTML = "";
  state.optionButtons = cars.map((car, index) => {
    const button = document.createElement("button");
    button.className = "car-option";
    const formattedIndex = String(index + 1).padStart(2, "0");
    const leadSpec = car.specs[0]?.value ?? "";
    const secondarySpec = car.specs[1]?.value ?? "";
    button.innerHTML = `
      <span class="option-indicator"></span>
      <div class="option-body">
        <div class="option-top">
          <span class="option-name">${getCarName(car)}</span>
          <span class="option-index">#${formattedIndex}</span>
        </div>
        <div class="option-type">${getCarType(car)}</div>
        <div class="option-bottom">
          <span class="option-chip">${leadSpec}</span>
          <span class="option-chip">${secondarySpec}</span>
        </div>
      </div>
    `;
    button.type = "button";
    button.addEventListener("click", () => {
      if (index === state.carIndex) return;
      const direction = index > state.carIndex ? 1 : -1;
      renderCar(index, direction);
    });
    selector.appendChild(button);
    return button;
  });
  renderCar(state.carIndex, state.direction);
};

const renderCarGrid = () => {
  if (!carGrid) return;
  carGrid.innerHTML = cars
    .map((car) => {
      const meta = car.specs.slice(0, 3).map((spec) => `<span>${spec.value}</span>`).join("");
      return `
        <article class="car-card" data-car="${car.id}">
          <div class="car-card__media">
            <img src="${car.image}" alt="${getCarName(car)}" loading="lazy" />
          </div>
          <div class="car-card__body">
            <div>
              <span class="car-card__type">${getCarType(car)}</span>
              <p class="car-card__price">${getText("hero.pricePrefix")} ${car.price}</p>
              <h3>${getCarName(car)}</h3>
              <p>${car.description[state.lang] ?? car.description.en}</p>
            </div>
            <div class="car-card__meta">${meta}</div>
            <a class="car-card__link" href="${car.detailPage}">${getText("buttons.viewCar")}</a>
          </div>
        </article>
      `;
    })
    .join("");
};

const setupControls = () => {
  controls.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.direction === "next" ? 1 : -1;
      const nextIndex = (state.carIndex + direction + cars.length) % cars.length;
      renderCar(nextIndex, direction);
    });
  });

  if (selector) {
    selector.addEventListener("wheel", (event) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        selector.scrollBy({ left: event.deltaY, behavior: "smooth" });
        event.preventDefault();
      }
    });
  }
};

const setupAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  document.querySelectorAll("[data-animate]").forEach((element) => {
    observer.observe(element);
  });
};

const changeLanguage = () => {
  state.lang = state.lang === "en" ? "ar" : "en";
  applyStaticStrings();
  updateLangState();
  buildSelector();
  renderCarGrid();
};

const setupLanguageToggle = () => {
  if (!langToggle) return;
  langToggle.addEventListener("click", changeLanguage);
};

document.addEventListener("DOMContentLoaded", () => {
  applyStaticStrings();
  updateLangState();
  buildSelector();
  renderCarGrid();
  setupControls();
  setupAnimations();
  setupLanguageToggle();
});
