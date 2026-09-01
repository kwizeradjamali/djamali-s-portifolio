export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription?: string;
  role: string;
  status: 'In progress' | 'Delivered' | 'National exam project' | 'Prototype';
  techStack: string[];
  category: 'Full-stack' | 'Education & Exam' | 'Realtime & Systems' | 'Business Tools';
  highlights?: string[];
  architecture?: {
    frontend?: string;
    backend?: string;
    database?: string;
    keyFeatures?: string[];
  };
  sampleMetrics?: {
    label: string;
    value: string;
  }[];
  chartData?: { name: string; value: number; benchmark?: number }[];
}

export interface SkillCategory {
  number: string;
  category: string;
  items: string[];
  description?: string;
  proficiencyLevel?: string;
  tags?: string[];
}

export interface CurriculumModule {
  level: 'RQF Level 3' | 'RQF Level 5' | 'Assessment Design';
  title: string;
  description: string;
  topics: string[];
  outcome: string;
}

export interface ContactInfo {
  email: string;
  whatsapp: string;
  whatsappDisplay: string;
  instagram: string;
  instagramHandle: string;
  github: string;
  linkedin: string;
  location: string;
  roleTitle: string;
  institution: string;
  statusText: string;
  photoUrl?: string;
  avatarUrl?: string;
}
