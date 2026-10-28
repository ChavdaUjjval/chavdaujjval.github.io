import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

// Source: public LinkedIn profile https://www.linkedin.com/in/ujjvalchavda/
// Leave a field "" when LinkedIn doesn't show it; the page hides empty dates.
export const DATA = {
  name: "Ujjval Chavda",
  initials: "UC",
  url: "https://chavdaujjval.github.io",
  location: "Calgary",
  locationLink: "https://www.google.com/maps/place/Calgary,+AB",
  description: "Application Specialist at CAD MicroSolutions Inc. in Calgary.",
  summary:
    "Certified SOLIDWORKS Expert (CSWE) and Application Specialist at CAD MicroSolutions Inc. I studied Mechanical Engineering at GSFC University and hold SOLIDWORKS and 3DEXPERIENCE certifications from Dassault Systèmes.",
  avatarUrl: "",
  skills: [
    { name: "SOLIDWORKS" },
    { name: "3DEXPERIENCE" },
    { name: "CSWE" },
  ] as { name: string; icon?: React.ComponentType<{ className?: string }> }[],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ChavdaUjjval",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ujjvalchavda/",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "CAD MicroSolutions Inc.",
      href: "https://cadmicro.com",
      title: "Application Specialist",
      logoUrl: "",
      start: "Apr 2023",
      end: "Present",
      description: "",
    },
    {
      company: "Engineering Technique",
      href: "",
      title: "Application Engineer",
      logoUrl: "",
      start: "",
      end: "",
      description: "Vadodara, India",
    },
  ],
  education: [
    {
      school: "GSFC University",
      href: "https://www.gsfcuniversity.ac.in",
      degree: "Bachelor's degree, Mechanical Engineering",
      logoUrl: "",
      start: "",
      end: "",
    },
  ],
} as const;
