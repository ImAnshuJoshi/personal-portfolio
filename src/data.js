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
import values from 'values.js'

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

export {navLinks,socials,themes};