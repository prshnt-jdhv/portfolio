export interface ExpertiseCategory {
  id: string;
  titleKey: string;
  descriptionKey: string;
  technologies: string[];
}

export const expertiseCategories: ExpertiseCategory[] = [
  {
    id: "security-ops",
    titleKey: "expertise.cards.securityOps.title",
    descriptionKey: "expertise.cards.securityOps.description",
    technologies: [
      "Security Monitoring",
      "Vulnerability Assessment",
      "Digital Forensics",
      "Incident Response",
      "Network Analysis",
      "Security Documentation",
    ],
  },
  {
    id: "automation",
    titleKey: "expertise.cards.automation.title",
    descriptionKey: "expertise.cards.automation.description",
    technologies: [
      "Python",
      "PowerShell",
      "Bash",
      "Power Automate",
      "Power Apps",
      "Power Platform",
    ],
  },
  {
    id: "security-tools",
    titleKey: "expertise.cards.securityTools.title",
    descriptionKey: "expertise.cards.securityTools.description",
    technologies: [
      "Burp Suite",
      "Nessus",
      "Wireshark",
      "Autopsy",
      "FTK Imager",
      "Splunk",
      "Nmap",
      "OWASP ZAP",
      "Metasploit",
      "Snort",
    ],
  },
  {
    id: "platforms",
    titleKey: "expertise.cards.platforms.title",
    descriptionKey: "expertise.cards.platforms.description",
    technologies: [
      "AWS EC2",
      "AWS S3",
      "Docker",
      "Git",
      "Kubernetes",
      "TCP/IP",
      "DNS",
      "HTTP/HTTPS",
      "VPNs",
      "Firewalls (pfSense)",
      "SolarWinds Orion",
      "Machine Learning",
      "Flask",
      "Pandas",
      "NIST Cybersecurity Framework",
      "MITRE ATT&CK",
    ],
  },
];
