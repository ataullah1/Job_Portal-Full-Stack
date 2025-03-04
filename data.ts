export interface Job {
  id: number;
  title: string;
  image: string;
  salary: string;
  location: string;
  jobtype: string;
  description: string;
  responsibilities: string;
  requiredSkills: string[];
  experience: string;
  postedDate: string;
  company: string;
}

const JobData: Job[] = [
  {
    id: 1,
    title: "Software Engineer",
    image: "/images/c1.png",
    salary: "60k - 80k BDT",
    location: "Dhaka, Bangladesh",
    jobtype: "full time",
    description:
      "We are seeking a talented Software Engineer to join our dynamic team. You will be responsible for developing high-quality software solutions, collaborating with cross-functional teams, and contributing to the full software development lifecycle.",
    responsibilities:
      "Design and implement high-quality code\nParticipate in code reviews and maintain coding standards\nCollaborate with team members on software architecture and design\nTroubleshoot and debug applications\nWrite technical documentation\nStay updated with emerging software development technologies",
    requiredSkills: [
      "React JS",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Git",
      "REST APIs",
    ],
    experience: "2-4 years",
    postedDate: "2024-02-15",
    company: "TechCorp Bangladesh",
  },
  {
    id: 2,
    title: "DevOps Engineer",
    image: "/images/c2.png",
    salary: "70k - 90k BDT",
    location: "Chittagong, Bangladesh",
    jobtype: "full time",
    description:
      "Looking for an experienced DevOps Engineer to help streamline our development and deployment processes. The ideal candidate will have strong experience with cloud platforms and automation tools.",
    responsibilities:
      "Implement and maintain CI/CD pipelines\nManage cloud infrastructure and services\nAutomate deployment processes\nMonitor system performance and reliability\nEnsure security best practices\nCollaborate with development teams",
    requiredSkills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Linux",
      "Python",
    ],
    experience: "3-5 years",
    postedDate: "2024-02-14",
    company: "CloudTech Solutions",
  },
  {
    id: 3,
    title: "Frontend Developer",
    image: "/images/c3.png",
    salary: "50k - 70k BDT",
    location: "Sylhet, Bangladesh",
    jobtype: "full time",
    description:
      "Join our creative team as a Frontend Developer. We're looking for someone passionate about creating beautiful, responsive user interfaces and delivering exceptional user experiences.",
    responsibilities:
      "Develop responsive web applications\nOptimize applications for maximum performance\nCollaborate with UI/UX designers\nImplement modern frontend frameworks\nEnsure cross-browser compatibility\nWrite clean, maintainable code",
    requiredSkills: [
      "React JS",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "Redux",
    ],
    experience: "1-3 years",
    postedDate: "2024-02-13",
    company: "WebCraft BD",
  },
  {
    id: 4,
    title: "Backend Developer",
    image: "/images/c4.png",
    salary: "55k - 75k BDT",
    location: "Khulna, Bangladesh",
    jobtype: "Part time",
    description:
      "We are hiring a Backend Developer to build robust and scalable server-side applications. The ideal candidate should have strong problem-solving skills and experience with modern backend technologies.",
    responsibilities:
      "Design and implement backend services\nOptimize database performance\nDevelop RESTful APIs\nImplement security measures\nHandle server deployment and maintenance\nCollaborate with frontend developers",
    requiredSkills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
      "Redis",
      "GraphQL",
    ],
    experience: "2-4 years",
    postedDate: "2024-02-12",
    company: "ServerPro BD",
  },
  {
    id: 5,
    title: "Full Stack Developer",
    image: "/images/c5.png",
    salary: "80k - 100k BDT",
    location: "Dhaka, Bangladesh",
    jobtype: "full time",
    description:
      "Seeking an experienced Full Stack Developer to work on end-to-end application development. You will be responsible for both frontend and backend development of our web applications.",
    responsibilities:
      "Develop full-stack web applications\nDesign and implement database schemas\nBuild reusable code components\nOptimize applications for performance\nImplement security and data protection measures\nMentor junior developers",
    requiredSkills: [
      "React JS",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "AWS",
      "Docker",
    ],
    experience: "4-6 years",
    postedDate: "2024-02-11",
    company: "TechFusion BD",
  },
  {
    id: 6,
    title: "UI/UX Designer",
    image: "/images/c6.png",
    salary: "45k - 65k BDT",
    location: "Rajshahi, Bangladesh",
    jobtype: "Freelance",
    description:
      "Join our design team to create intuitive and engaging user interfaces. We're looking for a UI/UX Designer who can combine creativity with user-centered design principles.",
    responsibilities:
      "Create user-centered designs\nDevelop UI mockups and prototypes\nConduct user research and testing\nCreate wireframes and user flows\nCollaborate with developers\nMaintain design system",
    requiredSkills: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Prototyping",
      "User Research",
      "HTML/CSS",
    ],
    experience: "2-4 years",
    postedDate: "2024-02-10",
    company: "DesignHub BD",
  },
];

export default JobData;
