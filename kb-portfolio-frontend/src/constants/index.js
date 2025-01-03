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
  cgi,
  carrent,
  jobit,
  tripguide,
  threejs,
  wily,
  freelancer,
  bishops,
  vit,
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
    id: "school",
    title: "School",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Engineer",
    icon: web,
  },
  {
    title: "AWS Cloud Engineer",
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
  {
    name: "docker",
    icon: docker,
  },
];

const schools = [
  {
    title: "Master's in Computer Science",
    company_name: "Bishop's University",
    icon: bishops,
    iconBg: "#ffffff",
    date: "Sep 2019 - Dec 2020",
    points: [
      "During my Master's, I learned advanced algorithms, data structures, and cutting-edge technologies. I love solving complex problems and exploring new aspects of computer science.",
      "I had great discussions with smart professors and fellow students that made learning exciting and fun.",
      "As a researcher, I led cool projects that turned creative ideas into practical solutions with real-world potential.",
      "I enjoyed coding competitions and hackathons, which helped me improve my problem-solving skills and stay sharp under pressure.",
    ],
  },
  {
    title: "Bachelor's in Computer Science",
    company_name: "VIT University",
    icon: vit,
    iconBg: "#ffffff",
    date: "April 2015 - April 2019",
    points: [
      "My Bachelor's was full of growth and excitement. I learned programming languages, data structures, algorithms, and software development methods.",
      "At VIT University, I had diverse experiences, collaborating on projects and engaging in interesting discussions.",
      "I applied what I learned in real-world situations through projects and internships, seeing how computer science impacts our daily lives.",
      "I loved coding competitions, tech conferences, and taking on leadership roles, always eager to learn and embrace new opportunities in technology.",
    ],
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Wily Global",
    icon: wily,
    iconBg: "#ffffff",
    date: "Apr 2021 - Mar 2024",
    points: [
      "Full Stack Web Developer at Wily Global, specializing in AWS serverless stack, TypeScript, React, and Node.js.",
      "Transform ideas into robust and scalable web applications using AWS, TypeScript, React, and Node.js.",
      "Create seamless, user-centric interfaces across devices and platforms, delivering extraordinary experiences.",
      "Thrive in cross-functional teams, crafting innovative solutions aligned with business goals.",
      "Architect efficient RESTful APIs and rock-solid server-side logic for top-notch performance and security.",
      "Maximize data storage, retrieval, and manipulation using cutting-edge database technologies.",
      "Leverage AWS services and serverless architecture to deploy highly scalable web applications.",
      "Ensure code quality through rigorous testing, debugging, and adherence to industry best practices.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "CGI",
    icon: cgi,
    iconBg: "#ededed",
    date: "Jan 2020 - Apr 2021",
    points: [
      "Transformed client visions into exceptional tailored web applications, utilizing AWS serverless technologies.",
      "Designed scalable architectures with AWS Lambda, API Gateway, and DynamoDB.",
      "Developed captivating user interfaces with HTML, CSS, JavaScript, React, and Angular.",
      "Engineered robust server-side functionalities using Node.js, Python, Express.js, and Django.",
      "Integrated third-party services for seamless data flow and optimal performance.",
      "Embraced Agile methodologies to foster collaboration, adaptability, and continuous improvement.",
      "Delivered awe-inspiring web applications, optimizing performance and meeting project timelines and budgets.",
      "Resolved technical challenges through collaborative problem-solving with cross-functional teams.",
      "Stayed at the forefront of technological advancements through continuous learning and industry engagement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Kesav proved me wrong.",
    name: "Sara Lee",
    designation: "Business Owner",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Kesav does.",
    name: "Chris Brown",
    designation: "Co Founder",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Kesav optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "Business Partner",
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

export { services, technologies, schools, experiences, testimonials, projects };
