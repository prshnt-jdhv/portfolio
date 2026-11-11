export interface ExperienceItem {
  id: string;
  company: string;
  titleKey: string;
  dateKey: string;
  descriptionKey: string;
  tags?: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    id: "corning",
    company: "Corning Incorporated, Pune, India",
    titleKey: "experience.items.corning.title",
    dateKey: "experience.items.corning.dates",
    descriptionKey: "experience.items.corning.description",
    tags: [
      "Network monitoring",
      "Wireless networks",
      "Power Automate",
      "Documentation",
    ],
  },
  {
    id: "cyber-secured-india",
    company: "Cyber Secured India, Remote, India",
    titleKey: "experience.items.cyberSecured.title",
    dateKey: "experience.items.cyberSecured.dates",
    descriptionKey: "experience.items.cyberSecured.description",
    tags: ["Digital forensics", "Autopsy", "FTK Imager", "Wireshark"],
  },
];
