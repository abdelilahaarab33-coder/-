// ============================================================
// منصة مَهارة (Skill-Swap) - محرك التدويل والترجمة الخفيف (i18n)
// يدعم 4 لغات مع ضبط الاتجاه (RTL/LTR) والخطوط تلقائياً
// ============================================================

const TRANSLATIONS = {
  ar: {
    appName: "مَهارة",
    appTagline: "منصة تبادل المهارات وبنك الوقت",
    navDashboard: "الرئيسية",
    navSkills: "سوق المهارات",
    navMessages: "المحادثات",
    navSessions: "جلساتي",
    navWallet: "بنك الوقت",
    navSafety: "مركز الأمان",

    statAvailableHours: "الساعات المتاحة",
    statEscrowedHours: "الساعات المجمدة (ضمان)",
    statActiveSessions: "الجلسات النشطة",
    statCompletedSessions: "الجلسات المكتملة",
    topUpBtn: "شحن +50 ساعة",
    timeHour: "ساعة",
    timeHours: "ساعات",

    skillsCatalogTitle: "تصفح المهارات المتاحة",
    searchPlaceholder: "ابحث عن مهارة، تصنيف، أو مدرب...",
    catAll: "الكل",
    catArts: "فنون وتصميم",
    catTech: "برمجة وتقنية",
    catLanguages: "لغات وترجمة",
    catMusic: "موسيقى",
    catCooking: "فن الطبخ",
    catBusiness: "أعمال وإدارة",
    bookBtn: "حجز جلسة",
    chatBtn: "محادثة",
    detailsBtn: "التفاصيل",
    instructorLabel: "المدرّب",
    curriculumTitle: "محاور الجلسة التدريبية",
    confirmBookingTitle: "تأكيد حجز الجلسة",
    bookingDurationNotice: "سيتم تجميد ساعات الجلسة في بنك الوقت كضمان حتى اكتمالها.",
    confirmBtn: "تأكيد الحجز",
    cancelBtn: "إلغاء",

    sessionsTitle: "الجلسات التدريبية المجدولة",
    statusPending: "معلّقة",
    statusConfirmed: "مؤكدة",
    statusCompleted: "مكتملة",
    statusCancelled: "ملغاة",
    enterRoomBtn: "دخول الغرفة الافتراضية",
    completeSessionBtn: "تأكيد إتمام الجلسة",
    cancelSessionBtn: "إلغاء الجلسة",

    bookingSuccess: "تم حجز الجلسة وتجميد الساعات بنجاح!",
    insufficientBalance: "رصيدك غير كافٍ لإتمام الحجز.",
    sessionCompletedMsg: "تم إكمال الجلسة وتحرير الساعات للمدرّب.",
    sessionCancelledMsg: "تم إلغاء الجلسة واسترداد الساعات إلى رصيدك.",
    shareWhatsApp: "مشاركة عبر واتساب",
    conversationsTitle: "المحادثات المباشرة مع المدربين",
    typeMessagePlaceholder: "اكتب رسالة إلى المدرب...",
    sendBtn: "إرسال"
  },

  zgh: {
    appName: "ⵎⴰⵀⴰⵕⴰ",
    appTagline: "ⴰⵙⵉⵜ ⵏ ⵓⵎⵙⵏⴼⵍ ⵏ ⵜⵎⵓⵣⴰⵢⵉⵏ ⴷ ⵓⴱⴰⵏⴽ ⵏ ⵡⴰⴽⵓⴷ",
    navDashboard: "ⴰⵙⴰⵎⵓ",
    navSkills: "ⴰⴳⴰⴷⴰⵣ ⵏ ⵜⵎⵓⵣⴰⵢⵉⵏ",
    navMessages: "ⵉⵎⵙⴰⵡⴰⵍⵏ",
    navSessions: "ⵜⵉⵖⵉⵎⵉⵢⵉⵏ ⵉⵏⵓ",
    navWallet: "ⴰⴱⴰⵏⴽ ⵏ ⵡⴰⴽⵓⴷ",
    navSafety: "ⴰⵎⵎⴰⵙ ⵏ ⵜⵏⴼⵔⵓⵜ",

    statAvailableHours: "ⵉⵔⴰⴳⵏ ⵍⵍⵉ ⵉⵍⵍⴰⵏ",
    statEscrowedHours: "ⵉⵔⴰⴳⵏ ⵉⵜⵜⵓⴳⴷⴰⵍⵏ",
    statActiveSessions: "ⵜⵉⵖⵉⵎⵉⵢⵉⵏ ⵜⵉⵔⵓⵔⴰⴷⵉⵏ",
    statCompletedSessions: "ⵜⵉⵖⵉⵎⵉⵢⵉⵏ ⵉⵎⴷⴰⵏ",
    topUpBtn: "ⵔⵏⵓ +50 ⵏ ⵓⵔⴰⴳ",
    timeHour: "ⵜⴰⵙⵔⴰⴳⵜ",
    timeHours: "ⵜⵉⵙⵔⴰⴳⵉⵏ",

    skillsCatalogTitle: "ⵙⵙⵉⴽⵍ ⵜⵉⵎⵓⵣⴰⵢⵉⵏ",
    searchPlaceholder: "ⵔⵣⵓ ⵅⴼ ⵜⵎⵓⵣⴰⵢⵜ, ⴰⵙⵎⵉⵍ, ⵏⵖ ⴰⵙⵍⵎⴰⴷ...",
    catAll: "ⴽⵓⵍⵍⵓ",
    catArts: "ⵜⵉⵥⵓⵕⵉⵡⵉⵏ",
    catTech: "ⵜⴰⵜⵉⴽⵏⵓⵍⵓⵊⵉⵜ",
    catLanguages: "ⵜⵓⵜⵍⴰⵢⵉⵏ",
    catMusic: "ⴰⵥⴰⵡⴰⵏ",
    catCooking: "ⵜⵉⵔⴰⵎ",
    catBusiness: "ⵜⵉⵡⵓⵔⵉⵡⵉⵏ",
    bookBtn: "ⵟⵟⴼ ⵜⵉⵖⵉⵎⵉⵜ",
    chatBtn: "ⴰⵎⵙⴰⵡⴰⵍ",
    detailsBtn: "ⵉⴼⵔⵓⵔⵉⵜⵏ",
    instructorLabel: "ⴰⵙⵍⵎⴰⴷ",
    curriculumTitle: "ⵉⵙⵏⵜⴰⵍ ⵏ ⵜⵖⵉⵎⵉⵜ",
    confirmBookingTitle: "ⵙⴷⴷⵉⴷ ⵜⵉⵖⵉⵎⵉⵜ",
    bookingDurationNotice: "ⵔⴰⴷ ⵜⵜⵓⴳⴷⴰⵍⵏ ⵉⵔⴰⴳⵏ ⴳ ⵓⴱⴰⵏⴽ ⴰⵍⵍⵉⴳ ⵜⵎⴷⴰ ⵜⵖⵉⵎⵉⵜ.",
    confirmBtn: "ⵙⴷⴷⵉⴷ",
    cancelBtn: "ⵙⵔ",

    sessionsTitle: "ⵜⵉⵖⵉⵎⵉⵢⵉⵏ ⵉⵜⵜⵓⵙⵖⵉⵡⵙⵏ",
    statusPending: "ⵜⵇⵇⵍ",
    statusConfirmed: "ⵜⴻⵜⵜⵓⵙⴷⴷⴰⴷ",
    statusCompleted: "ⵜⵎⴷⴰ",
    statusCancelled: "ⵜⴱⵟⵍ",
    enterRoomBtn: "ⴽⵛⵎ ⵖⵔ ⵜⴷⴰⵍⴰ",
    completeSessionBtn: "ⵙⵎⴷ ⵜⵉⵖⵉⵎⵉⵜ",
    cancelSessionBtn: "ⵙⵔ ⵜⵉⵖⵉⵎⵉⵜ",

    bookingSuccess: "ⵜⴻⵜⵜⵓⵟⵟⴼ ⵜⵖⵉⵎⵉⵜ ⵙ ⵓⵎⵓⵔⵙ!",
    insufficientBalance: "ⵓⵔ ⴷⴰⵔⴽ ⵉⵔⴰⴳⵏ ⵉⴳⴰⵏ ⴰⴳⴷⵓⴷ.",
    sessionCompletedMsg: "ⵜⵎⴷⴰ ⵜⵖⵉⵎⵉⵜ, ⵜⵜⵓⴼⴽⴰⵏ ⵉⵔⴰⴳⵏ.",
    sessionCancelledMsg: "ⵜⴱⵟⵍ ⵜⵖⵉⵎⵉⵜ, ⵓⵔⵔⵉⵏ-ⴷ ⵉⵔⴰⴳⵏ.",
    shareWhatsApp: "ⴱⴹⵓ ⴳ ⵡⴰⵜⵙⴰⴱ",
    conversationsTitle: "ⵉⵎⵙⴰⵡⴰⵍⵏ ⴷ ⵉⵙⵍⵎⴰⴷⵏ",
    typeMessagePlaceholder: "ⴰⵔⴰ ⵜⴰⴱⵔⴰⵜ ⵉ ⵓⵙⵍⵎⴰⴷ...",
    sendBtn: "ⴰⵣⵏ"
  },

  fr: {
    appName: "Maharah",
    appTagline: "Plateforme d’échange de compétences et banque de temps",
    navDashboard: "Tableau de bord",
    navSkills: "Marché des compétences",
    navMessages: "Messages",
    navSessions: "Mes sessions",
    navWallet: "Banque de temps",
    navSafety: "Sécurité",

    statAvailableHours: "Heures disponibles",
    statEscrowedHours: "Heures sous séquestre (garantie)",
    statActiveSessions: "Sessions actives",
    statCompletedSessions: "Sessions complétées",
    topUpBtn: "Recharger +50h",
    timeHour: "heure",
    timeHours: "heures",

    skillsCatalogTitle: "Explorer les compétences",
    searchPlaceholder: "Rechercher une compétence, catégorie, mentor...",
    catAll: "Toutes",
    catArts: "Arts & Design",
    catTech: "Tech & Code",
    catLanguages: "Langues",
    catMusic: "Musique",
    catCooking: "Cuisine",
    catBusiness: "Business",
    bookBtn: "Réserver",
    chatBtn: "Message",
    detailsBtn: "Détails",
    instructorLabel: "Formateur",
    curriculumTitle: "Programme de la session",
    confirmBookingTitle: "Confirmer la réservation",
    bookingDurationNotice: "Vos heures seront consignées en garantie jusqu'à la fin de la session.",
    confirmBtn: "Confirmer",
    cancelBtn: "Annuler",

    sessionsTitle: "Sessions programmées",
    statusPending: "En attente",
    statusConfirmed: "Confirmée",
    statusCompleted: "Terminée",
    statusCancelled: "Annulée",
    enterRoomBtn: "Rejoindre la salle virtuelle",
    completeSessionBtn: "Valider la session",
    cancelSessionBtn: "Annuler la session",

    bookingSuccess: "Session réservée avec succès (heures sécurisées) !",
    insufficientBalance: "Solde insuffisant pour réserver cette session.",
    sessionCompletedMsg: "Session terminée ! Heures transférées au formateur.",
    sessionCancelledMsg: "Session annulée. Vos heures ont été restituées.",
    shareWhatsApp: "Partager sur WhatsApp",
    conversationsTitle: "Discussions en direct avec les formateurs",
    typeMessagePlaceholder: "Écrire un message au formateur...",
    sendBtn: "Envoyer"
  },

  en: {
    appName: "Maharah",
    appTagline: "Skill-Swap & Time Banking Platform",
    navDashboard: "Dashboard",
    navSkills: "Explore Skills",
    navMessages: "Messages",
    navSessions: "My Sessions",
    navWallet: "Time Bank",
    navSafety: "Safety & Trust",

    statAvailableHours: "Available Hours",
    statEscrowedHours: "Escrowed Hours",
    statActiveSessions: "Active Sessions",
    statCompletedSessions: "Completed Sessions",
    topUpBtn: "Top Up +50h",
    timeHour: "hour",
    timeHours: "hours",

    skillsCatalogTitle: "Available Skills Catalog",
    searchPlaceholder: "Search skill, category, mentor...",
    catAll: "All",
    catArts: "Arts & Design",
    catTech: "Tech & Coding",
    catLanguages: "Languages",
    catMusic: "Music",
    catCooking: "Cooking",
    catBusiness: "Business",
    bookBtn: "Book Session",
    chatBtn: "Chat",
    detailsBtn: "Details",
    instructorLabel: "Instructor",
    curriculumTitle: "Session Curriculum",
    confirmBookingTitle: "Confirm Booking",
    bookingDurationNotice: "Hours will be placed in escrow until the session is completed.",
    confirmBtn: "Confirm",
    cancelBtn: "Cancel",

    sessionsTitle: "Scheduled Sessions",
    statusPending: "Pending",
    statusConfirmed: "Confirmed",
    statusCompleted: "Completed",
    statusCancelled: "Cancelled",
    enterRoomBtn: "Enter Virtual Room",
    completeSessionBtn: "Complete Session",
    cancelSessionBtn: "Cancel Session",

    bookingSuccess: "Session booked successfully (hours placed in escrow)!",
    insufficientBalance: "Insufficient time balance for this booking.",
    sessionCompletedMsg: "Session completed! Hours released to instructor.",
    sessionCancelledMsg: "Session cancelled. Hours refunded to your balance.",
    shareWhatsApp: "Share on WhatsApp",
    conversationsTitle: "Direct Chats with Instructors",
    typeMessagePlaceholder: "Type a message to instructor...",
    sendBtn: "Send"
  }
};

