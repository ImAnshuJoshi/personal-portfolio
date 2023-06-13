import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaNodeJs,
  FaGitAlt,
  FaMarkdown,
  FaFigma,
  FaVuejs,
} from "react-icons/fa";
import values from "values.js";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiSocketdotio,
  SiHeroku,
  SiNetlify,
  SiStyledcomponents,
  SiMongodb,
  SiFirebase,
  SiStripe,
  SiChakraui,
  SiJsonwebtokens,
  SiBootstrap,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiCanva,
} from "react-icons/si";
import unfoldicon from "./assets/unfoldicon.png";
import onecare from "./assets/onecare.png";
import folio from "./assets/folio.png";
import sportyphy from "./assets/sportyphy.png";
import blinkstore from "./assets/blinkstore.png";

const navLinks = [
  {
    name: "home",
    url: "/",
  },
  {
    name: "projects",
    url: "/projects",
  },
  {
    name: "experience",
    url: "/experience",
  },
  {
    name: "contact",
    url: "/contacts",
  },
];

const themes = [
  {
    name: "blue",
    color: "#2a93eb",
    clrValues: new values("#2a93ec").all(10),
  },
  {
    name: "darkpurple",
    color: "#7952b3",
    clrValues: new values("#7952b3").all(10),
  },
  {
    name: "pink",
    color: "#ff69b4",
    clrValues: new values("#ff69b4").all(10),
  },
  {
    name: "silvergrey",
    color: "#C0C0C0",
    clrValues: new values("#C0C0C0").all(10),
  },
];

const socials = [
  {
    name: "github",
    url: "https://github.com/ImAnshuJoshi/",
    icon: <FaGithub />,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/feed/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/imanshujoshi/",
    icon: <FaInstagram />,
  },
];

const languages = [
  {
    name: "html5",
    icon: <SiHtml5 />,
    color: "#e34c26",
    desc: "HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content.",
  },
  {
    name: "css3",
    icon: <SiCss3 />,
    color: "#264de4",
    desc: "CSS (Cascading Style Sheets) is used to style and layout web pages",
  },
  {
    name: "javascript",
    icon: <SiJavascript />,
    color: "#f0db4f",
    desc: "JavaScript is commonly used for creating web pages. JavaScript helps us to execute complex actions and also enables the interaction of websites with visitors.",
  },
  {
    name: "react",
    icon: <SiReact />,
    color: "#61DBFB",
    desc: "React is a JavaScript library for building modern applications. React is used for handling the view layer and can be used for development of both web and mobile applications.",
  },
  {
    name: "nodejs",
    icon: <FaNodeJs />,
    color: "#68a063",
    desc: "Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It is used for traditional web sites and back-end API services",
  },
  {
    name: "postgres",
    icon: <SiPostgresql />,
    color: "#0064a5",
    desc: "PostgreSQL is an advanced, enterprise class open source relational database that supports both SQL and JSON querying. It is used as the primary data store or data warehouse for many web, mobile application.",
  },
  {
    name: "expressjs",
    icon: (
      <p className="flex-center pd-0 mg-0 tf-y-5" width="36" height="36">
        ex
      </p>
    ),
    color: "#ffffff",
    desc: "ExpressJS is a javascript library. The primary use of Express is to provide server-side logic for web and mobile applications, and as such it is used all over the place.",
  },
  {
    name: "git",
    icon: <FaGitAlt />,
    color: "#f34f29",
    desc: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
  },
  {
    name: "github",
    icon: <FaGithub />,
    color: "#ffffff",
    desc: "Github is a web-based platform used for version control. Git simplifies the process of working with other people and makes it easy to collaborate on projects.",
  },
  {
    name: "heroku",
    icon: <SiHeroku />,
    color: "#6567a5",
    desc: "Heroku is a container-based cloud Platform as a Service (PaaS). Developers use Heroku to deploy, manage, and scale modern apps.",
  },
  {
    name: "netlify",
    icon: <SiNetlify />,
    color: "#00C7B7",
    desc: "Netlify is a San Francisco-based cloud computing company that offers hosting and serverless backend services for web applications and static websites.",
  },
  {
    name: "markdown",
    icon: <FaMarkdown />,
    color: "#ffffff",
    desc: "A lightweight markup language for creating formatted text using a plain-text editor.",
  },
  {
    name: "styled components",
    icon: <SiStyledcomponents />,
    color: "#ffb6c1",
    desc: "Use the best bits of ES6 and CSS to style your apps without stress",
  },
  {
    name: "mongodb",
    icon: <SiMongodb />,
    color: "#589636",
    desc: "MongoDB is a document database used to build highly available and scalable internet applications.",
  },
  {
    name: "firebase",
    icon: <SiFirebase />,
    color: "#ffcb2b",
    desc: "Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps.",
  },
  {
    name: "jwt",
    icon: <SiJsonwebtokens />,
    color: "#d63aff",
    desc: "JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.",
  },
  {
    name: "bootstrap",
    icon: <SiBootstrap />,
    color: "#563d7c",
    desc: "Bootstrap is an HTML, CSS & JS Library that focuses on simplifying the development of informative web pages",
  },
  {
    name: "figma",
    icon: <FaFigma />,
    color: "#6a0dad",
    desc: "Figma is a powerful design tool that helps you to create anything: websites, applications, logos, and much more.",
  },
  {
    Name: "Adobe Photoshop",
    icon: <SiAdobephotoshop />,
    color: "#264de4",
    desc: "Adobe Photoshop is the raster graphics editor.",
  },
  {
    Name: "Adobe Preimere Pro",
    icon: <SiAdobepremierepro />,
    color: "#d63aff",
    desc: "Adobe Premiere Pro is a timeline-based and non-linear video editing software application.",
  },
  {
    Name: "Canva",
    icon: <SiCanva />,
    color: "#61DBFB",
    desc: "Canva is a graphic design platform, used to create social media graphics, presentations, posters, documents and other visual content.",
  },
  {
    Name: "Vue",
    icon: <FaVuejs />,
    color: "#589636",
    desc: "",
  },
];

