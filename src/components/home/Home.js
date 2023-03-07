import React from 'react';
import "./index.css";

function Home() {
  return (
    <section className="hero is-fullheight has-background-black">
        <div className="name">
          <h1 style={{float: 'right', paddingRight: '20px'}}>Hey there! <br /> I'm Sherah</h1>
        </div>
        <div className="container">
          <p className="title is-2 text" style={{textAlign: 'center'}}>A creative girl who is so much intereste in designing and developing. And I've always been a passionate Artist since my childhood.</p>
        </div>
    </section>
  )
}

export default Home