// ============================================================
// محرك الترجمة الخفيف (Lightweight i18n Engine)
// ============================================================
class I18nEngine {
  constructor(defaultLang = 'ar') {
    this.currentLang = localStorage.getItem('maharah_lang') || defaultLang;
    this.RTL_LANGS = new Set(['ar', 'zgh', 'tzm']); // العربية والأمازيغية باتجاه RTL
  }

  t(key, params = {}) {
    const dict = TRANSLATIONS[this.currentLang] || TRANSLATIONS.ar;
    let text = dict[key] || TRANSLATIONS.ar[key] || key;
    for (const [k, v] of Object.entries(params)) {
      text = text.replaceAll(`{${k}}`, v);
    }
    return text;
  }

  localize(obj) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[this.currentLang] || obj.ar || obj.en || Object.values(obj)[0] || '';
  }

  changeLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = 'ar';
    this.currentLang = lang;
    localStorage.setItem('maharah_lang', lang);

    const isRtl = this.RTL_LANGS.has(lang);
    const dir = isRtl ? 'rtl' : 'ltr';

    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);
    document.body.setAttribute('dir', dir);
    document.body.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', this.t(key));
    });

    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      const active = btn.getAttribute('data-lang-btn') === lang;
      btn.classList.toggle('active-lang', active);
    });

    if (window.store) window.store.setLanguage(lang);
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang, dir } }));
  }

  init() {
    this.changeLanguage(this.currentLang);
  }
}

window.i18n = new I18nEngine();
