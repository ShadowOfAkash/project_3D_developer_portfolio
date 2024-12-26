import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,     
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  drivezy,
  finnoto,
  carrent,
  jobit,
  tripguide,
  threejs,
  bizryt,
  school,
  collage,
  mnnitlogo,
  lpslogo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "UI/UX Designer",
    icon: web,
  },
  {
    title: "UI Developer",
    icon: mobile,
  },
  {
    title: "2D Animations Creator",
    icon: backend,
  },
  {
    title: "Video Editing",
    icon: creator,
  },
];
const skillsnames = [
  {
    name: "UI/UX Designs",
  },
  {
    name: "UI Development",
  },
  {
    name: "2D Animations",
  },
  {
    name: "Video Editing",
  },
  {
    name: "Youtube Video Craetion",
  },
  {
    name: "Marketing Reels",
  },
  {
    name: "Banner",
  },
  {
    name: "Posters",
  },
  {
    name: "Prototyping",
  },
  {
    name: "Wireframe",
  },
  {
    name: "User Research",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "UI/UX Designer",
    company_name: "Drivezy India Travels Pvt Ltd",
    icon: drivezy,
    iconBg: "#ffeaea",
    date: "June 2018 - December 2021",
    points: [
      "Design Drivezy PWA(Progressive Web App) from Scratch.",
      "Designed and developed websites with a focus on user experience and visual appeal using Figma and Adobe CC.",
      "Communicated design ideas to clients and stakeholders using user flows, process flows, site maps and wireframes.",
      "Utilized photography and video editing skills to create engaging digital content.",
    ],
  },
  {
    title: " Senior UI/UX Designer",
    company_name: "Bizryt Solutions Pvt Ltd",
    icon: bizryt,
    iconBg: "#ffffff",
    date: "December 2021 - August 2022",
    points: [
      "Design Bizryt Website and PWA(Progressive Web App) from Scratch.",
      "Lead and manage a team of graphic designers, providing direction and guidance on Bizryt design projects.",
      "Collaborate with Customer Management staff to take customers feedback for product feature’s UX improvement.",
      "Created wireframes, prototypes, and design mockups to effectively communicate design concepts.",
      "Collaborate with Bizryt founding team for adding new features in product.",
      "Communicated design ideas to founders and stakeholders using user flows, process flows and wireframes.",
    ],
  },
  {
    title: "Senior UI/UX Designer",
    company_name: "Finnoto Solutions Pvt Ltd",
    icon: finnoto,
    iconBg: "#ffffff",
    date: "September 2022 - Present",
    points: [
      "Designed and optimized user interfaces for Finnoto's core fintech products, ensuring seamless user experience for accounts payables and receivables management.",
      "Led end-to-end design for modules like AP , AR, GSTR 2B reconciliation, and Accounts Receivable Collection(ARC) Portal.",
      "Revamped the company’s website to improve navigation, visual appeal, and responsiveness and designed Finnoto’s App and PWA for better customer engagement.",
      "Led and managed a team of UI/UX designers, providing strategic direction and guidance in the creation and implementation of the Finnoto Design System.",
    ],
  },
];

const testimonials = [
  {
    eduationalclass:
      "10th",
    name: "Lucknow Public School",
    icon: school,
    company: "Madhoganj, Hardoi",
    image: lpslogo,
  },
  {
    eduationalclass:
      "12th",
    name: "Lucknow Public School",
    icon: school,
    company: "Madhoganj, Hardoi",
    image: lpslogo,
  },
  {
    eduationalclass:
      "B.Tech",
    name: "MNNIT Allahabad",
    icon: collage,
    company: "Prayagraj",
    image: mnnitlogo,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects, skillsnames };
