import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaNodeJs,
  FaGitAlt,
  FaMarkdown,
  FaFigma,
} from 'react-icons/fa';
import values from 'values.js'
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
} from 'react-icons/si';

const navLinks = [
    {
      name: 'home',
      url: '#',
    },
    {
      name: 'projects',
      url: '#projects',
    },
    {
      name: 'contact',
      url: '#contact',
    },
  ];

const themes = [
    {
      name: 'blue',
      color: '#2a93eb',
      clrValues: new values('#2a93ec').all(10),
    },
    {
      name: 'darkpurple',
      color: '#7952b3',
      clrValues: new values('#7952b3').all(10),
    },
    {
      name: 'pink',
      color: '#ff69b4',
      clrValues: new values('#ff69b4').all(10),
    },
    {
      name: 'silvergrey',
      color: '#C0C0C0',
      clrValues: new values('#C0C0C0').all(10),
    },
  ];

const socials = [
    {
      name: 'github',
      url: 'https://github.com/ImAnshuJoshi/',
      icon: <FaGithub />,
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/feed/',
      icon: <FaLinkedinIn />,
    },
    {
      name: 'instagram',
      url: 'https://www.instagram.com/imanshujoshi/',
      icon: <FaInstagram />,
    },
  ];



const languages = [
    {
      name: 'javascript',
      icon: <SiJavascript />,
      color: '#f0db4f',
      desc: 'JavaScript is commonly used for creating web pages. JavaScript helps us to execute complex actions and also enables the interaction of websites with visitors.',
    },
    {
      name: 'react',
      icon: <SiReact />,
      color: '#61DBFB',
      desc: 'React is a JavaScript library for building modern applications. React is used for handling the view layer and can be used for development of both web and mobile applications.',
    },
    {
      name: 'nodejs',
      icon: <FaNodeJs />,
      color: '#68a063',
      desc: 'Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It is used for traditional web sites and back-end API services',
    },
    {
      name: 'html5',
      icon: <SiHtml5 />,
      color: '#e34c26',
      desc: 'HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content.',
    },
    {
      name: 'css3',
      icon: <SiCss3 />,
      color: '#264de4',
      desc: 'CSS (Cascading Style Sheets) is used to style and layout web pages',
    },
    {
      name: 'postgres',
      icon: <SiPostgresql />,
      color: '#0064a5',
      desc: 'PostgreSQL is an advanced, enterprise class open source relational database that supports both SQL and JSON querying. It is used as the primary data store or data warehouse for many web, mobile application.',
    },
    {
      name: 'expressjs',
      icon: (
        <p className='flex-center pd-0 mg-0 tf-y-5' width='36' height='36'>
          ex
        </p>
      ),
      color: '#ffffff',
      desc: 'ExpressJS is a javascript library. The primary use of Express is to provide server-side logic for web and mobile applications, and as such it is used all over the place.',
    },
    {
      name: 'git',
      icon: <FaGitAlt />,
      color: '#f34f29',
      desc: 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
    },
    {
      name: 'github',
      icon: <FaGithub />,
      color: '#ffffff',
      desc: 'Github is a web-based platform used for version control. Git simplifies the process of working with other people and makes it easy to collaborate on projects.',
    },
    {
      name: 'heroku',
      icon: <SiHeroku />,
      color: '#6567a5',
      desc: 'Heroku is a container-based cloud Platform as a Service (PaaS). Developers use Heroku to deploy, manage, and scale modern apps.',
    },
    {
      name: 'netlify',
      icon: <SiNetlify />,
      color: '#00C7B7',
      desc: 'Netlify is a San Francisco-based cloud computing company that offers hosting and serverless backend services for web applications and static websites.',
    },
    {
      name: 'socketio',
      icon: <SiSocketdotio />,
      color: '#ffffff',
      desc: 'Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server.',
    },
    {
      name: 'markdown',
      icon: <FaMarkdown />,
      color: '#ffffff',
      desc: 'A lightweight markup language for creating formatted text using a plain-text editor.',
    },
    {
      name: 'styled components',
      icon: <SiStyledcomponents />,
      color: '#ffb6c1',
      desc: 'Use the best bits of ES6 and CSS to style your apps without stress',
    },
    {
      name: 'mongodb',
      icon: <SiMongodb />,
      color: '#589636',
      desc: 'MongoDB is a document database used to build highly available and scalable internet applications.',
    },
    {
      name: 'firebase',
      icon: <SiFirebase />,
      color: '#ffcb2b',
      desc: 'Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps.',
    },
    {
      name: 'stripe',
      icon: <SiStripe />,
      color: '#008cdd',
      desc: 'Stripe allows business owners to accept payments from credit and debit cards and processes those payments.',
    },
    {
      name: 'chakraui',
      icon: <SiChakraui />,
      color: '#319795',
      desc: 'Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.',
    },
    {
      name: 'jwt',
      icon: <SiJsonwebtokens />,
      color: '#d63aff',
      desc: 'JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.',
    },
    {
      name: 'bootstrap',
      icon: <SiBootstrap />,
      color: '#563d7c',
      desc: 'Bootstrap is an HTML, CSS & JS Library that focuses on simplifying the development of informative web pages',
    },
    {
      name: 'figma',
      icon: <FaFigma />,
      color: '#6a0dad',
      desc: 'Figma is a powerful design tool that helps you to create anything: websites, applications, logos, and much more.',
    },
    {
      name: 'adobe illustrator',
      icon: <SiAdobeaftereffects />,
      color: '#964B00',
      desc: 'Adobe Illustrator is the industry standard design app that lets you capture your creative vision with shapes, color, effects, and typography.',
    },
  ];
  

export {navLinks,socials,themes,languages};