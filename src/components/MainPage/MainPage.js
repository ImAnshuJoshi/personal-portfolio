import React from 'react'
import {useState} from 'react'
import me from '../../assets/me.png'

function MainPage() {
    const [download, setDownload] = useState(false);
  
    return (
      <section className='hero'>
        <div className='hero-header'>
          <div>
          <h1 className='hero-big-heading'>ANSHU JOSHI  </h1>
          <p>Hi , I am Anshu Joshi . I am currently in my sophomore year of Btech in CSE from IIIT Gwalior . I am passionate about development . I am currently exploring Blockchain development.</p>
          </div>
            <img src={me} alt="Me" />
        </div>
       
        <button
          className='hero-btn primary-btn'
          onClick={() => setDownload(true)}
        >
          <a download='Anshu-Joshi-Resume'>
            <p>{download ? 'Thanks For Your Interest !' : 'Download Resume'}</p>
          </a>
        </button>
      </section>
    );
  }
  

export default MainPage;