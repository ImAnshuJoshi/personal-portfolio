import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mcwj5od', 'template_5iog1od', form.current, 'iWxx2qNPr0xxujnnI')
      .then((result) => {
          console.log(result.text);
          alert('Message has been sent!');
          window.location.reload();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className='contactme'>
      <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT</span>
            <span>Me</span>
          </div>
          <div class="app-contact">Contact No.: +91 7008 513 816</div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME" name='from_name'/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="CONTACT NO"  name='from_contact'/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="MESSAGE"  name='message'/>
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button" type="submit">SEND</button>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
    </div>
</div>
    </section>
  )
}

export default Contact