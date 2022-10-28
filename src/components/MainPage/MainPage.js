import React from 'react'
import {useState} from 'react'
import me from '../../assets/me.png'
import hello from '../../assets/hello.gif';

function MainPage() {
    const [download, setDownload] = useState(false);
  
    return (
      <section className='hero'>
      <div className='hero-header'>
        <p className='hero-small-heading '>Hey <img src={hello} class="hello-img"/>,</p>
        <h1 className='hero-big-heading'>Anshu Joshi,</h1>
        <h1 className='hero-big-heading secondry-big-heading'>I'm a </h1>
        <p className='hero-desc'>
        I am a full stack developer and a UI/UX designer. I am currently doing my BTech in computer-science from IIIT Gwalior , Madhya Pradesh.I am currently in my 2nd year of Engineering.
        </p>
      </div>
      <div className='download-form'>
      {/* <button
        className='hero-btn primary-btn'
        onClick={() => setDownload(true)}
        > */}
        <a download=''>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {/* <p>{download ? 'Thanks For Your Interest !' : 'Download Resume'}</p> */}
          <button>Download Resume</button>
        </a>
      {/* </button> */}
        </div>
    </section>
    );
  }
  

export default MainPage;