import React from 'react'
import { FaStackOverflow } from 'react-icons/fa';
import {socials} from '../../data.js';

function connect() {
  return (
    <aside className='social'>
        <div className='social-container'>
            {
                socials.map((social,index)=>{
                    return (
                        <a key={index} className="social-icon"
                        href={social.url}
                        target="_blank">
                            {social.icon}
                        </a>
                    )
                })
            }
        </div>
    </aside>
  )
}

export default connect