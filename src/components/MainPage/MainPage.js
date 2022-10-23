import React from 'react'
import {useState} from 'react'
import me from '../../assets/me.png'

function MainPage() {
    const [download, setDownload] = useState(false);
  
    return (
      <section className='hero'>
        <div className='hero-header'>
          <div className='me-myself'>
          <h1 className='hero-big-heading'>ANSHU JOSHI</h1>
          <div className='me-resume'>
          <h1 className='hero-big-heading secondry-big-heading'></h1>
          <p className='me-desc'>Hi &#128512; , I am Anshu Joshi . I am currently in my sophomore year of Btech in CSE from IIIT Gwalior . I am passionate about development . I am currently exploring Blockchain development.</p>
          <a download='Anshu-Joshi-Resume' href="">
        <button
          className='hero-btn primary-btn'
          onClick={() => setDownload(true)}
          >
            <p>{download ? 'Thanks For Your Interest !' : 'Download Resume'}</p>
        </button>
          </a>
          </div>
          </div>
        <div className='me-img-div'>
            <img className="me-img" src={me} alt="Me" />
        </div>
        </div>
       
      </section>
    );
  }
  

export default MainPage;