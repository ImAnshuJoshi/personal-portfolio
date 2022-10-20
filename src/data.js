import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaNodeJs,
  FaGitAlt,
  FaMarkdown,
  FaFigma,
} from 'react-icons/fa';


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


export {navLinks,socials};