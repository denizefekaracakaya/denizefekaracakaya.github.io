export const profile = {
  name: "Deniz Efe Karacakaya",
  role: "Artificial Intelligence & Data Engineering Student",
  location: "Antalya, Türkiye",
  education: "Akdeniz University — B.S. in Artificial Intelligence & Data Engineering",
  headline:
    "AI engineering intern building federated learning systems and the self-hosted MLOps platform they run on — for environments where the data cannot leave the building.",
  email: "denizefekaracakaya14@gmail.com",
  github: "https://github.com/denizefekaracakaya",
  linkedin: "https://linkedin.com/in/deniz-efe-karacakaya",
  kaggle: "https://kaggle.com/denizefekaracakaya",
  cv: "/Deniz_Efe_Karacakaya_CV.pdf",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    category: "AI & Machine Learning",
    items: [
      "PyTorch",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "SHAP",
      "Optuna",
      "Federated Learning (Flower)",
      "Pandas",
      "NumPy",
    ],
  },
  {
    category: "ML Engineering & MLOps",
    items: [
      "MLflow",
      "DVC",
      "Great Expectations",
      "Evidently",
      "KServe",
      "Model serving",
      "Automated retraining",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "Java", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Frameworks & APIs",
    items: [
      "FastAPI",
      "Spring Boot",
      "Flask",
      "Node.js",
      "Express",
      "React",
      "Next.js",
      "Angular",
      "Tailwind CSS",
      "Hibernate/JPA",
      "REST",
      "gRPC",
      "JWT",
    ],
  },
  {
    category: "Cloud, Infrastructure & DevOps",
    items: [
      "Kubernetes",
      "Docker",
      "Docker Compose",
      "Helm",
      "Kustomize",
      "Argo CD",
      "GitHub Actions",
      "Actions Runner Controller",
      "GHCR",
      "Traefik",
      "Google Cloud",
      "Git",
      "Linux",
    ],
  },
  {
    category: "Databases & Storage",
    items: ["PostgreSQL", "MinIO", "MongoDB", "Supabase", "Firebase"],
  },
  {
    category: "Observability & Security",
    items: [
      "Prometheus",
      "Grafana",
      "Alertmanager",
      "Sealed Secrets",
      "Trivy",
      "Secret scanning in CI",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  summary: string;
  stack: string[];
  github?: string;
  demo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "local-flow-mlops",
    name: "local-flow-mlops — Self-Hosted MLOps Platform",
    summary:
      "An end-to-end machine learning platform on single-node Kubernetes, built for environments where data cannot leave the organisation — no managed cloud service anywhere in the workflow. The whole stack is defined in Git and reconciled by Argo CD (app-of-apps, 24 Applications, sync waves, prune and self-heal), with MLflow on PostgreSQL for tracking, MinIO for artifacts, DVC dataset versioning, alias-based champion/challenger promotion, KServe and FastAPI serving paths, and an Evidently drift job whose verdict triggers a retraining Job.",
    stack: [
      "Kubernetes",
      "Argo CD",
      "MLflow",
      "DVC",
      "MinIO",
      "KServe",
      "Evidently",
      "GitHub Actions",
    ],
    github: "https://github.com/denizefekaracakaya/local-flow-mlops",
    featured: true,
  },
  {
    slug: "lionel",
    name: "L.I.O.N.E.L — Local-First Voice Agent",
    summary:
      "A bilingual (English/Turkish), MCP-native voice agent designed to run with the network unplugged: four degradation tiers from fully offline to cloud-assisted, split across a low-latency host runtime and a relocatable cluster runtime, with MCP carrying control signals, gRPC the media streams, and OpenTelemetry tracing. Contracts came before code — 28 architecture decision records, 16 policy gates and 88 validation rules enforced in CI ahead of implementation.",
    stack: ["Python", "MCP", "gRPC", "OpenTelemetry", "GitHub Actions"],
    github: "https://github.com/denizefekaracakaya/L.I.O.N.E.L",
    featured: true,
  },
  {
    slug: "chronos",
    name: "Chronos — Luxury Watch E-Commerce Platform",
    summary:
      "A role-based e-commerce platform on Google Cloud — Angular front end, Spring Boot API, JWT authentication, Stripe payments, and a Flask service exposing a Gemini chatbot hardened against prompt injection — over a normalized (3NF) schema loaded by a Python ETL pipeline of 1,500+ product records.",
    stack: [
      "Angular",
      "Spring Boot",
      "Flask",
      "PostgreSQL",
      "Stripe",
      "Google Cloud",
    ],
    featured: true,
  },
  {
    slug: "gym-buddy-ai",
    name: "Gym Buddy AI — Voice-Driven Fitness Coach",
    summary:
      "An AI fitness and nutrition assistant delivering real-time voice guidance during workouts, on a React/TypeScript front end over a Supabase backend.",
    stack: ["React", "TypeScript", "Supabase", "Google Gemini"],
    github: "https://github.com/denizefekaracakaya/gym-buddy-v2",
    featured: true,
  },
  {
    slug: "artifee-ai-photo-editor",
    name: "Artifee — Generative AI Photo Editor",
    summary:
      "A generative photo-editing web application supporting object removal and image enhancement on the Gemini API — paint over objects, watermarks or text and they are removed seamlessly.",
    stack: ["React", "TypeScript", "Google Gemini"],
    github: "https://github.com/denizefekaracakaya/Artifee-AI-Photo-Editor",
    featured: true,
  },
  {
    slug: "forecast",
    name: "Forecast",
    summary:
      "A forecasting platform leveraging Prophet-based time-series models and analytics for predictive stock price insights, with backtesting and interactive visualizations.",
    stack: ["Python", "Prophet", "Streamlit", "Machine Learning"],
    github: "https://github.com/denizefekaracakaya/forecast",
    featured: true,
  },
  {
    slug: "dsa-oop-assistant",
    name: "DSA & OOP Assistant",
    summary:
      "An AI-powered interactive learning assistant for Data Structures & Algorithms and OOP — with Java/Python language modes, interactive quizzes, and step-by-step Mermaid visualizations.",
    stack: ["React", "TypeScript", "Google Gemini", "Mermaid"],
    github: "https://github.com/denizefekaracakaya/DSA-OOP-Assistant",
    featured: false,
  },
  {
    slug: "langchain-multi-agent",
    name: "LangChain Multi-Agent",
    summary:
      "An intelligent system built with LangChain that coordinates multiple autonomous AI agents to collaboratively solve complex reasoning tasks.",
    stack: ["Python", "LangChain", "LLMs", "Multi-Agent"],
    github: "https://github.com/denizefekaracakaya/langchain-multiagent-project",
    featured: false,
  },
  {
    slug: "candymatch",
    name: "Candymatch",
    summary:
      "A match-3 puzzle game for Android built in Kotlin from scratch — swap candies, break ice blocks, and beat the clock across increasingly hard levels.",
    stack: ["Kotlin", "Android", "Game Logic"],
    featured: false,
  },
];

export const experience = [
  {
    period: "June 2026 — Present",
    title: "AI Engineering Intern",
    org: "ASEE Information Technologies",
    description:
      "Delivering three consecutive proof-of-concept studies for the Banking R&D fraud detection program — feature reduction, federated learning, and the MLOps platform beneath both — all shaped by one constraint: customer transaction data cannot leave the institution that holds it. Established the reference benchmark on the IEEE-CIS dataset (~590K transactions, 391 features), used SHAP attribution to cut the schema from 391 to 20 features while retaining 98.2% of reference F1, and benchmarked 47 federated configurations across FedAvg, FedProx, FedAdam, FedYogi and SCAFFOLD — lifting the weakest participant bank by +0.175 F1 with no raw records exchanged.",
  },
  {
    period: "2025 — 2026",
    title: "Data Analysis School — AI & Machine Learning",
    org: "YÖK / Marmara University, with METU, ITU & Boğaziçi University",
    description:
      "Selected for a national data analysis program covering applied AI and machine learning modules, taught jointly by faculty from METU, ITU and Boğaziçi University.",
  },
  {
    period: "2024 — 2028 (Expected)",
    title: "B.S. in Artificial Intelligence & Data Engineering",
    org: "Akdeniz University",
    description:
      "Studying artificial intelligence and data engineering, with coursework spanning numerical methods, distributed systems, and applied machine learning.",
  },
  {
    period: "Ongoing",
    title: "Independent Builder",
    org: "Personal Projects",
    description:
      "Designing and shipping self-directed projects across ML, cloud infrastructure, and full-stack development — from local-first voice agents to self-hosted MLOps platforms.",
  },
];

export const currentFocus = [
  "Federated learning (Flower, non-IID splits)",
  "Kubernetes-native MLOps & GitOps",
  "Explainable AI with SHAP",
];

export const languages = [
  { name: "Turkish", level: "Native" },
  { name: "English", level: "Professional Working Proficiency" },
  { name: "German", level: "Basic" },
  { name: "Spanish", level: "Basic" },
];

export const certificates = [
  {
    name: "Python Programlama Dili",
    file: "/certificates/Python_Programlama_Dili_Sertifika.pdf",
    type: "pdf"
  },
  {
    name: "Python ile Makine Öğrenmesi Uygulamaları",
    file: "/certificates/Python_ile_Makine_Öğrenmesi_Uygulamaları_Sertifika.pdf",
    type: "pdf"
  },
  {
    name: "Yapay Zeka Atölyesi",
    file: "/certificates/Yapay_Zeka_Atölyesi_Sertifika.pdf",
    type: "pdf"
  },
  {
    name: "Yapay Zeka ve Makine Öğrenmesi",
    file: "/certificates/ml-sınav3.pdf.png",
    type: "image"
  },
  {
    name: "Yapay Zeka ve Kolaylaştırıcı Araçlar",
    file: "/certificates/Kolaylaştırıcı-3.pdf.png",
    type: "image"
  },
  {
    name: "Runtalya",
    file: "/certificates/runtalya.jpg",
    type: "image"
  },
  {
    name: "Sosyal Etkinlik",
    file: "/certificates/sosyaletkinlik.jpg",
    type: "image"
  },
];
