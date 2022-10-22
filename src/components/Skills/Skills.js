import React from 'react'
import { FaStackOverflow } from 'react-icons/fa';
import { languages } from '../../data'
import Languageicon from '../LanguageIcon/Languageicon';

function Skills() {
  return (
    <section className='techstack'>
        <div className='techstack-header'>
        <FaStackOverflow /> Tech Stack
        <div className='horizontal-line'></div>
      </div>
      <div className='techstack-languages'>
        {languages.map((language, index) => {
          return (
            <Languageicon
              key={index}
              language={language}
              style={{ margin: '5px' }}
            />
          );
        })}
      </div>
    </section>
  )
}

export default Skills