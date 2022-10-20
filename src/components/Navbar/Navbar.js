import React from 'react';
import { navLinks } from '../../data.js';
import { FaBars } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function Navbar({ mainRef }) {
    const [navIsOpen, setNavIsOpen] = React.useState(false);
    const [lastScrollTop, setLastScrollTop] = React.useState(0);
    const navRef = React.useRef(null);
    const childRef = React.useRef(null);
    const containerRef = React.useRef(null);
  
  
    React.useEffect(() => {
      window.addEventListener('scroll', changeNavOnScroll);
      return () => window.removeEventListener('scroll', changeNavOnScroll);
      // eslint-disable-next-line
    }, [lastScrollTop]);
  
    function toggleNav() {
      setNavIsOpen(!navIsOpen);
    }
    function changeNavOnScroll() {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      let height = navRef.current.getBoundingClientRect().height;
      if (scrollTop === 0) {
        navRef.current.classList.remove('nav-high-brightness');
      } else {
        navRef.current.classList.add('nav-high-brightness');
      }
      if (scrollTop > lastScrollTop) {
        navRef.current.style.top = `-${height}px`;
      } else {
        navRef.current.style.top = `0`;
      }
      setLastScrollTop(scrollTop);
    }
return (
    <header>
        <nav className='nav flex-space-between pd-side-large' ref={navRef}>
        <div className='nav-header flex-space-between'>
          <div className='nav-logo'>
            {/* <img src={} alt='Anshu Joshi' className='nav-logo-img' /> */}
          </div>
          {/* <Theme /> */}
          <button
            className='nav-toggle-btn btn-transparent'
            onClick={toggleNav}
          >
            {navIsOpen ? <AiFillCloseCircle /> : <FaBars />}
          </button>
        </div>
        <div className='nav-links-container' ref={containerRef}>
          <ul className='nav-links flex' ref={childRef}>
            {navLinks.map((link, index) => {
              return (
                <li
                  key={index}
                  className='links-list-item pd-side-medium'
                  onClick={toggleNav}
                >
                  <a href={link.url} className='fancy-link'>
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
)

}
