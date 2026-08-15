export const personalData = {
  name: "SAURABH",
  fullName: "Saurabh Raj Singh",
  title: "Data Science Engineer & Innovation Leader",
  tagline: "National hackathon winner building AI-powered products that solve real-world problems at the intersection of data science, GenAI, and business strategy.",
  bio: "Data Science undergraduate and innovation leader with national-level wins in AI, product strategy, and business problem-solving. National hackathon winner (TCS Foundation, NIT Tiruchirappalli) and Special Mention recipient at IIM Bangalore's SIPS 2026. Completed a research internship at IIT Jammu on hybrid deep learning for hydrological forecasting. Skilled in AI/ML, GenAI, full-stack development, ROI modeling, and rapid prototyping.",
  status: "Open to Internships, Collaborations & Opportunities",
  isAvailable: true,
  email: "saurabh.300012824049@csvtu.ac.in",
  phone: "+91 73883 76242",
  location: "Bhilai, Chhattisgarh, India",
  education: {
    degree: "B.Tech (Honours) – Computer Science & Engineering (Data Science)",
    university: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    period: "2024 – Present | Currently in 3rd Year"
  },
  socials: [
    { name: "GitHub", url: "https://github.com/saurabhSRajput", handle: "@saurabhSRajput" },
    { name: "LinkedIn", url: "https://linkedin.com/in/saurabh-raj-singh-302b55272", handle: "saurabh-raj-singh" },
    { name: "Twitter/X", url: "https://twitter.com", handle: "@saurabh_dev" },
    { name: "Instagram", url: "https://instagram.com", handle: "@saurabh.raj" }
  ]
};

export const statsData = [
  { value: "3+", label: "National Wins", detail: "TCS, IIIT Delhi, Top 100 Union Bank" },
  { value: "10+", label: "Projects Built", detail: "AI/ML, FinTech, EdTech & more" },
  { value: "IIM", label: "Special Mention", detail: "SIPS 2026, IIM Bangalore" },
  { value: "IIT", label: "Research Intern", detail: "IIT Jammu – Hydro LSTM Deep Learning" }
];

