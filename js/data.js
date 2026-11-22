const initialData = {
  skills: [
    {
      id: "skill-1",
      title: {
        ar: "أساسيات الخط العربي والديواني",
        en: "Arabic Calligraphy & Diwani Script Fundamentals",
        fr: "Bases de la Calligraphie Arabe et Style Diwani",
        zgh: "ⵉⵎⵣⵡⵓⵔⴰ ⵏ ⵓⵙⴽⴽⵉⵍ ⴰⵄⵕⴰⴱ ⴷ ⴷⴷⵉⵡⴰⵏⵉ"
      },
      category: "arts",
      level: "beginner",
      duration: 1, // 1 hour
      instructor: {
        name: {
          ar: "عبد الرحمن الصالحي",
          en: "Abdulrahman Al-Salihi",
          fr: "Abdulrahman Al-Salihi",
          zgh: "ⵄⴱⴷⵓⵕⵕⴰⵃⵎⴰⵏ ⴰⵚⵚⴰⵍⵉⵃⵉ"
        },
        title: {
          ar: "خطاط معتمد وباحث في الفنون الكلاسيكية",
          en: "Certified Calligrapher & Classical Arts Researcher",
          fr: "Calligraphe certifié & Chercheur en arts classiques",
          zgh: "ⴰⵎⵙⵓⵏⵖ ⴰⵏⴰⵥⵓⵕ ⴳ ⵜⵥⵓⵕⵉⵡⵉⵏ ⵜⵉⵣⴰⵢⴽⵓⵜⵉⵏ"
        },
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
      },
      rating: 4.9,
      reviewsCount: 38,
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80",
      description: {
        ar: "تعلم مسكة القصبة، ضبط زوايا الحبر، وتشكيل الحروف المفردة والمركبة في خط الرقعة والديواني مع تطبيقات عملية فورية.",
        en: "Master reed pen holding, ink angling, and drawing isolated and connected letters in Ruq'ah and Diwani styles.",
        fr: "Maîtrisez la tenue du calame, l'inclinaison de l'encre et le tracé des lettres isolées et liées dans les styles Ruq'ah et Diwani.",
        zgh: "ⵍⵎⴷ ⴰⵎⴰⵔⴰⵢ ⵏ ⵓⵖⴰⵏⵉⵎ, ⵜⵉⵖⵎⵔⵉⵏ ⵏ ⵓⵙⵎⵖⵔ, ⴷ ⵓⵙⴽⴽⵉⵍ ⵏ ⵉⵙⴽⴽⵉⵍⵏ ⴳ ⵓⵖⴰⵏⵉⵎ."
      },
      curriculum: {
        ar: [
          "اختيار أدوات الخط (القصب، الحبر، والورق المقهر)",
          "ميزان النقطة وتشريح زوايا القلم الأساسية",
          "رسم حرف الألف والباء ومجموعات الحروف الأفقية",
          "تمرين كتابة اسمك أو عبارة قصيرة بأسلوب فني"
        ],
        en: [
          "Selecting calligraphy tools (reed pens, inks, coated papers)",
          "The dot-scale system and essential pen angle anatomy",
          "Shaping Alif, Baa and horizontal letter families",
          "Practical exercise: Inscribing your name or a short quote"
        ],
        fr: [
          "Choix des outils traditionnels (calame, encre, papier couché)",
          "Système de mesure au point et angles de plume",
          "Tracé des lettres Alif, Ba et familles horizontales",
          "Atelier pratique : Écriture de votre prénom ou citation"
        ],
        zgh: [
          "ⴰⵙⵜⴰⵢ ⵏ ⵡⴰⵍⵍⴰⵍⵏ ⵏ ⵜⵉⵔⵔⴰ (ⴰⵖⴰⵏⵉⵎ, ⵙⵙⵎⵖ)",
          "ⴰⵙⵙⵉⴹⵏ ⵏ ⵜⵏⵇⵇⵉⴹⵜ ⴷ ⵜⵖⵎⵔⵉⵏ ⵏ ⵓⵖⴰⵏⵉⵎ",
          "ⴰⵙⵓⵏⵖ ⵏ ⵉⵙⴽⴽⵉⵍⵏ ⵉⵎⵣⵡⵓⵔⴰ",
          "ⴰⵔⵎ ⵏ ⵜⵉⵔⵔⴰ ⵏ ⵢⵉⵙⵎ ⵏⵏⴽ ⵙ ⵜⵥⵓⵕⵉ"
        ]
      },
      prerequisites: {
        ar: "قلم خط عريض (2 مم إلى 3 مم) أو قلم رصاص مشطوف وورق أملس.",
        en: "Chisel-tip calligraphy pen (2mm-3mm) or regular soft pencil and smooth paper.",
        fr: "Feutre biseauté de calligraphie (2-3 mm) ou crayon et papier lisse.",
        zgh: "ⴰⵖⴰⵏⵉⵎ ⵏ ⵜⵉⵔⵔⴰ ⵏⵖ ⵉⵎⵔⵓ ⵉⴱⴱⵉⵏ ⴷ ⵜⴼⵔⵜ ⵜⴰⵍⴳⴳⴰⵖⵜ."
      }
    },
    {
      id: "skill-2",
      title: {
        ar: "الجيتار للمبتدئين وأوتار العزف الأولى",
        en: "Acoustic Guitar for Beginners: First Chords",
        fr: "Guitare Acoustique Débutant : Premiers Accords",
        zgh: "ⴰⴳⵉⵟⴰⵕ ⵉ ⵉⵎⵣⵡⵓⵔⴰ ⴷ ⵓⵥⴰⵡⴰⵏ"
      },
      category: "music",
      level: "beginner",
      duration: 2, // 2 hours
      instructor: {
        name: {
          ar: "ليلى التلمساني",
          en: "Layla Tlemceni",
          fr: "Layla Tlemceni",
          zgh: "ⵍⴰⵢⵍⴰ ⵜⵍⵎⵙⴰⵏⵉ"
        },
        title: {
          ar: "عازفة ومدرسة جيتار كلاسيكي وفلامنكو",
          en: "Classical & Flamenco Guitarist and Music Educator",
          fr: "Guitariste classique et flamenco, pédagogue musicale",
          zgh: "ⵜⴰⵎⴰⵥⴰⵡⴰⵏⵜ ⵏ ⵓⴳⵉⵟⴰⵕ"
        },
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
      },
      rating: 4.8,
      reviewsCount: 24,
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&auto=format&fit=crop&q=80",
      description: {
        ar: "ابدأ رحلتك الموسيقية بتعلم مسكة الجيتار الصحيحة، أوتار الأساس (Em, C, G, D)، ونمط الريتم الأول لعزف أغانيك المفضلة.",
        en: "Start your musical journey learning proper posture, core chords (Em, C, G, D), and your first strumming patterns.",
        fr: "Démarrez la guitare avec la bonne posture, les accords ouverts essentiels (Em, C, G, D) et votre première rythmique.",
        zgh: "ⴱⴷⵓ ⴰⵥⴰⵡⴰⵏ ⵙ ⵓⵎⴰⵔⴰⵢ ⵏ ⵓⴳⵉⵟⴰⵕ, ⵉⵥⵓⵕⴰⵏ ⵏ ⵓⵥⴰⵡⴰⵏ, ⴷ ⵜⵉⵢⵜⵉⵡⵉⵏ ⵜⵉⵎⵣⵡⵓⵔⴰ."
      },
      curriculum: {
        ar: [
          "جلسة العزف وضبط دوزان الأوتار (Tuning)",
          "وضعية اليد اليسرى بدون إجهاد وحماية أطراف الأصابع",
          "أوتار Em و C و G والتبديل السلس بينها",
          "عزف أول تتابع لحني كامل مع إيقاع منتظم"
        ],
        en: [
          "Ergonomic playing posture & tuning your instrument",
          "Left-hand positioning without strain",
          "Em, C, and G chord transitions with fluid timing",
          "Playing your first full musical progression"
        ],
        fr: [
          "Posture ergonomique et accordage de l'instrument",
          "Position de la main gauche sans crispation",
          "Accords Em, C, G et enchaînement fluide",
          "Premier morceau joué en entier au tempo"
        ],
        zgh: [
          "ⵜⵉⵖⵉⵎⵉⵜ ⴷ ⵓⵙⵎⵙⴰⵙⴰ ⵏ ⵉⴼⴰⵍⴽⴰⵢⵏ",
          "ⴰⵙⵔⵔⵙ ⵏ ⵓⴼⵓⵙ ⴰⵥⵍⵎⴰⴹ",
          "ⵉⴼⴰⵍⴽⴰⵢⵏ ⵏ Em, C, G ⴷ ⵓⵎⵙⵏⴼⵍ ⵏⵏⵙⵏ",
          "ⴰⵥⴰⵡⴰⵏ ⵏ ⵓⴼⵉⴷⵢⵓ ⴰⵎⵣⵡⴰⵔⵓ ⵉⵎⴷⴰⵏ"
        ]
      },
      prerequisites: {
        ar: "توفر جيتار أكوستيك أو كلاسيكي وكاميرا واضحة لإرشاد الأصابع.",
        en: "Acoustic or classical guitar and webcam for finger position feedback.",
        fr: "Guitare acoustique ou classique et webcam pour corriger la posture.",
        zgh: "ⴰⴳⵉⵟⴰⵕ ⴷ ⵜⴽⴰⵎⵉⵕⴰ ⵉⴱⴰⵏⵏ."
      }
    },
    {
      id: "skill-3",
      title: {
        ar: "مدخل إلى لغة بايثون وتحليل البيانات",
        en: "Python & Data Analysis for Beginners",
        fr: "Initiation à Python et Analyse de Données",
        zgh: "ⵜⴰⵣⵡⴰⵔⵜ ⴳ ⴱⴰⵢⵜⵓⵏ ⴷ ⵓⵙⵍⵍⴼ ⵏ ⵉⵙⴼⴽⴰ"
      },
      category: "tech",
      level: "expert",
      duration: 2, // 2 hours
      instructor: {
        name: {
          ar: "طارق بن منصور",
          en: "Tariq Ben Mansour",
          fr: "Tariq Ben Mansour",
          zgh: "ⵟⴰⵔⵉⵇ ⵓ ⵎⵏⵚⵓⵕ"
        },
        title: {
          ar: "مهندس برمجيات ومحلل بيانات كبير",
          en: "Senior Software Engineer & Data Analyst",
          fr: "Ingénieur logiciel & Analyste de données senior",
          zgh: "ⴰⵎⵙⴽⴰⵔ ⵏ ⵉⵙⵖⵥⴰⵏⵏ ⴷ ⵉⵙⴼⴽⴰ"
        },
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
      },
      rating: 4.95,
      reviewsCount: 52,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
      description: {
        ar: "من المتغيرات والـ Loops إلى قراءة ملفات Excel وتحليلها بواسطة مكتبة Pandas وتوليد رسوم بيانية فورية.",
        en: "From loops and data types to parsing CSV/Excel with Pandas and generating insightful visual charts.",
        fr: "Des boucles et variables à la lecture de fichiers Excel avec Pandas et la création de graphiques interactifs.",
        zgh: "ⵙⴳ ⵉⵎⵙⵏⴼⴰⵍⵏ ⴰⵔ ⵜⵖⵓⵔⵉ ⵏ ⵉⴼⵓⵢⵍⴰ ⵙ Pandas ⴷ ⵓⵙⴽⴽⵉⵔ ⵏ ⵉⵙⵏⵉⴷⵏ."
      },
      curriculum: {
        ar: [
          "إعداد بيئة العمل (Jupyter Notebook / Google Colab)",
          "التعامل مع البيانات والقوائم والقواميس في بايثون",
          "استيراد وفلترة مجموعات البيانات عبر مكتبة Pandas",
          "بناء تقرير رسومي وتصديره كـ PDF ورسوم بيانية"
        ],
        en: [
          "Environment setup (Jupyter Notebook / Google Colab)",
          "Python data structures, lists, and dict comprehensions",
          "Filtering and transforming datasets using Pandas",
          "Building visual charts and exporting summaries"
        ],
        fr: [
          "Configuration de l'environnement (Jupyter / Colab)",
          "Structures de données Python, listes et dictionnaires",
          "Filtrage et nettoyage de données avec Pandas",
          "Création de graphiques et export de synthèses"
        ],
        zgh: [
          "ⴰⵙⵙⵔⵙ ⵏ ⵓⵙⴰⵜⵉ (Google Colab)",
          "ⴰⵙⵡⵓⵔⵉ ⵙ ⵉⵙⴼⴽⴰ ⴳ ⴱⴰⵢⵜⵓⵏ",
          "ⴰⵙⴽⵍⵙ ⴷ ⵓⵙⵙⵉⴼⴼ ⵏ ⵉⵙⴼⴽⴰ ⵙ Pandas",
          "ⴰⵙⵓⴼⵖ ⵏ ⵓⵏⵇⵇⵉⵙ ⵙ ⵉⵙⵏⵉⴷⵏ"
        ]
      },
      prerequisites: {
        ar: "حاسوب متصل بالإنترنت ومثبت عليه متصفح حديث (لا يلزم تنصيب مسبق).",
        en: "Computer with a modern browser (Google Colab is free and web-based).",
        fr: "Ordinateur avec un navigateur web récent (Google Colab ne nécessite aucune installation).",
        zgh: "ⴰⵎⵙⵙⵓⴷⵙ ⵉⵇⵇⵏⵏ ⵖⵔ ⵓⵥⵟⵟⴰ."
      }
    },
    {
      id: "skill-4",
      title: {
        ar: "مبادئ تصميم واجهات وتجربة المستخدم UI/UX ببرنامج Figma",
        en: "UI/UX Design Essentials with Figma",
        fr: "Les Fondamentaux du Design UI/UX avec Figma",
        zgh: "ⵉⵍⵓⴳⴰⵏ ⵏ ⵓⵙⵓⵏⵖ UI/UX ⵙ Figma"
      },
      category: "tech",
      level: "expert",
      duration: 3, // 3 hours
      instructor: {
        name: {
          ar: "نورة القحطاني",
          en: "Noura Al-Qahtani",
          fr: "Noura Al-Qahtani",
          zgh: "ⵏⵓⵕⴰ ⵜⴰⵇⵃⵟⴰⵏⵉⵜ"
        },
        title: {
          ar: "مصممة منتجات رقمية أولى ومستشارة تصميم",
          en: "Lead Product Designer & UX Consultant",
          fr: "Lead Product Designer & Consultante UX",
          zgh: "ⵜⴰⵎⵙⵓⵏⵖⵜ ⵏ ⵜⵎⵔⵙⴰⵍ ⵜⵉⵎⵓⵟⵟⵓⵏⵉⵏ"
        },
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
      },
      rating: 4.88,
      reviewsCount: 41,
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&auto=format&fit=crop&q=80",
      description: {
        ar: "تعلم أسس التناسق البصري، الشبكات (Grids)، لوحات الألوان، واستخدام ميزات Auto Layout و Components في فيجما لبناء نموذج تفاعلي.",
        en: "Master visual balance, typographic grids, Auto Layout, components, and prototype interactive app flows in Figma.",
        fr: "Maîtrisez la hiérarchie visuelle, les grilles, Auto Layout, les composants et créez un prototype d'application interactif.",
        zgh: "ⵍⵎⴷ ⴰⵙⵓⵏⵖ ⵏ ⵡⴰⴷⴷⴰⴷⵏ, Auto Layout ⴳ Figma ⴷ ⵓⵙⴽⴽⵉⵔ ⵏ ⵓⵎⴷⵢⴰ ⵉⵙⵡⵓⵔⵉⵏ."
      },
      curriculum: {
        ar: [
          "فهم رحلة المستخدم (User Flow) وتخطيط الهيكل السلكي (Wireframe)",
          "تطبيق مقاييس الطباعة ونظام الألوان المتوافق مع معايير الوصول (A11y)",
          "احتراف Auto Layout وتصميم مكونات تفاعلية قابلة لإعادة الاستخدام",
          "ربط الشاشات بنموذج أولي حركي ومشاركته للاختبار"
        ],
        en: [
          "User flow mapping and low-fidelity wireframing",
          "Typography scales and accessible color contrast (A11y)",
          "Mastering Auto Layout & interactive component variants",
          "Linking artboards into a clickable prototype"
        ],
        fr: [
          "Parcours utilisateur et création de wireframes",
          "Échelles typographiques et contrastes de couleurs accessibles",
          "Maîtrise d'Auto Layout et des variantes de composants",
          "Prototypage interactif et partage pour tests utilisateurs"
        ],
        zgh: [
          "ⴰⵙⵡⵉⵏⴳⵎ ⴳ ⵓⵎⵙⵙⵎⵔⵙ ⴷ ⵓⵙⵓⵏⵖ ⴰⵎⵣⵡⴰⵔⵓ",
          "ⵉⴽⵯⵍⴰⵏ ⴷ ⵉⵙⴽⴽⵉⵍⵏ ⵉⵎⵙⴰⵙⴰⵏ",
          "ⴰⵙⵡⵓⵔⵉ ⵙ Auto Layout ⴳ Figma",
          "ⴰⵇⵇⵏ ⵏ ⵜⵙⵏⵉⵡⵉⵏ ⴳ ⵓⵎⴷⵢⴰ ⵉⵜⵜⵎⵓⵙⵙⵓⵏ"
        ]
      },
      prerequisites: {
        ar: "حساب فيجما مجاني وحاسوب مع فأرة أو لوحة لمس دقيقة.",
        en: "Free Figma web account and a computer with a mouse or precise trackpad.",
        fr: "Compte Figma gratuit et ordinateur avec souris ou pavé tactile précis.",
        zgh: "ⴰⵎⵉⴹⴰⵏ ⴱⴰⵟⵍ ⴳ Figma ⴷ ⵓⵎⵙⵙⵓⴷⵙ."
      }
    },
    {
      id: "skill-5",
      title: {
        ar: "المحادثة باللغة الفرنسية للمبتدئين والطلاقة اليومية",
        en: "Conversational French for Everyday Fluency",
        fr: "Français Pratique : Conversation & Aisance Orale",
        zgh: "ⴰⵎⵙⴰⵡⴰⵍ ⵙ ⵜⴼⵕⴰⵏⵚⵉⵚⵜ ⵉ ⵉⵎⵣⵡⵓⵔⴰ"
      },
      category: "languages",
      level: "beginner",
      duration: 1, // 1 hour
      instructor: {
        name: {
          ar: "كريم الفاسي",
          en: "Karim El-Fassi",
          fr: "Karim El-Fassi",
          zgh: "ⴽⴰⵔⵉⵎ ⵍⴼⴰⵙⵉ"
        },
        title: {
          ar: "أستاذ لغات ومترجم فوري معتمد",
          en: "Certified Language Instructor & Interpreter",
          fr: "Enseignant de FLE & Interprète assermenté",
          zgh: "ⴰⵙⵍⵎⴰⴷ ⵏ ⵜⵓⵜⵍⴰⵢⵉⵏ"
        },
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80"
      },
      rating: 4.92,
      reviewsCount: 65,
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=80",
      description: {
        ar: "اكسر حاجز الخوف من التحدث بالفرنسية، وتعلّم العبارات الأساسية للمحادثات الواقعية في المطار، الفندق، ومقابلات العمل الودية.",
        en: "Break the ice with conversational French: master everyday idioms, pronunciation tweaks, and real-world dialogue.",
        fr: "Débloquez votre prise de parole en français : expressions courantes, fluidité de prononciation et mises en situation réelles.",
        zgh: "ⴽⴽⵙ ⵜⵉⵡⵉⴷⵉ ⵏ ⵓⵎⵙⴰⵡⴰⵍ ⵙ ⵜⴼⵕⴰⵏⵚⵉⵚⵜ, ⵍⵎⴷ ⵜⵉⵡⵉⵏⴰⵙ ⵏ ⴽⵓ ⴰⵙⵙ."
      },
      curriculum: {
        ar: [
          "تقنيات النطق السليم للحروف الفرنسية الصامتة وحروف العلة الخاصة",
          "جمل التعارف وتقديم النفس والمجال المهني بثقة",
          "محاكاة حوار حي في مقهى أو مطعم باريسي",
          "تجنب الأخطاء الشائعة وحيل الاسترسال الصوتي"
        ],
        en: [
          "Pronunciation secrets for nasal vowels and silent endings",
          "Self-introductions and describing your career confidently",
          "Role-play: Ordering at a café or asking for directions",
          "Tactics to keep the conversation flowing smoothly"
        ],
        fr: [
          "Secrets de prononciation pour voyelles nasales et lettres muettes",
          "Se présenter et parler de ses projets avec assurance",
          "Jeu de rôle : Commander au bistrot ou s'orienter en ville",
          "Astuces pour maintenir une conversation vivante et naturelle"
        ],
        zgh: [
          "ⴰⵙⵙⵓⵙⵔⵓ ⵉⵖⵓⴷⴰⵏ ⵏ ⵉⵙⴽⴽⵉⵍⵏ ⵉⴼⵕⴰⵏⵚⵉⵚⵏ",
          "ⴰⵙⵙⵏⴽⴷ ⵏ ⵢⵉⵅⴼ ⵙ ⵜⵏⴼⵔⵓⵜ",
          "ⴰⵎⵙⴰⵡⴰⵍ ⴳ ⵓⵙⴰⵜⵉ ⵏ ⵜⵡⵓⵔⵉ ⴷ ⵓⵙⵓⵏⴼⵓ",
          "ⵜⵉⴱⵔⵉⴷⵉⵏ ⵏ ⵓⵎⵢⴰⵡⴰⴹ ⴱⵍⴰ ⴰⴱⴷⴷⵉ"
        ]
      },
      prerequisites: {
        ar: "معرفة مسبقة بأبجديات اللغة أو رغبة صادقة في البدء من الصفر.",
        en: "Open to absolute beginners; a quiet microphone is all you need.",
        fr: "Accessible à tous les niveaux ; micro clair et enthousiasme requis.",
        zgh: "ⵉⵖⵓⴷⴰ ⵉ ⴽⵓⵍⵍⵓ ⵎⵉⴷⴷⵏ."
      }
    },
    {
      id: "skill-6",
      title: {
        ar: "أسرار الطبخ المغربي الأصيل وإعداد الطاجين والكسكس",
        en: "Authentic Moroccan Cuisine: Tagine & Couscous Secrets",
        fr: "Secrets de la Cuisine Marocaine : Tajine & Couscous",
        zgh: "ⵜⵉⴼⵉⵢⵉ ⵜⴰⵎⵖⵔⴰⴱⵉⵜ: ⵟⵟⴰⵊⵉⵏ ⴷ ⵓⵙⴽⵙⵓ"
      },
      category: "cooking",
      level: "legend",
      duration: 2, // 2 hours
      instructor: {
        name: {
          ar: "فاطمة الزهراء العمراني",
          en: "Fatima-Zahra El-Amrani",
          fr: "Fatima-Zahra El-Amrani",
          zgh: "ⴼⴰⵟⵉⵎⴰ ⵣⵣⴰⵀⵕⴰ ⵍⵄⵎⵕⴰⵏⵉ"
        },
        title: {
          ar: "طاهية تراثية ومدربة فنون الطهي المغاربي",
          en: "Heritage Chef & Maghreb Culinary Arts Trainer",
          fr: "Cheffe du patrimoine culinaire maghrébin",
          zgh: "ⵜⴰⵎⵙⵏⵡⴰⵜ ⵏ ⵜⵎⵢⵓⵔⵉⵏ ⵜⵉⵎⵖⵔⴰⴱⵉⵢⵉⵏ"
        },
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
      },
      rating: 5.0,
      reviewsCount: 78,
      image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600&auto=format&fit=crop&q=80",
      description: {
        ar: "اكتشف فن موازنة التوابل الشرقية (رأس الحانوت، الزعفران الحر، والسمن البلدي) لإعداد طاجين لحم بالبرقوق يذوب في الفم.",
        en: "Discover spice balancing (Ras El Hanout, pure saffron, preserved lemons) to cook an authentic melt-in-your-mouth tagine.",
        fr: "Maîtrisez l'équilibre des épices (Ras El Hanout, safran pur, citrons confits) pour réussir un tajine mijoté à la perfection.",
        zgh: "ⵍⵎⴷ ⴰⵙⵎⵙⴰⵙⴰ ⵏ ⵍⵄⵟⵕⵉⵢⵜ (ⵕⵕⴰⵙ ⵏ ⵍⵃⴰⵏⵓⵜ, ⵣⵣⵄⴼⵕⴰⵏ) ⵉ ⵓⵙⵏⵡⵉ ⵏ ⵟⵟⴰⵊⵉⵏ ⵉⵖⵓⴷⴰⵏ."
      },
      curriculum: {
        ar: [
          "تجهيز الطاجين الفخاري التقليدي وطرق ترويضه للحرارة",
          "أسرار دغميرة الطاجين وتوازن الحلاوة والملوحة في الأطباق المغربية",
          "تكنيك تقليب اللحم مع البصل والبهارات على نار هادئة",
          "طرق التقديم التراثية وتنسيق اللوز المحمر والسمسم والبرقوق"
        ],
        en: [
          "Conditioning traditional clay cookware for slow fire cooking",
          "The 'Dghmira' sauce alchemy: balancing sweet & savory aromatics",
          "Gentle searing and temperature modulation techniques",
          "Heritage plating with toasted almonds, sesame seeds, and prunes"
        ],
        fr: [
          "Préparation et culottage du plat en terre cuite traditionnel",
          "La fameuse 'Dghmira' : équilibre subtil sucré-salé",
          "Cuisson douce et maîtrise des arômes d'épices",
          "Dressage traditionnel avec amandes dorées et pruneaux"
        ],
        zgh: [
          "ⴰⵙⵎⵓⵜⵜⴳ ⵏ ⵟⵟⴰⵊⵉⵏ ⵏ ⵡⴰⴽⴰⵍ",
          "ⵉⴼⵔⵓⵔⵉⵜⵏ ⵏ ⵜⴷⵖⵎⵉⵔⵜ ⴷ ⵓⵥⵉⴹⴰⵕ ⵏ ⵜⵉⵙⵏⵜ ⴷ ⵓⵥⵉⴹⴰⵕ",
          "ⴰⵙⵏⵡⵉ ⵙ ⵜⴰⴼⵓⴽⵜ ⵜⴰⵏⴰⵎⵎⴰⵙⵜ",
          "ⴰⵙⵙⵔⵙ ⴰⵇⴱⵓⵔ ⵙ ⵓⵍⵍⵓⵣ ⴷ ⵡⴰⵔⴳⴰⵏ"
        ]
      },
      prerequisites: {
        ar: "مطبخ منزلي ومكونات الطاجين الأساسية (لحم أو دجاج، بصل، بهارات، زيت زيتون).",
        en: "Home kitchen with staple ingredients (meat/chicken, onions, spices, olive oil).",
        fr: "Cuisine équipée avec ingrédients de base (viande ou volaille, oignons, épices, huile d'olive).",
        zgh: "ⵜⴰⴷⵡⴰⵍⵜ ⴷ ⵜⵖⴰⵡⵙⵉⵡⵉⵏ ⵏ ⵟⵟⴰⵊⵉⵏ."
      }
    },
    {
      id: "skill-7",
      title: {
        ar: "أساسيات تيفيناغ وقواعد اللغة الأمازيغية",
        en: "Tamazight Language & Tifinagh Script Basics",
        fr: "Bases de la Langue Amazighe & Écriture Tifinagh",
        zgh: "ⵉⵎⵣⵡⵓⵔⴰ ⵏ ⵜⵓⵜⵍⴰⵢⵜ ⵜⴰⵎⴰⵣⵉⵖⵜ ⴷ ⵜⵉⴼⵉⵏⴰⵖ"
      },
      category: "languages",
      level: "beginner",
      duration: 1, // 1 hour
      instructor: {
        name: {
          ar: "موحى أوحدو",
          en: "Moha Ouhaddou",
          fr: "Moha Ouhaddou",
          zgh: "ⵎⵓⵃⴰ ⵓⵃⴷⴷⵓ"
        },
        title: {
          ar: "باحث في اللسانيات الأمازيغية والخط التاريخي",
          en: "Amazigh Linguistics Researcher & Script Scholar",
          fr: "Chercheur en linguistique amazighe et épigraphie",
          zgh: "ⴰⵎⵔⵣⵓ ⴳ ⵜⵙⵏⵉⵍⵙⵜ ⵜⴰⵎⴰⵣⵉⵖⵜ"
        },
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80"
      },
      rating: 4.97,
      reviewsCount: 31,
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80",
      description: {
        ar: "تعلم قراءة وكتابة الحروف الأمازيغية (ⵜⵉⴼⵉⵏⴰⵖ)، بنية الجملة الاسمية والفعلية، وعبارات التحية اليومية كـ (ⴰⵣⵓⵍ / ⵜⴰⵏⵎⵎⵉⵔⵜ).",
        en: "Learn to read and write the geometric Tifinagh alphabet, build simple sentences, and speak polite greetings.",
        fr: "Apprenez à lire et écrire l'alphabet tifinagh, structurez des phrases simples et utilisez les formules de politesse courantes.",
        zgh: "ⵍⵎⴷ ⵜⵉⵔⵔⴰ ⴷ ⵜⵖⵓⵔⵉ ⵏ ⵉⵙⴽⴽⵉⵍⵏ ⵏ ⵜⵉⴼⵉⵏⴰⵖ, ⵜⴰⵡⵉⵏⵙⵜ ⵜⴰⵎⴰⵣⵉⵖⵜ, ⴷ ⵜⵣⵓⵍⵉⵏ."
      },
      curriculum: {
        ar: [
          "تاريخ حرف تيفيناغ العريق ومخارج الحروف الأمازيغية الحلقية",
          "كتابة الحروف ونطقها بالصوت العالي خطوة بخطوة",
          "تركيب الكلمات والأسماء الأمازيغية المشتركة",
          "محادثة قصيرة بالتحيات والوداع والتعبير عن الشكر"
        ],
        en: [
          "Historical origins of Tifinagh and phonetic breakdown",
          "Step-by-step stroke orders and vocalization exercises",
          "Forming core words and everyday Amazigh nouns",
          "Engaging in a live greeting and farewell conversation"
        ],
        fr: [
          "Origines historiques de l'alphabet tifinagh et phonétique",
          "Tracé des caractères et exercices d'articulation",
          "Composition des premiers mots du vocabulaire usuel",
          "Mini-dialogue de salutations (Azul, Tanmmirt, Ar tufat)"
        ],
        zgh: [
          "ⴰⵎⵣⵔⵓⵢ ⵏ ⵓⵙⴽⴽⵉⵍ ⵏ ⵜⵉⴼⵉⵏⴰⵖ",
          "ⵜⵉⵔⵔⴰ ⵏ ⵉⵙⴽⴽⵉⵍⵏ ⴷ ⵓⵙⵙⵓⵙⵔⵓ ⵏⵏⵙⵏ",
          "ⴰⵙⵎⵓⵏ ⵏ ⵜⴳⵓⵔⵉⵡⵉⵏ ⵜⵉⵎⵣⵡⵓⵔⴰ",
          "ⴰⵎⵙⴰⵡⴰⵍ ⵙ: ⴰⵣⵓⵍ, ⵜⴰⵏⵎⵎⵉⵔⵜ, ⴰⵔ ⵜⵓⴼⴰⵜ"
        ]
      },
      prerequisites: {
        ar: "دفتر وقلم لتدريب اليد على كتابة الأشكال الهندسية للحروف.",
        en: "Notebook and pen to practice drawing geometric glyphs.",
        fr: "Cahier et stylo pour vous exercer aux tracés géométriques.",
        zgh: "ⵜⴰⴼⵔⵜ ⴷ ⵓⵎⵔⵓ ⵉ ⵜⵉⵔⵔⴰ."
      }
    },
    {
      id: "skill-8",
      title: {
        ar: "التصوير الفوتوغرافي الاحترافي بكاميرا الهاتف",
        en: "Mobile Photography & Visual Storytelling",
        fr: "Photographie Mobile Professionnelle & Narration Visuelle",
        zgh: "ⵜⴰⵡⵍⴰⴼⵜ ⵜⴰⵣⵣⵓⵍⴰⵏⵜ ⵙ ⵓⵜⵉⵍⵉⴼⵓⵏ"
      },
      category: "arts",
      level: "expert",
      duration: 2, // 2 hours
      instructor: {
        name: {
          ar: "يوسف المهدي",
          en: "Youssef El-Mehdi",
          fr: "Youssef El-Mehdi",
          zgh: "ⵢⵓⵙⴼ ⵍⵎⵀⴷⵉ"
        },
        title: {
          ar: "مصور فوتوغرافي ومخرج بصري مستقل",
          en: "Freelance Photographer & Visual Director",
          fr: "Photographe indépendant & Directeur visuel",
          zgh: "ⴰⵎⵙⵡⵍⴰⴼ ⴰⵏⴰⵥⵓⵕ"
        },
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"
      },
      rating: 4.85,
      reviewsCount: 39,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80",
      description: {
        ar: "حول لقطات هاتفك العادية إلى صور سينمائية باستخدام قواعد التكوين (قاعدة الأثلاث، الخطوط الإرشادية، والإضاءة الطبيعية) والتعديل بتطبيق Lightroom.",
        en: "Turn smartphone snaps into cinematic imagery using composition rules, natural light mastery, and mobile Lightroom editing.",
        fr: "Sublimez vos photos de smartphone en clichés cinématographiques grâce aux règles de cadrage, à la lumière naturelle et à Lightroom mobile.",
        zgh: "ⵙⴽⵔ ⵜⵉⵡⵍⴰⴼⵉⵏ ⵉⵖⵓⴷⴰⵏ ⵙ ⵓⵜⵉⵍⵉⴼⵓⵏ ⵙ ⵓⵙⵎⵔⵙ ⵏ ⵜⵉⴼⴰⵡⵜ ⴷ Lightroom."
      },
      curriculum: {
        ar: [
          "فهم إعدادات كاميرا الهاتف (الغالق، ISO، وحفظ صيغة RAW)",
          "قواعد التكوين البصري: قاعدة الأثلاث والخطوط المؤدية للهدف",
          "استغلال الساعة الذهبية والظلال الحادة في الشارع",
          "تعديل الألوان والتباين وإخراج اللقطة في Adobe Lightroom Mobile"
        ],
        en: [
          "Unlocking mobile camera manual controls (Shutter, ISO, RAW)",
          "Composition techniques: Rule of thirds and leading lines",
          "Harnessing the golden hour and natural shadows outdoors",
          "Color grading and exposure tuning on Lightroom Mobile"
        ],
        fr: [
          "Maîtrise des réglages manuels du smartphone (Vitesse, ISO, RAW)",
          "Composition : Règle des tiers et lignes de fuite",
          "Exploitation de l'heure dorée et des ombres naturelles",
          "Étalonnage couleur et retouche avec Lightroom Mobile"
        ],
        zgh: [
          "ⴰⵙⵙⵏ ⵏ ⵉⵙⵖⵥⴰⵏⵏ ⵏ ⵜⴽⴰⵎⵉⵕⴰ ⵏ ⵓⵜⵉⵍⵉⴼⵓⵏ",
          "ⵉⵍⵓⴳⴰⵏ ⵏ ⵓⵙⵓⵏⵖ ⵏ ⵜⵡⵍⴰⴼⵜ",
          "ⴰⵙⵎⵔⵙ ⵏ ⵜⵉⴼⴰⵡⵜ ⵏ ⵜⴰⴼⵓⴽⵜ",
          "ⴰⵙⵏⴼⵍ ⵏ ⵉⴽⵯⵍⴰⵏ ⵙ Lightroom Mobile"
        ]
      },
      prerequisites: {
        ar: "هاتف ذكي بكاميرا جيدة وتطبيق Lightroom Mobile مجاناً.",
        en: "Any modern smartphone and free Adobe Lightroom Mobile app.",
        fr: "Smartphone récent et application gratuite Lightroom Mobile installée.",
        zgh: "ⴰⵜⵉⵍⵉⴼⵓⵏ ⵙ ⵜⴽⴰⵎⵉⵕⴰ ⵉⵖⵓⴷⴰⵏ ⴷ Lightroom."
      }
    },
    {
      id: "skill-9",
      title: {
        ar: "فن الإلقاء والتحدث أمام الجمهور (Public Speaking)",
        en: "Public Speaking & Confident Pitching",
        fr: "Prise de Parole en Public & Art du Pitch",
        zgh: "ⵜⴰⵥⵓⵕⵉ ⵏ ⵓⵎⵙⴰⵡⴰⵍ ⴷⴰⵜ ⵏ ⵎⵉⴷⴷⵏ"
      },
      category: "business",
      level: "expert",
      duration: 1, // 1 hour
      instructor: {
        name: {
          ar: "سارة المنصوري",
          en: "Sarah Al-Mansouri",
          fr: "Sarah Al-Mansouri",
          zgh: "ⵙⴰⵕⴰ ⵜⴰⵎⵏⵚⵓⵕⵉⵜ"
        },
        title: {
          ar: "مدربة قيادة وتواصل في محادثات TEDx",
          en: "Leadership & TEDx Speaker Coach",
          fr: "Coach en leadership & conférencière TEDx",
          zgh: "ⵜⴰⵙⵍⵎⴰⴷⵜ ⵏ ⵓⵎⵢⴰⵡⴰⴹ ⴷ ⵜⵏⵙⵙⵉⵅⴼⵜ"
        },
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
      },
      rating: 4.96,
      reviewsCount: 45,
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&auto=format&fit=crop&q=80",
      description: {
        ar: "تخلص من رهاب المسرح، اضبط نبرات صوتك ولغة جسدك، وهيكل خطابك أو عرضك التقديمي بطريقة تبهر الحضور وتترك أثراً دائماً.",
        en: "Conquer stage fright, harness vocal dynamics and body language, and structure impactful presentations that captivate audiences.",
        fr: "Surmontez le trac, maîtrisez vos modulations vocales et structurez un discours mémorable qui captive votre auditoire.",
        zgh: "ⴽⴽⵙ ⵜⵉⵡⵉⴷⵉ ⵏ ⵓⵙⴰⵢⵙ, ⵙⵡⵓⴷⴷⵓ ⵉⵎⵙⵍⵉ ⵏⵏⴽ ⴷ ⵜⵡⴰⴷⴰ, ⵜⵙⵙⵏⵜ ⴰⵡⴰⵍ ⵉⵖⵓⴷⴰⵏ."
      },
      curriculum: {
        ar: [
          "تمارين التنفس البطني لتهدئة ضربات القلب قبل الصعود للمسرح",
          "هندسة القصة الجذابة (Hook, Story, Call to Action)",
          "لغة الجسد، التواصل البصري، واستخدام اليدين بتناغم طبيعي",
          "محاكاة تقديم فكرة مدتها 3 دقائق مع نقد فوري مباشر"
        ],
        en: [
          "Diaphragmatic breathing drills to soothe pre-stage anxiety",
          "Storytelling framework: Hook, conflict, insight, and call to action",
          "Natural eye contact, purposeful posture, and gesture control",
          "Live 3-minute pitch simulation followed by instant feedback"
        ],
        fr: [
          "Exercices de respiration ventrale pour dissiper le stress",
          "Structure narrative percutante : Accroche, histoire, appel à l'action",
          "Langage corporel, regard engagé et gestuelle naturelle",
          "Simulation en direct d'un pitch de 3 minutes avec débriefing"
        ],
        zgh: [
          "ⵉⵔⵎⵎⵓⴷⵏ ⵏ ⵓⵙⵓⵏⴼⵙ ⵉ ⵓⵙⵙⵉⴷⵔ ⵏ ⵜⵡⵉⴷⵉ",
          "ⴰⵙⴽⴽⵉⵔ ⵏ ⵜⵎⵏⴰⴹⵜ ⵉⵙⵡⴰⵏ",
          "ⴰⵥⵕⴰⵢ ⵙ ⵡⴰⵍⵍⵏ ⴷ ⵜⵡⴰⴷⴰ ⵏ ⵓⴼⵓⵙ",
          "ⴰⵔⵎ ⵏ ⵓⵎⵙⴰⵡⴰⵍ ⵏ 3 ⵜⵓⵙⴷⵉⴷⵉⵏ ⴷ ⵓⵙⵉⴹⵏ ⵏⵏⵙ"
        ]
      },
      prerequisites: {
        ar: "فكرة أو موضوع تود تقديمه (مشروع، فكرة، أو تجربة شخصية).",
        en: "A short idea, project, or story you want to pitch.",
        fr: "Une idée de projet ou sujet que vous souhaitez présenter.",
        zgh: "ⵜⴰⵡⵏⴳⵉⵎⵜ ⵏⵖ ⴰⵙⵏⴼⴰⵔ ⵜⵔⵉⴷ ⴰⴷ ⵜⵙⵙⵏⴽⴷⴷ."
      }
    },
    {
      id: "skill-10",
      title: {
        ar: "مبادئ الشطرنج الاستراتيجي وحساب النقلات التكتيكية",
        en: "Strategic Chess Tactics & Calculation Principles",
        fr: "Principes Stratégiques et Calcul Tactique aux Échecs",
        zgh: "ⵉⵍⵓⴳⴰⵏ ⵏ ⵛⵛⵟⵕⴰⵏⵊ ⴰⵙⵜⵔⴰⵜⵉⵊⵉ"
      },
      category: "business",
      level: "legend",
      duration: 2, // 2 hours
      instructor: {
        name: {
          ar: "أمين الودغيري",
          en: "Amine El-Ouadghiri",
          fr: "Amine El-Ouadghiri",
          zgh: "ⴰⵎⵉⵏ ⵍⵡⴰⴷⵖⵉⵔⵉ"
        },
        title: {
          ar: "أستاذ دولي مرشح (CM) ومحلل شطرنج",
          en: "Candidate Master (CM) & Chess Analyst",
          fr: "Candidat Maître FIDE (CM) & Entraîneur",
          zgh: "ⴰⵎⵣⵣⵓⵍ ⵏ ⵛⵛⵟⵕⴰⵏⵊ"
        },
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
      },
      rating: 4.98,
      reviewsCount: 56,
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&auto=format&fit=crop&q=80",
      description: {
        ar: "تعلم السيطرة على مربعات المركز، الأنماط التكتيكية الحاسمة (الشوكة، الربط، والتضحيات الهجومية)، ودراسة نهايات البيادق الشهيرة.",
        en: "Master central control, tactical patterns (pins, forks, skewers, discovery attacks), and crucial king & pawn endgames.",
        fr: "Maîtrisez le contrôle du centre, les motifs tactiques décisifs (fourchettes, clouages, attaques à la découverte) et les finales de pions.",
        zgh: "ⵍⵎⴷ ⴰⵃⵟⵟⵓ ⵏ ⵡⴰⵎⵎⴰⵙ, ⵜⵉⴱⵔⵉⴷⵉⵏ ⵏ ⵜⵢⵜⵉ ⴳ ⵛⵛⵟⵕⴰⵏⵊ, ⴷ ⵜⵉⴳⵉⵔⴰ ⵏ ⵓⵎⵓⵔⵙ."
      },
      curriculum: {
        ar: [
          "مبادئ الافتتاح الحديثة والانتشار السريع للقطع الخفيفة",
          "اكتشاف الأنماط التكتيكية (الربط، الشوكة، والشهيد المؤقت)",
          "التخطيط في وسط الدور وتقييم نقاط الضعف في معسكر الخصم",
          "قواعد نهايات البيادق وقاعدة المربع (Square Rule)"
        ],
        en: [
          "Modern opening principles & rapid minor piece development",
          "Recognizing pins, forks, and deflection sacrifices",
          "Middlegame strategizing and targeting pawn weaknesses",
          "King and pawn endgames: The rule of the square"
        ],
        fr: [
          "Principes d'ouverture modernes et développement rapide",
          "Reconnaissance des clouages, fourchettes et déviations",
          "Stratégie de milieu de jeu et exploitation des faiblesses",
          "Finales de pions fondamentales et règle du carré"
        ],
        zgh: [
          "ⵜⵉⵣⵡⵉⵔⵉⵏ ⵏ ⵛⵛⵟⵕⴰⵏⵊ ⴷ ⵓⵙⵎⵓⵙⵙⵓ ⵏ ⵉⵎⵏⴰⵢⵏ",
          "ⵜⵉⴼⵔⴽⵉⵡⵉⵏ ⵏ ⵜⵢⵜⵉ ⴷ ⵓⵃⵟⵟⵓ",
          "ⴰⵙⵡⵉⵏⴳⵎ ⴳ ⵡⴰⵎⵎⴰⵙ ⵏ ⵓⵎⵓⵔⵙ",
          "ⵉⵍⵓⴳⴰⵏ ⵏ ⵜⴳⵉⵔⴰ ⵏ ⵛⵛⵟⵕⴰⵏⵊ"
        ]
      },
      prerequisites: {
        ar: "معرفة حركة القطع الأساسية وقواعد اللعبة (حساب Lichess مجاني مفضل).",
        en: "Familiarity with how pieces move (free Lichess account recommended).",
        fr: "Connaissance des déplacements des pièces (compte Lichess gratuit recommandé).",
        zgh: "ⴰⵙⵙⵏ ⵏ ⵓⵎⵓⵙⵙⵓ ⵏ ⵉⵙⴽⴽⵉⵏⵏ ⵏ ⵛⵛⵟⵕⴰⵏⵊ."
      }
    },
    {
      id: "skill-11",
      title: {
        ar: "أساسيات العزف على العود الشرقي والمقامات الموسيقية",
        en: "Oriental Oud & Maqam Foundations",
        fr: "Initiation au Luth Oriental (Oud) & Système des Maqams",
        zgh: "ⵉⵎⵣⵡⵓⵔⴰ ⵏ ⵓⵥⴰⵡⴰⵏ ⵏ ⵍⵄⵓⴷ"
      },
      category: "music",
      level: "beginner",
      duration: 2, // 2 hours
      instructor: {
        name: {
          ar: "سامي الزهراني",
          en: "Sami Al-Zahrani",
          fr: "Sami Al-Zahrani",
          zgh: "ⵙⴰⵎⵉ ⴰⵣⵣⴰⵀⵔⴰⵏⵉ"
        },
        title: {
          ar: "أستاذ آلات وترية ومؤلف موسيقى شرقية",
          en: "String Instruments Educator & Oriental Composer",
          fr: "Professeur d'instruments à cordes & Compositeur",
          zgh: "ⴰⵙⵍⵎⴰⴷ ⵏ ⵡⴰⵍⵍⴰⵍⵏ ⵏ ⵓⵥⴰⵡⴰⵏ"
        },
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
      },
      rating: 4.94,
      reviewsCount: 33,
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80",
      description: {
        ar: "امسك الريشة، تعرّف على دوزان العود، وسبر أغوار مقامَي العجم والراست مع تمارين استخراج النغمات النقية.",
        en: "Hold the risha correctly, tune the oud, and explore the enchanting Ajam and Rast maqams with pure intonation drills.",
        fr: "Apprenez la tenue du plectre (risha), l'accordage de l'oud et explorez les maqams Ajam et Rast avec des gammes pures.",
        zgh: "ⵍⵎⴷ ⴰⵎⴰⵔⴰⵢ ⵏ ⵍⵄⵓⴷ ⴷ ⵓⵥⴰⵡⴰⵏ ⵏ ⵍⵄⴰⵊⴰⵎ ⴷ ⵕⵕⴰⵙⵜ."
      },
      curriculum: {
        ar: [
          "مسكة الريشة بين الإبهام والسبابة بدون تشنج",
          "دوزان الأوتار (دو، صول، ري، لا، فا، دو)",
          "عزف سلم مقام العجم وسماع أبعاد النغمات",
          "تمرين عزف لحن تراثي قصير مع إيقاع متزن"
        ],
        en: [
          "Ergonomic risha plectrum grip between thumb and index",
          "Oud tuning systems (C, G, D, A, F, C)",
          "Playing the Ajam scale and internalizing intervals",
          "Short traditional folk song playthrough"
        ],
        fr: [
          "Tenue souple du plectre (risha) entre le pouce et l'index",
          "Systèmes d'accordage de l'oud",
          "Gamme du maqam Ajam et écoute des intervalles",
          "Interprétation d'un chant traditionnel court"
        ],
        zgh: [
          "ⴰⵎⴰⵔⴰⵢ ⵏ ⵍⵄⵓⴷ",
          "ⴰⵙⵎⵙⴰⵙⴰ ⵏ ⵉⴼⴰⵍⴽⴰⵢⵏ",
          "ⴰⵥⴰⵡⴰⵏ ⵏ ⵍⵄⴰⵊⴰⵎ",
          "ⴰⵥⴰⵡⴰⵏ ⵏ ⵓⵎⴰⵔⴳ ⴰⵇⴱⵓⵔ"
        ]
      },
      prerequisites: {
        ar: "آلة عود سليمة الأوتار وريشة عود مناسبة.",
        en: "An acoustic oud in playable condition and a risha.",
        fr: "Un oud en bon état de jeu et un plectre adapté.",
        zgh: "ⵍⵄⵓⴷ ⵉⵙⵡⵓⵔⵉⵏ."
      }
    },
    {
      id: "skill-12",
      title: {
        ar: "صناعة المحتوى والكتابة الإبداعية للمنصات الرقمية",
        en: "Content Creation & Digital Storytelling",
        fr: "Création de Contenu & Storytelling Digital",
        zgh: "ⴰⵙⴽⴽⵉⵔ ⵏ ⵓⵎⴰⵢⵏⵓ ⴷ ⵜⵉⵔⵔⴰ ⵜⴰⵏⴰⵥⵓⵕⵜ"
      },
      category: "business",
      level: "beginner",
      duration: 1, // 1 hour
      instructor: {
        name: {
          ar: "مريم العلمي",
          en: "Meriem El-Alami",
          fr: "Meriem El-Alami",
          zgh: "ⵎⵔⵢⵎ ⵍⵄⴰⵍⴰⵎⵉ"
        },
        title: {
          ar: "كاتبة سيناريو وصانعة محتوى ثقافي رقمي",
          en: "Screenwriter & Cultural Digital Creator",
          fr: "Scénariste & Créatrice de contenu culturel",
          zgh: "ⵜⴰⵎⴰⵔⴰⵢⵜ ⵏ ⵉⴼⵉⵍⵎⵏ ⴷ ⵓⵥⵟⵟⴰ"
        },
        avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=150&auto=format&fit=crop&q=80"
      },
      rating: 4.89,
      reviewsCount: 29,
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80",
      description: {
        ar: "كيف تصيغ قصة تلهم جمهورك في 60 ثانية؟ أسرار كتابة الـ Hook، السرد البصري، وكتابة سيناريو يشد المتابعين حتى النهاية.",
        en: "How to craft a gripping 60-second narrative: hooks, visual framing, pacing, and viral storytelling scripts.",
        fr: "Comment captiver votre audience en 60 secondes : structure d'accroche (hook), narration visuelle et script percutant.",
        zgh: "ⵎⴰⵏⵉⴽ ⵙ ⵔⴰⴷ ⵜⴰⵔⴰⴷ ⵜⴰⵏⴼⵓⵙⵜ ⵉⵙⵡⴰⵏ ⴳ 60 ⵏ ⵜⵓⵙⴷⵉⴷⵜ."
      },
      curriculum: {
        ar: [
          "أنماط الخطافات الثلاث الأولى (سؤال صادم، تناقض، إحصائية)",
          "تحويل الفكرة المجردة إلى مشاهد مرئية وتشبيهات ملموسة",
          "صياغة النداء لاتخاذ إجراء (Call to Action) الطبيعي غير المباشر",
          "مراجعة نصوصك وتحسين إيقاع قراءتها صوتياً"
        ],
        en: [
          "The anatomy of high-retention hooks in first 3 seconds",
          "Translating abstract topics into visual mental scenes",
          "Organic Call to Action phrasing that converts",
          "Pacing review and vocal read-through coaching"
        ],
        fr: [
          "L'anatomie des accroches (hooks) dans les 3 premières secondes",
          "Transformer des idées abstraites en images fortes",
          "Appel à l'action naturel sans paraître intrusif",
          "Relecture de votre script et ajustement du rythme oral"
        ],
        zgh: [
          "ⵜⵉⴱⵔⵉⴷⵉⵏ ⵏ ⵓⵙⵙⵏⵜⵉ ⵏ ⵜⵏⴼⵓⵙⵜ",
          "ⴰⵙⵏⴼⵍ ⵏ ⵜⵡⵏⴳⵉⵎⵜ ⵖⵔ ⵜⵡⵍⴰⴼⵉⵏ",
          "ⵜⵉⴳⵉⵔⴰ ⵏ ⵓⵎⵢⴰⵡⴰⴹ ⴷ ⵓⵎⵙⵙⵎⵔⵙ",
          "ⴰⵙⵙⵖⵥⵏ ⵏ ⵜⵉⵔⵔⴰ ⵏⵏⴽ"
        ]
      },
      prerequisites: {
        ar: "فكرة حساب أو موضوع محتوى تريد البدء في نشره.",
        en: "An idea or theme you'd like to produce content about.",
        fr: "Une idée de sujet ou un projet de contenu à lancer.",
        zgh: "ⵜⴰⵡⵏⴳⵉⵎⵜ ⵏ ⵓⵙⴽⴽⵉⵔ ⵏ ⵓⵎⴰⵢⵏⵓ."
      }
    }
  ],

  sessions: [
    {
      id: "sess-101",
      skillId: "skill-2",
      skillTitle: {
        ar: "الجيتار للمبتدئين وأوتار العزف الأولى",
        en: "Acoustic Guitar for Beginners: First Chords",
        fr: "Guitare Acoustique Débutant : Premiers Accords",
        zgh: "ⴰⴳⵉⵟⴰⵕ ⵉ ⵉⵎⵣⵡⵓⵔⴰ ⴷ ⵓⵥⴰⵡⴰⵏ"
      },
      instructor: {
        ar: "ليلى التلمساني",
        en: "Layla Tlemceni",
        fr: "Layla Tlemceni",
        zgh: "ⵍⴰⵢⵍⴰ ⵜⵍⵎⵙⴰⵏⵉ"
      },
      learner: {
        ar: "سامي الزهراني",
        en: "Sami Al-Zahrani",
        fr: "Sami Al-Zahrani",
        zgh: "ⵙⴰⵎⵉ ⴰⵣⵣⴰⵀⵔⴰⵏⵉ"
      },
      date: "2026-11-18",
      time: "17:30",
      duration: 2, // 2 hours
      status: "confirmed", // pending, confirmed, completed, cancelled
      hoursEscrowed: 2,
      notes: "نود التركيز على التبديل السريع بين وتر C وتر G."
    },
    {
      id: "sess-102",
      skillId: "skill-1",
      skillTitle: {
        ar: "أساسيات الخط العربي والديواني",
        en: "Arabic Calligraphy & Diwani Script Fundamentals",
        fr: "Bases de la Calligraphie Arabe et Style Diwani",
        zgh: "ⵉⵎⵣⵡⵓⵔⴰ ⵏ ⵓⵙⴽⴽⵉⵍ ⴰⵄⵕⴰⴱ ⴷ ⴷⴷⵉⵡⴰⵏⵉ"
      },
      instructor: {
        ar: "عبد الرحمن الصالحي",
        en: "Abdulrahman Al-Salihi",
        fr: "Abdulrahman Al-Salihi",
        zgh: "ⵄⴱⴷⵓⵕⵕⴰⵃⵎⴰⵏ ⴰⵚⵚⴰⵍⵉⵃⵉ"
      },
      learner: {
        ar: "سامي الزهراني",
        en: "Sami Al-Zahrani",
        fr: "Sami Al-Zahrani",
        zgh: "ⵙⴰⵎⵉ ⴰⵣⵣⴰⵀⵔⴰⵏⵉ"
      },
      date: "2026-11-20",
      time: "19:00",
      duration: 1, // 1 hour
      status: "pending",
      hoursEscrowed: 1,
      notes: "أريد تعلم رسم حرف النون والواو بالخط الديواني."
    },
    {
      id: "sess-103",
      skillId: "skill-5",
      skillTitle: {
        ar: "المحادثة باللغة الفرنسية للمبتدئين والطلاقة اليومية",
        en: "Conversational French for Everyday Fluency",
        fr: "Français Pratique : Conversation & Aisance Orale",
        zgh: "ⴰⵎⵙⴰⵡⴰⵍ ⵙ ⵜⴼⵕⴰⵏⵚⵉⵚⵜ ⵉ ⵉⵎⵣⵡⵓⵔⴰ"
      },
      instructor: {
        ar: "كريم الفاسي",
        en: "Karim El-Fassi",
        fr: "Karim El-Fassi",
        zgh: "ⴽⴰⵔⵉⵎ ⵍⴼⴰⵙⵉ"
      },
      learner: {
        ar: "سامي الزهراني",
        en: "Sami Al-Zahrani",
        fr: "Sami Al-Zahrani",
        zgh: "ⵙⴰⵎⵉ ⴰⵣⵣⴰⵀⵔⴰⵏⵉ"
      },
      date: "2026-11-10",
      time: "16:00",
      duration: 1,
      status: "completed",
      hoursEscrowed: 0,
      hoursConsumed: 1,
      notes: "جلسة رائعة ساعدتني كثيراً في نطق الحروف الأنفية."
    }
  ],

  wallet: {
    available: 105,
    escrowed: 3, // 2 from sess-101 + 1 from sess-102
    totalAdded: 120,
    totalConsumed: 12,
    ledger: [
      {
        id: "tx-1",
        date: "2026-11-01 10:00",
        type: "deposit",
        amount: 70,
        description: {
          ar: "منحة الساعات الترحيبية للنموذج الأولي",
          en: "Welcome hours grant for prototype onboarding",
          fr: "Attribution d'heures de bienvenue du prototype",
          zgh: "ⵜⵉⵙⵔⴰⴳⵉⵏ ⵏ ⵓⵙⵏⵓⴱⴳ ⴳ ⵓⵎⴷⵢⴰ"
        }
      },
      {
        id: "tx-2",
        date: "2026-11-05 14:15",
        type: "deposit",
        amount: 50,
        description: {
          ar: "شحن رصيد إضافي عبر زر الشحن التجريبي",
          en: "Top-up demo credit via quick recharge button",
          fr: "Recharge démo supplémentaire via le bouton rapide",
          zgh: "ⵜⵉⵔⵏⵉ ⵏ ⵜⵙⵔⴰⴳⵉⵏ ⵙ ⵓⵙⵜⴰⵢ ⴰⵔⵎⴰⵙ"
        }
      },
      {
        id: "tx-3",
        date: "2026-11-10 16:00",
        type: "consume",
        amount: -1,
        description: {
          ar: "استهلاك جلسة مكتملة: المحادثة باللغة الفرنسية (كريم الفاسي)",
          en: "Consumed for completed session: French Conversation (Karim)",
          fr: "Consommé pour session terminée : Français (Karim)",
          zgh: "ⵜⵎⴷⴰ ⵜⵖⵉⵎⵉⵜ: ⵜⴰⴼⵕⴰⵏⵚⵉⵚⵜ (ⴽⴰⵔⵉⵎ)"
        }
      },
      {
        id: "tx-4",
        date: "2026-11-12 11:30",
        type: "escrow",
        amount: -2,
        description: {
          ar: "حجز ضمان للجلسة القادمة: الجيتار للمبتدئين (ليلى التلمساني)",
          en: "Escrow lock for upcoming session: Acoustic Guitar (Layla)",
          fr: "Mise sous séquestre pour session : Guitare Débutant (Layla)",
          zgh: "ⴰⵃⵟⵟⵓ ⵏ ⵜⵖⵉⵎⵉⵜ ⴷ ⵉⴷⴷⴰⵏ: ⴰⴳⵉⵟⴰⵕ (ⵍⴰⵢⵍⴰ)"
        }
      },
      {
        id: "tx-5",
        date: "2026-11-14 09:20",
        type: "escrow",
        amount: -1,
        description: {
          ar: "حجز ضمان لطلب جلسة: أساسيات الخط العربي (عبد الرحمن)",
          en: "Escrow lock for session request: Calligraphy (Abdulrahman)",
          fr: "Mise sous séquestre pour demande : Calligraphie (Abdulrahman)",
          zgh: "ⴰⵃⵟⵟⵓ ⵏ ⵜⵓⵜⵔⴰ ⵏ ⵜⵖⵉⵎⵉⵜ: ⴰⵙⴽⴽⵉⵍ (ⵄⴱⴷⵓⵕⵕⴰⵃⵎⴰⵏ)"
        }
      }
    ]
  },

  reports: [
    {
      id: "rep-201",
      reporter: "سامي الزهراني",
      sessionId: "sess-101",
      sessionTitle: "الجيتار للمبتدئين وأوتار العزف الأولى",
      category: "tech",
      severity: "low",
      date: "2026-11-12 18:40",
      description: "تأخرت إشارة الفيديو في البداية لدقائق بسبب ضعف الاتصال، ولكن تم استكمال الجلسة بسلاسة.",
      status: "resolved", // open, resolved, dismissed
      adminNotes: "تم التأكد من استئناف الاتصال بشكل طبيعي."
    },
    {
      id: "rep-202",
      reporter: "نادية السبتي",
      sessionId: null,
      sessionTitle: "بلاغ عام للمشرفين",
      category: "behavior",
      severity: "medium",
      date: "2026-11-14 12:10",
      description: "اقتراح بمراقبة الحسابات التي تطلب جلسات متكررة في أوقات متقاربة دون تأكيد الحضور مسبقاً.",
      status: "open",
      adminNotes: ""
    }
  ]
};
