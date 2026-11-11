export interface CredentialItem {
  id: string;
  name: string;
  provider?: string;
  url?: string;
}

export interface CourseCategory {
  id: string;
  titleKey: string;
  courses: CredentialItem[];
}

export const certifications: CredentialItem[] = [
  { id: "ejptv2", name: "eJPTv2" },
  {
    id: "google-cybersecurity",
    name: "Google Cybersecurity Professional Certificate",
  },
  {
    id: "tryhackme-jr-pt",
    name: "TryHackMe Jr Penetration Tester Certificate",
  },
];

export const courseCategories: CourseCategory[] = [];
