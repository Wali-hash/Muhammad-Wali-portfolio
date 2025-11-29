import { VideoCategory, VideoProject, Skill, ExperienceItem, EducationItem, CertificationItem } from './types';

// =========================================================================================
// SIMPLE GUIDE: HOW TO ADD VIDEOS
// =========================================================================================
// 1. Upload video to Dropbox.
// 2. Click "Copy Link".
// 3. Paste it inside the quotes for 'videoSrc'.
// =========================================================================================

// Full Folder Archives (for "View More" functionality)
export const DROPBOX_FOLDERS = {
  [VideoCategory.AI_ANIMATION]: "", 
  [VideoCategory.VIDEO_EDITING]: "", 
  [VideoCategory.MOTION_GRAPHICS]: "" 
};

export const PORTFOLIO_ITEMS: VideoProject[] = [
  // AI Videos
  { 
    title: "AI Concept Visualization 01", 
    category: VideoCategory.AI_ANIMATION,
    id: "ai-01",
    videoSrc: "https://www.dropbox.com/scl/fi/ufl13f90duq12lkn99y2v/01-1.mp4?rlkey=u7xoccqufhinlls8447ttxtcs&st=ulifagtb&dl=0",
  },
  { 
    title: "AI Dynamic Scene 02", 
    category: VideoCategory.AI_ANIMATION,
    id: "ai-02",
    videoSrc: "https://www.dropbox.com/scl/fi/yq8ybnn1h48ao1piczd7t/02-1.mp4?rlkey=kamf311g5of5oja6bc1ppdiie&st=xkq89vby&dl=0",
  },

  // Video Editing
  { 
    title: "Video Editing Showcase 08", 
    category: VideoCategory.VIDEO_EDITING,
    id: "edit-08",
    videoSrc: "https://www.dropbox.com/scl/fi/l4hqobzx0nft8h2x9huxz/8.mp4?rlkey=ky09b4x5r0vgjuy4wqpjlnnb2&st=h9yvgwnk&dl=0",
  },
  { 
    title: "Video Editing Showcase 07", 
    category: VideoCategory.VIDEO_EDITING,
    id: "edit-07",
    videoSrc: "https://www.dropbox.com/scl/fi/laegki8oc7u4s9xno8v4k/07.mp4?rlkey=tmeonthw3e96g5cc0mgvzg53k&st=m6cmr1v5&dl=0",
  },
  { 
    title: "Video Editing Showcase 06", 
    category: VideoCategory.VIDEO_EDITING,
    id: "edit-06",
    videoSrc: "https://www.dropbox.com/scl/fi/sardats9sxbujag3382df/06.mp4?rlkey=v7i8dtz8n2w1awutovj4z3ouj&st=b79a19d4&dl=0",
  },
  { 
    title: "Video Editing Showcase 05", 
    category: VideoCategory.VIDEO_EDITING,
    id: "edit-05",
    videoSrc: "https://www.dropbox.com/scl/fi/59e7e7qusll9yfis6rpje/05.mp4?rlkey=ez11ly1gson1z51fi7o0zwxw6&st=7dll9jh1&dl=0",
  },
  { 
    title: "Video Editing Showcase 04", 
    category: VideoCategory.VIDEO_EDITING,
    id: "edit-04",
    videoSrc: "https://www.dropbox.com/scl/fi/c48vwjxzhxg74xekefzmi/04.mp4?rlkey=fiu6hnj4i9ouvklbymvbtso26&st=7dll9jh1&dl=0",
  },
  { 
    title: "Video Editing Showcase 03", 
    category: VideoCategory.VIDEO_EDITING,
    id: "edit-03",
    videoSrc: "https://www.dropbox.com/scl/fi/qejnj9odtvpa9y7k46hzf/03.mp4?rlkey=f4zddq3ntelo7d4cru8uskzdf&st=3dd12gqe&dl=0",
  },
  { 
    title: "Video Editing Showcase 02", 
    category: VideoCategory.VIDEO_EDITING,
    id: "edit-02",
    videoSrc: "https://www.dropbox.com/scl/fi/zb9hy8i0thkwkdjs49tht/02.mp4?rlkey=w5wsuo6pu35k6o5k06bq2rduj&st=bfnm73ir&dl=0",
  },
  { 
    title: "Video Editing Showcase 01", 
    category: VideoCategory.VIDEO_EDITING,
    id: "edit-01",
    videoSrc: "https://www.dropbox.com/scl/fi/ndseerg4kr9x994xm9nj6/01.mp4?rlkey=tuy0rylrm8vi2de6jvf0iaxwh&st=0yxcsc56&dl=0",
  },

  // Motion Graphics
  { 
    title: "Motion Graphics Showcase 03", 
    category: VideoCategory.MOTION_GRAPHICS,
    id: "mg-03",
    videoSrc: "https://www.dropbox.com/scl/fi/21iubciw47p2dwqghthg0/03.mp4?rlkey=tnvxrvpumsbwmxjv2b6509387&st=2etncx4a&dl=0",
  },
  { 
    title: "Motion Graphics Showcase 02", 
    category: VideoCategory.MOTION_GRAPHICS,
    id: "mg-02",
    videoSrc: "https://www.dropbox.com/scl/fi/9xe0d5mh5k2u63skgknxo/02.mp4?rlkey=ns3m6pk10e6pt150xkzs69md3&st=un8w2mw4&dl=0",
  },
  { 
    title: "Motion Graphics Showcase 01", 
    category: VideoCategory.MOTION_GRAPHICS,
    id: "mg-01",
    videoSrc: "https://www.dropbox.com/scl/fi/o4ynwi5b1b5dqjbyocr96/01.mp4?rlkey=b14kng14xjdxa0zq0u8n5hv8x&st=a6vqzs8i&dl=0",
  }
];

export const SKILLS_DATA: Skill[] = [
  { name: 'After Effects', level: 95, category: 'Software' },
  { name: 'Premiere Pro', level: 92, category: 'Software' },
  { name: 'Photoshop', level: 85, category: 'Software' },
  { name: 'Motion Graphics', level: 92, category: 'Skill' },
  { name: 'Video Editing', level: 90, category: 'Skill' },
  { name: 'Sound Design', level: 75, category: 'Skill' },
];

export const CORE_COMPETENCIES = [
  "Text Animation & Motion Graphics",
  "Social Media Video Editing",
  "Storytelling for Brand Promotion",
  "Sound Design & Color Grading",
  "Product Animation",
  "Adherence to Brand Guidelines"
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "Creative Riots",
    role: "Video Editor",
    period: "Sep 2025 – Nov 2025", 
    description: [
      "Edited promotional & social media videos.",
      "Produced brand-aligned content.",
      "Managed audio syncing & color grading."
    ]
  },
  {
    company: "Kids Madani Channel",
    role: "Junior Animator",
    period: "Sep 2021 – Aug 2025",
    description: [
      "Created 2D animations for education.",
      "Developed text & product animations.",
      "Managed raw footage & files."
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  { degree: "Intermediate", institution: "Board of Intermediate Education" },
  { degree: "Darsay Nizami", institution: "Jamia-tul-Madina, Karachi" }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { name: "Adobe Creative Suite (AE, PR, PS)" },
  { name: "MS Office" },
  { name: "Modern Video Editing Techniques" }
];

export const CONTACT_INFO = {
  email: "Wali311306@gmail.com",
  phone: "0311 0306044",
  yearsExperience: 4,
  location: "Karachi, Pakistan"
};
