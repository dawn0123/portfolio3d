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
  web,
  typescript,
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
  starbucks,
  tesla,
  shopify,
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
    title: "AI Software Developer",
    companyName: "IWROBOT X SoftWare co.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2020 - April 2024",
    points: [
      "Led a team of data scientists and engineers in developing predictive analytics ML models to analyze market data and investor behavior in order to forecast the performance of financial assets.",
      "Developed an LLM-powered NLP financial statement automation system by conducting AI model training for sentiment analysis and text classification leading to a 20% increase in consumer’s satisfaction",
      "Implemented a Retrieval-Augmented Generation (RAG) system to automate the extraction and analysis of financial statements, enhancing accuracy and efficiency by leveraging advanced NLP techniques",
      "Architect and optimize NLP pipelines using Python, TensorFlow, PyTorch, and Hugging Face Transformers",
    ],
  },
  {
    title: "AI Software Developer",
    companyName: "Freelancer.com",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "February 2017 - January 2019",
    points: [
      "Used NLP to develop LLM-powered chatbots by training them on large medical knowledge databases to help patients find information about symptoms, conditions, medications, and treatment options",
      "Used GenAI to develop an NLP Clinical Documentation Assistance system to help healthcare professionals generate accurate and comprehensive clinical notes, reducing the time and effort required for documentation",
      "Developed and optimized speech recognition and text-to-speech components for a voice-enabled virtual assistant, achieving a 90% accuracy rate and low latency",
      "Developed and improved computer vision algorithms for various applications, including gesture recognition, 3D reconstruction, and video surveillance",
    ],
  },
  {
    title: "AI Software Engineer",
    companyName: "Bidu",
    icon: shopify,
    iconBg: "#383E56",
    date: "October 2015 - February 2017",
    points: [
      "Built a ML healthcare monitoring system to identify unusual patterns in patient vital signs to detect early signs of medical conditions and architected scalable AI models supporting AI-based applications, handling over 100 million requests per day, resulting in improved system performance",
      "Developed and optimized natural language processing models for a conversational AI assistant, deployed on AWS Lambda and Amazon Lex, delivering a 30% increase in user engagement",
      "Implemented and fine-tuned GANs and VAEs, achieving significant improvements in model performance and output quality",
      "Developed intuitive user interfaces for AI-powered applications using React and Angular, resulting in a 40% increase in user engagement and satisfaction",
    ],
  }
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to do it, but Nichole proved me wrong with his AI skills.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Nichole does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Nichole optimized our business, our traffic increased by 50%. We can't thank them enough!",
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
