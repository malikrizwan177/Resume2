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
    resume,
    python,
    havelione,
    project3,
    react,
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
      title: "Frontend Web Developer",
      icon: web,
    },
    {
      title: "Wordpress Developer (Elementor)",
      icon: mobile,
    },
    {
      title: "Full-Stack Developer (Learning)",
      icon: backend,
    },
    {
      title: "React Native/Flutter Developer (Learning)",
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
    /*{
      name: "TypeScript",
      icon: typescript,
    },*/
    {
      name: "React JS",
      icon: reactjs,
    },
    /*{
      name: "Redux Toolkit",
      icon: redux,
    },*/
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
      name: "Python",
      icon: python,
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
    /*{
      name: "docker",
      icon: docker,
    },*/
  ];
  
  const experiences = [
    {
      title: "Frontend React.js Intern",
      company_name: "Poiesis Technologies, Bahria Town, Islamabad, Pakistan",
      icon: react,
      iconBg: "#383E56",
      date: "JULY 2023 - OCTOBER 2023",
      points: [
        "Review, discuss and plan the required framework and libraries with the product manager for website development.",
        "Use of Figma and the website design provided in it by the UI/UX team.",
        "Use of HTML5, Custom CSS, React, React-Bootstrap, npm packages for the development.",
        "Continuous upload to GitHub to keep the track and record of development.",
      ],
    },
    {
      title: "WordPress Frontend Developer",
      company_name: "Hotel Haveli One",
      icon: react,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Feb 2024",
      points: [
        "Setting up the domain for the website on hostinger.",
        "Use of Elementor Plugin to produce classic and captivating landing and route pages.",
        "Ensuring cross-platform and device compatibility at it's fullest.",
        "By using the best SEO practices possible, the website got into Google's search results.",
      ],
    },
    {
      title: "React.js/Next.js Developer",
      company_name: "Self",
      icon: react,
      iconBg: "#383E56",
      date: "Feb 2024 - Present",
      points: [
        "Developing and maintaining Frontend web applications using React.js, Next.js and other related technologies such as Vite.",
        "Use of popular frameworks like TailwindCSS, AntDesign and NextUI.",
        "Ensuring the use of my knowledge and experience to the fullest by creating websites as personal projects for private clients.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "During his tenure with us, he exhibited a remarkable aptitude for front-end website development and consistently demonstrated a strong work ethic dedication and a keen interest in enhancing his skills in this field.",
      name: "Umar Wazir",
      designation: "CEO",
      company: "Poiesis Tech",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "He is a very special young person, the kind that gives you hope for future. It's not just that he's organized and dependable, although he is. It's that his passion, drive and a deep optimism for what he's interested in.",
      name: "M.Arif",
      designation: "Senior AI Professor",
      company: "NUML",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "The website he made was way better than our expectations. It had all the things i needed for my business. Work well done!",
      name: "Abdul Basit",
      designation: "CEO & Manager",
      company: "Hotel Haveli One",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Resume",
      description:
        "A personal portfolio project that i made just prior to the current one. It's a fully responsive website with the use of popular frameworks such as React.js, TailwindCSS and AntDesign",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "antdesign",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: resume,
      source_code_link_github: "https://github.com/malikrizwan177",
      source_code_link: "https://resume-lovat-eta.vercel.app/about",
    },
    {
      name: "Hotel Haveli One",
      description:
        "A website made on WordPress to Show-case and Advertise the Hotel Haveli One. With the use of Elementor plugin, it was ensures responsive and cross-platform compatibility.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "elementor",
          color: "green-text-gradient",
        },
        {
          name: "seo",
          color: "pink-text-gradient",
        },
      ],
      image: havelione,
      source_code_link_github: "https://github.com/malikrizwan177",
      source_code_link: "https://hotelhavelione.com/",
    },
    {
      name: "Fintech Webpage",
      description:
        "One of the first projects that i made when i was learning to build websites during my intenship. It's a non-responsive webpage as i didn't know about responsivness back then.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "vanillacss",
          color: "green-text-gradient",
        },
        {
          name: "reactbootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: project3,
      source_code_link_github: "https://github.com/malikrizwan177",
      source_code_link: "https://project-3-rouge.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };