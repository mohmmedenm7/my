import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
];

const experiences: TExperience[] = [
  {
    title: "Photoshop",
    companyName: "Images",
    icon: starbucks,
    iconBg: "#383E56",
    date: " 2020 ",
    points: [
      "I learned Photoshop a long time ago and learned all the tools .",
      "Design a number of designs with a team .",
      "I know the use of most of the tools in Photoshop.",
      "I use it a lot to edit images or create images for the designs of the sites that I work on.",
    ],
  },
  {
    title: "Figma ",
    companyName: "UI & UX",
    icon: figma,
    iconBg: "#E6DEDD",
    date: " 2021 ",
    points: [
      "I learned Figma a while ago and learned how to build great user interfaces through it.",
      "I worked on a number of projects using Figma .",
      
      "I use it a lot to build interfaces for sites of all sizes (desktop - mobile - tablet).",
    ],
  },
  {
    title: "React,js ",
    companyName: "Node.js Developer",
    icon: reactjs,
    iconBg: "#383E56",
    date: " 2023 ",
    points: [
      "I learned React to ensure the design of interactive and stable websites .",
      "I use React because it is the most powerful Fremore in designing the user interfaces and interacting with the user in real time.",
      "Designed a number of responsive and powerful websites .",
      " I can partner in code review and provide honest constructive feedback to other developers.",
    ],
  },
  {
    title: "blender ",
    companyName: "3D",
    icon: meta,
    iconBg: "#E6DEDD",
    date: " 2023",
    points: [
      "I learned blinder to be able to deal with the 3D model.",
      "I combine 3D cubes in most designs so that I can get amazing shapes and reach good designs.",
      "I put some animation to my work to be more clear of ideas.",
     
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
    name: "AVinar",
    description:
      "An online training platform designed to provide learners with the necessary skills across various fields, featuring a clean and user-friendly interface that anyone can navigate with ease.",
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
    sourceCodeLink: "https://github.com/mohmmedenm7/AVinarcenter",
  },
  {
    name: " Friendly",
    description:
      "An e-commerce platform tailored for the upper-class market, offering a clean and elegant interface with luxurious color schemes for a refined shopping experience.",
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
    sourceCodeLink: "https://github.com/mohmmedenm7/Friendly",
  },
  {
    name: "Sud-Hub",
    description:
      "A platform focused on delivering education in conflict zones. It aims to offer digital learning through summarized content that remains accessible even with limited internet connectivity.",
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
    sourceCodeLink: "https://github.com/mohmmedenm7/Sud-Hub.github.io",
  },
];

export { services, technologies, experiences, testimonials, projects };
