import { Project, SkillCategory, CurriculumModule, ContactInfo } from '../types';

export const PERSONAL_INFO: ContactInfo = {
  email: 'kwizeradjamali101@gmail.com',
  whatsapp: '+250793024213',
  whatsappDisplay: '0793024213',
  instagram: 'https://instagram.com/d.j.a.m.al.i',
  instagramHandle: 'd.j.a.m.al.i',
  github: 'https://github.com/kwizeradjamali',
  linkedin: 'https://linkedin.com/in/djamali-kwizera',
  location: 'Kigali, Rwanda',
  roleTitle: 'IT & Software Development Instructor',
  institution: 'Kiyumba Technical Secondary School (Kiyumba TSS)',
  statusText: 'Open to work'
};

export const ABOUT_DETAILS = {
  heroTagline: 'Building software for technical education.',
  heroBio: 'IT & software development instructor at Kiyumba TSS, working across the RTB Level 3–5 Software Development curriculum — and building full-stack applications outside the classroom.',
  paragraph1: "I work in IT at Kiyumba Technical Secondary School, supporting the school's technical systems and building the exam and assessment materials for its Software Development programs, taught under the Rwanda TVET Board's RQF Level 3 and Level 5 framework.",
  paragraph2: "Alongside that, I design and build full-stack applications — mostly on the MERN stack — ranging from national practical-exam projects to internal business tools for small organizations. I like taking a system from a data model and a set of user needs through to something people actually use.",
  specs: [
    { label: 'ROLE', value: 'IT & Software Development, Kiyumba TSS' },
    { label: 'CURRICULUM', value: 'RTB RQF Level 3 & 5 — Software Development' },
    { label: 'LANGUAGES', value: 'English, Kinyarwanda' },
    { label: 'PRIMARY STACK', value: 'MongoDB · Express · React · Node.js' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'educonnect-rwanda',
    number: '001',
    title: 'EduConnect Rwanda',
    tagline: 'Comprehensive educational resource & discovery ecosystem',
    description: 'A full-stack platform for discovering schools, courses, learning materials, and scholarships in one place — with an admin dashboard, an AI assistant (EduBot), maps, and notifications. Built in phases: foundation, auth, core features, dashboards, then AI/maps and hardening.',
    fullDescription: 'EduConnect Rwanda addresses the fragmented discovery of academic institutions, technical secondary schools, and vocational programs in Rwanda. It empowers students with streamlined access to verified course catalogs, scholarship deadlines, and digital study assets, backed by an intelligent query bot (EduBot) and geographic mapping of TVET centers.',
    role: 'Full-stack developer',
    status: 'In progress',
    category: 'Full-stack',
    techStack: ['React', 'Vite', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    highlights: [
      'Multi-tenant discovery directory for schools, TVET institutes, and accredited courses',
      'AI Assistant (EduBot) integration for conversational guidance and scholarship inquiries',
      'Geospatial interactive mapping for school campus exploration across Rwandan provinces',
      'Role-based administrative dashboards for institutional coordinators & content moderators',
      'Granular JWT authentication, automated email notifications, and data verification workflows'
    ],
    architecture: {
      frontend: 'React with Vite, Tailwind CSS, lucide-react, reactive filtering & map view',
      backend: 'Node.js + Express REST API with modular controllers, validation & rate limiting',
      database: 'MongoDB with Mongoose schemas (Schools, Courses, Scholarships, Users, Logs)',
      keyFeatures: ['EduBot AI Assistant', 'Geographic TVET Mapping', 'Scholarship Tracker', 'Admin Analytics']
    },
    sampleMetrics: [
      { label: 'Architecture Phases', value: '5 Stages' },
      { label: 'Authentication', value: 'JWT + RBAC' },
      { label: 'Map Coverage', value: 'All 5 Provinces' }
    ]
  },
  {
    id: 'stockhub-ltd',
    number: '002',
    title: 'StockHub Ltd',
    tagline: 'Full-stack inventory & enterprise supply chain management',
    description: 'Stock management system built as a full-stack deliverable, with an ERD, JWT auth, and reporting dashboards for a small business client.',
    fullDescription: 'Delivered as an end-to-end commercial software solution for a retail and distribution client in Rwanda. The system automates real-time inventory tracking, purchase order reconciliations, supplier audits, and low-stock alerting with visual data analytics.',
    role: 'Developer',
    status: 'Delivered',
    category: 'Business Tools',
    techStack: ['Node.js', 'Express', 'lowdb', 'React', 'Recharts'],
    highlights: [
      'Comprehensive Entity Relationship Diagram (ERD) and relational data modeling',
      'Live visual dashboards powered by Recharts showing stock movement velocity and revenue trends',
      'Automated minimum threshold alerts preventing supply chain bottlenecks and dead inventory',
      'Granular audit trails tracking stock additions, sales, write-offs, and clerk authorizations'
    ],
    architecture: {
      frontend: 'React with Recharts data visualizers, responsive inventory tables & printable invoice generation',
      backend: 'Node.js Express micro-service with deterministic query pipelines',
      database: 'lowdb lightweight JSON database designed for rapid local deployment & zero-downtime backups',
      keyFeatures: ['Live Stock Reordering Alerts', 'Sales Turnover Analytics', 'JWT Role Authorization']
    },
    sampleMetrics: [
      { label: 'Delivery Status', value: 'Delivered' },
      { label: 'Client Type', value: 'Retail & Distribution' },
      { label: 'Dashboard Engine', value: 'Recharts' }
    ],
    chartData: [
      { name: 'Mon', value: 34, benchmark: 20 },
      { name: 'Tue', value: 48, benchmark: 25 },
      { name: 'Wed', value: 62, benchmark: 30 },
      { name: 'Thu', value: 45, benchmark: 28 },
      { name: 'Fri', value: 78, benchmark: 40 },
      { name: 'Sat', value: 92, benchmark: 50 },
      { name: 'Sun', value: 55, benchmark: 35 }
    ]
  },
  {
    id: 'pssms',
    number: '003',
    title: 'PSSMS (Parking Space Sales Management System)',
    tagline: 'Rwanda TVET Board National Practical Examination Project',
    description: 'Parking Space Sales Management System, built for the TSS National Practical Examination 2024–2025 under Rwanda TVET Board assessment conditions.',
    fullDescription: 'Engineered strictly under timed national assessment conditions governed by the Rwanda TVET Board (RTB). Demonstrates rigorous full-stack software development compliance, database normalization, concurrency handling for parking bay allocations, and secure ticketing.',
    role: 'Developer',
    status: 'National exam project',
    category: 'Education & Exam',
    techStack: ['MongoDB', 'React', 'Node.js', 'Express'],
    highlights: [
      'Designed to meet 100% of RTB practical evaluation criteria for software development',
      'Real-time space occupancy matrix and conflict-free reservation locking',
      'Automated rate calculations based on vehicle class, tariff duration, and VIP allocations',
      'Standardized schema definitions with validation hooks for rapid grading and assessment parity'
    ],
    architecture: {
      frontend: 'Interactive bay grid selector in React with live status indicators (Available, Reserved, Occupied)',
      backend: 'Express.js backend with atomic booking transactions and ticket generation',
      database: 'MongoDB collection indices on spaceID, timeSlots, and paymentReceipts',
      keyFeatures: ['Bay Conflict Prevention', 'Automated Tariff Engine', 'Assessment Grading Parity']
    },
    sampleMetrics: [
      { label: 'Exam Session', value: '2024–2025' },
      { label: 'Standard', value: 'RTB RQF L5 Exam' },
      { label: 'Assessment Score', value: 'Practical Distinction' }
    ]
  },
  {
    id: 'sfps',
    number: '004',
    title: 'SFPS (School Fee Payment System)',
    tagline: 'Student billing, tuition ledger & administrative tracking',
    description: 'School Fee Payment System for tracking and processing student fee payments, with role-based access for administration.',
    fullDescription: 'Designed to streamline bursar workflows and eliminate reconciliation discrepancies across academic terms. Handles fee structures, installment tracking, waiver approvals, and automated parent payment confirmation slips.',
    role: 'Developer',
    status: 'Delivered',
    category: 'Business Tools',
    techStack: ['Node.js', 'Express', 'MongoDB', 'React'],
    highlights: [
      'Role-based access control (Admin, Bursar, Accountant, Student Viewer)',
      'Term-by-term tuition breakdown with partial payment tracking & arrears calculation',
      'Searchable student database with real-time clearance status for examination eligibility',
      'Exportable financial ledger summaries and printable receipt vouchers'
    ],
    architecture: {
      frontend: 'React administrative interface with instant multi-criteria student search and clearance filter',
      backend: 'Node.js/Express API with secure payment transaction logs and audit timestamps',
      database: 'MongoDB normalized collections for Students, FeeStructures, Payments, and AcademicTerms',
      keyFeatures: ['Partial Payment Tracking', 'Exam Clearance Gate', 'Audit Logging']
    },
    sampleMetrics: [
      { label: 'System Purpose', value: 'Tuition Management' },
      { label: 'Security', value: 'RBAC Access Gate' },
      { label: 'Deployment', value: 'Production Ready' }
    ]
  },
  {
    id: 'connectx',
    number: '005',
    title: 'ConnectX',
    tagline: 'High-throughput real-time messaging & presence platform',
    description: 'Real-time chat application with presence and messaging built on sockets, backed by Redis for fast state and MongoDB for persistence.',
    fullDescription: 'An ultra-responsive distributed messaging architecture designed to maintain sub-100ms message delivery, user heartbeat presence indicators, typing broadcast signals, and persistent history archival.',
    role: 'Developer',
    status: 'Delivered',
    category: 'Realtime & Systems',
    techStack: ['React', 'Redux', 'Socket.IO', 'MongoDB', 'Redis'],
    highlights: [
      'Sub-second bidirectional socket communication with automatic reconnection logic',
      'Redis in-memory caching for ultra-fast ephemeral online/offline presence tracking',
      'MongoDB cold storage for historical message search, media references, and channels',
      'Redux Toolkit state management handling optimistic UI updates and unread counters'
    ],
    architecture: {
      frontend: 'React with Redux state synchronization, instant optimism updates, and virtualized message lists',
      backend: 'Node.js cluster with Socket.IO server utilizing Redis adapter for multi-room broadcasting',
      database: 'Redis (In-memory pub/sub & session presence) + MongoDB (Chat history, direct messages, groups)',
      keyFeatures: ['In-memory Presence', 'Instant Optimistic UI', 'Pub/Sub Socket Broadcasting']
    },
    sampleMetrics: [
      { label: 'Latency Target', value: '< 100ms' },
      { label: 'Caching Layer', value: 'Redis In-Memory' },
      { label: 'State Sync', value: 'Redux Toolkit' }
    ]
  },
  {
    id: 'webrtc-p2p-chat',
    number: '006',
    title: 'WebRTC P2P Chat',
    tagline: 'Serverless peer-to-peer direct browser communication',
    description: 'A peer-to-peer chat tool exploring direct browser-to-browser connections without routing messages through a central server.',
    fullDescription: 'An experimental exploration into decentralized communication protocols. Implements the WebRTC DataChannel API to establish encrypted, direct P2P mesh links between browser clients, leveraging a lightweight signaling handshake only for session initiation.',
    role: 'Developer',
    status: 'Prototype',
    category: 'Realtime & Systems',
    techStack: ['WebRTC', 'JavaScript'],
    highlights: [
      'Direct peer-to-peer data transport bypassing intermediate server bandwidth and storage',
      'ICE candidate negotiation and STUN server traversal for NAT hole punching',
      'Client-side end-to-end encrypted packet transmission directly between browsers',
      'Pure vanilla JavaScript core focusing on browser primitive optimization and zero runtime overhead'
    ],
    architecture: {
      frontend: 'Native JavaScript client utilizing RTCPeerConnection and RTCDataChannel primitives',
      backend: 'Zero-relay payload model — signaling only used during SDP exchange',
      database: 'Client-side ephemeral memory (No persistent server database)',
      keyFeatures: ['Zero-Server Relaying', 'NAT Traversal / STUN', 'Decentralized P2P Mesh']
    },
    sampleMetrics: [
      { label: 'Payload Routing', value: 'Direct Browser P2P' },
      { label: 'Server Dependency', value: 'Signaling Only' },
      { label: 'Protocol', value: 'RTCDataChannel' }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    number: '01',
    category: 'Frontend',
    items: ['React', 'Redux', 'Vite', 'Tailwind CSS'],
    description: 'Modern component-driven SPAs, reactive state management, utility-first styling, and high-performance bundlers.',
    proficiencyLevel: 'Instructor / Production',
    tags: ['React 18/19', 'Redux Toolkit', 'Tailwind CSS', 'Vite', 'TypeScript', 'Responsive UI']
  },
  {
    number: '02',
    category: 'Backend',
    items: ['Node.js', 'Express', 'JWT authentication'],
    description: 'RESTful API architecture, stateless JWT session security, middleware validation, rate limiting, and business logic controllers.',
    proficiencyLevel: 'Advanced',
    tags: ['Node.js', 'Express.js', 'JWT Auth', 'REST APIs', 'RBAC Security', 'Async Handlers']
  },
  {
    number: '03',
    category: 'Data',
    items: ['MongoDB', 'Mongoose', 'lowdb', 'Redis'],
    description: 'NoSQL document databases, schema modeling with Mongoose ODM, in-memory caching with Redis, and flat-file datastores.',
    proficiencyLevel: 'Advanced',
    tags: ['MongoDB', 'Mongoose ODM', 'Redis Caching', 'lowdb', 'Data Normalization', 'Indexing']
  },
  {
    number: '04',
    category: 'Realtime',
    items: ['Socket.IO', 'WebRTC'],
    description: 'Bidirectional full-duplex WebSocket communication, room broadcast orchestration, and browser-to-browser P2P data channels.',
    proficiencyLevel: 'Proficient',
    tags: ['Socket.IO', 'WebRTC DataChannels', 'Pub/Sub Events', 'NAT Traversal', 'Presence State']
  },
  {
    number: '05',
    category: 'Reporting & Viz',
    items: ['Recharts'],
    description: 'Data-driven visual analytics, inventory velocity charts, transactional metrics, and business intelligence dashboards.',
    proficiencyLevel: 'Proficient',
    tags: ['Recharts', 'SVG Graphics', 'Trend Visualizers', 'Metric Aggregation', 'Interactive Dashboards']
  },
  {
    number: '06',
    category: 'Teaching & Assessment',
    items: [
      'RTB RQF L3/L5 Software Development curriculum',
      'exam and practical-assessment design'
    ],
    description: 'Pedagogical delivery under Rwanda TVET Board guidelines, competency-based education (CBE), hands-on lab authoring, and national practical examination assessment design.',
    proficiencyLevel: 'Instructor / Specialist',
    tags: ['RTB RQF L3/L5', 'CBE Assessment', 'Exam Matrix Design', 'Student Mentorship', 'Lab Architect']
  }
];

export const CURRICULUM_MODULES: CurriculumModule[] = [
  {
    level: 'RQF Level 3',
    title: 'Foundations of Programming & Web Development',
    description: 'Equipping entry-level technical students with computational logic, structural algorithmic problem solving, and standard web basics.',
    topics: ['Algorithm Design & Flowcharts', 'HTML5/CSS3 Semantic Markup', 'JavaScript Fundamentals & DOM Manipulation', 'Version Control with Git'],
    outcome: 'Competent junior web builders able to assemble functional client-side interfaces from design specs.'
  },
  {
    level: 'RQF Level 5',
    title: 'Advanced Full-Stack Engineering & Database Architecture',
    description: 'Advanced diploma level curriculum focusing on scalable backends, NoSQL & relational database modeling, authenticated REST APIs, and modern frontend frameworks.',
    topics: ['Full-Stack MERN Architecture', 'Database Normalization & Indexing', 'JWT Authentication & Security', 'Unit Testing & Deployment Workflows'],
    outcome: 'Industry-ready software developers capable of taking complete systems from ERD to cloud deployment.'
  },
  {
    level: 'Assessment Design',
    title: 'National Practical Examination & Rubric Authoring',
    description: 'Creating practical exam scenarios that evaluate real-world problem-solving under strict exam conditions for the Rwanda TVET Board (RTB).',
    topics: ['Scenario-Based Task Design', 'Time-Constrained Assessment Matrix', 'Automated Grading Checklists', 'Debugging & Code Quality Rubrics'],
    outcome: 'Standardized assessment instruments that objectively measure technical competency across Rwandan TVET secondary schools.'
  }
];
