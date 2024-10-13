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
  nickname: "swapped004",
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
    link: "https://www.facebook.com/swapnil.dey.52/",
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
        "⚡ I have taken basic computer science courses like DSA, DBMS, OS, Compilers, Network, Security, ML, AI etc.",
        "⚡ My favorite courses include Machine Learning, Computer Security and Data Structures and Algorithms.",
        "⚡ My undergraduate thesis was on 'Effect of Smile on Facial Landmark based Face Recognition' which was published in IEEE SMC 2023.",
        "⚡ I earned my position in the University Dean's List for 3 consecutive years.",
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
  title: "Experience",
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
          duration: "July 2023 - Present",
          location: "Dhaka, Bangladesh",
          descriptions: [
            "⚡ Contributing in the pure C++ codebase made of 2 million LOC",
            "⚡ Code maintenance and bug fixes",
            "⚡ Significant contributions in making data imports interruptable that are used to import large data in bulk from clients",
            "⚡ Created a policy management system that is being used internally to manage policies.",
          ],
          color: "#000000",
        },
      ],
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
  title: "Publications",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "Effect of Smile on Landmark based Face Recognition",
      name: "Effect of Smile on Landmark based Face Recognition",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in IEEE SMC 2023.",
      url: "https://ieeexplore.ieee.org/document/10394510",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "Reach out to me on LinkedIn, discord or facebook or send me an email. I will try to get back to you as soon as possible.",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    //   "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    // link: "https://blogs.ashutoshhathidara.com/",
    // avatar_image_path: "blogs_image.svg",
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
};
