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
  django,
  flask,
  python,
  pytorch,
  tensorflow,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ner,
  stockchartanalysis,
  spaceillusorr
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
    title: "AI Engineer",
    icon: web,
  },
  {
    title: "Data Scientist",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  }
];

const technologies: TTechnology[] = [
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    title: "Full Stack Developer",
    companyName: "RRC Networks Oy",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2017 - June 2019",
    points: [
      "Acquired expertise in the React library and participated in its implementation within the development team.",
      "Utilized a NoSQL database to store and retrieve large datasets efficiently.",
      "Created a RESTful API that allowed for seamless integration with other applications.",
      "Shipped 10s of 1000s of lines of code to various development teams after thoroughly testing, debugging, and verifying its functionality.",
    ],
  },
  {
    title: "Data Scientist",
    companyName: "Tekne Capital Management, LLC",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2020 - Mar 2022",
    points: [
      "Developed and implemented machine learning models using Python and TensorFlow to solve complex business problems.",
      "Collaborated with cross-functional teams to design and deploy AI-driven solutions, resulting in improved efficiency and customer satisfaction.",
      "Conducted data analysis and preprocessing to extract meaningful insights from large datasets, enabling informed decision-making.",
      "Integrated AI capabilities into existing systems, optimizing performance and enhancing user experiences.",
    ],
  },
  {
    title: "AI Engineer",
    companyName: "Nokia Corporation",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2022 - July 2023",
    points: [
      "Built recommendation systems using Python and scikit-learn, resulting in a significant increase in customer engagement and sales.",
      "Implemented natural language processing techiques to develop chatbot applications, improving customer support services.",
      "Conducted research and experimented with deep learning architectures, archieving state-of-the-art performance on various tasks.",
      "Collaborated with data scientists and software engineers to develop end-to-end AI solutions for real-world applications.",
    ],
  }
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to do it, but Marko proved me wrong with his AI skills.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Marko does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Marko optimized our business, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "NER",
    description:
      "Financial Statement Auto-tagging project using Named Entity Recognition and other Natural Language Processing techniques.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "PyTorch",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: ner,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Stock Chart",
    description:
      "Automatically scrape stock price data, predict and generate stock charts using predictive analytics techniques ",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: stockchartanalysis,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Space Illusorr",
    description:
      "Metaverse project using Mozilla Hubs 3D scenes and models to look around the virtual world and meet friends.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "pink-text-gradient",
      },
    ],
    image: spaceillusorr,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
