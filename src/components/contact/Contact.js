import React from 'react';
import './index.css';
import { ImLocation } from "react-icons/im";


function Contact() {
  return (
    <section className="hero is-fullheight has-background-black">
    <div style={{marginTop: '5em'}}>
      <nav className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="icons"><ImLocation style={{color: white}}/></p>
            <p className="title">72A, moors road, Wellawatte, Colombo</p>
          </div>
        </div>
      </nav>
      <br /><br />
      <nav>
        <div className="level-item has-text-centered">
          <div>
            <p className="icons"></p>
            <p className="title"><a href="mailto:Cusherahkugan@gmail.com">cusherakugan@gmail.com</a></p>
          </div>
        </div>
      </nav>
      <br /><br />
      <nav>
        <div className="level-item has-text-centered">
          <div>
            <p className="icons"><i className="fa-solid fa-phone fa-4x" /></p>
            <p className="title">0112549688</p>
          </div>
        </div>
      </nav>
    </div>
  </section>  
  )
}

export default Contact