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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    icon: tesla,
    iconBg: "#383E56",
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
    icon: starbucks,
    iconBg: "#E6DEDD",
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
    icon: shopify,
    iconBg: "#383E56",
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
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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

export { services, technologies, experiences, testimonials, projects };
