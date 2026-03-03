import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";
import cudu from "../assets/cudu.jpeg";
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

  carrent,
  jobit,
  tripguide,
  threejs,

} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "3D model",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Design",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
  {
    name: "Photoshop",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
  },
  {
    name: "Illustrator",
    icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
  },
];

const experiences: TExperience[] = [
  {
    title: "Adobe Photoshop",
    companyName: "Graphic Design",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Basics",
    points: [
      "Familiar with image editing and retouching.",
      "Basic knowledge of layers and masks.",
      "Can design simple social media graphics.",
    ],
  },
  {
    title: "Figma",
    companyName: "UI/UX Design",
    icon: figma,
    iconBg: "#E6DEDD",
    date: "Basics",
    points: [
      "Can create simple user interfaces.",
      "Basic understanding of prototyping.",
      "Familiar with design tools and layouts.",
    ],
  },
  {
    title: "React.js",
    companyName: "Web Development",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Basics",
    points: [
      "Basic understanding of component-based development.",
      "Can build simple web pages.",
      "Familiar with modern JavaScript basics.",
    ],
  },
  {
    title: "Blender",
    companyName: "3D Modeling",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Basics",
    points: [
      "Basic knowledge of 3D modeling.",
      "Simple texturing and shading.",
      "Familiar with Blender's core tools.",
    ],
  },
];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
  {
    name: "Educational Platform Template",
    description:
      "A ready-to-use template for online training platforms. Designed to provide a smooth learning experience with a clean, professional interface for any educational field.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://avinarcenter.vercel.app/",
  },
  {
    name: "Premium E-commerce Template",
    description:
      "A luxurious e-commerce model tailored for high-end markets. Offers an elegant shopping interface with premium color schemes to elevate your brand's presence.",
    tags: [
      {
        name: "html ",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://mohmmedenm7.github.io/Friendly/",
  },
  {
    name: "Digital Learning Template",
    description:
      "A multi-purpose digital learning template focus on accessibility and performance. Perfect for delivering educational content efficiently across all connectivity levels.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://mohmmedenm7.github.io/Sud-Hub.github.io/",
  },

  {
    name: "cudu",
    description: "A simple project to test layout and UI/UX ideas.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: cudu,
    sourceCodeLink: "https://github.com/yourusername/cudu",
  },
  {
    name: "Photoshop Design",
    description: "A professional graphic design project created using Adobe Photoshop, showcasing advanced photo manipulation and layout techniques.",
    tags: [
      {
        name: "photoshop",
        color: "blue-text-gradient",
      },
      {
        name: "illustrator",
        color: "orange-text-gradient",
      },
    ],
    image: "/WhatsApp Image 2026-01-19 at 1.57.50 PM.jpeg",
    sourceCodeLink: "/WhatsApp Image 2026-01-19 at 1.57.50 PM.jpeg",
  },
  {
    name: "Illustrator Illustration",
    description: "A professional vector illustration created using Adobe Illustrator, showcasing clean lines and detailed artistic work.",
    tags: [
      {
        name: "illustrator",
        color: "orange-text-gradient",
      },
    ],
    image: "/475675908_1165417605017901_7490700744142970881_n.jpg",
    sourceCodeLink: "/475675908_1165417605017901_7490700744142970881_n.jpg",
  }
];

export { services, technologies, experiences, testimonials, projects };