export const projectsData = [
  {
    id: "nextgen-aml",
    title: "NEXTGEN // AML System",
    category: "AI & FinTech",
    filter: "web-apps",
    subtitle: "AI/ML-driven next-generation Anti-Money Laundering intelligence platform",
    description: "Built for SIPS 2026 at IIM Bangalore. An end-to-end AI/ML-powered AML solution with suspicious transaction detection, anomaly flagging, risk scoring, and compliance monitoring dashboard.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",
    tags: ["Python", "Machine Learning", "FastAPI", "React.js", "Supabase"],
    featured: true,
    year: "2026",
    role: "Team Lead",
    links: {
      live: "https://github.com/saurabhSRajput",
      github: "https://github.com/saurabhSRajput"
    },
    metrics: ["Special Mention – IIM Bangalore SIPS 2026", "Top 100 Pan-India – Union Bank AML Challenge", "Real-time Suspicious Transaction Detection"],
    caseStudy: {
      overview: "NextGen AML was developed for two prestigious national competitions — SIPS 2026 at IIM Bangalore and Union Bank of India's AML Innovation Challenge. The platform uses a multi-layered AI approach to detect, flag, and explain suspicious financial transactions in real time.",
      challenge: "Traditional AML systems generate enormous false positives and rely on rigid rule-based logic that fails against sophisticated layering techniques.",
      solution: "Built a hybrid ML pipeline combining graph neural networks for transaction relationship mapping, anomaly detection with autoencoders, and an LLM-powered explanation engine for compliance officers.",
      deliverables: ["Transaction Risk Scoring Engine", "Real-time Anomaly Detection Dashboard", "Compliance Monitoring Module", "AI-Powered Alert Explanation System"]
    }
  },
  {
    id: "iit-jammu-research",
    title: "SPHY–LSTM // Hydrological AI",
    category: "Research & AI",
    filter: "web-apps",
    subtitle: "Hybrid deep learning framework for runoff prediction in Himalayan basins",
    description: "Research internship at IIT Jammu — developed a novel hybrid SPHY–Autoencoder–LSTM framework for enhanced runoff prediction in the Central Himalayan Region, combining physics-based hydrological modeling with deep learning.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    tags: ["Python", "LSTM", "Autoencoder", "Deep Learning", "SPHY Model", "NumPy"],
    featured: true,
    year: "2025",
    role: "Research Intern – IIT Jammu",
    links: {
      live: "https://github.com/saurabhSRajput",
      github: "https://github.com/saurabhSRajput"
    },
    metrics: ["Published at IIT Jammu", "Hybrid Physics + Deep Learning Model", "Central Himalayan Basin Runoff Prediction"],
    caseStudy: {
      overview: "Under the supervision of faculty at IIT Jammu, developed a groundbreaking hybrid framework that combines the SPHY (Spatial Processes in Hydrology) model with an Autoencoder-LSTM deep learning architecture for accurate runoff prediction.",
      challenge: "Traditional hydrological models lack the ability to capture complex non-linear temporal dependencies in snowmelt and rainfall-runoff processes in high-altitude Himalayan basins.",
      solution: "Designed a hybrid architecture where SPHY generates physically-constrained feature representations, which are then compressed by an Autoencoder and fed to an LSTM for sequence-to-sequence runoff forecasting.",
      deliverables: ["SPHY-Autoencoder-LSTM Pipeline", "Runoff Prediction Engine", "Research Documentation & Analysis", "Model Accuracy Benchmarking"]
    }
  },
  {
    id: "floatchat-forensics",
    title: "FLOATCHAT + UFDR // Forensics",
    category: "AI & Security",
    filter: "web-apps",
    subtitle: "Real-time forensic analysis tool with 95% faster analysis & >99.9% accuracy",
    description: "A dual-tool system: FloatChat (conversational AI for case investigation) + UFDR Forensic Analysis Tool achieving >99.9% accuracy, blockchain chain-of-custody logging, and 95% reduction in analysis time.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
    tags: ["Python", "AI/ML", "Blockchain", "FastAPI", "React.js"],
    featured: true,
    year: "2025",
    role: "Team Lead",
    links: {
      live: "https://github.com/saurabhSRajput",
      github: "https://github.com/saurabhSRajput"
    },
    metrics: ["95% Reduction in Analysis Time", "10x Faster Hypothesis Testing", ">99.9% UFDR Accuracy with Blockchain Chain of Custody"],
    caseStudy: {
      overview: "FloatChat + UFDR is a forensic analysis platform combining AI-powered conversational case analysis with a ultra-precise UFDR (Universal Forensic Data Recovery) tool for criminal investigation support.",
      challenge: "Digital forensics teams spend 90%+ of their time on manual data extraction and chain-of-custody documentation, slowing critical investigations.",
      solution: "Built a two-part system: FloatChat uses LLM-powered question answering over case evidence, while UFDR automates extraction with blockchain-anchored chain-of-custody logging.",
      deliverables: ["AI Conversational Forensics Engine", "UFDR Automated Extraction Module", "Blockchain Chain-of-Custody Logger", "Evidence Dashboard & Reporting"]
    }
  },
  {
    id: "money-mentor",
    title: "MONEY MENTOR // GenAI Finance",
    category: "GenAI & FinTech",
    filter: "web-apps",
    subtitle: "GenAI-powered personal finance assistant for spending analysis and smart budgeting",
    description: "Built for ET GenAI Hackathon — an LLM-powered finance assistant that analyzes spending patterns, generates personalized budgeting advice, and provides real-time savings recommendations.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
    tags: ["GenAI", "LLM", "Python", "FastAPI", "React.js"],
    featured: false,
    year: "2025",
    role: "Team Lead",
    links: {
      live: "https://github.com/saurabhSRajput",
      github: "https://github.com/saurabhSRajput"
    },
    metrics: ["Semi-Finalist – ET GenAI Hackathon", "Natural Language Finance Queries", "Personalized Savings Recommendations"],
    caseStudy: {
      overview: "Money Mentor democratizes financial literacy using generative AI, allowing users to query their finances conversationally and receive actionable advice without complex spreadsheets.",
      challenge: "Most personal finance tools require technical setup and don't give nuanced, personalized guidance.",
      solution: "Integrated RAG (Retrieval-Augmented Generation) with user transaction history to generate highly contextualized financial advice.",
      deliverables: ["LLM Finance Chat Engine", "Transaction Analysis Module", "Smart Budget Planner", "Savings Opportunity Detector"]
    }
  },
  {
    id: "eduone",
    title: "EDUONE // Unified EdTech Platform",
    category: "EdTech & AI",
    filter: "design",
    subtitle: "Integrated learning, assessment and mentorship platform for students",
    description: "Built for Code Nakshatra Hackathon — a unified EdTech platform bringing together adaptive learning, AI-powered assessment, live mentorship, and career guidance in one seamless interface.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    tags: ["React.js", "Python", "FastAPI", "Supabase", "AI/ML"],
    featured: false,
    year: "2025",
    role: "Team Lead",
    links: {
      live: "https://github.com/saurabhSRajput",
      github: "https://github.com/saurabhSRajput"
    },
    metrics: ["Finalist – Code Nakshatra Hackathon", "Unified Learning + Assessment + Mentorship", "AI-Adaptive Content Engine"],
    caseStudy: {
      overview: "EduOne solves the fragmented EdTech landscape by providing a single platform where students access courses, get assessed, connect with mentors, and track career readiness.",
      challenge: "Students juggle multiple platforms for courses, tests, mentorship, and placement prep — creating cognitive overload and poor outcomes.",
      solution: "Built an integrated platform with an AI recommendation engine that personalizes the learning path based on assessment performance.",
      deliverables: ["Adaptive Learning Engine", "AI Assessment Module", "Live Mentorship Scheduler", "Career Readiness Tracker"]
    }
  }
];

