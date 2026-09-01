export type Project = {
  name: string;
  description: string;
  why: string;
  stack: string[];
  repoUrl: string | null;
};

export type ExperienceItem = {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export const links = {
  github: "https://github.com/Jeffreynavin05",
  linkedin: "https://www.linkedin.com/in/jeffreynavin/",
  email: "jeffreynavin05@gmail.com",
  resume: "/resume.pdf",
};

export const hero = {
  name: "Jeffrey Navin",
  tagline:
    "I build LLM and data systems — retrieval pipelines, agents, and the services around them.",
  subtext:
    "Final-year CS (AI & Robotics) student at VIT Chennai, graduating May 2027.",
};

export const projects: Project[] = [
  {
    name: "Document Intelligence Platform",
    description:
      "Self-hosted RAG platform for asking natural-language questions over PDFs and DOCX files, with cited, grounded answers.",
    why: "Retrieval is hybrid, not just vector similarity. Dense search (bge-small embeddings over pgvector) runs alongside Postgres full-text search, because embeddings miss exact terms like IDs and names. The two are combined with Reciprocal Rank Fusion — which works purely on rank position, so their incomparable score scales never have to be reconciled — then reranked by a local cross-encoder before anything reaches the LLM.",
    stack: [
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL + pgvector",
      "sentence-transformers",
      "SQLAlchemy",
      "Alembic",
      "Docker",
    ],
    repoUrl: "https://github.com/Jeffreynavin05/Document_RAG",
  },
  {
    name: "Root — LLM Agent with Tool Orchestration",
    description:
      "A desktop assistant that turns natural language into actions across 21 modular tool handlers.",
    why: "It started as hardcoded command routing and became an LLM function-calling architecture. Common commands still take a rule-based fast path and skip the model call entirely — cheaper and faster where the intent is unambiguous.",
    stack: ["Python", "Gemini API (function calling)"],
    repoUrl: null,
  },
  {
    name: "Traffic Sign Detection",
    description:
      "Computer vision classifier over six traffic-sign classes on live camera input.",
    why: "Reached 93.5% accuracy on a held-out test set using HOG features and an SVM, then spent most of the effort tuning the decision boundary to suppress false positives on noisy frames — the accuracy number was the easy part.",
    stack: ["Python", "OpenCV", "scikit-learn"],
    repoUrl: null,
  },
  {
    name: "CodeVault",
    description: "Full-stack platform for storing and searching code snippets.",
    why: "JWT-authenticated REST APIs with a relational schema designed for multi-user isolation from the start rather than bolted on.",
    stack: ["React", "Node.js", "Express", "PostgreSQL"],
    repoUrl: null,
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Information Systems Intern",
    company: "Chennai Petroleum Corporation Limited (CPCL)",
    dates: "Jun – Jul 2026",
    bullets: [
      "Built a full-stack document intelligence system end to end from an undefined problem statement: retrieval pipeline over vector embeddings, FastAPI backend services, Next.js frontend.",
      "Tested it across multi-user security scenarios before handover.",
    ],
  },
  {
    role: "Machine Learning Trainee",
    company: "SmartBridge",
    dates: "May – Jun 2025",
    bullets: [
      "Data cleaning, preprocessing, feature engineering, and model evaluation with Pandas, NumPy, and scikit-learn.",
    ],
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "C", "C++", "TypeScript/JavaScript", "SQL"],
  },
  {
    category: "AI & ML",
    items: [
      "RAG pipelines",
      "LlamaIndex",
      "LLM function-calling",
      "Prompt engineering",
      "Vector databases (pgvector)",
      "scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Flask", "Node.js/Express", "REST API design", "PostgreSQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Claude Code", "Linux", "GCP"],
  },
];

export const education = {
  degree: "B.Tech Computer Science Engineering (AI & Robotics)",
  school: "VIT Chennai",
  dates: "2023 – 2027",
};
