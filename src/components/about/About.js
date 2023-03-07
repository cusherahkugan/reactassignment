import React from 'react';
import "./index.css";
import pic from "../assets/profile.jpg";


function About() {
  return (
    <section className="hero is-fullheight has-background-black">
    <div>
      <figure className="image">
        <img src={pic} alt="Profile" style={{borderRadius: '40%', float: 'left', marginRight: '10em'}} />
      </figure>
      <br />
      <p className="text1" style={{textAlign: 'center', paddingRight: '5em'}}>I'm a creative girl who is so much interested in designing cool things for people. I'm
        from Vavuniya. I love to work with new people</p>
    </div>
    <div>
      <nav className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Name</p>
            <p className="title">Cushera Kuganathan </p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Birthday</p>
            <p className="title">21st September</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Age</p>
            <p className="title">22</p>
          </div>
        </div>
      </nav>
      <nav className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Address</p>
            <p className="title">Vavuniya</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">University</p>
            <p className="title">UCSC</p>
          </div>
        </div>
      </nav>
    </div>
    <br /><br /><br />
  </section>
  )
}

export default About