export const experienceData = [
  {
    period: "2025 — Present",
    role: "Core Coordinator & Head – Event & Logistics",
    company: "CSVTU-FORTE (DST–NIDHI i-TBI)",
    location: "Bhilai, India",
    description: "Leading event and logistics management for DST–NIDHI i-TBI incubation center at CSVTU, coordinating national-level innovation programs, mentoring student teams, and managing institutional partnerships.",
    highlights: [
      "Coordinated 10+ national-level innovation events",
      "Managed stakeholder relations with DST & partner institutes",
      "Mentored student startup teams at FORTE incubation center"
    ]
  },
  {
    period: "2025",
    role: "Research Intern",
    company: "Indian Institute of Technology (IIT) Jammu",
    location: "Remote / IIT Jammu",
    description: "Developed a novel Hybrid SPHY–Autoencoder–LSTM Framework for enhanced runoff prediction in the Central Himalayan Region, combining physics-based hydrological modeling with deep learning temporal analysis.",
    highlights: [
      "Hybrid physics + deep learning architecture design",
      "Runoff prediction for Central Himalayan basins",
      "Research paper documentation and benchmarking"
    ]
  },
  {
    period: "2025 — Present",
    role: "Event Management & Company Outreach Lead",
    company: "Training & Placement Cell, CSVTU",
    location: "Bhilai, India",
    description: "Driving company outreach and industry-academia partnerships to enhance placement opportunities for CSVTU students. Organizing skill development workshops, mock interviews, and industry guest lectures.",
    highlights: [
      "Company outreach to 15+ national corporates",
      "Organized placement prep bootcamps",
      "Bridged industry-academia gap through guest lectures"
    ]
  },
  {
    period: "2024",
    role: "University Representative",
    company: "National Youth Parliament",
    location: "Pan-India",
    description: "Selected as University Representative for the National Youth Parliament, representing CSVTU at national-level parliamentary debates and youth policy discussions.",
    highlights: [
      "University representative at national level",
      "Policy debate and stakeholder communication",
      "Youth leadership and public speaking"
    ]
  }
];

export const skillsData = [
  {
    category: "Programming & Development",
    skills: [
      { name: "Python", level: "Expert", icon: "Code2" },
      { name: "React.js", level: "Advanced", icon: "Layers" },
      { name: "FastAPI", level: "Advanced", icon: "Zap" },
      { name: "Java / C / C++", level: "Intermediate", icon: "FileCode" },
      { name: "Supabase", level: "Intermediate", icon: "Database" }
    ]
  },
  {
    category: "AI / ML & Data Science",
    skills: [
      { name: "Machine Learning (Sklearn)", level: "Advanced", icon: "Cpu" },
      { name: "Deep Learning (LSTM, Autoencoder)", level: "Advanced", icon: "Sparkles" },
      { name: "Generative AI & LLMs", level: "Advanced", icon: "Sparkles" },
      { name: "Data Analysis & Visualization", level: "Expert", icon: "BarChart" },
      { name: "BFS / Algorithms", level: "Intermediate", icon: "GitBranch" }
    ]
  },
  {
    category: "Business & Strategy",
    skills: [
      { name: "Product Strategy & Roadmapping", level: "Advanced", icon: "Layout" },
      { name: "ROI Modeling & KPI Definition", level: "Advanced", icon: "TrendingUp" },
      { name: "Competitive Analysis & SWOT", level: "Expert", icon: "Target" },
      { name: "Feasibility Studies", level: "Advanced", icon: "FileText" },
      { name: "Stakeholder Management", level: "Advanced", icon: "Users" }
    ]
  }
];

