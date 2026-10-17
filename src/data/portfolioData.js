export const PERSONAL_INFO = {
  name: "Niranjana",
  brand: "NR",
  role: "Front-End Developer",
  careerLevel: "Fresher",
  degree: "B.Com (Computer Applications)",
  college: "AVP College of Arts and Science",
  graduation: "2026",
  percentage: "82%",
  location: "Tirupur, Tamil Nadu, India",
  email: "rniranjanaavp@gmail.com",
  github: "https://github.com/niranjanadeveloper",
  linkedin: "https://linkedin.com/in/rniranjana06",
  resumePath: "/resume.pdf",
  heroLabel: "FRONT-END DEVELOPER",
  heroHeading: "Hi, I'm Niranjana.",
  supportingHeading: "I Build Interactive Web Experiences.",
  heroDescription:
    "I'm a B.Com (Computer Applications) graduate passionate about front-end development, responsive design, and creating engaging web applications using modern web technologies.",
  aboutTitle: "A Little About Me",
  aboutText:
    "I'm Niranjana, a recent B.Com (Computer Applications) graduate from AVP College of Arts and Science, Tirupur. I enjoy building responsive and interactive web interfaces and applying my front-end development skills through practical projects. I'm seeking an entry-level Front-End Developer opportunity where I can contribute to real projects and continue growing as a developer.",
  connectDescription:
    "I'm looking for entry-level Front-End Developer opportunities. Feel free to connect with me regarding suitable opportunities and professional collaboration."
};

export const EDUCATION_DATA = {
  degree: "Bachelor of Commerce (Computer Applications)",
  institution: "AVP College of Arts and Science",
  period: "2023–2026",
  percentage: "82%",
  location: "Tirupur, India"
};

export const SKILL_GROUPS = [
  {
    category: "Core Technologies",
    iconName: "Code2",
    skills: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    category: "Frameworks & Styling",
    iconName: "Palette",
    skills: ["React.js", "Bootstrap", "Tailwind CSS"]
  },
  {
    category: "Front-End Concepts",
    iconName: "Cpu",
    skills: [
      "Responsive Web Design",
      "CSS Grid",
      "Flexbox",
      "Media Queries",
      "DOM Manipulation",
      "Event Handling",
      "ES6 Features",
      "Local Storage"
    ]
  },
  {
    category: "React & Data",
    iconName: "Boxes",
    skills: [
      "Components",
      "Props",
      "State",
      "useState",
      "useEffect",
      "React Router",
      "REST APIs",
      "Fetch API",
      "JSON"
    ]
  },
  {
    category: "Tools & Deployment",
    iconName: "Wrench",
    skills: ["Git", "GitHub", "Visual Studio Code", "Vercel", "Netlify"]
  }
];

export const PROJECTS_DATA = [
  {
    id: "cloudify",
    title: "Cloudify — Weather App",
    isPrimary: true,
    status: "Completed",
    description:
      "A responsive weather application that retrieves real-time weather information from OpenWeatherMap API, featuring city search, 5-day forecasts, hourly intervals, and temperature unit switching.",
    technologies: ["React.js", "Vite", "OpenWeatherMap API", "CSS3", "Local Storage"],
    githubUrl: "https://github.com/niranjanadeveloper/cloudify-weather-app",
    liveUrl: null,
    previewType: "weather",
    highlights: [
      "Live worldwide city search with Enter key shortcut",
      "5-day forecast cards & 24-hour horizontal scrolling view",
      "°C / °F temperature toggle with localStorage persistence",
      "Responsive glassmorphism dashboard interface"
    ]
  },
  {
    id: "spotify-clone",
    title: "Spotify Clone",
    isPrimary: true,
    status: "Completed",
    description:
      "A music-streaming-inspired web application featuring a custom interface and interactive playlist management with multi-route navigation and library browsing.",
    technologies: ["React.js", "React Router", "CSS3", "JavaScript"],
    githubUrl: null,
    liveUrl: null,
    previewType: "music",
    highlights: [
      "Interactive playlist cards and song tracklistings",
      "Sidebar navigation: Home, Search, Library, and Profile",
      "Custom dark-mode music player aesthetic with green accents",
      "Structured component architecture with dynamic route parameters"
    ]
  },
  {
    id: "instagram-clone",
    title: "Instagram Clone",
    isPrimary: true,
    status: "Completed",
    description:
      "A social-media-inspired React application featuring reusable components and an interactive interface displaying stories, feed posts, and user suggestions.",
    technologies: ["React.js", "JavaScript", "CSS3", "Bootstrap"],
    githubUrl: null,
    liveUrl: null,
    previewType: "social",
    highlights: [
      "Story circles with gradient active borders",
      "Dynamic social feed with post interactions & comments layout",
      "Clean sidebar navigation with icons & logo branding",
      "User suggestion panels and responsive feed layout"
    ]
  },
  {
    id: "foodholic",
    title: "Foodholic — Food Website",
    isPrimary: true,
    status: "Completed",
    description:
      "A responsive food website showcasing authentic snacks and regional delicacies with live interactive cart and wishlist count counters built using vanilla JavaScript DOM manipulation.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: null,
    liveUrl: null,
    previewType: "food",
    highlights: [
      "Menu showcase with popular items (Madras Mixture, Indian Sweets)",
      "Interactive Add to Cart & Wishlist counters updated via DOM",
      "Search bar & category navigation structure",
      "Responsive layout for mobile and desktop browsing"
    ]
  },
  {
    id: "todo-list",
    title: "To-Do List Application",
    isPrimary: false,
    status: "Completed",
    description:
      "Built a responsive task management application with CRUD functionality, dynamic table insertion, task completion, and interactive DOM manipulation.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: null,
    liveUrl: null,
    previewType: "todo",
    highlights: [
      "Add, view, and delete task items instantaneously",
      "Interactive form validation with input reset handling",
      "Clean tabular records & task management controls"
    ]
  },
  {
    id: "registration-form",
    title: "Registration Form",
    isPrimary: false,
    status: "Completed",
    description:
      "Developed a responsive registration form with input validation and interactive form handling using JavaScript.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: null,
    liveUrl: null,
    previewType: "form",
    highlights: [
      "Field validation across text, email, select dropdowns, and file upload",
      "Clean centered card UI with reset and submit states",
      "Accessible form controls and responsive layout"
    ]
  },
  {
    id: "portfolio-website",
    title: "My Developer Portfolio",
    isPrimary: false,
    status: "Current Project",
    description:
      "A personal developer portfolio showcasing my technical skills, projects, education, and contact information through a responsive interface.",
    technologies: ["React.js", "Vite", "JavaScript", "Tailwind CSS"],
    githubUrl: null,
    liveUrl: null,
    previewType: "portfolio",
    highlights: [
      "Dark editorial design with custom CSS glassmorphism & neon accents",
      "Interactive project previews inspired by each application's real UI",
      "Zero fabricated metrics, 100% verified fresher credentials",
      "Fast, responsive build with smooth scrolling & accessible navigation"
    ]
  }
];
