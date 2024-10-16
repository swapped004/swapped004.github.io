/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Swapnil Dey",
  description:
    "I am enthusiastic to learn new things and a fast learner. I have graduated in Computer Science and Engineering from Bangladesh University of Engineering and Technology (BUET) last year. I love to code and try to automate things whenever I can. My interests include Computer Vision, Software Engineering and Computer Security.",
  og: {
    title: "Swapnil Dey Portfolio",
    type: "website",
    url: "https://github.com/swapped004/swapped004.github.io",
  },
};

//Home Page
const greeting = {
  title: "Swapnil Dey",
  logo_name: "Swapnil",
  nickname: "",
  subTitle:
    "I am a CS graduate from BUET and currently working as a software developer in CodeCrafters International Ltd. I love to code and try to automate things whenever I can. My research interests include Computer Vision, Software Engineering and Computer Security.",
  resumeLink:
    "https://drive.google.com/file/d/15OUbPJ_UneoSe_zc2bO3DS9Y0uziZaBC/view?usp=drive_link",
  portfolio_repository: "https://github.com/swapped004/swapped004.github.io",
  githubProfile: "https://github.com/swapped004",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/swapped004",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/swapnil-dey/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:swapnildey1999@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/swapnil.dey.52/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Discord",
    link: "https://discord.com/users/690206211521773715/",
    fontAwesomeIcon: "fa-discord", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#7289da", // Reference https://simpleicons.org/?q=facebook
  },
];