const experiences = [
  {
    name: "Blinkstore",
    position: "Full Stack developer",
    image: blinkstore,
    stack: ["nodejs", "mongodb"],
    desc: "Worked on VueJS in the frontend and nodeJS and mongoDB in the backend . Redesigned and made new UI components. Implemented new APIs in the backend . Also automated the task to access user data in google sheets using app script.",
  },
];

const projects = [
  {
    name: "Sporty-PHY",
    image: sportyphy,
    github_url: "https://github.com/ImAnshuJoshi/SportyPHY-client",
    site_url: "https://ssportyphy-server.el.r.appspot.com/",
    desc: "This is a website which connects all the sports enthusiasts around you and helps you to find them according to your sport preference and make teams and play matches and interact with them.",
    stack: ["react", "nodejs", "css3", "expressjs", "mongodb"],
    featured: true,
  },
  {
    name: "Un-Fold",
    image: unfoldicon,
    github_url: "https://github.com/ImAnshuJoshi/Un-Fold",
    site_url: "http://unfold.onrender.com/",
    desc: "This is a blogging website to connect ideas and people around the globe.",
    stack: ["javascript", "nodejs", "css3", "html5", "expressjs", "postgres"],
    featured: true,
  },
  {
    name: "One-care",
    image: onecare,
    github_url: "https://github.com/ImAnshuJoshi/Un-Fold",
    site_url: "https://one-care-app.vercel.app/",
    desc: "This is a MERN stack website to keep all the medical records of the patient and doctors can directly upload their prescription for a patient.",
    stack: ["react", "nodejs", "css3", "html5", "expressjs", "mongodb"],
    featured: true,
  },
  {
    name: "Personal Portfolio",
    image: folio,
    github_url: "https://github.com/ImAnshuJoshi/Portfolio",
    site_url: "https://anshujoshifolio.vercel.app",
    desc: "This is my first ever react project and personal portfolio website made with just react.",
    stack: ["react"],
    featured: true,
  },
];

export { navLinks, socials, themes, languages, projects, experiences };
