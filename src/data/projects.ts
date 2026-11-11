export interface PortfolioProject {
  id: string;
  // title: string;
  translationKey: string;
  repoUrl: string;
  technologies: string[];
  images: {
    src: string;
    altKey: string;
    width: number;
    height: number;
  }[];
}

export const projects: PortfolioProject[] = [
  {
    id: "isp-vendor-maintenance",
    // title: "ISP Vendor Maintenance Notification Automation",
    translationKey: "projects.ispAutomation",
    repoUrl: "",
    technologies: ["Power Automate"],
    images: [],
  },
  {
    id: "ml-intrusion-detection",
    // title: "Machine Learning-Based Intrusion Detection System",
    translationKey: "projects.intrusionDetection",
    repoUrl: "",
    technologies: ["Python", "Flask", "AWS", "Random Forest"],
    images: [],
  },
  {
    id: "endpoint-monitoring-lab",
    // title: "Endpoint Monitoring & Malware Behavior Analysis Lab",
    translationKey: "projects.endpointLab",
    repoUrl: "",
    technologies: ["Security Lab"],
    images: [],
  },
];
