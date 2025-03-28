export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  /* { name: "Testimonials", link: "#testimonials" }, */
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I prioritize user centric thinking, client collaboration and fostering open communication ",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] text-white",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "text-white lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "text-white lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "text-white lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently improving my typescript and database skills",
    description: "The Inside Scoop",
    className: "text-white md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "text-white lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Fullstack Task Manager App",
    des: " A simple fullstack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to create, read, update, and delete (CRUD) tasks, providing a seamless and intuitive interface for managing daily tasks and to-do lists.",
    img: "/crappoweb.PNG",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/MongoDB.svg",
      "/Express.svg",
      "/Node.js.svg" /*"/three.svg", "/fm.svg" */,
      ,
    ],
    link: "https://fs-task-manager-app.vercel.app/",
    name: "Task Manager",
    github: "https://github.com/Rukkyoo/task-manager-app",
  },
  {
    id: 2,
    title: "Quizzly by Rukky",
    des: "A simple quiz app built to utilize authentication features, displays questions and shows the scores after each quiz.",
    img: "/quizzly.PNG",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/firebase.svg",
      /* , "/ts.svg", "/stream.svg", "/c.svg" */
    ],
    link: "https://quizzly-by-rukky.vercel.app/",
    name: "Quizzly",
    github: "https://github.com/Rukkyoo/Improved-quizzical-app",
  },
    {
    id: 4,
    title: "MERN Map",
    des: "A MERN app that utilizes Google Maps Platform Places New API and Routes API directly to handle address autocomplete and route computation the backend and a slick UI on the frontend to display.",
    img: "wizasite.PNG",
    iconLists: ["/re.svg",
      "/tail.svg"  , "/MongoDB.svg", "/Express.svg", "/Node.js.svg"],
    link: "https://mern-map.vercel.app/",
    name: "Mern Map",
    github: "https://github.com/Rukkyoo/mern-map",
  },
  {
    id: 5,
    title: "Gehricth Restaurant Site",
    des: "Built to enable users view details under various meals and also check for recipes for selected meals. Still a work in progress",
    img: "gehricth.PNG",
    iconLists: ["/next.svg", "/tail.svg"],
    link: "https://gehricth-web-app.vercel.app/",
    name: "Gehricth",
    github: "https://github.com/Rukkyoo/gehricth",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  /*  {
      id: 1,
      title: "Frontend Engineer Intern - HNG",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity, worked with a team in order to do so.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    }, */
  {
    id: 2,
    title: "Freelance - Jolly Weekend",
    desc: "Developed the Jolly Weekend landing page along with several other pages for a client, worked with another person to produce this.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance - Kenwiza.com",
    desc: "Developed a responsive, user-friendly website for a music producer, showcasing his beats on platforms like BeatStars and Spotify and integrating seamless booking functionality to enhance client accessibility and engagement.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  /* {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    }, */
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Rukkyoo",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "http://x.com/Wazzaaah_",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/michael-omonedo/",
  },
];
