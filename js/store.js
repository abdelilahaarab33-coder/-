// ============================================================
// منصة مَهارة (Skill-Swap) - متجر الحالة الموحد (State Store)
// هيكل بيانات نظيف، مختصَر وقابل للتوسّع مع مزامنة LocalStorage
// ============================================================

const DEFAULT_STATE = {
  // 1. بيانات المستخدم الحالي وبنك الوقت
  user: {
    id: 'user-me',
    name: { ar: 'عبد الإله', en: 'Abdelilah', fr: 'Abdelilah', zgh: 'ⵄⴱⴷⵉⵍⴰⵀ' },
    balance: 50,
    escrowed: 0,
    consumed: 0,
    earned: 0,
    lang: 'ar'
  },

  // 2. قائمة المهارات المتاحة الكاملة (12 مهارة متنوعة)
  skills: [
  {
    "id": "skill-1",
    "title": {
      "ar": "أساسيات الخط العربي والديواني",
      "en": "Arabic Calligraphy & Diwani Script Fundamentals",
      "fr": "Bases de la Calligraphie Arabe et Style Diwani",
      "zgh": "ⵉⵎⵣⵡⵓⵔⴰ ⵏ ⵓⵙⴽⴽⵉⵍ ⴰⵄⵕⴰⴱ ⴷ ⴷⴷⵉⵡⴰⵏⵉ"
    },
    "description": {
      "ar": "تعلم مسكة القصبة، ضبط زوايا الحبر، وتشكيل الحروف المفردة والمركبة في خط الرقعة والديواني مع تطبيقات عملية فورية.",
      "en": "Master reed pen holding, ink angling, and drawing isolated and connected letters in Ruq'ah and Diwani styles.",
      "fr": "Maîtrisez la tenue du calame, l'inclinaison de l'encre et le tracé des lettres isolées et liées dans les styles Ruq'ah et Diwani.",
      "zgh": "ⵍⵎⴷ ⴰⵎⴰⵔⴰⵢ ⵏ ⵓⵖⴰⵏⵉⵎ, ⵜⵉⵖⵎⵔⵉⵏ ⵏ ⵓⵙⵎⵖⵔ, ⴷ ⵓⵙⴽⴽⵉⵍ ⵏ ⵉⵙⴽⴽⵉⵍⵏ ⴳ ⵓⵖⴰⵏⵉⵎ."
    },
    "category": "arts",
    "level": "beginner",
    "hours": 1,
    "rating": 4.9,
    "reviewsCount": 38,
    "instructor": {
      "id": "inst-1",
      "name": {
        "ar": "عبد الرحمن الصالحي",
        "en": "Abdulrahman Al-Salihi",
        "fr": "Abdulrahman Al-Salihi",
        "zgh": "ⵄⴱⴷⵓⵕⵕⴰⵃⵎⴰⵏ ⴰⵚⵚⴰⵍⵉⵃⵉ"
      },
      "title": {
        "ar": "خطاط معتمد وباحث في الفنون الكلاسيكية",
        "en": "Certified Calligrapher & Classical Arts Researcher",
        "fr": "Calligraphe certifié & Chercheur en arts classiques",
        "zgh": "ⴰⵎⵙⵓⵏⵖ ⴰⵏⴰⵥⵓⵕ ⴳ ⵜⵥⵓⵕⵉⵡⵉⵏ ⵜⵉⵣⴰⵢⴽⵓⵜⵉⵏ"
      },
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    "image": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": "skill-2",
    "title": {
      "ar": "الجيتار للمبتدئين وأوتار العزف الأولى",
      "en": "Acoustic Guitar for Beginners: First Chords",
      "fr": "Guitare Acoustique Débutant : Premiers Accords",
      "zgh": "ⴰⴳⵉⵟⴰⵕ ⵉ ⵉⵎⵣⵡⵓⵔⴰ ⴷ ⵓⵥⴰⵡⴰⵏ"
    },
    "description": {
      "ar": "ابدأ رحلتك الموسيقية بتعلم مسكة الجيتار الصحيحة، أوتار الأساس (Em, C, G, D)، ونمط الريتم الأول لعزف أغانيك المفضلة.",
      "en": "Start your musical journey learning proper posture, core chords (Em, C, G, D), and your first strumming patterns.",
      "fr": "Démarrez la guitare avec la bonne posture, les accords ouverts essentiels (Em, C, G, D) et votre première rythmique.",
      "zgh": "ⴱⴷⵓ ⴰⵥⴰⵡⴰⵏ ⵙ ⵓⵎⴰⵔⴰⵢ ⵏ ⵓⴳⵉⵟⴰⵕ, ⵉⵥⵓⵕⴰⵏ ⵏ ⵓⵥⴰⵡⴰⵏ, ⴷ ⵜⵉⵢⵜⵉⵡⵉⵏ ⵜⵉⵎⵣⵡⵓⵔⴰ."
    },
    "category": "music",
    "level": "beginner",
    "hours": 2,
    "rating": 4.8,
    "reviewsCount": 24,
    "instructor": {
      "id": "inst-2",
      "name": {
        "ar": "ليلى التلمساني",
        "en": "Layla Tlemceni",
        "fr": "Layla Tlemceni",
        "zgh": "ⵍⴰⵢⵍⴰ ⵜⵍⵎⵙⴰⵏⵉ"
      },
      "title": {
        "ar": "عازفة ومدرسة جيتار كلاسيكي وفلامنكو",
        "en": "Classical & Flamenco Guitarist and Music Educator",
        "fr": "Guitariste classique et flamenco, pédagogue musicale",
        "zgh": "ⵜⴰⵎⴰⵥⴰⵡⴰⵏⵜ ⵏ ⵓⴳⵉⵟⴰⵕ"
      },
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    "image": "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": "skill-3",
    "title": {
      "ar": "مدخل إلى لغة بايثون وتحليل البيانات",
      "en": "Python & Data Analysis for Beginners",
      "fr": "Initiation à Python et Analyse de Données",
      "zgh": "ⵜⴰⵣⵡⴰⵔⵜ ⴳ ⴱⴰⵢⵜⵓⵏ ⴷ ⵓⵙⵍⵍⴼ ⵏ ⵉⵙⴼⴽⴰ"
    },
    "description": {
      "ar": "من المتغيرات والـ Loops إلى قراءة ملفات Excel وتحليلها بواسطة مكتبة Pandas وتوليد رسوم بيانية فورية.",
      "en": "From loops and data types to parsing CSV/Excel with Pandas and generating insightful visual charts.",
      "fr": "Des boucles et variables à la lecture de fichiers Excel avec Pandas et la création de graphiques interactifs.",
      "zgh": "ⵙⴳ ⵉⵎⵙⵏⴼⴰⵍⵏ ⴰⵔ ⵜⵖⵓⵔⵉ ⵏ ⵉⴼⵓⵢⵍⴰ ⵙ Pandas ⴷ ⵓⵙⴽⴽⵉⵔ ⵏ ⵉⵙⵏⵉⴷⵏ."
    },
    "category": "tech",
    "level": "expert",
    "hours": 2,
    "rating": 4.95,
    "reviewsCount": 52,
    "instructor": {
      "id": "inst-3",
      "name": {
        "ar": "طارق بن منصور",
        "en": "Tariq Ben Mansour",
        "fr": "Tariq Ben Mansour",
        "zgh": "ⵟⴰⵔⵉⵇ ⵓ ⵎⵏⵚⵓⵕ"
      },
      "title": {
        "ar": "مهندس برمجيات ومحلل بيانات كبير",
        "en": "Senior Software Engineer & Data Analyst",
        "fr": "Ingénieur logiciel & Analyste de données senior",
        "zgh": "ⴰⵎⵙⴽⴰⵔ ⵏ ⵉⵙⵖⵥⴰⵏⵏ ⴷ ⵉⵙⴼⴽⴰ"
      },
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
    },
    "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": "skill-4",
    "title": {
      "ar": "مبادئ تصميم واجهات وتجربة المستخدم UI/UX ببرنامج Figma",
      "en": "UI/UX Design Essentials with Figma",
      "fr": "Les Fondamentaux du Design UI/UX avec Figma",
      "zgh": "ⵉⵍⵓⴳⴰⵏ ⵏ ⵓⵙⵓⵏⵖ UI/UX ⵙ Figma"
    },
    "description": {
      "ar": "تعلم أسس التناسق البصري، الشبكات (Grids)، لوحات الألوان، واستخدام ميزات Auto Layout و Components في فيجما لبناء نموذج تفاعلي.",
      "en": "Master visual balance, typographic grids, Auto Layout, components, and prototype interactive app flows in Figma.",
      "fr": "Maîtrisez la hiérarchie visuelle, les grilles, Auto Layout, les composants et créez un prototype d'application interactif.",
      "zgh": "ⵍⵎⴷ ⴰⵙⵓⵏⵖ ⵏ ⵡⴰⴷⴷⴰⴷⵏ, Auto Layout ⴳ Figma ⴷ ⵓⵙⴽⴽⵉⵔ ⵏ ⵓⵎⴷⵢⴰ ⵉⵙⵡⵓⵔⵉⵏ."
    },
    "category": "tech",
    "level": "expert",
    "hours": 3,
    "rating": 4.88,
    "reviewsCount": 41,
    "instructor": {
      "id": "inst-4",
      "name": {
        "ar": "نورة القحطاني",
        "en": "Noura Al-Qahtani",
        "fr": "Noura Al-Qahtani",
        "zgh": "ⵏⵓⵕⴰ ⵜⴰⵇⵃⵟⴰⵏⵉⵜ"
      },
      "title": {
        "ar": "مصممة منتجات رقمية أولى ومستشارة تصميم",
        "en": "Lead Product Designer & UX Consultant",
        "fr": "Lead Product Designer & Consultante UX",
        "zgh": "ⵜⴰⵎⵙⵓⵏⵖⵜ ⵏ ⵜⵎⵔⵙⴰⵍ ⵜⵉⵎⵓⵟⵟⵓⵏⵉⵏ"
      },
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    },
    "image": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": "skill-5",
    "title": {
      "ar": "المحادثة باللغة الفرنسية للمبتدئين والطلاقة اليومية",
      "en": "Conversational French for Everyday Fluency",
      "fr": "Français Pratique : Conversation & Aisance Orale",
      "zgh": "ⴰⵎⵙⴰⵡⴰⵍ ⵙ ⵜⴼⵕⴰⵏⵚⵉⵚⵜ ⵉ ⵉⵎⵣⵡⵓⵔⴰ"
    },
    "description": {
      "ar": "اكسر حاجز الخوف من التحدث بالفرنسية، وتعلّم العبارات الأساسية للمحادثات الواقعية في المطار، الفندق، ومقابلات العمل الودية.",
      "en": "Break the ice with conversational French: master everyday idioms, pronunciation tweaks, and real-world dialogue.",
      "fr": "Débloquez votre prise de parole en français : expressions courantes, fluidité de prononciation et mises en situation réelles.",
      "zgh": "ⴽⴽⵙ ⵜⵉⵡⵉⴷⵉ ⵏ ⵓⵎⵙⴰⵡⴰⵍ ⵙ ⵜⴼⵕⴰⵏⵚⵉⵚⵜ, ⵍⵎⴷ ⵜⵉⵡⵉⵏⴰⵙ ⵏ ⴽⵓ ⴰⵙⵙ."
    },
    "category": "languages",
    "level": "beginner",
    "hours": 1,
    "rating": 4.92,
    "reviewsCount": 65,
    "instructor": {
      "id": "inst-5",
      "name": {
        "ar": "كريم الفاسي",
        "en": "Karim El-Fassi",
        "fr": "Karim El-Fassi",
        "zgh": "ⴽⴰⵔⵉⵎ ⵍⴼⴰⵙⵉ"
      },
      "title": {
        "ar": "أستاذ لغات ومترجم فوري معتمد",
        "en": "Certified Language Instructor & Interpreter",
        "fr": "Enseignant de FLE & Interprète assermenté",
        "zgh": "ⴰⵙⵍⵎⴰⴷ ⵏ ⵜⵓⵜⵍⴰⵢⵉⵏ"
      },
      "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80"
    },
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": "skill-6",
    "title": {
      "ar": "أسرار الطبخ المغربي الأصيل وإعداد الطاجين والكسكس",
      "en": "Authentic Moroccan Cuisine: Tagine & Couscous Secrets",
      "fr": "Secrets de la Cuisine Marocaine : Tajine & Couscous",
      "zgh": "ⵜⵉⴼⵉⵢⵉ ⵜⴰⵎⵖⵔⴰⴱⵉⵜ: ⵟⵟⴰⵊⵉⵏ ⴷ ⵓⵙⴽⵙⵓ"
    },
    "description": {
      "ar": "اكتشف فن موازنة التوابل الشرقية (رأس الحانوت، الزعفران الحر، والسمن البلدي) لإعداد طاجين لحم بالبرقوق يذوب في الفم.",
      "en": "Discover spice balancing (Ras El Hanout, pure saffron, preserved lemons) to cook an authentic melt-in-your-mouth tagine.",
      "fr": "Maîtrisez l'équilibre des épices (Ras El Hanout, safran pur, citrons confits) pour réussir un tajine mijoté à la perfection.",
      "zgh": "ⵍⵎⴷ ⴰⵙⵎⵙⴰⵙⴰ ⵏ ⵍⵄⵟⵕⵉⵢⵜ (ⵕⵕⴰⵙ ⵏ ⵍⵃⴰⵏⵓⵜ, ⵣⵣⵄⴼⵕⴰⵏ) ⵉ ⵓⵙⵏⵡⵉ ⵏ ⵟⵟⴰⵊⵉⵏ ⵉⵖⵓⴷⴰⵏ."
    },
    "category": "cooking",
    "level": "legend",
    "hours": 2,
    "rating": 5,
    "reviewsCount": 78,
    "instructor": {
      "id": "inst-6",
      "name": {
        "ar": "فاطمة الزهراء العمراني",
        "en": "Fatima-Zahra El-Amrani",
        "fr": "Fatima-Zahra El-Amrani",
        "zgh": "ⴼⴰⵟⵉⵎⴰ ⵣⵣⴰⵀⵕⴰ ⵍⵄⵎⵕⴰⵏⵉ"
      },
      "title": {
        "ar": "طاهية تراثية ومدربة فنون الطهي المغاربي",
        "en": "Heritage Chef & Maghreb Culinary Arts Trainer",
        "fr": "Cheffe du patrimoine culinaire maghrébin",
        "zgh": "ⵜⴰⵎⵙⵏⵡⴰⵜ ⵏ ⵜⵎⵢⵓⵔⵉⵏ ⵜⵉⵎⵖⵔⴰⴱⵉⵢⵉⵏ"
      },
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
    },
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": "skill-7",
    "title": {
      "ar": "أساسيات تيفيناغ وقواعد اللغة الأمازيغية",
      "en": "Tamazight Language & Tifinagh Script Basics",
      "fr": "Bases de la Langue Amazighe & Écriture Tifinagh",
      "zgh": "ⵉⵎⵣⵡⵓⵔⴰ ⵏ ⵜⵓⵜⵍⴰⵢⵜ ⵜⴰⵎⴰⵣⵉⵖⵜ ⴷ ⵜⵉⴼⵉⵏⴰⵖ"
    },
    "description": {
      "ar": "تعلم قراءة وكتابة الحروف الأمازيغية (ⵜⵉⴼⵉⵏⴰⵖ)، بنية الجملة الاسمية والفعلية، وعبارات التحية اليومية كـ (ⴰⵣⵓⵍ / ⵜⴰⵏⵎⵎⵉⵔⵜ).",
      "en": "Learn to read and write the geometric Tifinagh alphabet, build simple sentences, and speak polite greetings.",
      "fr": "Apprenez à lire et écrire l'alphabet tifinagh, structurez des phrases simples et utilisez les formules de politesse courantes.",
      "zgh": "ⵍⵎⴷ ⵜⵉⵔⵔⴰ ⴷ ⵜⵖⵓⵔⵉ ⵏ ⵉⵙⴽⴽⵉⵍⵏ ⵏ ⵜⵉⴼⵉⵏⴰⵖ, ⵜⴰⵡⵉⵏⵙⵜ ⵜⴰⵎⴰⵣⵉⵖⵜ, ⴷ ⵜⵣⵓⵍⵉⵏ."
    },
    "category": "languages",
    "level": "beginner",
    "hours": 1,
    "rating": 4.97,
    "reviewsCount": 31,
    "instructor": {
      "id": "inst-7",
      "name": {
        "ar": "موحى أوحدو",
        "en": "Moha Ouhaddou",
        "fr": "Moha Ouhaddou",
        "zgh": "ⵎⵓⵃⴰ ⵓⵃⴷⴷⵓ"
      },
      "title": {
        "ar": "باحث في اللسانيات الأمازيغية والخط التاريخي",
        "en": "Amazigh Linguistics Researcher & Script Scholar",
        "fr": "Chercheur en linguistique amazighe et épigraphie",
        "zgh": "ⴰⵎⵔⵣⵓ ⴳ ⵜⵙⵏⵉⵍⵙⵜ ⵜⴰⵎⴰⵣⵉⵖⵜ"
      },
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80"
    },
    "image": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": "skill-8",
    "title": {
      "ar": "التصوير الفوتوغرافي الاحترافي بكاميرا الهاتف",
      "en": "Mobile Photography & Visual Storytelling",
      "fr": "Photographie Mobile Professionnelle & Narration Visuelle",
      "zgh": "ⵜⴰⵡⵍⴰⴼⵜ ⵜⴰⵣⵣⵓⵍⴰⵏⵜ ⵙ ⵓⵜⵉⵍⵉⴼⵓⵏ"
    },
    "description": {
      "ar": "حول لقطات هاتفك العادية إلى صور سينمائية باستخدام قواعد التكوين (قاعدة الأثلاث، الخطوط الإرشادية، والإضاءة الطبيعية) والتعديل بتطبيق Lightroom.",
      "en": "Turn smartphone snaps into cinematic imagery using composition rules, natural light mastery, and mobile Lightroom editing.",
      "fr": "Sublimez vos photos de smartphone en clichés cinématographiques grâce aux règles de cadrage, à la lumière naturelle et à Lightroom mobile.",
      "zgh": "ⵙⴽⵔ ⵜⵉⵡⵍⴰⴼⵉⵏ ⵉⵖⵓⴷⴰⵏ ⵙ ⵓⵜⵉⵍⵉⴼⵓⵏ ⵙ ⵓⵙⵎⵔⵙ ⵏ ⵜⵉⴼⴰⵡⵜ ⴷ Lightroom."
    },
    "category": "arts",
    "level": "expert",
    "hours": 2,
    "rating": 4.85,
    "reviewsCount": 39,
    "instructor": {
      "id": "inst-8",
      "name": {
        "ar": "يوسف المهدي",
        "en": "Youssef El-Mehdi",
        "fr": "Youssef El-Mehdi",
        "zgh": "ⵢⵓⵙⴼ ⵍⵎⵀⴷⵉ"
      },
      "title": {
        "ar": "مصور فوتوغرافي ومخرج بصري مستقل",
        "en": "Freelance Photographer & Visual Director",
        "fr": "Photographe indépendant & Directeur visuel",
        "zgh": "ⴰⵎⵙⵡⵍⴰⴼ ⴰⵏⴰⵥⵓⵕ"
      },
      "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"
    },
    "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": "skill-9",
    "title": {
      "ar": "فن الإلقاء والتحدث أمام الجمهور (Public Speaking)",
      "en": "Public Speaking & Confident Pitching",
      "fr": "Prise de Parole en Public & Art du Pitch",
      "zgh": "ⵜⴰⵥⵓⵕⵉ ⵏ ⵓⵎⵙⴰⵡⴰⵍ ⴷⴰⵜ ⵏ ⵎⵉⴷⴷⵏ"
    },
    "description": {
      "ar": "تخلص من رهاب المسرح، اضبط نبرات صوتك ولغة جسدك، وهيكل خطابك أو عرضك التقديمي بطريقة تبهر الحضور وتترك أثراً دائماً.",
      "en": "Conquer stage fright, harness vocal dynamics and body language, and structure impactful presentations that captivate audiences.",
      "fr": "Surmontez le trac, maîtrisez vos modulations vocales et structurez un discours mémorable qui captive votre auditoire.",
      "zgh": "ⴽⴽⵙ ⵜⵉⵡⵉⴷⵉ ⵏ ⵓⵙⴰⵢⵙ, ⵙⵡⵓⴷⴷⵓ ⵉⵎⵙⵍⵉ ⵏⵏⴽ ⴷ ⵜⵡⴰⴷⴰ, ⵜⵙⵙⵏⵜ ⴰⵡⴰⵍ ⵉⵖⵓⴷⴰⵏ."
    },
    "category": "business",
    "level": "expert",
    "hours": 1,
    "rating": 4.96,
    "reviewsCount": 45,
    "instructor": {
      "id": "inst-9",
      "name": {
        "ar": "سارة المنصوري",
        "en": "Sarah Al-Mansouri",
        "fr": "Sarah Al-Mansouri",
        "zgh": "ⵙⴰⵕⴰ ⵜⴰⵎⵏⵚⵓⵕⵉⵜ"
      },
      "title": {
        "ar": "مدربة قيادة وتواصل في محادثات TEDx",
        "en": "Leadership & TEDx Speaker Coach",
        "fr": "Coach en leadership & conférencière TEDx",
        "zgh": "ⵜⴰⵙⵍⵎⴰⴷⵜ ⵏ ⵓⵎⵢⴰⵡⴰⴹ ⴷ ⵜⵏⵙⵙⵉⵅⴼⵜ"
      },
      "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
    },
    "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": "skill-10",
    "title": {
      "ar": "مبادئ الشطرنج الاستراتيجي وحساب النقلات التكتيكية",
      "en": "Strategic Chess Tactics & Calculation Principles",
      "fr": "Principes Stratégiques et Calcul Tactique aux Échecs",
      "zgh": "ⵉⵍⵓⴳⴰⵏ ⵏ ⵛⵛⵟⵕⴰⵏⵊ ⴰⵙⵜⵔⴰⵜⵉⵊⵉ"
    },
    "description": {
      "ar": "تعلم السيطرة على مربعات المركز، الأنماط التكتيكية الحاسمة (الشوكة، الربط، والتضحيات الهجومية)، ودراسة نهايات البيادق الشهيرة.",
      "en": "Master central control, tactical patterns (pins, forks, skewers, discovery attacks), and crucial king & pawn endgames.",
      "fr": "Maîtrisez le contrôle du centre, les motifs tactiques décisifs (fourchettes, clouages, attaques à la découverte) et les finales de pions.",
      "zgh": "ⵍⵎⴷ ⴰⵃⵟⵟⵓ ⵏ ⵡⴰⵎⵎⴰⵙ, ⵜⵉⴱⵔⵉⴷⵉⵏ ⵏ ⵜⵢⵜⵉ ⴳ ⵛⵛⵟⵕⴰⵏⵊ, ⴷ ⵜⵉⴳⵉⵔⴰ ⵏ ⵓⵎⵓⵔⵙ."
    },
    "category": "business",
    "level": "legend",
    "hours": 2,
    "rating": 4.98,
    "reviewsCount": 56,
    "instructor": {
      "id": "inst-10",
      "name": {
        "ar": "أمين الودغيري",
        "en": "Amine El-Ouadghiri",
        "fr": "Amine El-Ouadghiri",
        "zgh": "ⴰⵎⵉⵏ ⵍⵡⴰⴷⵖⵉⵔⵉ"
      },
      "title": {
        "ar": "أستاذ دولي مرشح (CM) ومحلل شطرنج",
        "en": "Candidate Master (CM) & Chess Analyst",
        "fr": "Candidat Maître FIDE (CM) & Entraîneur",
        "zgh": "ⴰⵎⵣⵣⵓⵍ ⵏ ⵛⵛⵟⵕⴰⵏⵊ"
      },
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
    },
    "image": "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": "skill-11",
    "title": {
      "ar": "أساسيات العزف على العود الشرقي والمقامات الموسيقية",
      "en": "Oriental Oud & Maqam Foundations",
      "fr": "Initiation au Luth Oriental (Oud) & Système des Maqams",
      "zgh": "ⵉⵎⵣⵡⵓⵔⴰ ⵏ ⵓⵥⴰⵡⴰⵏ ⵏ ⵍⵄⵓⴷ"
    },
    "description": {
      "ar": "امسك الريشة، تعرّف على دوزان العود، وسبر أغوار مقامَي العجم والراست مع تمارين استخراج النغمات النقية.",
      "en": "Hold the risha correctly, tune the oud, and explore the enchanting Ajam and Rast maqams with pure intonation drills.",
      "fr": "Apprenez la tenue du plectre (risha), l'accordage de l'oud et explorez les maqams Ajam et Rast avec des gammes pures.",
      "zgh": "ⵍⵎⴷ ⴰⵎⴰⵔⴰⵢ ⵏ ⵍⵄⵓⴷ ⴷ ⵓⵥⴰⵡⴰⵏ ⵏ ⵍⵄⴰⵊⴰⵎ ⴷ ⵕⵕⴰⵙⵜ."
    },
    "category": "music",
    "level": "beginner",
    "hours": 2,
    "rating": 4.94,
    "reviewsCount": 33,
    "instructor": {
      "id": "inst-11",
      "name": {
        "ar": "سامي الزهراني",
        "en": "Sami Al-Zahrani",
        "fr": "Sami Al-Zahrani",
        "zgh": "ⵙⴰⵎⵉ ⴰⵣⵣⴰⵀⵔⴰⵏⵉ"
      },
      "title": {
        "ar": "أستاذ آلات وترية ومؤلف موسيقى شرقية",
        "en": "String Instruments Educator & Oriental Composer",
        "fr": "Professeur d'instruments à cordes & Compositeur",
        "zgh": "ⴰⵙⵍⵎⴰⴷ ⵏ ⵡⴰⵍⵍⴰⵍⵏ ⵏ ⵓⵥⴰⵡⴰⵏ"
      },
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    "image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": "skill-12",
    "title": {
      "ar": "صناعة المحتوى والكتابة الإبداعية للمنصات الرقمية",
      "en": "Content Creation & Digital Storytelling",
      "fr": "Création de Contenu & Storytelling Digital",
      "zgh": "ⴰⵙⴽⴽⵉⵔ ⵏ ⵓⵎⴰⵢⵏⵓ ⴷ ⵜⵉⵔⵔⴰ ⵜⴰⵏⴰⵥⵓⵕⵜ"
    },
    "description": {
      "ar": "كيف تصيغ قصة تلهم جمهورك في 60 ثانية؟ أسرار كتابة الـ Hook، السرد البصري، وكتابة سيناريو يشد المتابعين حتى النهاية.",
      "en": "How to craft a gripping 60-second narrative: hooks, visual framing, pacing, and viral storytelling scripts.",
      "fr": "Comment captiver votre audience en 60 secondes : structure d'accroche (hook), narration visuelle et script percutant.",
      "zgh": "ⵎⴰⵏⵉⴽ ⵙ ⵔⴰⴷ ⵜⴰⵔⴰⴷ ⵜⴰⵏⴼⵓⵙⵜ ⵉⵙⵡⴰⵏ ⴳ 60 ⵏ ⵜⵓⵙⴷⵉⴷⵜ."
    },
    "category": "business",
    "level": "beginner",
    "hours": 1,
    "rating": 4.89,
    "reviewsCount": 29,
    "instructor": {
      "id": "inst-12",
      "name": {
        "ar": "مريم العلمي",
        "en": "Meriem El-Alami",
        "fr": "Meriem El-Alami",
        "zgh": "ⵎⵔⵢⵎ ⵍⵄⴰⵍⴰⵎⵉ"
      },
      "title": {
        "ar": "كاتبة سيناريو وصانعة محتوى ثقافي رقمي",
        "en": "Screenwriter & Cultural Digital Creator",
        "fr": "Scénariste & Créatrice de contenu culturel",
        "zgh": "ⵜⴰⵎⴰⵔⴰⵢⵜ ⵏ ⵉⴼⵉⵍⵎⵏ ⴷ ⵓⵥⵟⵟⴰ"
      },
      "avatar": "https://images.unsplash.com/photo-1548142813-c348350df52b?w=150&auto=format&fit=crop&q=80"
    },
    "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80"
  }
],

  // 3. الجلسات المحجوزة ومعاملات التجميد (Escrow)
  sessions: [
    {
      id: 'sess-101',
      skillId: 'skill-1',
      skillTitle: { ar: 'أساسيات الخط العربي والديواني', en: 'Arabic Calligraphy Fundamentals' },
      instructor: { name: 'عبد الرحمن الصالحي', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
      scheduledAt: '2026-11-20T16:00:00Z',
      hours: 1,
      status: 'confirmed',
      escrowStatus: 'held',
      roomUrl: 'virtual-room-101'
    }
  ],

  // 4. سجل معاملات بنك الوقت (Ledger)
  transactions: [
    { id: 'tx-1', type: 'deposit', hours: 50, note: { ar: 'رصيد الترحيب الافتتاحي', en: 'Initial welcome credit' }, timestamp: '2026-11-01T10:00:00Z' },
    { id: 'tx-2', type: 'escrow_hold', sessionId: 'sess-101', hours: 1, note: { ar: 'تجميد ضمان جلسة الخط العربي', en: 'Escrow hold for calligraphy session' }, timestamp: '2026-11-15T14:30:00Z' }
  ],

  // 5. قسم المحادثات التفاعلية الفعالة مع المدربين (Conversations & Direct Chat)
  conversations: [
    {
      instructorId: 'inst-1',
      instructorName: { ar: 'عبد الرحمن الصالحي', en: 'Abdulrahman Al-Salihi', fr: 'Abdulrahman', zgh: 'ⵄⴱⴷⵓⵕⵕⴰⵃⵎⴰⵏ' },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      skillTitle: { ar: 'أساسيات الخط العربي والديواني', en: 'Arabic Calligraphy' },
      unread: 1,
      messages: [
        { id: 'm-1', sender: 'instructor', text: 'مرحباً بك يا عبد الإله! هل جهزت أدوات الخط والقصب لبدء الجلسة الأولى؟', timestamp: '2026-11-18T14:30:00Z' }
      ]
    },
    {
      instructorId: 'inst-2',
      instructorName: { ar: 'ليلى التلمساني', en: 'Layla Tlemceni', fr: 'Layla Tlemceni', zgh: 'ⵍⴰⵢⵍⴰ' },
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      skillTitle: { ar: 'الجيتار للمبتدئين وأوتار العزف الأولى', en: 'Acoustic Guitar' },
      unread: 0,
      messages: [
        { id: 'm-2', sender: 'instructor', text: 'أهلاً! يسعدني مرافقتك في رحلتك الموسيقية، متى ترغب في عقد الجلسة القادمة؟', timestamp: '2026-11-17T11:00:00Z' }
      ]
    },
    {
      instructorId: 'inst-3',
      instructorName: { ar: 'أمين بلحاج', en: 'Amine Belhadj', fr: 'Amine Belhadj', zgh: 'ⴰⵎⵉⵏ' },
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      skillTitle: { ar: 'مدخل إلى لغة بايثون وتحليل البيانات', en: 'Python & Data Analysis' },
      unread: 0,
      messages: [
        { id: 'm-3', sender: 'instructor', text: 'مرحباً! تأكد من تثبيت Python و Jupyter Notebook قبل موعد ورشتنا.', timestamp: '2026-11-16T09:15:00Z' }
      ]
    }
  ]
};

// ============================================================
// كائن إدارة الحالة الموحد (State Store Manager)
// ============================================================
class MaharahStore {
  constructor(storageKey = 'maharah_state_v3') {
    this.key = storageKey;
    this.listeners = new Set();
    this.state = this.load();
  }

  load() {
    try {
      const saved = localStorage.getItem(this.key);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.skills && parsed.skills.length >= 10 && parsed.conversations) {
          return parsed;
        }
      }
      return structuredClone(DEFAULT_STATE);
    } catch (e) {
      console.warn('تعذر قراءة الحالة من LocalStorage، تم الرجوع للافتراضي:', e);
      return structuredClone(DEFAULT_STATE);
    }
  }

  save() {
    try {
      localStorage.setItem(this.key, JSON.stringify(this.state));
      this.notify();
    } catch (e) {
      console.error('خطأ أثناء حفظ الحالة في LocalStorage:', e);
    }
  }

  subscribe(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  notify() {
    for (const listener of this.listeners) listener(this.state);
  }

  get user() { return this.state.user; }
  get skills() { return this.state.skills; }
  get sessions() { return this.state.sessions; }
  get transactions() { return this.state.transactions; }
  get conversations() { return this.state.conversations || []; }

  // ----------------------------------------------------------
  // إجراءات بنك الوقت ومعاملات التجميد (Escrow Operations)
  // ----------------------------------------------------------
  bookSession({ skillId, date, hours }) {
    const skill = this.skills.find(s => s.id === skillId);
    if (!skill) throw new Error('المهارة غير موجودة');
    const cost = Number(hours) || skill.hours || 1;

    if (this.user.balance < cost) {
      throw new Error('رصيد الساعات المتاح غير كافٍ لإتمام الحجز');
    }

    this.user.balance -= cost;
    this.user.escrowed += cost;

    const sessionId = 'sess-' + Date.now();
    const newSession = {
      id: sessionId,
      skillId: skill.id,
      skillTitle: skill.title,
      instructor: { name: skill.instructor.name.ar || skill.instructor.name, avatar: skill.instructor.avatar },
      scheduledAt: date || new Date().toISOString(),
      hours: cost,
      status: 'pending',
      escrowStatus: 'held',
      roomUrl: 'virtual-room-' + sessionId
    };

    this.sessions.unshift(newSession);

    this.transactions.unshift({
      id: 'tx-' + Date.now(),
      type: 'escrow_hold',
      sessionId,
      hours: cost,
      note: { ar: 'تجميد ضمان جلسة: ' + (skill.title.ar || skill.title), en: 'Escrow hold for session' },
      timestamp: new Date().toISOString()
    });

    this.save();
    return newSession;
  }

  completeSession(sessionId) {
    const sess = this.sessions.find(s => s.id === sessionId);
    if (!sess || sess.status === 'completed') return false;

    if (sess.escrowStatus === 'held') {
      this.user.escrowed -= sess.hours;
      this.user.consumed += sess.hours;
      sess.escrowStatus = 'released';
    }
    sess.status = 'completed';

    this.transactions.unshift({
      id: 'tx-' + Date.now(),
      type: 'escrow_release',
      sessionId,
      hours: sess.hours,
      note: { ar: 'تحرير ضمان جلسة مكتملة (' + sess.hours + ' س)', en: 'Released escrow for completed session' },
      timestamp: new Date().toISOString()
    });

    this.save();
    return true;
  }

  cancelSession(sessionId) {
    const sess = this.sessions.find(s => s.id === sessionId);
    if (!sess || sess.status === 'cancelled') return false;

    if (sess.escrowStatus === 'held') {
      this.user.escrowed -= sess.hours;
      this.user.balance += sess.hours;
      sess.escrowStatus = 'refunded';
    }
    sess.status = 'cancelled';

    this.transactions.unshift({
      id: 'tx-' + Date.now(),
      type: 'refund',
      sessionId,
      hours: sess.hours,
      note: { ar: 'استرداد ساعات جلسة ملغاة (' + sess.hours + ' س)', en: 'Refunded hours for cancelled session' },
      timestamp: new Date().toISOString()
    });

    this.save();
    return true;
  }

  addHours(hours = 50) {
    this.user.balance += hours;
    this.transactions.unshift({
      id: 'tx-' + Date.now(),
      type: 'deposit',
      hours,
      note: { ar: 'شحن ساعات إضافية في بنك الوقت (+' + hours + ' س)', en: 'Top-up time bank balance (+' + hours + ' hrs)' },
      timestamp: new Date().toISOString()
    });
    this.save();
  }

  // ----------------------------------------------------------
  // إجراءات قسم المحادثات المباشرة (Direct Messaging)
  // ----------------------------------------------------------
  getOrCreateConversation(instructorId) {
    let conv = this.conversations.find(c => c.instructorId === instructorId);
    if (!conv) {
      const skill = this.skills.find(s => s.instructor.id === instructorId) || this.skills[0];
      conv = {
        instructorId,
        instructorName: skill.instructor.name,
        avatar: skill.instructor.avatar,
        skillTitle: skill.title,
        unread: 0,
        messages: [
          {
            id: 'm-init-' + Date.now(),
            sender: 'instructor',
            text: 'أهلاً بك! أنا ' + (skill.instructor.name.ar || skill.instructor.name) + '، مدرب مهارة ' + (skill.title.ar || skill.title) + '. كيف يمكنني مساعدتك؟',
            timestamp: new Date().toISOString()
          }
        ]
      };
      this.conversations.unshift(conv);
      this.save();
    }
    return conv;
  }

  sendMessage(instructorId, text) {
    const conv = this.getOrCreateConversation(instructorId);
    const userMsg = {
      id: 'm-' + Date.now(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toISOString()
    };
    conv.messages.push(userMsg);
    this.save();

    // رد تلقائي واقعي وسريع من المدرب
    setTimeout(() => {
      const replies = [
        'شكراً لرسالتك! سأكون سعيداً جداً بمشاركتك كافة التفاصيل وتحديد موعد الجلسة.',
        'رسالة ممتازة! سأقوم بتجهيز المواد التدريبية المناسبة لمستواك.',
        'أهلاً بك، يمكنك تأكيد حجز الجلسة وسنقوم ببدء التدريب العملي فوراً في الغرفة الافتراضية.'
      ];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      conv.messages.push({
        id: 'm-' + Date.now(),
        sender: 'instructor',
        text: randomReply,
        timestamp: new Date().toISOString()
      });
      conv.unread = (conv.unread || 0) + 1;
      this.save();
    }, 1200);

    return userMsg;
  }

  setLanguage(lang) {
    this.user.lang = lang;
    this.save();
  }

  reset() {
    this.state = structuredClone(DEFAULT_STATE);
    this.save();
  }
}

window.store = new MaharahStore();