const skills = {
  data: [
    {
      title: "Programming Languages",
      fileName: "LanguagesImg",
      skills: [],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "logos-c",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          imageFile: "cplusplus_logo.png",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C#",
          imageFile: "csharp_logo.png",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
    {
      title: "Database Experience",
      fileName: "DatabaseImg",
      skills: [],
      softwareSkills: [
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Oracle",
          imageFile: "oracle.png",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Development Platforms",
      fileName: "DevelopmentImg",
      skills: [],
      softwareSkills: [
        {
          skillName: "Web",
          imageFile: "web_dev.png",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Game Engines (Unity)",
          fontAwesomeClassname: "simple-icons:unity",
          style: {
            color: "#0089D6",
          },
        },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    {
      title: "Backend Frameworks",
      fileName: "BackendImg",
      skills: [],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "devicon-plain:django",
          style: {
            color: "#339933",
          },
        },
      ],
    },
    {
      title: "UI Frameworks",
      fileName: "FrontendImg",
      skills: [],
      softwareSkills: [
        {
          skillName: "React",
          imageFile: "reactjs_logo.png",
          style: {
            backgroundColor: "transparent",
            color: "#FF7C00",
          },
        },
        {
          skillName: "JavaFX",
          imageFile: "javafx_logo.png",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "OpenGL",
          imageFile: "opengl_logo.png",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
    {
      title: "Version Control Systems",
      fileName: "VersionControlImg",
      skills: [],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "svn",
          imageFile: "svn_logo.jpg",
          style: {
            backgroundColor: "transparent",
            color: "#FF7C00",
          },
        },
      ],
    },
    {
      title: "Security & Forensics tools",
      fileName: "ForensicsImg",
      skills: [],
      softwareSkills: [
        {
          skillName: "Wireshark",
          fontAwesomeClassname: "simple-icons:wireshark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Autopsy",
          imageFile: "autopsy_logo.png",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Ghidra",
          imageFile: "ghidra_logo.png",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Mischellaneous",
      fileName: "MiscImg",
      skills: [],
      softwareSkills: [
        {
          skillName: "Linux",
          imageFile: "linux_logo.png",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Bash",
          imageFile: "bash_logo.png",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Assembly",
          imageFile: "assembly_logo.png",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "css3",
          imageFile: "css3_logo.png",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "LaTeX",
          fontAwesomeClassname: "simple-icons:latex",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/lavender_vampire/",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/swaped",
    },
  ],
};

const degrees = {
  degrees: [
    {
      subtitle: "Bangladesh University of Engineering and Technology",
      title: "Bachelor of Science in Computer Science and Engineering",
      logo_path: "buet_logo.png",
      alt_name: "BUET",
      duration: "March, 2018 - May, 2023",
      grade: "3.81/4.00",
      descriptions: [
        "⚡ I have taken basic computer science courses like DSA, DBMS, OS, Compilers, Network, Security, ML, AI etc. I also took courses like Graph Theory, Bioinformatics and Simulation & Modeling.",
        "⚡ My favorite courses include Machine Learning, Computer Security, Graph Theory and DSA.",
        "⚡ My undergraduate thesis was on 'Effect of Smile on Facial Landmark based Face Recognition' which was published in IEEE SMC 2023.",
        "⚡ I earned my position in the University Dean's List for 3 consecutive academic years.",
        "⚡ Apart from my academics, I also participated in various Capture The Flag contests and GameJams.",
      ],
      website_link: "http://buet.ac.bd",
      location: "",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Work Experience",
  subtitle: "",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Developer",
          subtitle: "CodeCrafters International Ltd.",
          website_link: "https://codecraftersintl.com/",
          logo_path: "CodeCrafters_logo.png",
          alt_name: "CCI",
          duration: "July 2023 - Present",
          location: "Dhaka, Bangladesh",
          descriptions: [
            "⚡ Code Maintenance: Added new features and debugged errors on more than 2 million lines of pure C++ based codebase.",
            "⚡ Significant contributions in making data imports interruptable that are used to import large data in bulk from clients",
            "⚡ Fixed critical bugs in reports with runtime configuration, bundled and uploaded user data import definition files as a part of diagnostic upload.",
            "⚡ Created a policy management system that is being used internally to manage policies.",
          ],
          color: "#000000",
        },
      ],
    },
  ],
};

//research experience page
const research_exps = {
  research_exps: [
    {
      subtitle: "University of Illinois at Urbana-Champaign",
      title:
        "Research Intern in Software Engineering at UIUC+ summer reseach program",
      logo_path: "uiuc_logo.png",
      alt_name: "UIUC",
      duration: "May, 2024 - August, 2024",
      descriptions: [
        "⚡ Under the supervison of Prof. Darko Marinov and Asst. Prof. Reyhaneh Jabbarvand, my research task focused on the translation of C code to Rust code and automated test case generation to smooth out benchmarking process.",
        "⚡ Explored existing research on C to Rust code translation methods and contributed in writing scripts to benchmark the performance of the translated code.",
        "⚡ Contributed to generate automated test cases using KLEE.",
        "⚡ Added scripts to automate test case generation using Radamsa Fuzzer.",
        "⚡ Wrote manual testcases to increase the code coverage of CodeNET dataset.",
      ],
      website_link: "https://illinois.edu/",
      location: "",
    },
    {
      subtitle: "Bangladesh University of Engineering and Technology",
      title:
        "Final year thesis work: Effect of Smile on Landmark based Face Recognition",
      logo_path: "buet_logo.png",
      alt_name: "BUET",
      duration: "June, 2022 - May, 2023",
      descriptions: [
        "⚡ Under the supervision of Dr. A.K.M. Ashikur Rahman, we investigated the effect of smile on face recognition accuracy during my undergraduate thesis.",
        "⚡ We proposed a handful of novel features to capture the effect of smile on faces.",
        "⚡ With the new feature set, we applied several machine learning algorithms on the data set that includes a comprehensive set of both smiling and neutral facial images of people with different gender, ethnicity and age groups.",
        "⚡ Our experimental result suggests that smiling faces produce high discriminating power that can be used effectively by the machine-learning algorithms to improve their accuracy and fairness.",
        '⚡ This was published in IEEE SMC 2023 titled "Effect of Smile on Facial Landmark based Face Recognition".',
      ],
      website_link: "http://buet.ac.bd",
      location: "",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "These are some of the projects that I have worked on. Most of them are academic projects and some of them are personal.",
};

const publicationsHeader = {
  header_title: "Publications",
  title: "Conference Papers",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "Effect of Smile on Landmark based Face Recognition",
      abstract:
        "Smile reveals distinctive facial features that makes a face more recognizable. However, little is known about the impact of smile on face recognition accuracy, especially in the context of automated face recognition systems using traditional machine learning algorithms. This is an important topic to study because understanding the influence of smile on face recognition could contribute to improve the performance of various applications that use face recognition underneath. In this paper, we propose a handful of novel features to capture the effect of smile on faces. With the new feature set, we then apply several machine learning algorithms on the data set that includes a comprehensive set of both smiling and neutral facial images of people with different gender, ethnicity and age groups. Our experimental result suggests that smiling faces produce high discriminating power that can be used effectively by the machine-learning algorithms to improve their accuracy and fairness.",
      name: "Effect of Smile on Landmark based Face Recognition",
      publishedDate: "29 January, 2024",
      conferenceDate: "01-04 October, 2023",
      location: "Honolulu, Oahu, HI, USA",
      description:
        "Published in 2023 IEEE International Conference on Systems, Man, and Cybernetics (SMC). I was the first author of the paper. I also had the opportunity to present the paper in the conference.",
      coAuthors: [
        "Md. Musharaf Hossain",
        "Asif Mustafa Hassan",
        "Ashikur Rahman",
        "Tamima Tarin",
      ],
      url: "https://ieeexplore.ieee.org/document/10394510",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description:
      "Reach out to me on LinkedIn, discord or facebook or send me an email. I will try to get back to you as soon as possible.",
  },
  addressSection: {
    title: "Address",
    subtitle: "21 Shukrabad, Dhaka 1205, Bangladesh",
    locality: "Dhaka",
    country: "Bangladesh",
    postalCode: "1205",
    streetAddress: "21 Shukrabad",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/K6PSUwjjuk32Hqkm6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  research_exps,
};
