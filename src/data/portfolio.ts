// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to personalize the portfolio with your info.
//  This is the ONLY file you need to touch for content changes.
// ─────────────────────────────────────────────────────────────
const BASE = import.meta.env.BASE_URL;
export const profile = {
  name: "Prakanth V",
  role: "Cyber Security Student",
  tagline: "Final Year Student • Cyber Security Enthusiast • Aspiring Cybersecurity Professional • Risk Mitigation • Network Security • Endpoint Security",
  whoami: [
    "I'm a final-year B.E. Computer Science Engineering (Cyber Security) student at S.A. Engineering College with a strong passion for offensive security, vulnerability assessment, and AI-driven cybersecurity. I enjoy discovering security weaknesses, understanding attacker techniques, and building practical solutions to strengthen cyber defenses. Through 500+ TryHackMe labs, internships, and hands-on projects, I have developed skills in Web Application Security, VAPT, Security Operations, Digital Forensics, and Threat Detection. I believe in continuously learning, experimenting, and breaking systems ethically to understand how to secure them. — I break systems ethically to understand their weaknesses and build stronger defenses.",
  ],
  location: "Chennai, Tamilnadu, India",
  email: "prakanthvijayakumar20@gmail.com",
  phone: "+91 95979 39844",
  resumeUrl: "/${BASE}Prakanth V.pdf", // drop your resume file into /public and update this path
  socials: {
    github: "https://github.com/Prakanth20",
    linkedin: "https://www.linkedin.com/in/prakanth-v-9316252a4/",
  },
};

// Used to pull live data for the GitHub dashboard card
export const githubUsername = "Prakanth20";

// TryHackMe doesn't expose a public CORS-friendly stats API, so the badge is
// embedded via their official iframe and these numbers are entered manually.
// Update them whenever your TryHackMe profile changes.
export const tryhackme = {
  username: "prakanth20",
  profileUrl: "https://tryhackme.com/p/prakanth20",
  rank: "Top 1%",
  points: "2492",
  roomsCompleted: "560",
  badges: "67",
  streakDays: "90",
};

export const whoamiList = [
"Web Application Security",
"Vulnerability Assessment & Penetration Testing (VAPT)",
"Offensive Security",
"Network Security",
"OWASP Top 10",
"Security Operations Center (SOC)",
"Threat Detection & Incident Response",
"Digital Forensics",
"AI Security",
"Cloud Security",
"Security Automation",
"Malware Analysis"
];

export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
{
  category: "Languages",
  skills: [
    "Python", "Bash", "Java", "C", "C++", "SQL"
  ],
},
{
  category: "Cyber Security",
  skills: [
    "Vulnerability Assessment & Penetration Testing (VAPT)", "Web Application Security", "Network Security", "Offensive Security", "OWASP Top 10", "Security Assessment", "Risk Assessment", "Threat Modeling", "Security Hardening"
  ],
},
{
  category: "Pentesting",
  skills: [
    "Burp Suite", "Metasploit", "Nmap", "Wireshark", "Nessus", "Gobuster", "Dirsearch", "Nikto", "Hydra", "Netcat", "SQLMap", "John the Ripper"
  ],
},
{
  category: "Blue Team",
  skills: [
    "Incident Response", "Threat Detection", "Log Analysis", "Threat Hunting", "IOC Analysis", "MITRE ATT&CK", "Security Monitoring"
  ],
},
{
  category: "SIEM & Monitoring",
  skills: [
    "Splunk", "Wazuh", "ELK Stack"
  ],
},
{
  category: "Digital Forensics",
  skills: [
    "Memory Analysis", "Disk Forensics", "Malware Analysis", "Evidence Collection", "Volatility", "RedLine", "FTK Imager", "Autospy"
  ],
},
{
  category: "Networking",
  skills: [
    "TCP/IP", "DNS", "DHCP", "HTTP/HTTPS", "FTP", "SSH", "SMB", "VLANs", "VPN", "Firewalls", "Routing & Switching", "Packet Analysis"
  ],
},
{
  category: "Cloud",
  skills: [
    "AWS", "Microsoft Azure", "Google Cloud Platform (GCP)", "IAM Security"
  ],
},
{
  category: "Operating Systems",
  skills: [
    "Kali Linux", "Ubuntu", "Windows", "Windows Server"
  ],
},
{
  category: "Frameworks & Standards",
  skills: [
    "OWASP Top 10", "NIST Cybersecurity Framework", "CIS Controls", "Zero Trust Security"
  ],
},
{
  category: "Development & Automation",
  skills: [
    "Git", "GitHub", "REST APIs", "JSON", "VirtualBox", "VMware", "VS Code"
  ],
},
{
  category: "Databases",
  skills: [
    "MySQL", "SQLite"
  ],
},
{
  category: "Soft Skills",
  skills: [
    "Analytical Thinking", "Problem Solving", "Technical Documentation", "Security Reporting", "Communication", "Team Collaboration", "Continuous Learning"
  ],
},
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  logo?: string; // path in /public
};

