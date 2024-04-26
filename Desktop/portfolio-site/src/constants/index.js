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
  bitwise,
  bay,
  es,
  weather,
  pokemon,
  league,
  cafecord,
  threejs,
  sjvccc,
  javi,
  casey

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
];

const experiences = [
  {
    title: "Web Developer Internship",
    company_name: "Bay Valley Tech",
    icon: bay,
    iconBg: "#383E56",
    date: "December 2023 - Present",
    points: [
      "Collaborated with interns on React projects, utilizing various libraries and dependencies",
      "Managed projects using Kanban methodology for effective project management.",
      "Developed a real-time chat application's backend using Firebase database",
    ],
  },
  {
    title: "Web Developer Apprentice ",
    company_name: "Bitwise Industries",
    icon: bitwise,
    iconBg: "#E6DEDD",
    date: "March 2022 - May 2023",
    points: [
      "Learned and applied the fundamentals of React, a popular JavaScript library for building user interfaces, including its component-based architecture and virtual DOM",
      "Collaborated with experienced web developers to build web applications using React, following best practices and design patterns",
      "Developed code using modern front-end technologies such as HTML5, CSS3, and JavaScript, while ensuring cross-browser compatibility and responsiveness",
      "Worked on projects that involve API integrations, state management, and front-end performance optimization, gaining hands-on experience in developing scalable and maintainable web applications",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Donnie is an excellent worker, he puts in maximum effort, and he is a fast learner. When I first met him he was new to web and software development, but he picked up the skills necessary to succeed in this field quickly. Donnie also is great at communicating, and he wasn't afraid to ask for assistance whenever he needed it. I enjoy working with Donnie and he would be a great fit for any company and he's a great person to work with.",
    name: "Javier Guerra",
    designation: "Full Stack Developer",
    company: "NPower",
    image: javi,
  },
  {
    testimonial:
      "It was a great experience collaborating with Donnie, who quickly became a lifelong friend. He has a remarkable ability to quickly grasp new concepts, pays excellent attention to detail, and is fun to work alongside. I am excited to see his future accomplishments.",
    name: "Casey Reyes",
    designation: "Software Developer",
    company: "",
    image: casey,
  },
];

const projects = [
  {
    name: "Cafecord",
    description:
      "Web-based platform that allows users to sign up and get access to different channels where they chat with other users. User can create new channels and edit their profile.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "react bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: cafecord,
    source_code_link: "https://github.com/gildonnie/Cafecord",
    site_code_link: "https://cafecord-660a6.web.app/",
  },
  {
    name: "Explore Space",
    description:
      "Web application that uses NASAs API and enables users to access different endpoints. Picture of the day, mars rover photos and Near Earth Object. ",
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
        name: "styled components",
        color: "pink-text-gradient",
      },
    ],
    image: es,
    source_code_link: "https://github.com/gildonnie/capstone-nasa-app",
    site_code_link: "https://capstone-nasa-app.herokuapp.com/",
  },
  {
    name: "Tryndamere",
    description:
      "Web application that accesses league of legends(riot) API. Allows user to look at data match up to use if they are playing as tryndamere",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: league,
    source_code_link: "https://github.com/gildonnie/lol-app",
    site_code_link: "https://tryndamere.netlify.app/",
  },
  {
    name: "Pokemon Adopt",
    description:
      "Pokemon application that allows the user to search for pokemon and add to the table once they are adopted they can be removed from it. Accesses pokeapi",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fetch",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: pokemon,
    source_code_link: "https://github.com/gildonnie/pokemon_adopt",
    site_code_link: "https://gildonnie.github.io/pokemon_adopt/",
  },
  {
    name: "Weather Search",
    description:
      "Web application that takes in a location and gives an 8 day weather forecast. Background changes accordingly with the forecast. Uses openweather API and geolocation API",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/gildonnie/weather-app",
    site_code_link: "https://gildonnie.github.io/weather-app/",
  },
  {
    name: "Weather Search",
    description:
      "Wordpress website for artist in the central valley that can show their work. They can signup and create a profile where they can plug their work.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: sjvccc,
    source_code_link: "https://github.com/gildonnie/ACTA-SJVCCC",
    site_code_link: "https://github.com/gildonnie/ACTA-SJVCCC",
  },
];

export { services, technologies, experiences, testimonials, projects };