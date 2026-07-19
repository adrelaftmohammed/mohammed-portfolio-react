export const projects = [
  {
    slug: 'exchange-ledger',
    title: 'Exchange Ledger',
    icon: '⇄',
    category: 'Flutter · Finance',
    descriptionEn: 'Currency exchange, balances, PDF/Excel reports and automatic profit/loss calculations.',
    descriptionAr: 'تطبيق للصرافة والأرصدة وتقارير PDF وExcel وحساب الربح والخسارة تلقائيًا.',
    tech: ['Flutter', 'Dart', 'Hive CE', 'Firebase', 'PDF', 'Excel'],
    liveUrl: 'https://exchange-ledger-e61a6.web.app/',
    accent: 'exchange'
  },
  {
    slug: 'stable-manager',
    title: 'Stable Manager',
    icon: '♞',
    category: 'Flutter · Management',
    descriptionEn: 'Role-based stable management for horses, feeding, health care, costs and reports.',
    descriptionAr: 'نظام لإدارة الإسطبلات والخيول والتغذية والرعاية والتكاليف والتقارير بصلاحيات متعددة.',
    tech: ['Flutter', 'Firebase', 'Arabic RTL', 'RBAC'],
    liveUrl: 'https://stable-manager-51a0b.web.app/',
    accent: 'stable'
  },
  {
    slug: 'work-writer-ai',
    title: 'Work Writer AI',
    icon: '✦',
    category: 'Flutter Web · Productivity',
    descriptionEn: 'Professional workspace for messages, reports, templates and saved writing history.',
    descriptionAr: 'مساحة احترافية للرسائل والتقارير والقوالب وسجل الكتابات المحفوظ.',
    tech: ['Flutter Web', 'Firebase Auth', 'Firestore', 'PDF Export'],
    liveUrl: 'https://work-writer-ai.web.app/',
    accent: 'writer'
  }
]

export const services = [
  ['📱','Flutter Development','Cross-platform apps with secure auth, reports and local or cloud data.','تطبيقات متعددة المنصات مع تسجيل دخول آمن وتقارير وبيانات محلية أو سحابية.'],
  ['🌐','Front-End Development','Responsive bilingual websites with clean modern interfaces.','مواقع متجاوبة ثنائية اللغة بواجهات حديثة ونظيفة.'],
  ['☁️','Firebase Integration','Authentication, Firestore, Storage and security rules.','مصادقة وFirestore وStorage وقواعد أمان.'],
  ['🛡️','Web Security Review','Authorized checks for authentication, access control and exposed data.','فحص مصرح به للمصادقة والصلاحيات والبيانات المكشوفة.'],
  ['⚡','Performance Optimization','Improve loading speed, responsiveness and user experience.','تحسين سرعة التحميل والاستجابة وتجربة المستخدم.'],
  ['🎨','UI Implementation','Convert designs into accurate responsive interfaces.','تحويل التصاميم إلى واجهات دقيقة ومتجاوبة.']
]

export const articles = [
  {
    slug:'flutter-auth-security',
    title:'Securing Flutter Authentication',
    emoji:'🔐',
    summaryEn:'Verification, reset flows, session handling and authorization.',
    summaryAr:'التحقق وإعادة التعيين وإدارة الجلسات والصلاحيات.'
  },
  {
    slug:'firebase-security-rules',
    title:'Firebase Security Rules',
    emoji:'🔥',
    summaryEn:'Why authentication alone is not enough to protect data.',
    summaryAr:'لماذا لا تكفي المصادقة وحدها لحماية البيانات.'
  },
  {
    slug:'responsive-rtl',
    title:'Responsive Arabic RTL',
    emoji:'↔',
    summaryEn:'Building clean Arabic interfaces across screen sizes.',
    summaryAr:'بناء واجهات عربية نظيفة على مختلف أحجام الشاشات.'
  }
]