export const experience: ExperienceItem[] = [
  {
    company: "Cyber Crime Wing",
    role: "Cyber Security Intern",
    period: "Jun 2026 — July 2026",
    location: "On-site",
    description: [
      "Developed a malware analysis platform for static and dynamic analysis of Android applications.",
      "Implemented an interactive web dashboard to visualize processes, network activity, permissions, and malware behavior.",
      "Built analysis reporting features to identify malicious indicators and support security investigations."
    ],
  },
  {
    company: "Deltawre Solution Private Limited",
    role: "Penetration Tester Intern",
    period: "Mar 2026 — May 2026",
    location: "Remote",
    description: [
      "Designed and developed a custom network scanner to identify open TCP ports and running network services.",
      "Implemented asynchronous port scanning, service fingerprinting, banner grabbing, and concurrent scanning for improved performance.",
      "Built automated reporting features with JSON and HTML export to support network analysis and security documentation.",
    ],
  },
  {
    company: "Oasis Infobyte",
    role: "Security Analyst Intern",
    period: "Feb 2026 — Mar 2026",
    location: "Remote",
    description: [
      "Performed vulnerability assessments and security testing on web applications to identify potential risks.",
      "Conducted network reconnaissance and analyzed security findings using industry-standard cybersecurity tools.",
      "Documented vulnerabilities, proof of concepts, and remediation recommendations to improve overall security posture.",
    ],
  },
  {
    company: "ApexPlanet Software Private Limited",
    role: "Cyber Security & Ethical Hacking Intern",
    period: "Dec 2025 — Feb 2026",
    location: "Remote",
    description: [
      "Configured secure penetration testing environments and performed network reconnaissance using industry-standard security tools.",
      "Conducted web application security testing, vulnerability assessments, and controlled exploitation in a secure lab environment.",
      "Analyzed security incidents, documented findings, and provided remediation recommendations following ethical hacking best practices.",
    ],
  },
  {
    company: "Edunet Foundation",
    role: "Cybersecurity with Gen AI Intern",
    period: "Dec 2025 — Jan 2026",
    location: "Remote",
    description: [
      "Developed an AI-based Network Intrusion Detection System to identify and classify malicious network traffic.",
      "Implemented machine learning techniques to analyze network data and improve intrusion detection accuracy.",
      "Generated real-time security alerts and visualized detection results to support proactive threat monitoring and incident response.",
    ],
  },
  {
    company: "Uptoskills",
    role: "Cyber Security Intern",
    period: "Oct 2025 — Jan 2026",
    location: "Remote",
    description: [
      "Completed intensive hands-on training in cybersecurity, gaining practical experience with industry-standard security tools and techniques.",
      "Performed vulnerability assessments, network analysis, web application testing, and penetration testing through daily practical labs.",
      "Strengthened skills in threat analysis, ethical hacking, and security best practices by working on real-world cybersecurity scenarios.",
    ],
  },
  {
    company: "NullClass",
    role: "Web Application Security Intern",
    period: "Jun 2025 — Dec 2025",
    location: "On-site",
    description: [
      "Performed web application security assessments by identifying and validating vulnerabilities through bug bounty programs.",
      "Conducted manual and automated security testing to detect vulnerabilities such as XSS, SQL Injection, IDOR, and authentication flaws.",
      "Documented security findings with proof of concept and responsible disclosure recommendations to improve application security.",
    ],
  },
  {
    company: "Elevate Labs",
    role: "Cyber Security Intern",
    period: "May 2025 — Jun 2025",
    location: "Remote",
    description: [
      "Performed vulnerability assessments and security testing across web applications and network environments using industry-standard tools.",
      "Conducted penetration testing, reconnaissance, and threat analysis while applying cybersecurity best practices in real-world projects.",
      "Documented security findings, remediation recommendations, and contributed to cybersecurity projects, earning the Best Performer recognition during the internship.",
    ],
  },
  {
    company: "The Red Users",
    role: "Cyber Security Intern",
    period: "Apr 2025 — May 2025",
    location: "Remote",
    description: [
      "Performed threat analysis, network security assessments, and vulnerability identification using industry-standard cybersecurity tools.",
      "Gained hands-on experience in penetration testing, security monitoring, and implementing cybersecurity best practices.",
      "Documented security findings and remediation recommendations while contributing to real-world cybersecurity projects.",
    ],
  },
  {
    company: "Prodigy InfoTech",
    role: "Cyber Security Intern",
    period: "Jan 2025 — Jan 2025",
    location: "Remote",
    description: [
      "Performed vulnerability assessments and security testing on web applications and network environments using industry-standard tools.",
      "Conducted penetration testing, network reconnaissance, and threat analysis to identify and mitigate security vulnerabilities.",
      "Prepared technical reports documenting security findings, proof of concepts, and remediation recommendations for real-world projects.",
    ],
  },
  {
    company: "Pinnacle Labs",
    role: "Cyber Security Intern",
    period: "Dec 2024 — Jan 2025",
    location: "Remote",
    description: [
      "Applied cybersecurity principles to complete hands-on security projects involving vulnerability assessment and risk analysis.",
      "Performed security testing and analyzed system vulnerabilities using industry-standard cybersecurity tools and methodologies.",
      "Documented project findings and implemented security best practices while strengthening practical cybersecurity and problem-solving skills.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  githubUrl?: string;
  demoUrl?: string;
  docsUrl?: string;
  image?: string; // path in /public
};

export const projects: Project[] = [
  {
    title: "MOTW Bypass",
    description:
      "A Windows security research project demonstrating techniques to bypass the Mark of the Web (MOTW) protection mechanism for security awareness, malware analysis, and defensive research.",
    stack: ["Windows Security", "PowerShell", "Mark of the Web", "Cybersecurity"],
    category: "Windows Security",
    difficulty: "Advanced",
    githubUrl: "https://github.com/Prakanth20/MOTW_Bypass",
  },
  {
    title: "Remote Connection",
    description:
      "A secure remote connection project demonstrating remote system access, client-server communication, and network connectivity concepts for system administration and cybersecurity learning.",
    stack: ["Python", "Sockets", "Networking", "Client-Server"],
    category: "Network Security",
    difficulty: "Advanced",
    githubUrl: "https://github.com/Prakanth20/Remote-Connection",
  },
  {
    title: "Web Application Penetration Testing Tool",
    description:
      "A Python-based web security testing tool that automates vulnerability assessments by detecting common web application vulnerabilities and generating actionable security reports.",
    stack: ["Python", "Flask", "Web Security", "OWASP"],
    category: "Web Security",
    difficulty: "Intermediate",
    githubUrl: "https://github.com/Prakanth20/Web-Application-Penetration-Testing-Tool",
  },
  {
    title: "Zero Trust Network Access (ZTNA) Web Application",
    description:
      "A Flask-based Zero Trust Network Access (ZTNA) application that implements secure authentication, role-based access control, and continuous user verification to protect web resources following Zero Trust security principles.",
    stack: ["Python", "Flask", "Zero Trust", "Authentication"],
    category: "Network Security",
    difficulty: "Advanced",
    githubUrl: "https://github.com/Prakanth20/Zero-Trust-Network-Access-ZTNA-Flask-Web-Application",
  },
  {
    title: "Cyber Fraud Detection System",
    description:
      "A machine learning-based fraud detection system that analyzes transaction patterns to identify fraudulent activities and improve cybersecurity through intelligent threat detection.",
    stack: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
    category: "AI Security",
    difficulty: "Advanced",
    githubUrl: "https://github.com/Prakanth20/Cyber-Fraud-Detection-System-Machine-Learning-",
  },
  {
    title: "AI-Based Network Intrusion Detection System",
    description:
      "An AI-powered intrusion detection system that leverages machine learning to analyze network traffic, detect malicious activities, and generate real-time alerts for proactive threat monitoring.",
    stack: ["Python", "Machine Learning", "Scikit-learn", "Network Security"],
    category: "AI Security",
    difficulty: "Intermediate",
    githubUrl: "https://github.com/Prakanth20/AI-Based-Network-Intrusion-Detection-System",
  },
  {
    title: "SQL Injection Detector",
    description:
      "A web application security tool that detects potential SQL Injection vulnerabilities by analyzing user inputs and HTTP requests, helping identify and mitigate database injection attacks.",
    stack: ["Python", "Flask", "SQL Injection", "OWASP"],
    category: "Web Security",
    difficulty: "Intermediate",
    githubUrl: "https://github.com/Prakanth20/SQL-Injection-Detector",
  },
  {
    title: "Secure File Vault",
    description:
      "A Java-based secure file storage application that encrypts sensitive files, provides authenticated user access, and ensures data confidentiality through secure file management techniques.",
    stack: ["Java", "Swing", "File Encryption", "Cryptography"],
    category: "Application Security",
    difficulty: "Intermediate",
    githubUrl: "https://github.com/Prakanth20/Secure-File-Vault-using-Java",
  },
  {
    title: "Forensic Analyser",
    description:
      "A digital forensic analysis tool designed to examine files, extract forensic artifacts, and identify potential indicators of compromise to support cybersecurity investigations.",
    stack: ["Python", "Digital Forensics", "File Analysis", "Cybersecurity"],
    category: "Digital Forensics",
    difficulty: "Beginner",
    githubUrl: "https://github.com/Prakanth20/Forensic-Analyser",
  },
  {
    title: "Endpoint Detection and Response (EDR)",
    description:
      "A Python-based Endpoint Detection and Response (EDR) solution that monitors endpoint activities, detects suspicious behavior, and generates real-time security alerts to support threat detection and incident response.",
    stack: ["Python", "Endpoint Security", "Threat Detection", "System Monitoring"],
    category: "Endpoint Security",
    difficulty: "Beginner",
    githubUrl: "https://github.com/Prakanth20/Endpoint-Detection-and-Response",
  },
  {
    title: "Honeypot",
    description:
      "A cybersecurity honeypot system designed to emulate vulnerable services, capture malicious activities, and analyze attacker behavior for threat intelligence and security research.",
    stack: ["Python", "Network Security", "Threat Intelligence", "Socket Programming"],
    category: "Threat Detection",
    difficulty: "Beginner",
    githubUrl: "https://github.com/Prakanth20/Honeypot",
  },
  {
    title: "Identify and Remove Suspicious Browser Extensions",
    description:
      "A browser security tool that detects potentially malicious or unauthorized browser extensions by analyzing permissions, identifying security risks, and assisting users in removing suspicious extensions.",
    stack: ["Python", "Browser Security", "Extension Analysis", "Cybersecurity"],
    category: "Browser Security",
    difficulty: "Beginner",
    githubUrl: "https://github.com/Prakanth20/Identify-and-Remove-Suspicious-Browser-Extensions",
  },
  {
    title: "Packet Sniffer using Scapy",
    description:
      "A Python-based network packet sniffer that captures, analyzes, and inspects network traffic in real time using Scapy, enabling protocol analysis and network security monitoring.",
    stack: ["Python", "Scapy", "Network Security", "Packet Analysis"],
    category: "Network Security",
    difficulty: "Intermediate",
    githubUrl: "https://github.com/Prakanth20/Packet-Sniffer-using-Scapy",
  },
];

export type Certificate = {
  name: string;
  issuer:  "Google Coursera" | "TryHackMe" | "Cisco Network Academy" | "Udemy" | "ISC2" | "TheXSSRat" | "Red Team Leaders" | "Hack & Fix" | "CappricioSec University" | "VibeSecurity" | "Forage" | "Google Cloud" | string;
  year: string;
  image?: string; // path in /public/certificates
};

export const certificates: Certificate[] = [
  { name: "Google CyberSecurity Professional Certificate", issuer: "Google coursera", year: "2025", image: "/Google .jpeg" },
  { name: "Certified Ethical Hacker (v12)", issuer: "Google coursera", year: "2025", image: "/CEH(V12).jpeg" },
  { name: "Pre Security", issuer: "TryHackMe", year: "2025", image: "/Pre Security.jpeg" },
  { name: "Cyber Security 101", issuer: "TryHackMe", year: "2025", image: "/CS101.jpeg" },
  { name: "Web Fundamentals", issuer: "TryHackMe", year: "2025", image: "/WF.jpeg" },
  { name: "Jr Penetration Tester", issuer: "TryHackMe", year: "2025", image: "/Jr PT.jpeg" },
  { name: "CompTIA PenTest+", issuer: "TryHackMe", year: "2025", image: "/Comptia.jpeg" },
  { name: "SOC Level 1", issuer: "TryHackMe", year: "2025", image: "/SOC L1.jpeg" },
  { name: "SOC Level 2", issuer: "TryHackMe", year: "2025", image: "/SOC L2.jpeg" },
  { name: "Security Engineer", issuer: "TryHackMe", year: "2025", image: "/SE.jpeg" },
  { name: "Red Teaming", issuer: "TryHackMe", year: "2025", image: "/RT.jpeg" },
  { name: "Web Application Pentesting", issuer: "TryHackMe", year: "2025", image: "/WAP.jpeg" },
  { name: "Advanced Endpoint Investigation", issuer: "TryHackMe", year: "2025", image: "/Advanced Endpoint.jpeg" },
  { name: "Endpoint Security", issuer: "Cisco Network Academy", year: "2025", image: "/ES.jpeg" },
  { name: "Junior Cybersecurity Analyst Career Path Exam", issuer: "Cisco Network Academy", year: "2025", image: "/Jr Cyber Analyst.jpeg"},
  { name: "Network Defense", issuer: "Cisco Network Academy", year: "2025", image: "ND.jpeg"},
  { name: "Networking Device and Initial Configuration", issuer: "Cisco Network Academy", year: "2025", image: "/Network DC.jpeg"},
  { name: "Networking Basics", issuer: "Cisco Network Academy", year: "2025", image: "/NB.jpeg"},
  { name: "Cyber Threat Management", issuer: "Cisco Network Academy", year: "2025", image: "/CTM.jpeg"},
  { name: "Ethical Hacking", issuer: "Cisco Network Academy", year: "2025", image: "/EH.jpeg"},
  { name: "Junior DevOps Engineer", issuer: "VibeSecurity", year: "2026", image: "/JDE.png"},
  { name: "Junior GRC Analyst", issuer: "VibeSecurity", year: "2026", image: "/JGRC.png"},
  { name: "Junior Security Operations Center (JSOC)", issuer: "VibeSecurity", year: "2026", image: "/JSOC.png"},
  { name: "Domain 1: Security Principles", issuer: "ISC2", year: "2025", image: "/Domain 1.png"},
  { name: "Domain 2: Incident Response, Business Continuity and Disaster Recovery Concepts", issuer: "ISC2", year: "2025", image: "/Domain 2.png"},
  { name: "Domain 3: Access Control Concopts", issuer: "ISC2", year: "2025", image: "/Domain 3.png"},
  { name: "Domain 4: Network Security", issuer: "ISC2", year: "2025", image: "/Domain 4.png"},
  { name: "Domain 5: Security Oporations", issuer: "ISC2", year: "2025", image: "/Domain 5.png"},
  { name: "Mastering Network Security : Defending Against Cyber Threat", issuer: "Udemy", year: "2025", image: "/Master NS.jpeg" },
  { name: "Computer Forensics and Digital Forensics Masterclass PRO+", issuer: "Udemy", year: "2025", image: "/Forensic.jpeg"},
  { name: "Ethical Hacking: Full 60 Hour Red Team & Penetration Testing", issuer: "Udemy", year: "2025", image: "/EH60.jpeg"},
  { name: "DVWA for Ethical Hackers: Master Web App Attacks", issuer: "Udemy", year: "2026", image: "/DVWA.jpeg"},
  { name: "SOC for Blue Teaming", issuer: "Udemy", year: "2026", image: "/SOC Blue.jpeg"},
  { name: "Metasploit from Scratch: Beginner to Professional", issuer: "Udemy", year: "2025", image: "/Metasploit.jpeg"},
  { name: "Java Network Programming - Mastering TCP/IP : CJNP+ JAVA+", issuer: "Udemy", year: "2025", image: "/Java.jpeg"},
  { name: "Wireless Networks & SDR 2025:GSM,SS7,GPRS,LTE & 5G Facts ", issuer: "Udemy", year: "2025", image: "/Wireless.jpeg"},
  { name: "Windows Password Cracking", issuer: "Udemy", year: "2025", image: "/Password.jpeg"},
  { name: "Web Hacking", issuer: "Udemy", year: "2025", image: "/WH.jpeg"},
  { name: "Burp Suite: In Depth Survival Guide", issuer: "Udemy", year: "2025", image: "/Burp.jpeg"},
  { name: "Kali Linux for Ethical Hacking", issuer: "Udemy", year: "2025", image: "/Kalilinux.jpeg"},
  { name: "Cyber Security & Ethical Hacking", issuer: "Udemy", year: "2025", image: "/CSEH.jpeg"},
  { name: "Offensive Security Pathway ", issuer: "Udemy", year: "2025", image: "/OSP.jpeg"},
  { name: "Complete Ethical Hacking Course: Go From Zero to Hero", issuer: "Udemy", year: "2025", image: "/Complete EH.jpeg"},
  { name: "Microsoft Sentinel: Zero to Hero - Complete SIEM Training ", issuer: "Udemy", year: "2025", image: "/Microsoft.jpeg"},
  { name: "Certified Online Fraud Prevention Specialist", issuer: "Hack & Fix", year: "2026", image: "/COFPS.jpeg"},
  { name: "Cyber Security & Ethical Hacking", issuer: "CappricioSec University", year: "2025", image: "/CSE.jpeg"},
  { name: "CAPIE - Certified API Hacking Expert", issuer: "TheXSSRat", year: "2025", image: "/CAPIE.jpeg"},
  { name: "Certified Red Team Operations Management (CRTOM)", issuer: "Red Team Leaders", year: "2025", image: "/CRTOM.jpeg"},
  { name: "Windows API for Red Team Introduction", issuer: "Red Team Leaders", year: "2025", image: "/Windows API.jpeg"},
  { name: "Offensive Development Introduction for Windows v1", issuer: "Red Team Leaders", year: "2025", image: "/Offensive Windows.jpeg"},
  { name: "Networking", issuer: "Infosys Springboard", year: "2025", image: "/Networking.jpeg" },
  { name: "Hands-on Web Penetration Testing with Metasploit 4.x", issuer: "Infosys Springboard", year: "2025", image: "/WPT.jpeg"},
  { name: "Artificial Intelligence", issuer: "Infosys Springboard", year: "2025", image: "/AI.jpeg"},
  { name: "OWASP Top 10: Web Application Security", issuer: "Infosys Springboard", year: "2025", image: "/OWASP.jpeg"},
  { name: "Deloitte - Cyber Job Simulation ", issuer: "Forage", year: "2025", image: "/Deloitte.jpeg"},
  { name: "Mastercard - Cybersecurity Job Simulation", issuer: "Forage", year: "2025", image: "/Mastercard.jpeg"},
  { name: "PwC Switzerland - Power BI Job Simulation", issuer: "Forage", year: "2025", image: "/PWC BI.jpeg"},
  { name: "PwC Switzerland - Cybersecurity Job Simulation", issuer: "Forage", year: "2025", image: "/PWC.jpeg"},
  { name: "Tata Group - Cybersecurity Analyst Job Simulation", issuer: "Forage", year: "2024", image: "/TATA.jpeg"},
  { name: "AIG - Shields Up: Cybersecurity Job Simulation", issuer: "Forage", year: "2024", image: "/AIG.jpeg"},
  { name: "Microsoft Security Copilot", issuer: "Linkedin", year: "2025", image: "/MS.jpeg"},
  { name: "Career Essentials in Generative AI by Microsoft and LinkedIn", issuer: "Linkedin", year: "2025", image: "/MS AI.jpeg" },  
  { name: "Career Essentials in Cybersecurity by Microsoft and Linkedin", issuer: "Linkedin", year: "2025", image: "/MS CS.jpeg"},
  { name: "Trust and Security with Google Cloud", issuer: "Google Cloud", year: "2025", image: "/Trust.jpeg"},
  { name: "Data Analystics and Data Visualization with Power BI", issuer: "Doie India", year: "2024", image: "/Power BI"},
];

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    school: "S.A Engineerinng College",
    degree: "B.E Cyber Security, CGPA: 8.64",
    period: "2023 — Present"
  },
  {
    school: "Ramakrishna Mat Hr Sec School",
    degree: "12th - Computer Science, Percentage: 82.3",
    period: "2021 — 2023"
  }
];
