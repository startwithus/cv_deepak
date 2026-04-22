export const NAV_LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

export const STATS = [
  { num: '3.6+', label: 'Years Experience' },
  { num: '10+',  label: 'Games Shipped' },
  { num: '45%',  label: 'Load Time Reduced' },
  { num: '40%',  label: 'Faster Dev Cycle' },
];

export const SKILLS = [
  {
    icon: '⚛️',
    name: 'Frontend Frameworks',
    desc: 'Building scalable, component-driven UIs with modern frameworks',
    tags: ['React.js', 'Next.js', 'Vue.js', 'React Native'],
  },
  {
    icon: '🔷',
    name: 'Languages',
    desc: 'Typed, performant code from UI to backend logic',
    tags: ['TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'C/C++'],
  },
  {
    icon: '⚡',
    name: 'Real-Time & APIs',
    desc: 'Live game states, events & settlement flows at scale',
    tags: ['WebSocket', 'REST APIs', 'Redux', 'Zustand'],
  },
  {
    icon: '🛠️',
    name: 'Tools & DevOps',
    desc: 'Professional toolchain for modern development workflows',
    tags: ['Git / GitHub', 'Webpack', 'Postman', 'Chrome DevTools'],
  },
  {
    icon: '🗄️',
    name: 'Database & Backend',
    desc: 'Full-stack capabilities from schema design to API logic',
    tags: ['MySQL', 'Node.js', 'MVC', 'SQL'],
  },
  {
    icon: '🎮',
    name: 'Game UI & Integration',
    desc: 'React bridges inside Unity & HTML5 game engines',
    tags: ['Unity Bridge', 'HTML5 Games', 'Game Canvas', 'Agile'],
  },
];

export const EXPERIENCE = [
  {
    period: 'Jan 2025 – Present',
    role: 'Senior Frontend Developer',
    company: 'Cloudstok Technologies Pvt. Ltd. · Noida, India',
    color: '#00f0ff',
    points: [
      'Architected & delivered 10+ real-money games (Crash, Spin, Slot, Card, Mini-Games) serving thousands of concurrent users',
      'Designed modular React component library reducing new-game dev time by 30–40%',
      'Engineered real-time WebSocket gameplay — live states, auto-bet, auto-cashout, RTP configs & settlement flows',
      'Implemented lazy loading, code splitting & memoization cutting lobby load time by 45%',
      'Built React bridges between Unity engines, HTML5 canvases & React UI components',
      'Optimized Redux/Zustand state pipelines handling thousands of real-time events per second',
    ],
  },
  {
    period: 'Aug 2022 – Dec 2024',
    role: 'Frontend Developer',
    company: 'Cloudstok Technologies Pvt. Ltd. · Noida, India',
    color: '#7b2fff',
    points: [
      'Delivered pixel-perfect responsive UIs across sports, agriculture & healthcare verticals',
      'Built real-time WebSocket notification system for farming app with sub-second latency',
      'Implemented OTP auth & audio/video call UI for a doctor consultation platform',
      'Managed full backend (Node.js/TypeScript) including DB schema & REST API logic',
      'Applied mobile-first design principles for usability across all screen sizes',
    ],
  },
];

export const PROJECTS = [
  {
    emoji: '🎮',
    title: 'Real-Money Game Platform',
    desc: '10+ interactive games (Crash, Spin, Slot, Card, Mini-Games) with real-time WebSocket gameplay, live leaderboards, auto-cashout & multi-size dynamic lobbies.',
    stack: ['React.js', 'WebSocket', 'Redux', 'TypeScript'],
    period: 'Jan 2025 – Present',
  },
  {
    emoji: '⚽',
    title: 'Sport App',
    desc: 'Cross-platform (web + mobile) responsive sports application with OTP-based authentication and seamless RESTful API integration. Mobile-first design.',
    stack: ['React.js', 'React Native', 'OTP Auth', 'REST API'],
    period: 'Mar 2024 – Jan 2025',
  },
  {
    emoji: '🌾',
    title: 'Farming Crop Notification App',
    desc: 'Real-time notification system delivering crop updates to rural farmers via WebSockets. Full backend with Node.js/TypeScript, MySQL schema & optimized state management.',
    stack: ['React Native', 'Node.js', 'WebSocket', 'MySQL'],
    period: 'Apr 2023 – Feb 2024',
  },
  {
    emoji: '🏥',
    title: 'Doctor Consultation App',
    desc: 'Figma-to-pixel-perfect consultation platform with secure OTP login, live audio/video call UI and RESTful API integration for appointments & real-time consultations.',
    stack: ['React.js', 'OTP Auth', 'Video UI', 'REST API'],
    period: 'Oct 2022 – Mar 2023',
  },
];

export const CONTACT = [
  { icon: '📞', label: 'Phone',    value: '+91 9716953601',               href: 'tel:+919716953601' },
  { icon: '✉️', label: 'Email',    value: 'imdeepakchauhan66@gmail.com',  href: 'mailto:imdeepakchauhan66@gmail.com' },
  { icon: '💻', label: 'GitHub',   value: 'github.com/deepakchauhan',     href: 'https://github.com/deepakchauhan' },
  { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/deepakchauhan',href: 'https://www.linkedin.com/in/deepakchauhan-1846182a5' },
  { icon: '📍', label: 'Location', value: 'Ghaziabad · Open to Noida & Gurugram', href: null },
];