export const servicesData = [
  {
    id: "01",
    title: "AI / ML Solution Development",
    tagline: "End-to-end intelligent systems — from data pipelines to deployed ML models.",
    description: "Building production-ready AI and machine learning solutions for real business problems, including classification, anomaly detection, NLP, and predictive modeling.",
    deliverables: ["Custom ML Model Training & Evaluation", "LLM & RAG Pipeline Development", "Anomaly Detection & Risk Scoring Systems", "AI API Development with FastAPI"]
  },
  {
    id: "02",
    title: "GenAI & LLM Applications",
    tagline: "Harnessing large language models to build intelligent, conversational products.",
    description: "Designing and building GenAI-powered applications — from chatbots and document intelligence to automated decision support systems.",
    deliverables: ["RAG-Powered Knowledge Assistants", "Custom LLM Fine-Tuning", "Document Intelligence Pipelines", "Conversational Finance & EdTech Bots"]
  },
  {
    id: "03",
    title: "Full-Stack Web Development",
    tagline: "Modern, scalable web applications with clean UI and robust backends.",
    description: "Developing responsive web applications using React.js + FastAPI + Supabase stack, with emphasis on performance, usability, and real-time capabilities.",
    deliverables: ["React.js Frontend Development", "FastAPI Backend & REST APIs", "Supabase Database & Auth Integration", "Real-time Dashboard & Data Visualization"]
  },
  {
    id: "04",
    title: "Product Strategy & Competitive Analysis",
    tagline: "Data-driven strategy, ROI modeling, and go-to-market playbooks.",
    description: "Providing business strategy consulting grounded in data — including competitive landscape analysis, SWOT, KPI framework design, feasibility studies, and product roadmapping.",
    deliverables: ["Competitive Analysis & SWOT Reports", "ROI Modeling & Business Case", "KPI Framework & OKR Design", "Product Roadmap & Market Sizing"]
  }
];

export const processSteps = [
  {
    step: "01",
    title: "DISCOVERY & FRAMING",
    desc: "Deeply understanding the problem space, business context, constraints, user pain points, and success metrics."
  },
  {
    step: "02",
    title: "ARCHITECTURE & DESIGN",
    desc: "Designing the technical stack, data flow, ML pipeline architecture, and product wireframes."
  },
  {
    step: "03",
    title: "BUILD & ITERATE",
    desc: "Rapid prototyping with clean Python/React code, continuous testing, and iterative model improvement."
  },
  {
    step: "04",
    title: "DEPLOY & ANALYZE",
    desc: "Deploying the solution, monitoring performance metrics, gathering feedback, and optimizing for scale."
  }
];

export const achievementsData = [
  {
    title: "1st Place – TCS Foundation National Hackathon",
    venue: "NIT Tiruchirappalli",
    desc: "36-Hour National Hackathon – Digital Infrastructure Services track. Team DevOps 2.0.",
    year: "Jul–Aug 2026",
    badge: "🏆 WINNER"
  },
  {
    title: "Special Mention – SIPS 2026, IIM Bangalore",
    venue: "IIM Bangalore",
    desc: "Student Innovation & Product Summit for project 'NextGen AML' — AI-powered Anti-Money Laundering platform.",
    year: "2026",
    badge: "⭐ SPECIAL MENTION"
  },
  {
    title: "Winner – Hack-LLM Hackathon",
    venue: "IIIT Delhi",
    desc: "Won the Large Language Model focused hackathon hosted by IIIT Delhi.",
    year: "2025",
    badge: "🏆 WINNER"
  },
  {
    title: "Top 100 Pan-India – AML Innovation Challenge",
    venue: "Union Bank of India",
    desc: "Top 100 nationally in Union Bank of India's AML (Anti-Money Laundering) Innovation Challenge.",
    year: "2025",
    badge: "🎯 TOP 100"
  },
  {
    title: "Semi-Finalist – ET GenAI Hackathon",
    venue: "Economic Times",
    desc: "Semi-Finalist for Money Mentor GenAI finance assistant application.",
    year: "2025",
    badge: "🥈 SEMI-FINALIST"
  },
  {
    title: "Finalist – Code Nakshatra Hackathon",
    venue: "Code Nakshatra",
    desc: "Finalist for EduOne — unified EdTech platform for learning, assessment and mentorship.",
    year: "2025",
    badge: "🥉 FINALIST"
  }
];

export const certificationsData = [
  {
    name: "Product Management & Agentic AI",
    issuer: "IIT Patna (Vishlesan i-Hub)",
    type: "Certification"
  },
  {
    name: "Drone Technology",
    issuer: "MSME E-SDP, Government of India",
    type: "MSME Certified"
  }
];

export const testimonialsData = [];
