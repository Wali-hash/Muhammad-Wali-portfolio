export enum VideoCategory {
  MOTION_GRAPHICS = 'Motion Graphics',
  VIDEO_EDITING = 'Video Editing',
  AI_ANIMATION = 'AI Animation'
}

export interface VideoProject {
  id: string; // Unique identifier
  title: string;
  category: VideoCategory;
  videoSrc: string; // REQUIRED: Path to video file or Dropbox link
  thumbnailSrc?: string; // OPTIONAL
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Software' | 'Skill';
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
}

export interface CertificationItem {
  name: string;
}
